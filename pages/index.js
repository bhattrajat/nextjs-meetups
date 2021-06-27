import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { connectToDatabase } from '../util/mongodb';
import Layout from '../components/layout/Layout';
import React from 'react';

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
    props: { meetups: JSON.parse(JSON.stringify(meetups)) },
    revalidate: 1
  };
}
