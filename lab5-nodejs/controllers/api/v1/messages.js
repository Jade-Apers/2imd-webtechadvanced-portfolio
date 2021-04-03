const getAll = (req, res)=>{
    res.json({
        "status": "succes",
        "data" : {
            "messages": "GETTING messages"
        }
    });
};

const getAllId = (req, res)=>{
        res.json({
            "status": "succes",
            "data" : {
                "messages": "GETTING messeages with ID" + req.params.id
            }
        });
    }

const create = (req, res)=>{
    res.json({
        "status": "succes",
        "data" : {
            "messages": "posting a new message for user Pickachu"
        }
    });
}

const update = (req, res)=>{
    res.json({
        "status": "succes",
        "data" : {
            "messages": "UPDATING a message with id" + req.params.id
        }
    });
};

const remove = (req, res)=>{
    res.json({
        "status": "succes",
        "data" : {
            "messages": "DELETING a message with id" + req.params.id
        }
    });
}

const getAllUser = (req, res)=>{
    res.json({
        "status": "succes",
        "data" : {
            "messages": "getting message for username" + req.query.user
        }
    });
}

module.exports.getAll= getAll;
module.exports.getAllId=getAllId;
module.exports.create=create;
module.exports.update=update;
module.exports.remove=remove;
module.exports.getAllUser=getAllUser;
