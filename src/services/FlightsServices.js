import data from "./flights.json";

class FlightsServices {
   _baseOffset = 0;
   flights = data.result.flights;
   bestPrices = data.result.bestPrices;

   getAllFlights = () => {
      return this.flights.map(this._transformData);
   }

   getFlight = (id) => {
      return this.flights[id];
   }

   timeConvert = (mins) => {
      const hours = Math.floor(mins / 60);
      const minutes = mins % 60;
      return `${hours} ч ${minutes} мин`;
   }

   _transformData = (item) => {
      return {
         id: item.flightToken,
         carrier: item.flight.carrier.caption,
         price: item.flight.price.total.amount,
         // segmentsFrom: item.flight.legs[0].segments,
         // segmentsTo: item.flight.legs[1].segments,

         departureCityFrom: item.flight.legs[0].segments[0].departureCity.caption,
         departureAirportFrom: item.flight.legs[0].segments[0].departureAirport.caption,
         departureAirportFromUID: item.flight.legs[0].segments[0].departureAirport.uid,

         arrivalCityFrom: item.flight.legs[0].segments[item.flight.legs[0].segments.length - 1].arrivalCity.caption,
         arrivalAirportFrom: item.flight.legs[0].segments[item.flight.legs[0].segments.length - 1].arrivalAirport.caption,
         arrivalAirportFromUID: item.flight.legs[0].segments[item.flight.legs[0].segments.length - 1].arrivalAirport.uid,

         durationFrom: this.timeConvert(item.flight.legs[0].duration),

      }
   }
}

export default FlightsServices;