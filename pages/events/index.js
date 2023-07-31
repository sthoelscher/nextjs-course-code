import EventsList from "../../components/events/event-list";
import { getAllEvents } from "../../data/dummy-data";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

function Events() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList items={events} />
    </div>
  );
}

export default Events;
