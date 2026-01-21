import EventCard from "@/components/EventCard"
import ExploreButton from "@/components/ExploreButton"
import { events } from "@/lib/constants"

const Home = () => {
  return (
    <section>
      <h1 className="text-center" >The hub for every dev event <br></br> you can't miss</h1>
      <p className="text-center mt-5" >Hackathon, Meetups and conferences</p>

      <ExploreButton />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events list-none">
          {
            events.map((event, index) => (
              <li key={index} >
                <EventCard {...event} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Home