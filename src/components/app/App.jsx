import { Component } from "react";
import FlightsItem from "../flightsItem/FlightsItem";
import FlightsFilter from "../flightsFilter/FlightsFilter";

import data from "../../services/flights.json";

class App extends Component {

   // componentDidMount() {
   //    console.log(data.result.flights[0]);
   // }

   render() {
      const { filter } = this.state;

      return (
         <div className="app">
            <aside>
               <div className="add-area add-area_min"></div>

               <FlightsFilter />

               <div className="add-area add-area_max"></div>
            </aside>

            <FlightsItem />
         </div>
      )
   }
}

export default App;