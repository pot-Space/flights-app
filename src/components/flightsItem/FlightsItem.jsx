import { Component } from "react";
import FlightsServices from "../../services/FlightsServices";

import clock from '../../resources/img/clock.svg';


class FlightsItem extends Component {
   state = {
      flightsList: [],
      offset: 2,
      filter: null
   }

   flightsServices = new FlightsServices();

   componentDidMount() {
      this.onRequest();
   }

   onRequest = (offset) => {
      const arr = this.flightsServices.getAllFlights(offset);
      this.onFlightsListLoaded(arr);
   }

   onFlightsListLoaded = (newflightsList) => {
      this.setState(({ offset, flightsList }) => ({
         flightsList: [...flightsList, ...newflightsList],
         offset: offset + 2
      }))
   }

   renderItem(arr) {
      const items = arr.map((item) => {
         // console.log(item);

         let legsThere, legsBack = null;
         if (item.legsThere.length > 1) {
            legsThere = <div className="card__connection">1 пересадка</div>;
         }
         if (item.legsBack.length > 1) {
            legsBack = <div className="card__connection">1 пересадка</div>;
         }

         return (
            <div className="flight" key={item.id}>
               <div className="flight__header">
                  <img src="#link" alt="logo" />

                  <div className="price">
                     <span className="price__count">{item.price} ₽</span>
                     <span className="price__description">Стоимость для одного взрослого пассажира</span>
                  </div>
               </div>

               <div className="flight__body">
                  <div className="card">
                     <div className="card__header">
                        <div className="flight-from">
                           {item.departureCityThere}, {item.departureAirportThere}
                           <span className="hint"> ({item.departureAirportThereUID})</span>
                        </div>
                        <div className="arrow">&rarr;</div>
                        <div className="flight-to">
                           {item.arrivalCityThere}, {item.arrivalAirportThere}
                           <span className="hint"> ({item.arrivalAirportThereUID})</span>
                        </div>
                     </div>
                     <hr />
                     <div className="card__body">
                        <div className="time-start">
                           <span className="time">{item.departureTimeThere.timeHM}</span>
                           <span className="hint">{item.departureTimeThere.dayMonth} {item.departureTimeThere.month}. {item.departureTimeThere.dayWeek}</span>
                        </div>

                        <div className="time-duration">
                           <img src={clock} alt="clock" />
                           <span>{item.durationThere}</span>
                        </div>

                        <div className="time-end">
                           <span className="hint">{item.arrivalTimeThere.dayMonth} {item.arrivalTimeThere.month}. {item.arrivalTimeThere.dayWeek}</span>
                           <span className="time">{item.arrivalTimeThere.timeHM}</span>
                        </div>
                     </div>

                     {legsThere}

                     <div className="card__departure">Рейс выполняет: {item.carrierThere}</div>
                  </div>

                  <div className="card">
                     <div className="card__header">
                        <div className="flight-from">
                           {item.departureCityBack}, {item.departureAirportBack}
                           <span className="hint"> ({item.departureAirportBackUID})</span>
                        </div>
                        <div className="arrow">&rarr;</div>
                        <div className="flight-to">
                           {item.arrivalCityBack}, {item.arrivalAirportBack}
                           <span className="hint"> ({item.arrivalAirportBackUID})</span>
                        </div>
                     </div>
                     <hr />
                     <div className="card__body">
                        <div className="time-start">
                           <span className="time">{item.departureTimeBack.timeHM}</span>
                           <span className="hint">{item.departureTimeBack.dayMonth} {item.departureTimeBack.month}. {item.departureTimeBack.dayWeek}</span>
                        </div>

                        <div className="time-duration">
                           <img src={clock} alt="clock" />
                           <span>{item.durationBack}</span>
                        </div>

                        <div className="time-end">
                           <span className="hint">{item.arrivalTimeBack.dayMonth} {item.arrivalTimeBack.month}. {item.arrivalTimeBack.dayWeek}</span>
                           <span className="time">{item.arrivalTimeBack.timeHM}</span>
                        </div>
                     </div>

                     {legsBack}

                     <div className="card__departure">Рейс выполняет: {item.carrierBack}</div>
                  </div>
               </div>

               <button className="flight__choose-btn">Выбрать</button>
            </div>
         )
      });
      return (
         <>
            {items}
         </>
      )
   }


   render() {
      const { flightsList, offset } = this.state;
      const items = this.renderItem(flightsList);

      return (
         <main>
            {items}
            <button className="load-more"
               onClick={() => this.onRequest(offset)}
            >
               Показать еще
            </button>
         </main>
      )
   }
}

export default FlightsItem;