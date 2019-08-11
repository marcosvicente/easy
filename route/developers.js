import express from 'express';
const router = express.Router();

import controller from '../controller/developerController.js'

router.get("/", controller.index);

module.exports = router;
