const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const models = require("./models");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let user = models.User;
let solicitacao = models.Solicitacao;

app.get("/adduser", async (req, res) => {
  let create = await user.create({
    email: "bobesponja@gmail.com",
    password: "123",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send("usuário criado com sucesso");
});

app.get("/listuser", async (req, res) => {
  let read = await user.findAll({
    raw: true,
  });
  console.log(read);
});

app.get("/update", async (req, res) => {
  let update = await user
    .findByPk(2, {
      include: [{ all: true }],
    })
    .then((response) => {
      console.log(response);
    });
});

app.post("/login", async (req, res) => {
  let response = await user.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  if (response === null) {
    res.send(JSON.stringify("error"));
  } else {
    res.send(response);
  }
});

let port = process.env.PORT || 3001;
app.listen(port, (req, res) => {
  console.log("Servidor ok");
});
