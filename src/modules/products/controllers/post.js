import { INTERNAL_SERVER_ERROR, POST_DATA_MESSAGE } from "../constants/index.js";
import postData from "../services/post.js";

const postController =async (req, res) => {
try {
    const data= await postData(req.body);
    res.status(200).json({ status:200, data ,message:POST_DATA_MESSAGE});
} catch (error) {
    res.status(500).json({ status:500, error: INTERNAL_SERVER_ERROR });
}
};

export default postController;