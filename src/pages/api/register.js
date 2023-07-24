import fetch from "node-fetch";
import { MongoClient } from 'mongodb';

export default async (req, res) => {
    if (!req.body.emailNewsLetter || !req.body.schoolType || !req.body.state || !req.body.age || !req.body.email || !req.body.name) {
        return res.status(400).send('Oops! Something went wrong! Please try again!');
    }
    
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    var location = null;
    if ((ip.match(/\./g) || []).length === 4) {
        let locationData = await fetch(`http://ip-api.com/json/${ip}`).then((response) => response.json());
        location = [locationData.lat, locationData.lon];
    }

    if (typeof req.body.emailNewsLetter !== "boolean" || Number(req.body.age).toString().toLowerCase() === "nan") {
        return res.status(400).send('Please tell us if you would like the latest CodeAsia news!');
    }
    if (req.body.schoolType !== "high school" && req.body.schoolType !== "college") {
        return res.status(400).send('Please tell us whether you are in college or high school!');
    }
    if (req.body.state.replace(/\s/g, "") === "") return res.status(400).send("Please tell us where you are located!");
    if (req.body.email.replace(/\s/g, "") === "") return res.status(400).send("Please enter your email!");
    if (req.body.name.replace(/\s/g, "") === "") return res.status(400).send("Don't be shy! Tell us your name.");

    const uri = "mongodb+srv://Users:orEP0UvCFVwIyFsM@cluster0.occis.mongodb.net";
    const mongoclient = new MongoClient(uri);
    await mongoclient.connect();
    const db = mongoclient.db("codeasia");
    let user = await db.collection("users").findOne({ email: req.body.email });

    if (!user) {
        let template = await fetch('https://codeasia.vercel.app/emailTemplate.html').then((response) => response.text());

        const emailNewsLetterX = req.body.emailNewsLetter ? "" : "NOT";

        template = template.replace("name__Name_6846198749_Name", req.body.name);
        template = template.replace("schoolType__SchoolType_69436873_SchoolType", req.body.schoolType);
        template = template.replace("state_State_68768_State", req.body.state);
        template = template.replace("age_Age_34987_Age", req.body.age);
        template = template.replace("emailNewsLetter_654654_EmailNewsLetter", emailNewsLetterX);

        var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
            host: "smtpout.secureserver.net",
            port: 465,
            secure: true,
            auth: {
                user: 'codeasia@codeasia.org',
                pass: 'joshycodeasia@123'
            }
        });
        const mailOptions = {
            from: 'codeasia@codeasia.org',
            to: req.body.email,
            subject: 'Welcome to CodeAsia!',
            html: template
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
                return res.send("Great! Check your email for more details on how to proceed!");
            }
        });
    } else {
        return res.status(400).send('Uh oh! An account already exists with this email! If you would like to change any of your info, click <a style="color: white; text-decoration: underline;" href="/changeInfo">here</a>');
    }
};
