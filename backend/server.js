const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routeAccess = require('route-access');
dotenv.config();
const app = express();
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/storages",express.static(path.join(__dirname, '/storages')));
app.use(express.static(path.join(__dirname, '/app/controllers')));

const PORT = process.env.PORT || 8080;
routeAccess.access(app,"backend/routes",{'panel':'admin','site':'client'}).then((res)=>{
  app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  );
}).catch((error)=>{
  console.log('Route Build Error : ',error);
});


