import express from "express";
import { UserRide } from "../rideController";

export const routerRide = express.Router();

const userController = new UserRide();

routerRide.post('/estimate', userController.createUser)
