import EventBlock from "@/components/event-block";
import EventsPopular from "@/components/events-popular";

export default function Home() {
  return (
    <div className="mt-[20px] w-full min-w-screen flex gap-[20px] flex-col">
      <EventsPopular city="vladivostok" />
      <EventBlock city="vladivostok" eventCategory="concerts" />
      <EventBlock city="vladivostok" eventCategory="pushkin" />
    </div>
  );
}
