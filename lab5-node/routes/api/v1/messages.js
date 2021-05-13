const express = require('express');
const router = express.Router();
const messagesController = require("../../../controllers/api/v1/messages");

router.get("/", messagesController.getAll);
router.get("/:id", messagesController.getAllId);
router.post("/", messagesController.save);
router.put("/:id", messagesController.update);
router.delete("/:id", messagesController.remove);
 
module.exports = router;
