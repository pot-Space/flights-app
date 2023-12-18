import { Component } from "react";
import FlightsItem from "../flightsItem/FlightsItem";
import FlightsFilter from "../flightsFilter/FlightsFilter";

import data from "../../services/flights.json";

class App extends Component {


   render() {
      return (
         <div className="app">
            <aside>
               <FlightsFilter></FlightsFilter>
            </aside>

            <main>
               <FlightsItem></FlightsItem>
            </main>

         </div>
      )
   }
}

export default App;