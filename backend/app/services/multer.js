const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination : (req,fileinfo,callback)=>{
        console.log(req,fileinfo);
        callback(null,'backend/storages');
    },
    filename : (req,fileinfo,callback)=>{
        callback(null,Date.now()+path.extname(fileinfo.originalname));
    }
});

module.exports = multer({ storage:storage});