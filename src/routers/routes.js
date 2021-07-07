const router = require("express").Router();
const {getUser}=require("../contener/contener")

router.get('/getUser',getUser)

module.exports = router;