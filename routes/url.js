const express = require("express");
const {
  handleGenerateNewShortURl,
  handleRedirectURL,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURl);
router.get("/:shortId", handleRedirectURL);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
