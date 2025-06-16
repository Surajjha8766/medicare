const mongoose = require('mongoose');

const BlogsSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId},

    blogTitle: {
      type: String,
      required: true,
    },
    blogCategory: {
      type: String,
      required: true,
    },
    blogDescription: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now }
    
});

module.exports = mongoose.model("Blogs", BlogsSchema);