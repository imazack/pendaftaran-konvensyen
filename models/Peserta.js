const mongoose = require("mongoose");

const PesertaScheme = mongoose.Schema({
    nama: {
		type: String,
        required: [true, 'Sila nyatakan nama'],
		unique: true,
		trim: true,
	},
    jawatan: {
		type: String,
		unique: true,
		trim: true,
	},
	phone: {
		type: String,
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		unique: true,
		trim: true,
	}
});

module.exports = mongoose.models.Peserta || mongoose.model('peserta', PesertaScheme);