const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models")

app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.json());
app.use(cors({origin: ["http://localhost:3000"]}));

//Home Router
const UploadImage = require("./router/UploadImage");
app.use("/", UploadImage);

db.sequelize.sync().then(() => {
    app.listen( 3001, () => {
        console.log("Listening on Port 3001");
    });
});