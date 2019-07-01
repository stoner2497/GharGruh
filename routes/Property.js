const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require("cloudinary");
const multer = require("../config/multer");
const passport = require("passport");
const router = express.Router()

const Property = require('../models/Property')


const Pincode = /^\d{6}$/
const alpha = /^[a-zA-Z]+$/
const contact = /^\d{10}$/
// 401203 || 401303 || 401305 || 401208 || 401202

router.get('/allproperty', (req,res) => {
  Property.find()
   .then(properties => {
     res.json(properties)
   })
})

router.get('/property/virar/east', (req,res) => {
  Property.find({pincode:'401305'})
   .then(property => {
    if(!property) {
      res.status(404).json({msg:'no Properties'})
    }
    res.status(200).json(property)
    
   }).catch(err => res.status(400).json(err))
})

router.get('/property/virar/west', (req,res) => {
  Property.find({pincode:'401303'})
   .then(property => {
    if(!property) {
      res.status(404).json({msg:'no Properties'})
    }
    res.status(200).json(property)
   }).catch(err => {
     res.status(400).json(err)
   })
})


router.get('/property/nallasopara/west', (req,res) => {
  Property.find({pincode:'401203'})
   .then(property => {
    if(!property) {
      res.status(404).json({msg:'no Properties'})
    }
    res.status(200).json(property)
   }).catch(err => {
     res.status(400).json(err)
   })
})


router.get('/property/nallasopara/east', (req,res) => {
  Property.find({pincode:'401209'})
   .then(property => {
    if(!property) {
      res.status(404).json({msg:'no Properties'})
    }
    res.status(200).json(property)
   }).catch(err => {
     res.status(400).json(err)
   })
})

router.get('/property/vasai/east', (req,res) => {
  Property.find({pincode:'401208'})
   .then(property => {
    if(!property) {
      res.status(404).json({msg:'no Properties'})
    }
    res.status(200).json(property)
   }).catch(err => {
     res.status(400).json(err)
   })
})


router.get('/property/vasai/west', (req,res) => {
  Property.find({pincode:'401202'})
   .then(property => {
    if(!property) {
      res.status(404).json({msg:'no Properties'})
    }
    res.status(200).json(property)
   }).catch(err => {
     res.status(400).json(err)
   })
})

router.get('/myproperty', passport.authenticate('jwt',{session:false}),(req,res) => {
  Property.find({users:req.user.id})
   .then(property =>{
    if(!property) {
      res.json({msg:'ADD PROPERTY'}) 
    }
    res.json(property)
  }
    )
   .catch(err => {
     res.json({msg:'ADD PROPERTY'})
   })
})

router.post('/addproperty', passport.authenticate('jwt', {session:false}),multer.single('file'),async (req,res) => {
  console.log(req.file)
    let errors = []
    // let result = await cloudinary.v2.uploader.upload(req.file.name);
    if(Pincode.test(req.body.pincode) === false) {
        errors.push({msg:'please neter correct pincode'})
    }
    if(alpha.test(req.body.Name) === false) {
      errors.push({msg:'please enter Name in Alphabetic order'})
    }
    // if(contact.test(req.body.mobileNumber) === false ) {
    //   errors.push({msg:'please enter correct contact'})
    // }
    // if(contact.test(req.body.alternateMobile) === false ) {
    //   errors.push({msg:'please enter correct contact'})
    // }
    if(errors.length > 0) {
      res.json(errors)
    }
    const newProperty = new Property({
      users: req.user.id,
      Name : req.body.Name,
      mobileNumber:req.body.mobileNumber,
      alternateMobile:req.body.alternateMobile,
      Address:req.body.Address,
      pincode:req.body.pincode,
      DaysToVisit:req.body.DaysToVisit,
      TimeToVisit:req.body.TimeToVisit,
      negotiable:req.body.negotiable,
      PriceOfProperty:req.body.PriceOfProperty,
      Parking:req.body.Parking,
      file: req.file

    })
    newProperty.save() 
      .then(newprop => {
          res.json(newprop)
      }).catch(err => res.json(err))
})

router.put('/edit-property/:id', passport.authenticate('jwt', {session:false}) ,  (req,res) => {
    Property.findByIdAndUpdate(req.params.id,
          {  $set: {
            users: req.user.id,
            Name : req.body.Name,
            mobileNumber:req.body.mobileNumber,
            alternateMobile:req.body.alternateMobile,
            Address:req.body.Address,
            pincode:req.body.pincode,
            DaysToVisit:req.body.DaysToVisit,
            TimeToVisit:req.body.TimeToVisit,
            negotiable:req.body.negotiable,
            furnished:req.body.furnished,
            PriceOfProperty:req.body.PriceOfProperty,
            Parking:req.body.Parking,
            Image:req.body.Image,
            nearbyThings:req.body.nearbyThings
          }
        }).then(() => {
            request.get('/myproperty',passport.authenticate('jwt',{session:false}))
             .then(property => {
               res.status(200).json(property)
             })
        }).catch(err => {
          res.status(400).json(err)
        })
     })

router.delete('/delete-property/:id',passport.authenticate('jwt',{session:false}),(req,res) => {
      Property.findByIdAndDelete(req.params.id)
       .then(() => {
         res.status(200).json({msg:'successfully deleted'})
       }).catch(err => {
         console.log(err)
       })
})


module.exports = router
