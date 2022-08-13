const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');
const routeAccess  = require('route-access');
const routePath = 'backend/routes';
const routePrefix = {'panel':'admin','site':'client'};

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// app.use(express.json())
// app.use(cors());

const PORT = process.env.PORT || 5000;
routeAccess.access(app,routePath,routePrefix).then((res)=>{
  app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  );
}).catch((error)=>{
  console.log('Route Build Error : ',error);
});


