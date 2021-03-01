    import React from 'react';
    import {useState} from 'react';
    import Modal from './Modal';
    import "../css/NumberPad.css";

    const NumberPad = (props) => {


        const [modal, setModal] = useState({
            visible: false
            });
        var selectedNum = [];//["1","2"];
    var selectCount = 0;

    const onClick = (e, button)=>{
    
        if (e!=null){

                var btn = document.getElementById(button);
                if( btn.className == "num-button" && selectCount < 5 ) {
                    selectCount++;

                    selectedNum.push(button);
                    btn.className ="select-button";   
                }else{
                    btn.className ="num-button";
                    selectCount--; 
                //alert(selectedNum.indexOf(button)+ ' '+ button);

                    const index = selectedNum.indexOf(button);
                    
                    if(index > -1){
                        // selectedNum.splice(selectedNum.indexOf(button)+1, 1);
                        selectedNum.splice(index, 1);
                    }
                
                }
                var hidTextBox = document.getElementById("hidText");
                hidTextBox.value = selectedNum.join(",");  
        }   
        }

        const onClearBtnClick = () => setModal(true);

        const onCashBtnClick = (e,CASH)=>{

            setModal({
                visible:true
            });
        }
        return (
            <div className="Middle-pane">
                    <button id = "1" className="num-button" onClick={(e)=> onClick(e,1)}>1</button>
                    <button id = "2" className="num-button" onClick={(e)=> onClick(e,2)}>2</button>
                    <button id = "3"  className="num-button" onClick={(e)=> onClick(e,3)}>3</button> 
                    <button id = "4"  className="num-button" onClick={(e)=> onClick(e,4)}>4</button>
                    <button id = "5"  className="num-button" onClick={(e)=> onClick(e,5)}>5</button>
                    <button id = "6"  className="num-button" onClick={(e)=> onClick(e,6)}>6</button>
                    <button id = "7"  className="num-button" onClick={(e)=> onClick(e,7)}>7</button>
                    <button id = "8"  className="num-button" onClick={(e)=> onClick(e,8)}>8</button>
                    <button id = "9"  className="num-button" onClick={(e)=> onClick(e,9)}>9</button>
                    <button id = "10"  className="num-button" onClick={(e)=> onClick(e,10)}>10</button>
                    <button id = "11"  className="num-button" onClick={(e)=> onClick(e,11)}>11</button>
                    <button id = "12"  className="num-button" onClick={(e)=> onClick(e,12)}>12</button>
                    <button id = "13"  className="num-button" onClick={(e)=> onClick(e,13)}>13</button>
                    <button id = "14"  className="num-button" onClick={(e)=> onClick(e,14)}>14</button>
                    <button id = "15"  className="num-button" onClick={(e)=> onClick(e,15)}>15</button>
                    <button id = "16"  className="num-button" onClick={(e)=> onClick(e,16)}>16</button>
                    <button id = "17"  className="num-button" onClick={(e)=> onClick(e,17)}>17</button>
                    <button id = "18"  className="num-button" onClick={(e)=> onClick(e,18)}>18</button>
                    <button id = "19"  className="num-button" onClick={(e)=> onClick(e,19)}>19</button>
                    <button id = "20"  className="num-button" onClick={(e)=> onClick(e,20)}>20</button>
                    
                    <button id = "21"  className="num-button span-2" onClick={onCashBtnClick}>CASH</button>
                    <button id = "22" className="num-button span-3" onClick={onClearBtnClick}>CLEAR</button>
                    {/* <NumberSelectionSection selectedNum = {selectedNum}/> */}
                    <input id= "hidText" type ="hidden" value = ""></input>
                    <Modal/>
                </div>
                
        )
    }


    export default NumberPad
