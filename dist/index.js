"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("hello user");
});
app.get("/users", (req, res) => {
    const users = [
        { name: "mostafa", lName: "Haghani" },
        { name: "Hoda", lName: "Ahmadi" },
    ];
    res.send(users);
});
app.listen(process.env.PORT, () => console.log("app is listening to port: " + process.env.PORT));
