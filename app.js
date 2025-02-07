const express = require("express");
const app = express();
const rotaLivros = require("./Rotas/RotasLivros");

app.use(express.json()); 
app.use("/livros", rotaLivros); 

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
