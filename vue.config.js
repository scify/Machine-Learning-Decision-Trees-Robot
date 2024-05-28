const hostname = import.meta.env.INSTALLATION;
let path = "/Machine-Learning-Decision-Trees-Robot/";
if (hostname && hostname.includes("ai.scify.org")) path = "/courses/decision-trees/";

module.exports = {
    publicPath: import.meta.env.NODE_ENV === "production" ? path : "/",
    chainWebpack: (config) => {
        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .tap((options) => {
                options.isServerBuild = false;
                return options;
            });
    },
};
