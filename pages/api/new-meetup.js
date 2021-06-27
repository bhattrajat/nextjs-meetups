import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const { db } = await connectToDatabase();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    res.status(201).json({ message: 'meetup inserted' });
  }
};
