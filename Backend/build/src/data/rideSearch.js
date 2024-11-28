"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideSearchQuery = void 0;
const baseDataBase_1 = require("./baseDataBase");
class RideSearchQuery extends baseDataBase_1.BaseDataBase {
    constructor() {
        super(...arguments);
        this.rideSearch = (request) => __awaiter(this, void 0, void 0, function* () {
            let query = baseDataBase_1.BaseDataBase.connection('rides')
                .where('customer_id', request.customer_id)
                .orderBy('created_at', 'desc');
            if (request.driver_id) {
                query = query.andWhere('driver_id', request.driver_id);
            }
            const result = yield query;
            console.log('Query Result:', result);
            return result;
        });
    }
}
exports.RideSearchQuery = RideSearchQuery;
