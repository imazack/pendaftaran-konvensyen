import Peserta from '../../../models/Peserta';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
    const{
        query: {id},
        method
    } = req;

    switch (method) {
		case 'GET':
			try {
				const peserta = await Peserta.findById(id);

				if (!peserta) {
					return res.status(400).json({ success: false });
				}

				res.status(200).json({ success: true, data: peserta });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'PUT':
			try {
				const peserta = await Peserta.findByIdAndUpdate(id, req.body, {
					new: true,
					runValidators: true,
				});

				if (!peserta) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json({ success: true, data: peserta });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'DELETE':
			try {
				const padamPeserta = await Peserta.deleteOne({ _id: id });

				if (!padamPeserta) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json({ success: true, data: {} });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}