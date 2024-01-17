"use server";
import { connectDB } from "../db/connect";
import User from "../model/User";

export const createUser = async (user) => {
  try {
    await connectDB();
    const createdUser = await User.create(user);
    return JSON.parse(JSON.stringify(createdUser));
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id, user) => {
  try {
    await connectDB();

    const updatedUser = await User.findOneAndUpdate(
      {
        clerkId: id,
      },
      user,
      { runValidators: true, new: true }
    );
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    await connectDB();

    const deletedUser = await User.findOneAndDelete({ clerkId: id });
    return JSON.parse(JSON.stringify(deletedUser));
  } catch (error) {
    console.log(error);
  }
};
