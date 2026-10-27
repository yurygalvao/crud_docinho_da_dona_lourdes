const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    const todosOsDoces = await prisma.doce.findMany();
    res.render('listagem', { doces: todosOsDoces });
});

router.get('/cadastro', (req, res) => {
    res.render('cadastro');
});

router.post('/cadastro', async (req, res) => {
    const { nome, preco } = req.body;
    
    await prisma.doce.create({
        data: {
            nome: nome,
            preco: parseFloat(preco) 
        }
    });
    
    res.redirect('/');
});

// Rota para abrir o formulário de alteração preenchido
router.get('/alterar/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const doce = await prisma.doce.findUnique({
        where: { id: id }
    });
    res.render('alterar', { doce: doce });
});

router.post('/alterar/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, preco } = req.body;
    
    await prisma.doce.update({
        where: { id: id },
        data: {
            nome: nome,
            preco: parseFloat(preco)
        }
    });
    res.redirect('/');
});

router.post('/excluir/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    
    await prisma.doce.delete({
        where: { id: id }
    });
    res.redirect('/');
});

module.exports = router;