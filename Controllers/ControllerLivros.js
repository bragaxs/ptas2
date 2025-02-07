const colecaodelivros = require("../Livros/livros.js");

const criarLivro = (req, res) => {
    const livro = req.body;
    livro.id = colecaodelivros.length + 1; 
    colecaodelivros.push(livro);
    res.status(201).json(livro);
};

const buscarLivros = (req, res) => {
    res.status(200).json(colecaodelivros); 
};

const buscarLivroPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const livro = colecaodelivros.find(l => l.id === id);
    
    if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado." });
    }
    
    res.status(200).json(livro);
};

const atualizarLivro = (req, res) => {
    const id = parseInt(req.params.id);
    const index = colecaodelivros.findIndex(l => l.id === id);
    
    if (index === -1) {
        return res.status(404).json({ erro: "Livro não encontrado." });
    }
    
    colecaodelivros[index] = { ...colecaodelivros[index], ...req.body };
    res.status(200).json(colecaodelivros[index]);
};

const excluirLivro = (req, res) => {
    const id = parseInt(req.params.id);
    const index = colecaodelivros.findIndex(l => l.id === id);
    
    if (index === -1) {
        return res.status(404).json({ erro: "Livro não encontrado." });
    }
    
    colecaodelivros.splice(index, 1);
    res.status(200).json({ mensagem: "Livro removido com sucesso." });
};

module.exports = { criarLivro, buscarLivros, buscarLivroPorId, atualizarLivro, excluirLivro };
