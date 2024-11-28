import express from "express";
import { TestGetDrivers } from "../testGetDrivers";

export const routerTest = express.Router();

const userController = new TestGetDrivers();

routerTest.get('/test', userController.createRide)
