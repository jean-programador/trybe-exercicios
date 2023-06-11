"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PlantRouter_1 = __importDefault(require("./router/PlantRouter"));
const errorMiddleware_1 = __importDefault(require("./middlewares/errorMiddleware"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.get('/', (req, res) => res.json({ ok: true }));
        this.app.use(errorMiddleware_1.default);
    }
    routes() {
        this.app.use('/plants', PlantRouter_1.default);
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express_1.default.json());
        this.app.use(accessControl);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.default = App;
