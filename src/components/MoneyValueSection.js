    import React from 'react'
    import "../css/MoneyValueSection.css";
    import dice from "../image/dice.jpg";

    const MoneyValueSection = () => {

    var  totalMoney = 0;

        const onMoneyClick = (e, button)=>{
            totalMoney = totalMoney + button;

            var hidMoneyTextBox = document.getElementById("hidMoneyValueText");
            hidMoneyTextBox.value = totalMoney;
        }

        return (
            <div>
            <div className="Left-Pane-image">
                <image>
                <img src={dice} alt ="dice" width="150"/>
                </image>
                </div>
            <div className="Left-Pane-MoneyValue">
                <button id = "22" className="MoneyValue btn-1" onClick={(e)=> onMoneyClick(e, 1)}>$1</button>
                <button id = "33"  className="MoneyValue btn-2" onClick={(e)=> onMoneyClick(e, 5)}>$5</button>
                <button id = "44"  className="MoneyValue btn-3" onClick={(e)=> onMoneyClick(e, 10)}>$10</button>
                <button id = "55"  className="MoneyValue btn-4" onClick={(e)=> onMoneyClick(e, 20)}>$20</button>
                <input id= "hidMoneyValueText" type ="hidden" value = ""></input>
            </div>
            </div>
        
        )
    }

    export default MoneyValueSection
