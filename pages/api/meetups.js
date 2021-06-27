import { connectToDatabase } from '../../util/mongodb';

export default async (request, res) => {
  const { db } = await connectToDatabase();
  const meetups = await db.collection('meetups').find({}).toArray();
  res.json(meetups);
};
