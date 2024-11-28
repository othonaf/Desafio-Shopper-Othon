import express from "express";
import { RideConfirmController } from "../rideConfirmController";

export const routerRideConfirm = express.Router();

const rideConfirmeController = new RideConfirmController();

routerRideConfirm.patch('/confirm', rideConfirmeController.createRide);
