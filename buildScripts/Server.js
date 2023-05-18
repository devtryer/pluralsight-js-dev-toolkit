import express from "express"
import path from "path"
import open from "open"

// webpack integration into express server
import webpack from "webpack"
import config from "../webpack.config.dev"  // our webpack configuration 

var port = 2850;

const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath
}));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../src/index.htm"));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        open("http://localhost:" + port);
    }
});