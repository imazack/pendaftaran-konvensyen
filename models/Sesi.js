const mongoose = require("mongoose");

const SesiScheme = mongoose.Schema({
	pagi: {
		type: Boolean,
		unique: true,
		trim: true,
	},
    petang: {
		type: Boolean,
		unique: true,
		trim: true,
	}
});

module.exports = mongoose.models.Sesi || mongoose.model('sesi', SesiScheme);