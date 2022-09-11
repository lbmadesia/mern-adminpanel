const express = require('express');
const router = express.Router();
const controllerPath = '../app/controllers/';
// const multer = require('../app/services/multer');
const passport = require('../app/services/passportAuth');
const {login,register} = require(controllerPath+'authController');
router.post("/login",login);
router.post("/register",register);
// router.post("/files",multer.fields([
//     {name:'image',maxCount:5},
//     {name:'thumbnail',maxCount:1}
// ]),(req,res)=>{
//     res.status(200);
//     res.json({data:"success"});
// });

router.get('/google/login',(req,res)=>{
    console.log('login successfull with google == ',req.profile);
});
router.get('/google/auth/result', passport.authenticate('google', {
    successRedirect: '/google/login',
    failureRedirect: '/google/signin' }
));

router.get('/google/signin',
  passport.authenticate('google', { 
    scope: [ 'email', 'profile' ] }
));



module.exports = router;