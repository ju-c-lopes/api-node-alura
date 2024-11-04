import express from 'express';
import AutorControler from '../controllers/autoresController.js';

const router = express.Router();

router
    .get("/autores", AutorControler.listarAutores)
    .get("/autores/:id", AutorControler.listarAutorById)
    .post("/autores", AutorControler.cadastrarAutor)
    .put("/autores/:id", AutorControler.atualizarAutor)
    .delete("/autores/:id", AutorControler.deletarAutor);

export default router;