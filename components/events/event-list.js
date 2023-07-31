import EventItem from "./event-item";

import styles from "./event-list.module.css";

function EventsList(props) {
  return (
    <ul className={styles.list}>
      {props.items.map((event) => (
        <EventItem key={event.id} item={event} />
      ))}
    </ul>
  );
}

export default EventsList;
