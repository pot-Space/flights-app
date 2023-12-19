import { Component } from "react";


class FlightsFilter extends Component {
   render() {
      return (
         <>
            <div className="add-area add-area_min"></div>

            <form>
               <div className="sorting">
                  <legend>Сортировать</legend>
                  <div>
                     <input type="radio" id="ascending-order" name="sort" />
                     <label htmlFor="ascending-order">по возростанию</label>
                  </div>
                  <div>
                     <input type="radio" id="descending-order" name="sort" />
                     <label htmlFor="descending-order">по убыванию в цене</label>
                  </div>
                  <div>
                     <input type="radio" id="duration" name="sort" />
                     <label htmlFor="duration">по времени в пути</label>
                  </div>
               </div>

               <div className="filter">
                  <legend>Фильтровать</legend>
                  <div>
                     <input type="checkbox" id="one-connection" />
                     <label htmlFor="one-connection">1 пересадка</label>
                  </div>
                  <div>
                     <input type="checkbox" id="direct" />
                     <label htmlFor="direct">без пересадок</label>
                  </div>
               </div>

               <div className="amount-price">
                  <legend>Цена</legend>
                  <div>
                     <label>От</label>
                     <input type="text" placeholder="укажите минимум" />
                  </div>
                  <div>
                     <label>До</label>
                     <input type="text" placeholder="укажите максимум" />
                  </div>
               </div>

               <div className="airlines">
                  <legend>Авиакомпании</legend>
                  <div>
                     <input type="checkbox" id="lot_pa" />
                     <label htmlFor="one-connection">LOT Polish Airlines от 21049 р.</label>
                  </div>
                  <div>
                     <input type="checkbox" id="airoflot" />
                     <label htmlFor="airoflot">Аэрофлот - российские авиалинии  от 31733 р.</label>
                  </div>
               </div>
            </form>

            <div className="add-area add-area_max"></div>
         </>
      )
   }
}

export default FlightsFilter;