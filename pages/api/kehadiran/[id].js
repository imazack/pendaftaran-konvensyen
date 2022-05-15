import Kehadiran from '../../../models/Kehadiran';
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
				const kehadiran = await Kehadiran.findById(id);

				if (!kehadiran) {
					return res.status(400).json({ success: false });
				}

				res.status(200).json({ success: true, data: kehadiran });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'PUT':
			try {
				const kehadiran = await Kehadiran.findByIdAndUpdate(id, req.body, {
					new: true,
					runValidators: true,
				});

				if (!kehadiran) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json({ success: true, data: kehadiran });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'DELETE':
			try {
				const padamKehadiran = await Kehadiran.deleteOne({ _id: id });

				if (!padamKehadiran) {
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