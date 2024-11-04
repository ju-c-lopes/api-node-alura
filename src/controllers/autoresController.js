import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = async (req, res) => {
        try {
            const autor = await autores.find();
            res.status(200).json(autor);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static listarAutorById = async (req, res) => {
        try {
            const { id } = req.params;
            const autor = await autores.findById(id);
            res.status(200).json(autor);
        }
        catch (err) {
            res.status(400).json({ message: `${err.message} - Id do Autor não localizado.` });
        }
    }

    static cadastrarAutor = async (req, res) => {
        try {
            const autor = new autores(req.body);
            await autor.save();
            res.status(201).send(autor.toJSON());
        }
        catch (err) {
            res.status(500).json({ message: `${err.message} - Falha ao cadastrar Autor` });
        }
    }

    static atualizarAutor = async (req, res) => {
        try {
            const { id } = req.params;
            await autores.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).send({message: "Autor atualizado com sucesso"});
        }
        catch (err) {
            res.status(500).json({ message: `${err.message} - Falha ao atualizar Autor` });
        }
    }

    static deletarAutor = async (req, res) => {
        try {
            const { id } = req.params;
            await autores.findByIdAndDelete(id);
            res.status(200).send({message: "Autor excluido com sucesso"});
        }
        catch (err) {
            res.status(500).json({ message: `${err.message} - Falha ao excluir Autor` });
        }
    }
}

export default AutorController;
