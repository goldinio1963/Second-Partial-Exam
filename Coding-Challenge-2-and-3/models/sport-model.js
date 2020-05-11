const mongoose = require( 'mongoose' );

const SportCollectionSchema = mongoose.Schema = ({
    id : {
        type: Number,
        unique:true
    },
    name : {
        type: String
    },
    num_players : {
        type : Number
    }
})

const SportsColletion = mongoose.model('Sports', SportCollectionSchema);

const SportsColletion = {
    createSport (newsport){
        return SportsColletion
            .create(newsport)
            .then(result => {
                return result;
            })
            .catch(err => {
                return err;
            })
    }
}

module.exports = { Sports };