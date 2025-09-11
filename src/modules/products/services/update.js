import { updatteById } from "../db/index.js";

const updatedData = (id,data) => {
updatteById(id,data);
}

export default updatedData;