import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { Fragment } from 'react';
import Head from 'next/head';
const NewMeetup = () => {
  const meetupAddHandler = async (meetupData) => {
    console.log(meetupData);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = response.json();
    console.log(data);
  };
  return (
    <Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Add a new react meetup and have a great networking opportunity!" />
      </Head>
      <NewMeetupForm onAddMeetup={meetupAddHandler} />
    </Fragment>
  );
};
export default NewMeetup;
