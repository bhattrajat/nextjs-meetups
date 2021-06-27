import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { connectToDatabase } from '../util/mongodb';
import Layout from '../components/layout/Layout';
import React from 'react';
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!'
  }
];

export default function Home({ meetups }) {
  return (
    <React.Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups." />
      </Head>
      <MeetupList meetups={meetups} />
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  const { db } = await connectToDatabase();

  const meetups = await db.collection('meetups').find({}).toArray();
  console.log(JSON.parse(JSON.stringify(meetups)));
  return {
    props: { meetups: JSON.parse(JSON.stringify(meetups)) }
  };
}
