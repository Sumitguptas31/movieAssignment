let axios = require("axios")
let movieModel= require('../models/movieModel')

const MOVIE_DB_API_KEY =  "f64dc0bef48a8eb70813a13d6239dbf8"
;
const getMovies = async (page) => {
  try {
    let result;
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_DB_API_KEY}&page=${page}`
      )
      .then((response) => {
        result = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
  } catch (error) {
    console.error(error);
  }
};



  let displayMovies= async (req, res, next)=>{
    try {
        let {page} = req.query;
        let data = await getMovies(page);

        return res.status(200).json({
          status:200,
          message: ` ${data.length}movies found`, 
          data
        })
        
      } catch (err) {
        return next(err);
      }
}

//fetch movies from the database
const fetchMovies = async function(req,res){
    try{
     const id= req.params.movieId
     const moviedata= await movieModel.findOne({_id:id})
   res.status(201).send({status:true,msg:'movie-list',data:moviedata})
    }
    catch(error){
        res.status(500).send({status:false, msg:error.message})
    }
}
//delete moviesfrom theda
const deleteMovies = async function(req,res){
    try{
     const id= req.params.movieId
     const data= await movieModel.findOne({_id:id})
     const deleteData= await movieModel.deleteOne(data)
   res.status(201).send({status:true,msg:'movie-list',deleteData})
    }
    catch(error){
        res.status(500).send({status:false, msg:error.message})
    }
}
module.exports.getMovies= getMovies
module.exports.displayMovies=displayMovies
module.exports.fetchMovies=fetchMovies
module.exports.deleteMovies=deleteMovies