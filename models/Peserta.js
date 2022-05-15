const mongoose = require("mongoose");

const PesertaScheme = mongoose.Schema({
    nama: {
		type: String,
        required: [true, 'Sila nyatakan nama'],
		trim: true,
	},
    jawatan: {
		type: String,
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

mongoose.models = {}
module.exports = mongoose.models.Peserta || mongoose.model('peserta', PesertaScheme);