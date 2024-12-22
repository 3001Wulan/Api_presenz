// controllers/catatanController.js
const Catatan = require('../models/Catatan'); // Ganti dengan nama file yang benar


// Create a new catatan
exports.createCatatan = async (req, res) => {
  try {
    const { id_pertemuan, isi_catatan, jenis_catatan } = req.body;
    const catatan = await Catatan.create({ id_pertemuan, isi_catatan, jenis_catatan });
    res.status(201).json(catatan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all catatan
exports.getAllCatatan = async (req, res) => {
  try {
    const catatan = await Catatan.findAll();
    res.status(200).json(catatan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single catatan by ID
exports.getCatatanById = async (req, res) => {
  try {
    const { id } = req.params;
    const catatan = await Catatan.findByPk(id);
    if (!catatan) return res.status(404).json({ message: 'Catatan not found' });
    res.status(200).json(catatan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a catatan
exports.updateCatatan = async (req, res) => {
  try {
    const { id } = req.params;
    const { isi_catatan, jenis_catatan } = req.body;
    const catatan = await Catatan.findByPk(id);
    if (!catatan) return res.status(404).json({ message: 'Catatan not found' });

    await catatan.update({ isi_catatan, jenis_catatan });
    res.status(200).json(catatan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a catatan
exports.deleteCatatan = async (req, res) => {
  try {
    const { id } = req.params;
    const catatan = await Catatan.findByPk(id);
    if (!catatan) return res.status(404).json({ message: 'Catatan not found' });

    await catatan.destroy();
    res.status(200).json({ message: 'Catatan deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
