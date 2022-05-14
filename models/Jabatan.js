const mongoose = require("mongoose");

const JabatanScheme = mongoose.Schema({
    kementerian: {
		type: String,
		unique: true,
		trim: true,
	},
	jabatan: {
		type: String,
		required: [true, 'Sila nyatakan nama Jabatan'],
		unique: true,
		trim: true,
	}
});

module.exports = mongoose.models.Jabatan || mongoose.model('jabatan', JabatanScheme);