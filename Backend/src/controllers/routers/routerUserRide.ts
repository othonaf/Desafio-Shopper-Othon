import { GetUsersRidesController } from "../getUserRidesController";
import express from "express";

export const routerUserRide = express.Router();

const rideConfirmeController = new GetUsersRidesController();

routerUserRide.get('/:customer_id', rideConfirmeController.getUserRidesController);
