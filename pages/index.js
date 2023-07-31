import EventsList from "../components/events/event-list";
import { getFeaturedEvents } from "../data/dummy-data";

function IndexPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventsList items={featuredEvents} />
    </div>
  );
}

export default IndexPage;
