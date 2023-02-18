const express = require("express");
const router = express.Router();
const { Files } = require("../models");

//Get all Images
router.get("/getImage", async( req, res ) => {
    try{
        const getData = await Files.findAll();
        res.json( getData );
    }catch ( error ){
        res.status( 404 ).json( "Data Not Found" );
    }
});

//Post Data
router.post( "/postImage", async( req, res ) => {
    try{
        const { image, title } = req.body;
        const createImage = {
            image,
            title,
        }
        if( createImage ){
            const newUpload = await Files.create( createImage );
            res.status( 200 ).json( newUpload );
        }
    } catch ( error ) {
        res.status(404).json( "Field to Upload data" )
    }
});

module.exports = router;