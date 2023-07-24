// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
    String.prototype.replaceAll = function (find, replace) {
        var regex = new RegExp(find, 'g');
        return this.replace(regex, replace)
    }
    const fetch = require("node-fetch");
    const fs = require("file-system");

    if (!req.body.emailNewsLetter || !req.body.schoolType || !req.body.state || !req.body.age || !req.body.email || !req.body.name) {
        return res.status(400).send('Oops! Something went wrong! Please try again!')
    }
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    var location = null;
    if ((ip.match(/\./g) || []).length === 4) {
        let res = await fetch(`http://ip-api.com/json/${ip}`);
        res = await res.json();
        location = [res.lat, res.lon];
    }

    if (typeof req.body.emailNewsLetter !== "boolean" || Number(req.body.age).toString().toLowerCase() === "nan") {
        return res.status(400).send('Please tell us if you would like the latest CodeAsia news!');
    }
    if (req.body.schoolType !== "high school" && req.body.schoolType !== "college") {
        return res.status(400).send('Please tell us whether you are in college or high school!');
    }
    if (req.body.state.replaceAll(" ", "") === "") return res.status(400).send("Please tell us where you are located!");
    if (req.body.email.replaceAll(" ", "") === "") return res.status(400).send("Please enter your email!");
    if (req.body.name.replaceAll(" ", "") === "") return res.status(400).send("Don't be shy! Tell us your name.");

    const { MongoClient } = require('mongodb')
    const uri = "mongodb+srv://Users:orEP0UvCFVwIyFsM@cluster0.occis.mongodb.net";
    const mongoclient = new MongoClient(uri);
    await mongoclient.connect();
    const db = mongoclient.db("codeasia")
    let user = await db.collection("users").findOne({ email: req.body.email });

    if (!user) {
        let template = await fetch('https://codeasia.vercel.app/emailTemplate.html');
        template = await template.text();

        if (req.body.emailNewsLetter === true) {
            var emailNewsLetterX = "";
        } else {
            var emailNewsLetterX = "NOT"
        }

        template = template.toString();
        template = template.replaceAll("name__Name_6846198749_Name", req.body.name);
        template = template.replaceAll("schoolType__SchoolType_69436873_SchoolType", req.body.schoolType);
        template = template.replaceAll("state_State_68768_State", req.body.state);
        template = template.replaceAll("age_Age_34987_Age", req.body.age);
        template = template.replaceAll("emailNewsLetter_654654_EmailNewsLetter", emailNewsLetterX);


        var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
            host: "smtpout.secureserver.net",
            port: 465,
            secure: true, // true for 465, false for other ports,
            auth: {
                user: 'codeasia@codeasia.org',
                pass: 'joshycodeasia@123'
            }
        });
        const mailOptions = {
            from: 'codeasia@codeasia.org', // sender address
            to: req.body.email, // list of receivers
            subject: 'Welcome to CodeAsia!', // Subject line
            html: template// plain text body
        };
        transporter.sendMail(mailOptions, async function (err, info) {
            if (err)
                return res.status(400).send("Shoot! The email that you entered doesn't seem to be valid!");
            else {
                await db.collection("users").insertOne({
                    emailNewsLetter: req.body.emailNewsLetter,
                    schoolType: req.body.schoolType,
                    state: req.body.state,
                    age: req.body.age,
                    email: req.body.email,
                    name: req.body.name,
                    location: location
                });
                return res.send("Great! Check your email for more details on how to procede!");
            }
        });
    } else {
        return res.status(400).send('Uh oh! An account already exists with this email! If you would like to change any of your info, click <a style="color: white; text-decoration: underline;" href="/changeInfo">here</a>');
    }
}
