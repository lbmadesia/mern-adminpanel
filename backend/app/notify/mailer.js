const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

var typedata = false;
var foot = ``;
var sbjct = ``;
var regard = `<br /><span>
Regards <br />${process.env.APP_NAME}
</span><br />`;
var attachment = [];

const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASSWORD
    }
});

const type = (text) => {
    typedata=text;
}

var html1 = `<!DOCTYPE html>
<html>
<head>
	<title>${process.env.APP_NAME} Info </title>
</head>
<body style="background-color:#EDF2F8">
    <h1 align="center" style="padding:20px; color:#666;text-transform: uppercase;">${process.env.APP_NAME}</h1>
    <div
        style="with:100%;height:auto; display: flex; justify-content: center; padding-left:20px; padding-right:20px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="550" bgcolor="white"
            style="min-height:50px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 40px 0 rgba(0, 0, 0, 0.19);">
            <tbody>
                <tr>
                    <td style="padding:20px; vertical-align: text-top; font-family:Sans-serif;">
                        <p style="line-height: 1.6; color:#888;">`;
var html2 = `</p>
</td>
</tr>
</tbody>
</table>
</div>
<p align="center" style="padding:20px; color:#666">© ${new Date().getFullYear()} ${process.env.APP_NAME}., All Rights Reserved</p>
</body>
</html>`;

const attachments = (json) => {
    try {
        json.forEach((item)=>{
            if(item.path.startsWith("http")){
                attachment.push({filename:item.name,path:item.path});
            }
            else{
                let filepath = path.join(process.env.DOMAIN_ADD,item.path);
                 filepath = (filepath.startsWith('http:/')) ? filepath.replace("http:/","http://") : filepath.replace("https:/","https://"); 
                attachment.push({filename:item.name,path:filepath});
            }
        });
    }
    catch (error) {
        return false;
    }
}

const subject = (text) => {
    try {
        sbjct = text;
        return true;
    }
    catch (error) {
        return false;
    }
}


const footer = (text) => {
    try {
        foot = `<br /><span style="display:block;width:100%; border-top:1px solid #ddd; text-align:center; padding-top:10px;"> ${text} </span>`;
        return true;
    }
    catch (error) {
        return false;
    }
}

const greeting = (text) => {
    try {
        html1 = html1 + `<span style="color:#444;"><b> ${text} </b></span><br />`;
        return true;
    }
    catch (error) {
        return false;
    }
}

const line = (text) => {
    try {
        html1 = html1 + text + `<br />`;
        return true;
    }
    catch (error) {
        return false;
    }
}

const link = (url, text = url) => {
    try {
        html1 = html1 + ` <a href="${url}">${text}</a> `;
        return true;
    }
    catch (error) {
        return false;
    }
}

const button = (text, url = '#') => {
    try {
        html1 = html1 + `<center> <button style="background:#044; border:1px solid #fff; padding:10px; border-radius: 2px;" ><a href="${url}" style="text-decoration:none; color:#fff; font-family:Sans-serif;" > ${text} </a></button></center>`;
        return true;
    }
    catch (error) {
        return false;
    }
}



const notify = async (to) => {
    try {
        let mailOptions = {
            from: process.env.MAIL_FROM,
            to: to,
            subject: sbjct,
            html: html1 + regard + foot + html2,
            attachments: attachment
        };
        await transporter.sendMail(mailOptions);
        await varerase();
        return { status: 200, message: "successfully sent mail." };
    }
    catch (error) {
        await varerase();
        return { statu: 404, message: error };
    }
}

const varerase = () => {
    try {
        html1 = `<!DOCTYPE html>
<html>
<head>
	<title>${process.env.APP_NAME} Info </title>
</head>
<body style="background-color:#EDF2F8">
    <h1 align="center" style="padding:20px; color:#666">${process.env.APP_NAME}</h1>
    <div
        style="with:100%;min-height:70vh; display: flex; justify-content: center; padding-left:20px; padding-right:20px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="550" bgcolor="white"
            style="min-height:50px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 40px 0 rgba(0, 0, 0, 0.19);">
            <tbody>
                <tr>
                    <td style="padding:20px; vertical-align: text-top; font-family:Sans-serif;">
                        <p style="line-height: 1.6; color:#888;">`;
        html2 = `</p>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                        <p align="center" style="padding:20px; color:#666">© ${new Date().getFullYear()} ${process.env.APP_NAME}., All Rights Reserved</p>
                        </body>
                        </html>`;
        foot = ``;
        regard = `<br /><span>
                        Regards <br />${process.env.APP_NAME}
                        </span><br />`;

        return true;
    }
    catch (error) {
        return false;
    }
}

module.exports = { notify, greeting, line, link, button, footer, subject,type,attachments };