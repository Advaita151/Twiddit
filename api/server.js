import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './modals/User.js';

const secret = 'secret123';
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

await mongoose.connect('mongodb://127.0.0.1/reddit', {useNewUrlParser:true,useUnifiedTopology:true,});
const db = mongoose.connection;
db.on('error', console.log);



app.get('/' ,(req,res) =>{
    res.send('ok')
})

app.post('/Register', (req,res) =>{
    const {email,username} = req.body;
    const password = bcrypt.hashSync(req.body.password, 10);
    const user = new User({email,username,password}); 
    user.save().then(user=> {
        jwt.sign({id:user._id}, secret, (er, token) =>{
            if(er){
                console.log(er);
                res.sendStatus(500);
            } else{
                res.status(201).cookie('token', token).send();
            }
        })
        
    }).catch(e =>{
        console.log(e);
        res.sendStatus(500);
    })
})

app.listen(4000);