const mailer = require('lb-mailer');
const store = async(req,res)=>{
    const mailer = require('lb-mailer');

    await mailer.greeting("Hello");
      await mailer.subject("it's mail from mailer");
      await mailer.line("your text is through line method, use  line method as much you want new.");
      await mailer.link("https://github.com/lbmadesia/documents/mailer","click here"); //second parameter is optional
      await mailer.line(" to Know about mailer");
      await mailer.button("Contact to me","mailto:lbmadesia@email.com");  //second parameter is optional
      await mailer.footer("here is all deatils footer");
      await mailer.attachments([{name:"profile.webp",path:"/storages/lb.webp"},{name:"ptest.png",path:"http://localhost:8080/storages/template.png"}]);
      let data = await mailer.notify('lalbabu@aresourcepool.com');
    res.status(200);
    res.json({requestBody: req.body.name,message:data});
}

module.exports = {store};