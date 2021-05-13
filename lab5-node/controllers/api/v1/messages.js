const getAll = (req, res)=>{
    if(req.query.user){
    res.json({
        status: "succes",
        data : {
            message: "GETTING messages for username:" + req.query.user
        }
    });
} else{
    res.json({
        status:"succes",
        data:{
            message: "GET all messages"
        }
    });
}
}

const getAllId = (req, res)=>{
        res.json({
            status: "succes",
            data: {
                message: "GETTING messages with ID" + req.params.id
            }
        });
    }

const save = (req, res)=>{
    res.json({
        status: "succes",
        data: {
            message: 'posting a new message for user pickachu'
        }
    });
}

const update = (req, res)=>{
    res.json({
        status: "succes",
        data : {
            message: 'UPDATING a message with id' + req.params.id
        }
    });
};

const remove = (req, res)=>{
    res.json({
        status: "succes",
        data : {
            message: "DELETING a message with id" + req.params.id
        }
    });
}

module.exports.getAll= getAll;
module.exports.getAllId=getAllId;
module.exports.save=save;
module.exports.update=update;
module.exports.remove=remove;