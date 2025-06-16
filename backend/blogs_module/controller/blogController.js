
const Blog = require("../model/Blog");

const postblogs = async (req,res) => {
    try{
       
        const { userId, blogCategory, blogDescription, blogTitle  } = req.body;

        if(!userId || !blogCategory || !blogDescription|| !blogTitle){
            return res.status(400).json({message: "All Fields Are Required"});
        }

        const newBlog = new Blog({
            userId, blogCategory, blogDescription, blogTitle
        });

        const savedBlog = await newBlog.save();
        return res.status(200).json({success: true, message: "Blogs Posted", data: savedBlog})
    } catch(error){
        console.error("Failed to post  blogs", error);
        return res.status(500).json({success: false, message: "Failed to post", error: error.message})
    }
}

const getblogsById = async (req,res) => {
    try{
        const { userId }  = req.params;

        const blogs = await Blog.find({userId}).sort({ createdAt: -1 });
        if(!blogs || blogs.length === 0){
            return res.status(404).json({message: "No blogs found for this user"});
        }
        res.status(200).json({success: true, message: "Blog Fetched", data: blogs})
    }catch(error){
        console.log("Failed to get blogs", error);
        res.status(500).json({success: false, message: "Failed to get", error: error.message})
    }
}

const deleteById = async (req,res) => {
    try {
        
        const { id } = req.params;

       const deleteblog = await Blog.findByIdAndDelete(id);
       if(!deleteblog){
        return res.status(404).json({message: "Blog Not Found"});
       }

       res.status(200).json({success: true, message: "Successfully deleted"})

    } catch(error){

        res.status(500).json({success: false, message: "Failed to delete", error: error.message})

    }
}

const getallblogs = async (req,res) => {
    try{
        const allblog = await Blog.find();
        if(!allblog){
            return res.status(404).json({message: "No Blog Found"})
        }
        res.status(200).json({success: true, message: "Fetch Blogs", data: allblog});
    } catch(error){
        console.log("Failed to blog", error);
        return res.status(500).json({success: false, message: "Failed to fecth", error: error.message})
    }
}

module.exports = {
    postblogs,
    getblogsById,
    deleteById,
    getallblogs,
}