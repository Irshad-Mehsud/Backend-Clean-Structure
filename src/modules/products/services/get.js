import { getAllPopulatedData, getAllData } from "../db/index.js";
const getData = () => {
return getAllPopulatedData('category');
};

export default getData;