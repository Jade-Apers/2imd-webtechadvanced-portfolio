const express = require('express');
const { param } = require('../..');
const router = express.Router()

router.get("/", (req, res)=>{
    res.json({
        "status": "succes",
        "data" : {
            "messages": "GETTING messages"
        }
    });
});

router.get("/:id", (req, res)=>{
    res.json({
        "status": "succes",
        "data" : {
            "messages": "GETTING messeages with ID" + req.params.id
        }
    });
});

router.post("/", (req, res)=>{
    res.json({
        "status": "succes",
        "data" : {
            "messages": "posting a new message for user Pickachu"
        }
    });
});

router.put("/:id", (req, res)=>{
    res.json({
        "status": "succes",
        "data" : {
            "messages": "UPDATING a message with id" + req.params.id
        }
    });
});

router.delete("/:id", (req, res)=>{
    res.json({
        "status": "succes",
        "data" : {
            "messages": "DELETING a message with id" + req.params.id
        }
    });
});

router.get("/?user=username", (req, res)=>{
    res.json({
        "status": "succes",
        "data" : {
            "messages": "getting message for username" + req.query.user
        }
    });
});

module.exports = router;








