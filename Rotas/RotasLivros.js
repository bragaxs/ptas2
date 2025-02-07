const express = require("express");
const rota = express.Router();
const controller = require("../Controllers/ControllerLivros");

rota.post("/", controller.criarLivro);
rota.get("/", controller.buscarLivros);
rota.get("/:id", controller.buscarLivroPorId);
rota.put("/:id", controller.atualizarLivro);
rota.delete("/:id", controller.excluirLivro);

module.exports = rota;
