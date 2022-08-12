const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId

const movieSchema = new mongoose.Schema( {
   
    adult:  {
        type: Boolean,
        required: true,
        unique: true
    },
    backdrop_path:  {
        type: String,
        required: true,
        unique: true
    },
    genre_ids:{
        type: Array,
        required: true,
        unique: true
    },
    id: {
        type: ObjectId,
        required: true,
        unique: true
    }, 
    original_language: {
        type: String,
        required: true,
        unique: true
    },
    original_title: {
        type: Boolean,
        required: true,
        unique: true
    },
    overview:{
        type: String,
        required: true,
        unique: true
    },
    popularity: {
        type: Number,
        required: true,
        unique: true
    },
    poster_path: {
        type: String,
        required: true,
        unique: true
    },
    release_date:{
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    video: {
        type: Boolean,
        required: true,
        unique: true
    },
    vote_average: {
        type: Number,
        required: true,
        unique: true
    },
    vote_count:{
        type: Number,
        required: true,
        unique: true
    },
}, { timestamps: true });

module.exports = mongoose.model('movie', movieSchema) 

