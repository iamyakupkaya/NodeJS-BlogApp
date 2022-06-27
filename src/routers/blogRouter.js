//Import Libraries
const router = require("express").Router();
const {
  getAllArticles,
  getOneArticle,
  searchArticle
} = require("../controllers/blogController");

//Starting Project
//
//I just use router path here. Won't use controller function like (req, res)

router.get("/", getAllArticles);

router.get("/:id", getOneArticle);

// POSTS
router.post("/", searchArticle);
module.exports = router;
