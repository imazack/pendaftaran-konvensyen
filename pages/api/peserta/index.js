import Peserta from '../../../models/Peserta';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const semuapeserta = await Peserta.find({});

				res.status(200).json({ success: true, data: semuapeserta });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				const peserta = await Peserta.create(req.body);

				res.status(201).json({ success: true, data: peserta });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};