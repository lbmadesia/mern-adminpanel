const nodemailer = require('nodemailer');

var foot = ``;
var sbjct = ``;
var regard = `<br /><span>
Regards <br />${process.env.APP_NAME}
</span><br />`;

const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASSWORD
    }
});

var html1 = `<!DOCTYPE html>
<html>
<head>
	<title>${process.env.APP_NAME} Info </title>
</head>
<body style="background-color:#EDF2F8">
    <h1 align="center" style="padding:20px; color:#666;text-transform: uppercase;">${process.env.APP_NAME}</h1>
    <div
        style="with:100%;min-height:70vh; display: flex; justify-content: center; padding-left:20px; padding-right:20px;">
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

const subject = (text)=>{
    return new Promise((resolve, reject) => {
        try {
            sbjct = text;
            resolve(true);
        }
        catch (error) {
            reject(false);
        }
    });
}


const footer = (text)=>{
    return new Promise((resolve, reject) => {
        try {
            foot = `<br /><span style="display:block;width:100%; border-top:1px solid #ddd; text-align:center; padding-top:10px;"> ${text} </span>`;
            resolve(true);
        }
        catch (error) {
            reject(false);
        }
    });
}

const greeting = (text) => {
    return new Promise((resolve, reject) => {
        try {
            html1 = html1+`<span style="color:#444;"><b> ${text} </b></span><br />`;
            resolve(true);
        }
        catch (error) {
            reject(false);
        }
    });
}

const line = (text) => {
    return new Promise((resolve, reject) => {
        try {
            console.log('okk inside line fun');
            html1 = html1+text+`<br />`;
            resolve(true);
        }
        catch (error) {
            console.log('okk something wrong');
            reject(false);
        }
    });
}

const link = (url,text=url) => {
    return new Promise((resolve, reject) => {
        try {
            html1 = html1+` <a href="${url}">${text}</a> `;
            resolve(true);
        }
        catch (error) {
            reject(false);
        }
    });
}

const button = (text,url='#') => {
    return new Promise((resolve, reject) => {
        try {
            html1 = html1+`<center> <button style="background:#044; border:1px solid #fff; padding:10px; border-radius: 2px;" ><a href="${url}" style="text-decoration:none; color:#fff; font-family:Sans-serif;" > ${text} </a></button></center>`;
            resolve(true);
        }
        catch (error) {
            reject(false);
        }
    });
}



const notify = (to) => {
    return new Promise(async (resolve, reject) => {
        try {
            let mailOptions = {
                from: process.env.MAIL_FROM,
                to: to,
                subject: sbjct,
                html: html1+regard+foot+html2
            };
            await varerase();
            await transporter.sendMail(mailOptions);
            resolve({ status: 200, message: "successfully sent mail." });
        }
        catch(error) {
           await varerase();
            reject({ statu: 404, message: error });
        }
    });
}

const varerase = () => {
    return new Promise((resolve, reject) => {
        try{
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
                        
        resolve(true);
        }
        catch(error){
            reject(false);
        }
    });
}

module.exports = {notify, greeting, line, link, button, footer, subject};