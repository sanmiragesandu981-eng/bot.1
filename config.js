const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "GThm2QYQ#6ZJBJXeYLRDlrkffmQbSdeUxIxx2omEwbZdQ2MIMcwM",
  MONGODB: process.env.MONGODB || "Enter your mongoDB public URL",
  OWNER_NUM: process.env.OWNER_NUM || "9470xxxxxxx",
};
