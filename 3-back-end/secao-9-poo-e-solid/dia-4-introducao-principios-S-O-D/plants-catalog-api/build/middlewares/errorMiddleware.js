"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (err, _req, res, _next) => {
    console.log('err', err);
    const { status, message } = err;
    res.status(status || 500).json({ message });
};
exports.default = errorMiddleware;
