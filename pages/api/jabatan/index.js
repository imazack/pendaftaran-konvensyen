import Jabatan from '../../../models/Jabatan';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const semuajabatan = await Jabatan.find({});

				res.status(200).json({ success: true, data: semuajabatan });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				const jabatan = await Jabatan.create(req.body);

				res.status(201).json({ success: true, data: jabatan });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};