const express = require('express');
const firebase = require('firebase');
const mongoose = require('mongoose');
const router = express.Router();

router.post('/test', (req,res) => {
    const email = req.body.email;
    const password= req.body.password

    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        let user = firebase.auth().currentUser
        if(user != null) {
            email = user.email
            console.log(email)
        }
        
    }).catch(function(error) {
        console.log(error.code);
        console.log(error.message);
     });
})
//ec2-13-230-239-75.ap-northeast-1.compute.amazonaws.com
module.exports = router