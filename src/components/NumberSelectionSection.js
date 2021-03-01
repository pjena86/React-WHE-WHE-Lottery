    import React from 'react'
    import { useState} from "react";
    import {useEffect} from 'react';
    import NumberPad from "./NumberPad";
    import "../css/NumberSelectionSection.css";



    const NumberSelectionSection = (props) => {

        const [selectedNum, setSelectedNum] = useState();
        const [selectMoney, setselectMoney] = useState();

        window.onclick = function(event){
            var hidTextBox = document.getElementById("hidText");
            setSelectedNum(hidTextBox.value);
            var hidMoneyTextBox = document.getElementById("hidMoneyValueText");
            setselectMoney(hidMoneyTextBox.value);

            //alert(hidTextBox.value);
        }
        
        return (
            <div className="Right-Pane">
                    <p>Number Selected: {selectedNum}</p>
                    <div id="below">
                        <p>Total: ${selectMoney}</p>
                    </div>
                </div>
        )
    }

    export default NumberSelectionSection
