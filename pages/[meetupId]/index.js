import MeetupItem from '../../components/meetups/MeetupItem';
import { connectToDatabase } from '../../util/mongodb';
import { ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';
const MeetupDetail = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupItem
        // image={props.meetupData.image}
        // title={props.meetupData.title}
        // id={props.meetupData._id}
        // address={props.meetupData.address}
        {...props.meetupData}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const meetups = await db.collection('meetups').find({}, { _id: 1 }).toArray();
  return {
    fallback: false,
    paths: meetups.map((meetup) => {
      return {
        params: {
          meetupId: meetup._id.toString()
        }
      };
    })
  };
}
export async function getStaticProps(context) {
  // console.log('this is running');
  const meetupId = context.params.meetupId;
  const { db } = await connectToDatabase();
  const meetupData = await db.collection('meetups').findOne({ _id: ObjectId(meetupId) });
  // console.log(meetupData);
  return {
    props: {
      meetupData: JSON.parse(JSON.stringify(meetupData))
    }
  };
}

export default MeetupDetail;
