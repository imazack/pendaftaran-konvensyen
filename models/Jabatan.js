const mongoose = require("mongoose");

const JabatanScheme = mongoose.Schema({
    kementerian: {
		type: String,
		trim: true,
	},
	jabatan: {
		type: String,
		required: [true, 'Sila nyatakan nama Jabatan'],
		trim: true,
	}
});

mongoose.models = {}
module.exports = mongoose.models.Jabatan || mongoose.model("jabatan", JabatanScheme);