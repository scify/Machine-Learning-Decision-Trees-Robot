const hostname = window.location.hostname;
let path = "/courses/decision-trees/";
if(hostname.includes("github"))
    path = "/Machine-Learning-JS-playground/";

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? path : "/",
};
