import Kehadiran from '../../../models/Kehadiran';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const semuakehadiran = await Kehadiran.find({});

				res.status(200).json({ success: true, data: semuakehadiran });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				const kehadiran = await Kehadiran.create(req.body);

				res.status(201).json({ success: true, data: kehadiran });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};