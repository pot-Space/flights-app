import data from "./flights.json";

class FlightsServices {
   flights = data.result.flights;
   bestPrices = data.result.bestPrices;

   getAllFlights = (offset = 2) => {
      // return this.flights.map(this._transformData);
      return this.flights.slice(offset - 2, offset).map(this._transformData);
   }

   getFlight = (id) => {
      return this.flights[id];
   }

   timeConvert = (mins) => {
      const hours = Math.floor(mins / 60);
      const minutes = mins % 60;
      return `${hours} ч ${minutes} мин`;
   }

   dateConvert = (minDate) => {
      const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',];
      const month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек',];

      const date = new Date(minDate);
      const timeH = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      const timeM = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

      return {
         timeHM: `${timeH}:${timeM}`,
         dayMonth: date.getDate(),
         dayWeek: week[date.getDay()],
         month: month[date.getMonth()]
      }
   }

   _transformData = (item) => {
      return {
         id: item.flightToken,
         price: item.flight.price.total.amount,

         carrierThere: item.flight.legs[0].segments[0].airline.caption,
         legsThere: item.flight.legs[0].segments,
         departureCityThere: item.flight.legs[0].segments[0].departureCity.caption,
         departureAirportThere: item.flight.legs[0].segments[0].departureAirport.caption,
         departureAirportThereUID: item.flight.legs[0].segments[0].departureAirport.uid,
         departureTimeThere: this.dateConvert(item.flight.legs[0].segments[0].departureDate),

         arrivalCityThere: item.flight.legs[0].segments[item.flight.legs[0].segments.length - 1].arrivalCity.caption,
         arrivalAirportThere: item.flight.legs[0].segments[item.flight.legs[0].segments.length - 1].arrivalAirport.caption,
         arrivalAirportThereUID: item.flight.legs[0].segments[item.flight.legs[0].segments.length - 1].arrivalAirport.uid,
         arrivalTimeThere: this.dateConvert(item.flight.legs[0].segments[item.flight.legs[0].segments.length - 1].arrivalDate),

         durationThere: this.timeConvert(item.flight.legs[0].duration),


         carrierBack: item.flight.legs[0].segments[0].airline.caption,
         legsBack: item.flight.legs[1].segments,
         departureCityBack: item.flight.legs[1].segments[0].departureCity.caption,
         departureAirportBack: item.flight.legs[1].segments[0].departureAirport.caption,
         departureAirportBackUID: item.flight.legs[1].segments[0].departureAirport.uid,
         departureTimeBack: this.dateConvert(item.flight.legs[1].segments[0].departureDate),

         arrivalCityBack: item.flight.legs[1].segments[item.flight.legs[1].segments.length - 1].arrivalCity.caption,
         arrivalAirportBack: item.flight.legs[1].segments[item.flight.legs[1].segments.length - 1].arrivalAirport.caption,
         arrivalAirportBackUID: item.flight.legs[1].segments[item.flight.legs[1].segments.length - 1].arrivalAirport.uid,
         arrivalTimeBack: this.dateConvert(item.flight.legs[1].segments[item.flight.legs[1].segments.length - 1].arrivalDate),

         durationBack: this.timeConvert(item.flight.legs[1].duration),
      }
   }
}

export default FlightsServices;