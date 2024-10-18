import EventBlock from "@/components/event-block";
import EventsTab from "@/components/events-tab";

export default function Home() {
  return (
    <div className="w-full min-w-screen">
      <EventsTab />
      <EventBlock eventCategory="concerts" />
      <EventBlock eventCategory="pushkin" />
    </div>
  );
}
