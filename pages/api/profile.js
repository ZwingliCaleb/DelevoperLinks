// pages/api/profile.js
import dbConnect from '../../lib/dbConnect';
import Profile from '../../models/Profile';

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const profiles = await Profile.find({});
        res.status(200).json({ success: true, data: profiles });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'POST':
      try {
        const profile = await Profile.create(req.body);
        res.status(201).json({ success: true, data: profile });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'PUT':
      try {
        const { id, ...updateData } = req.body;
        const profile = await Profile.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).json({ success: true, data: profile });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.body;
        await Profile.findByIdAndDelete(id);
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
