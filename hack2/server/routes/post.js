import express from 'express'
import Post from '../models/post'
import moment from 'moment'

const router = express.Router()

// TODO 2-(1): create the 1st API (/api/allPosts)

router.get('/allPosts', async (_,res)=>{
    try{
      var postList = [];
      var existing = await Post.find({});
      existing.map((tmp)=> postList.push(tmp));
      res.status(200).json({
        "message": "success",
        "data": [Post]
    });
    }
    catch(error){
      res.status(403).json({
        "message": "error",
        "data": null
    });
    }
  
  })

// TODO 3-(1): create the 2nd API (/api/postDetail)


// TODO 4-(1): create the 3rd API (/api/newPost)

// TODO 5-(1): create the 4th API (/api/post)

export default router