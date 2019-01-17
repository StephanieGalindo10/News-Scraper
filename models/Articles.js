
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true,
    unique: true
  },

  link: {
    type: String,
    required: true
  },
  date: String,
  saved: {
    type: Boolean,
    default: false
  },
  
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});


var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;