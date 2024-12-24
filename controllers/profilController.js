const User  = require('../models/User');

module.exports = {
        getProfil: async (req, res) => {
          try {
            const user = await User.findOne({ where: { id_user: req.params.id } });  // Ganti 'Profil' jadi 'User'
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
        },
      
        updateProfil: async (req, res) => {
          try {
            const { nama, email, role, bio, no_handphone, jenis_kelamin, tanggal_lahir } = req.body;
            const user = await User.findOne({ where: { id_user: req.params.id } });  // Ganti 'Profil' jadi 'User'
      
            if (!user) return res.status(404).json({ message: 'User not found' });
      
            await user.update({ nama, email, role, bio, no_handphone, jenis_kelamin, tanggal_lahir });
            res.json({ message: 'User updated successfully', user });
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
        },
      
        updatePassword: async (req, res) => {
          try {
            const { password } = req.body;
            const user = await User.findOne({ where: { id_user: req.params.id } });  // Ganti 'Profil' jadi 'User'
      
            if (!user) return res.status(404).json({ message: 'User not found' });
      
            await user.update({ password });
            res.json({ message: 'Password updated successfully' });
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
        },
      };