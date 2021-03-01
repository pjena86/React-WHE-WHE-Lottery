    import React from 'react'
    import Header from './Header'
    import '../css/App.css';
    import NumberPad from './NumberPad';
    import MoneyValueSection from './MoneyValueSection';
    import NumberSelectionSection from './NumberSelectionSection';
    import {useState} from 'react';

    const App = () => {

        const [modal, setModal] = useState({
        visible: false
        });

        const onCashBtnClick = (e, button)=>{
            
            setModal({
                visible:true
            });
            
                } 
        return (
            <div className ="whe-Body-section">
            <header><Header/></header>
            <MoneyValueSection/>
                <NumberPad modalState = {modal}/>
                <NumberSelectionSection />
            
            </div>
        
        )
    }

    export default App
