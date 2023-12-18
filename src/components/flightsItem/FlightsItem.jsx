import { Component } from "react";

import clock from '../../resources/img/clock.svg';


class FlightsListItem extends Component {
   render() {
      return (
         <div className="flight">
            <div className="flight__header">
               <img src="" alt="logo" />

               <div className="price">
                  <span className="price__count">21049 ₽</span>
                  <span className="price__description">Стоимость для одного взрослого пассажира</span>
               </div>
            </div>

            <div className="flight__body">
               <div className="card">
                  <div className="card__header">
                     <div className="flight-from">
                        <span>Москва, ШЕРЕМЕТЬЕВО </span>
                        <span className="hint">(SVO)</span>
                     </div>
                     <div className="arrow">&rarr;</div>
                     <div className="flight-to">
                        <span>ЛОНДОН, Лондон, Хитроу </span>
                        <span className="hint">(LHR)</span>
                     </div>
                  </div>

                  <hr />

                  <div className="card__body">
                     <div className="time-start">
                        <span className="time">20:40</span>
                        <span className="hint">18 авг. вт</span>
                     </div>

                     <div className="time-duration">
                        <img src={clock} alt="clock" />
                        <span>14 ч 45 мин</span>
                     </div>

                     <div className="time-end">
                        <span className="hint">19 авг. ср</span>
                        <span className="time">09:25</span>
                     </div>
                  </div>

                  <div className="card__connection">1 пересадка</div>
                  <div className="card__departure">Рейс выполняет: LOT Polish Airlines</div>
               </div>

               <div className="card">
                  <div className="card__header">
                     <div className="flight-from">
                        <span>ЛОНДОН, Лондон, Хитроу </span>
                        <span className="hint">(SVO)</span>
                     </div>
                     <div className="arrow">&rarr;</div>
                     <div className="flight-to">
                        <span>Москва, ШЕРЕМЕТЬЕВО </span>
                        <span className="hint">(LHR)</span>
                     </div>
                  </div>

                  <hr />

                  <div className="card__body">
                     <div className="time-start">
                        <span className="time">18:10</span>
                        <span className="hint">19 авг. ch</span>
                     </div>

                     <div className="time-duration">
                        <img src={clock} alt="clock" />
                        <span>23 ч 35 мин</span>
                     </div>

                     <div className="time-end">
                        <span className="hint">20 авг. ср</span>
                        <span className="time">19:45</span>
                     </div>
                  </div>

                  <div className="card__connection">1 пересадка</div>
                  <div className="card__departure">Рейс выполняет: LOT Polish Airlines</div>
               </div>
            </div>

            <button className="flight__choose-btn">Выбрать</button>
         </div>
      )
   }
}

export default FlightsListItem;