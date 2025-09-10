import { DELETE_MESSAGE, INTERNAL_SERVER_ERROR } from "../constants/index.js";
import deletedData from "../services/delete.js";

const deleteController =async (req, res) => {
try {
   const id = req.params.id;
    await deletedData(id);
    res.status(200).json({ status:200, message: DELETE_MESSAGE });
} catch (error) {
    res.status(500).json({ status:500, error: INTERNAL_SERVER_ERROR });
}
};

export default deleteController;