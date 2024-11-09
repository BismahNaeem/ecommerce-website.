import Herosection from "./components/herosection"
import Sneakers from "./components/sneakers"
import Heels from "./components/heels"
import NewArrival from "./components/new-arrival"
import SneakersBanner from "./components/sneakersale";


export default function Homepage() {
  return (
    <div>

      
     
      <Herosection />
      <SneakersBanner />
      <Sneakers />
      <NewArrival />
      <Heels />
      
    </div>
  );}
