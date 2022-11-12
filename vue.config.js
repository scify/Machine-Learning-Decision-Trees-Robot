const hostname = process.env.INSTALLATION;
let path = "/Machine-Learning-Decision-Trees-Robot/";
if(hostname && hostname.includes("ai.scify.org"))
    path = "/courses/decision-trees/";

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? path : "/",
};
