import { Component } from "react";
import FlightsItem from "../flightsItem/FlightsItem";
import FlightsFilter from "../flightsFilter/FlightsFilter";

import data from "../../services/flights.json";

class App extends Component {

   componentDidMount() {
      console.log(data.result.flights[0]);
   }

   render() {
      return (
         <div className="app">
            <aside>
               <FlightsFilter></FlightsFilter>
            </aside>

            <main>
               <FlightsItem />
            </main>
         </div>
      )
   }
}

export default App;