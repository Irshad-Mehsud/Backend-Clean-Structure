import Model from "../models/index.js";


const getAllData = async () => {
    const users = await Model.find({});
    return users;
};


const addData = async (userData) => {
    const user = new Model(userData);
    await user.save();
    return user;
};

const deleteById = async (id) => {
    return await Model.findByIdAndDelete(id);
}
const updatteById = async (id, updateData) => {
    return await Model.findByIdAndUpdate(id, updateData);
}


export {
    getAllData,
    addData,
    deleteById,
    updatteById
}