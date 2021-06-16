import React, { useState } from 'react';
import EuroMillionsPicker from './EuroMillionsPicker.js';
import LottoPicker from './LottoPicker.js';
import ThunderballPicker from './ThunderballPicker.js';

const LotteryContainer = () => {

    const [ euroMillionsNumbers, setEuroMillionsNumbers ] = useState( [] )
    const [ euroMillionsExtraNumbers, setEuroMillionsExtraNumbers ] = useState( [] )
    const [ isEuroMillionsMenuButtonDisplayed, setIsEuroMillionsMenuButtonDisplayed ] = useState( true )
    const [ isEuroMillionsGenerateButtonDisplayed, setIsEuroMillionsGenerateButtonDisplayed ] = useState( false )
    const [ isEuroLuckyStarsButtonDisplayed, setIsEuroLuckyStarsButtonDisplayed ] = useState( false )
    // const [ nextEuroMillionsDrawDate, setNextEuroMillionsDrawDate ] = useState( "" )

    const [ lottoNumbers, setLottoNumbers ] = useState( [] )
    const [ isLottoMenuButtonDisplayed, setIsLottoMenuButtonDisplayed ] = useState( true )
    const [ isLottoGenerateButtonDisplayed, setIsLottoGenerateButtonDisplayed ] = useState( false )

    const [ thunderballNumbers, setThunderballNumbers ] = useState( [] )
    const [ thunderballExtraNumber, setThunderballExtraNumber ] = useState( [] )
    const [ isThunderballMenuButtonDisplayed, setIsThunderballMenuButtonDisplayed ] = useState( true )
    const [ isThunderballGenerateButtonDisplayed, setIsThunderballGenerateButtonDisplayed ] = useState( false )
    const [ isThunderballExtraButtonDisplayed, setIsThunderballExtraButtonDisplayed ] = useState( false )

    const [ isEuroMillionsRulesDisplayed, setIsEuroMillionsRulesDisplayed ] = useState( false )
    const [ isLottoRulesDisplayed, setIsLottoRulesDisplayed ] = useState( false )
    const [ isThunderballRulesDisplayed, setIsThunderballRulesDisplayed ] = useState( false )

    const handleEuroMillionsSelect = () => {

        setIsEuroMillionsMenuButtonDisplayed( false )
        setIsEuroMillionsGenerateButtonDisplayed( true ) 
        setIsLottoMenuButtonDisplayed( false )
        setIsLottoGenerateButtonDisplayed( false )
        setIsEuroMillionsRulesDisplayed( true )
        setIsThunderballMenuButtonDisplayed( false )
    };

    const handleLottoSelect = () => {
        setIsEuroMillionsMenuButtonDisplayed( false )
        setIsEuroMillionsGenerateButtonDisplayed( false ) 
        setIsLottoMenuButtonDisplayed( false ) 
        setIsLottoGenerateButtonDisplayed( true ) 
        setIsLottoRulesDisplayed( true )
        setIsThunderballMenuButtonDisplayed( false )
    };

    const handleThunderballSelect = () => {
        setIsThunderballMenuButtonDisplayed( false )
        setIsThunderballGenerateButtonDisplayed( true )
        setIsThunderballRulesDisplayed( true ) 
        setIsEuroMillionsMenuButtonDisplayed( false )
        setIsEuroMillionsGenerateButtonDisplayed( false ) 
        setIsLottoMenuButtonDisplayed( false ) 
        
        
    };

    const handleReturnHome = () => {
        setEuroMillionsNumbers( [] )
        setEuroMillionsExtraNumbers( [] )
        setIsEuroMillionsMenuButtonDisplayed( true )
        setIsEuroMillionsRulesDisplayed( false )
        setIsLottoMenuButtonDisplayed( true )
        setLottoNumbers( [] )
        setIsLottoGenerateButtonDisplayed( false )
        setIsLottoRulesDisplayed( false )
        setThunderballNumbers( [] )
        setThunderballExtraNumber( [] )
        setIsThunderballRulesDisplayed( false )
        setIsThunderballMenuButtonDisplayed( true )

    };

    return(

        <>
        { isEuroMillionsMenuButtonDisplayed ? 
        <h2 className="intro-question-text" >What game are you playing?</h2> 
        : null }

        <EuroMillionsPicker 
        euroMillionsNumbers={ euroMillionsNumbers }
        setEuroMillionsNumbers={ setEuroMillionsNumbers }
        euroMillionsExtraNumbers={ euroMillionsExtraNumbers }
        setEuroMillionsExtraNumbers={ setEuroMillionsExtraNumbers }
        isEuroMillionsMenuButtonDisplayed={ isEuroMillionsMenuButtonDisplayed }
        setIsEuroMillionsMenuButtonDisplayed={ setIsEuroMillionsMenuButtonDisplayed }
        isEuroMillionsGenerateButtonDisplayed={ isEuroMillionsGenerateButtonDisplayed }
        setIsEuroMillionsGenerateButtonDisplayed={ setIsEuroMillionsGenerateButtonDisplayed }
        isEuroLuckyStarsButtonDisplayed={ isEuroLuckyStarsButtonDisplayed }
        setIsEuroLuckyStarsButtonDisplayed={ setIsEuroLuckyStarsButtonDisplayed }
        handleEuroMillionsSelect={ handleEuroMillionsSelect }
        isEuroMillionsRulesDisplayed={ isEuroMillionsRulesDisplayed }

        />
        
        <LottoPicker 
        lottoNumbers={ lottoNumbers }
        setLottoNumbers={ setLottoNumbers }
        handleLottoSelect={ handleLottoSelect }
        isLottoGenerateButtonDisplayed={ isLottoGenerateButtonDisplayed }
        isLottoMenuButtonDisplayed={ isLottoMenuButtonDisplayed }
        setIsLottoGenerateButtonDisplayed={ setIsLottoGenerateButtonDisplayed }
        isLottoRulesDisplayed={ isLottoRulesDisplayed }

        />

        <ThunderballPicker
        isThunderballRulesDisplayed={ isThunderballRulesDisplayed }
        handleThunderballSelect={ handleThunderballSelect }
        isThunderballMenuButtonDisplayed={ isThunderballMenuButtonDisplayed }
        thunderballNumbers={ thunderballNumbers }
        setThunderballNumbers={ setThunderballNumbers }
        isThunderballGenerateButtonDisplayed={ isThunderballGenerateButtonDisplayed }
        setIsThunderballGenerateButtonDisplayed={ setIsThunderballGenerateButtonDisplayed }
        isThunderballExtraButtonDisplayed={ isThunderballExtraButtonDisplayed }
        setIsThunderballExtraButtonDisplayed={ setIsThunderballExtraButtonDisplayed }
        setThunderballExtraNumber={ setThunderballExtraNumber }
        thunderballExtraNumber={ thunderballExtraNumber }

        />
        
        { lottoNumbers.length > 0 || euroMillionsExtraNumbers.length > 0 || thunderballExtraNumber.length > 0 ? 
        <h2>Good Luck!!</h2> 
        : null }
        { lottoNumbers.length > 0 || euroMillionsExtraNumbers.length > 0 || thunderballExtraNumber.length > 0 ? 
        <button onClick={ () => handleReturnHome() }>Main Menu</button> 
        : null }
        </>

    )
};

export default LotteryContainer