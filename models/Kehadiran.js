const mongoose = require("mongoose");

const KehadiranScheme = mongoose.Schema({
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

mongoose.models = {}
module.exports = mongoose.models.Kehadiran || mongoose.model('kehadiran', KehadiranScheme);