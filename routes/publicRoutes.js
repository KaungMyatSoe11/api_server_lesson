const { Router } = require("express");
const { Second, Third } = require("../controllers/testController");

const router = Router();
router.get("/second", Second);
router.get("/third", Third);

module.exports = router;
