const mailer = require('../../notify/mailer.js');
const store = async(req,res)=>{
   await mailer.greeting("Hello");
   await mailer.subject("testing mailer");
   await mailer.line("your mail text here with  attach");
    mailer.link("lbmadesia@gmail.com");
   await mailer.button("SEND");
   await mailer.footer("here is all footer deatils");
   await mailer.attachments([{name:"lb.png",path:"/storages/a.png"},{name:"ptest.png",path:"http://localhost:8080/storages/a.png"}]);
    let data = await mailer.notify('lalbabu@aresourcepool.com');
    res.status(200);
    res.json({requestBody: req.body.name,message:data});
}

module.exports = {store};