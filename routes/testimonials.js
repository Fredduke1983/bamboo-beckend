const express = require("express");
const authenticate = require("../middlewares/authenticate");
const addTestimonial = require("../controllers/testimonials/addTestimonial");
const deleteTestimonial = require("../controllers/testimonials/deleteTestimonial");

const router = express.Router();
router.post("/add", authenticate, addTestimonial);
router.delete("/delete/:id", authenticate, deleteTestimonial);

module.exports = router;
