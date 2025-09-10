import User from "../models/User.js";


const getAllData = async () => {
    const users = await User.find({});
    return users;
};


const addData = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

const deleteById = async (id) => {
    return await User.findByIdAndDelete(id);
}
const updatteById = async (id, updateData) => {
    return await User.findByIdAndUpdate(id, updateData);
}


export {
    getAllData,
    addData,
    deleteById,
    updatteById
}