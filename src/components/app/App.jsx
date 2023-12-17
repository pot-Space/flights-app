import { Component } from "react";

class App extends Component {
   render() {
      return (
         <div className="app">

            <aside>
               <div className="add-area add-area_min"></div>
               <form action="">

               </form>
               <div className="add-area add-area_max"></div>
            </aside>

            <main>

               <div className="flight">

                  <div className="flight__header">
                     <img src="" alt="название" />

                     <div className="price">
                        <span className="price__count">21049 ₽</span>
                        <span className="price__description">Стоимость для одного взрослого пассажира</span>
                     </div>
                  </div>

                  <div className="flight__from">
                     <div className="header">
                        <div className="header__from">
                           <span>Москва, ШЕРЕМЕТЬЕВО</span>
                           <span>(SVO)</span>
                        </div>

                        <div className="header__to">
                           <span>ЛОНДОН, Лондон, Хитроу</span>
                           <span>(LHR)</span>
                        </div>
                     </div>

                     <div className="body">
                        <div className="time-start">
                           <span>20:40</span>
                           <span>18 авг. вт</span>
                        </div>

                        <div className="time-duration">
                           <img src="" alt="clocks" />
                           <span>14 ч 45 мин</span>
                        </div>

                        <div className="time-end">
                           <span>19 авг. ср</span>
                           <span>09:25</span>
                        </div>
                     </div>

                     <div className="connection">1 пересадка</div>
                     <div className="departure">Рейс выполняет: LOT Polish Airlines</div>
                  </div>

                  <div className="flight__to">
                  </div>

                  <button className="choose-flight">Выбрать</button>

               </div>

            </main>

         </div>
      )
   }
}

export default App;