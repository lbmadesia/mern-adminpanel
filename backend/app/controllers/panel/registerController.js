const mailer = require('../../notify/mailer.js');
const store = async(req,res)=>{
   await mailer.greeting("Hello");
   await mailer.subject("testing mailer");
   await mailer.line("i am testing this mail feature");
   await mailer.link("http://google.com/","google");
   await mailer.button("SEND");
   await mailer.footer("here is all footer deatils");
    let data = await mailer.notify('lalbabu@aresourcepool.com');
    res.status(200);
    res.json({requestBody: req.body.name,message:data});
}

module.exports = {store};