import { Handler } from "express";
import {
  createUserService,
  deleteUserService,
  disableUserService,
  retrieveUserByIdService,
  retrieveUsersService,
  updateUserService,
} from "../services/users";

const createUserController: Handler = async (req, res) => {
  const newUser = await createUserService(req.body);
  return res.status(201).send(newUser);
};

const deleteUserController: Handler = async (req, res) => {
  await deleteUserService(req.params.userId);
  return res.status(204).send();
};

const disableUserController: Handler = async (req, res) => {
  await disableUserService(req.params.userId);
  return res.status(204).send();
};

const retrieveUserByIdController: Handler = async (req, res) => {
  const userData = await retrieveUserByIdService(req.params.userId);
  return res.status(200).send(userData);
};

const retrieveUsersController: Handler = async (req, res) => {
  const usersData = await retrieveUsersService();
  return res.status(200).send(usersData);
};

const updateUserController: Handler = async (req, res) => {
  const userData = await updateUserService(req.params.userId, req.body);
  return res.status(200).send(userData);
};

export {
  createUserController,
  deleteUserController,
  disableUserController,
  retrieveUsersController,
  retrieveUserByIdController,
  updateUserController,
};
