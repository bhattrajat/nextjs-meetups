import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

function MeetupItem(props) {
  console.log(props);
  const router = useRouter();
  const showDetailPage = () => {
    router.push('/' + props.id);
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} width={640} height={430} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailPage}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
