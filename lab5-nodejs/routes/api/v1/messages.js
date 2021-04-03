const express = require('express');
const {param} = require('../..');
const router = express.Router();
const messagesController = require('../../../controllers/api/v1/messages');


router.get("/", messagesController.getAll);
router.get("/:id", messagesController.getAll);
router.post("/", messagesController.create);
router.put("/:id", messagesController.update);
router.delete("/:id", messagesController.remove);
router.get("/?user=username", messagesController.getAll);

module.exports = router;








