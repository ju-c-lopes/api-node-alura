import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = async (req, res) => {
        try {
            const livro = await livros.find().populate("autor").exec();
            res.status(200).json(livro)
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static listarLivroById = async (req, res) => {
        try {
            const { id } = req.params;
            const livro = await livros.findById(id).populate("autor", "nome").exec();
            res.status(200).json(livro);
        }
        catch (err) {
            res.status(400).json({ message: `${err.message} - Id do livro não localizado.` });
        }
    }

    static cadastrarLivro = async (req, res) => {
        try {
            const livro = new livros(req.body);
            await livro.save();
            res.status(201).send(livro.toJSON());
        }
        catch (err) {
            res.status(500).json({ message: `${err.message} - Falha ao cadastrar livro` });
        }
    }

    static atualizarLivro = async (req, res) => {
        try {
            const { id } = req.params;
            await livros.findByIdAndUpdate(id, req.body);
            res.status(200).send({message: "Livro atualizado com sucesso"});
        }
        catch (err) {
            res.status(500).json({ message: `${err.message} - Falha ao atualizar livro` });
        }
    }

    static deletarLivro = async (req, res) => {
        try {
            const { id } = req.params;
            await livros.findByIdAndDelete(id);
            res.status(200).send({message: "Livro excluido com sucesso"});
        }
        catch (err) {
            res.status(500).json({ message: `${err.message} - Falha ao excluir livro` });
        }
    }

    static listarLivroByEditora = async (req, res) => {
        try {
            const { editora } = req.query;
            const livro = await livros.find({"editora": editora}).populate("autor", "nome").exec();
            res.status(200).json(livro);
        }
        catch (err) {
            res.status(400).json({ message: `${err.message} - Editora não localizada.` });
        }
    }
}

export default LivroController;
