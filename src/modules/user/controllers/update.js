import { INTERNAL_SERVER_ERROR, UPDATE_MESSAGE } from "../constants/index.js";
import updatedData from "../services/update.js";

const updateController =async (req, res) => {
try {
   const id = req.params.id;
    await updatedData(id, req.body);

    console.log(id);
    res.status(200).json({ status:200, message: UPDATE_MESSAGE });
} catch (error) {
    res.status(500).json({ status:500, error: INTERNAL_SERVER_ERROR });
}
};

export default updateController;