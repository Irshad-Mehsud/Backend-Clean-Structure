import { INTERNAL_SERVER_ERROR,GET_DATA_MESSAGE} from "../constants/index.js";
import getData from "../services/get.js";

const getController =async (req, res) => {
try {
    const user= await getData();
    res.status(200).json({ status:200, data: user,message:GET_DATA_MESSAGE});
} catch (error) {
    res.status(500).json({ status:500, error: INTERNAL_SERVER_ERROR });
}
};

export default getController;