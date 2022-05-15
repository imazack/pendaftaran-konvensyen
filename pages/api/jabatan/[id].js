import Jabatan from '../../../models/Jabatan';
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
				const jabatan = await Jabatan.findById(id);

				if (!jabatan) {
					return res.status(400).json({ success: false });
				}

				res.status(200).json({ success: true, data: jabatan });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'PUT':
			try {
				const jabatan = await Jabatan.findByIdAndUpdate(id, req.body, {
					new: true,
					runValidators: true,
				});

				if (!jabatan) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json({ success: true, data: jabatan });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'DELETE':
			try {
				const padamJabatan = await Jabatan.deleteOne({ _id: id });

				if (!padamJabatan) {
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