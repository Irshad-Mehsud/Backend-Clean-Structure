import {
  INTERNAL_SERVER_ERROR,
  POST_DATA_MESSAGE,
} from "../constants/index.js";
import postData from "../services/post.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const postController = async (req, res) => {
  try {
    const data = await postData(req.body);
    const { email } = req.body;

    if (!process.env.JWT_SECRET) {
      throw new Error('Missing SECRET_KEY environment variable');
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    res.status(200).json({
      status: 200,
      data,
      message: POST_DATA_MESSAGE,
      token,
    });
  } catch (error) {
    console.error('Error in postController:', error); // <-- log actual error
    res.status(500).json({ status: 500, error: INTERNAL_SERVER_ERROR });
  }
};



export default postController;
