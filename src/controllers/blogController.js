const axios = require("axios");

const URL = "https://emrealtunbilek.com/wp-json/wp/v2/posts";

const getAllArticles = async (req, res, next) => {
  try {
    const getAPI = await axios.get(URL + "?per_page=20");
    //res.json(getAPI.data);
    //default olarak zaten views klasöürüne bakar.
    res.render("./articles/allArticles.ejs", { allArticles: getAPI.data });
  } catch (error) {
    /* console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.header); */
    res.json({
      message: "Hata Oluştu :(",
    });
  }
};

const getOneArticle = async (req, res, next) => {
  try {
    const onlyOneArticle = await axios.get(URL + "/" + req.params.id);
    //res.json(onlyOneArticle.data);
    res.render("./articles/oneArticle.ejs", {
      article: onlyOneArticle.data,
    });
  } catch (error) {
    /*   console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.header); */
    res.json({
      message: "Hata Oluştu :(",
    });
  }
};

//POSTS
const searchArticle = async (req, res, next) => {
  const findWord = req.body.search;
  console.log(req.body);
  try {
    const getAPI = await axios.get(URL + "?search=" + findWord);
    //res.json(getAPI.data);
    //default olarak zaten views klasöürüne bakar.
    res.render("./articles/allArticles.ejs", { allArticles: getAPI.data });
  } catch (error) {
    /* console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.header); */
    res.json({
      message: "Hata Oluştu :(",
    });
  }
};

// Exports
module.exports = {
  getAllArticles,
  getOneArticle,
  searchArticle,
};
