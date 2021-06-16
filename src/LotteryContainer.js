import React, { useState } from 'react';
import EuroMillionsPicker from './EuroMillionsPicker.js';
import LottoPicker from './LottoPicker.js';
import ThunderballPicker from './ThunderballPicker.js';
import IrishLotteryPicker from './IrishLotteryPicker.js';

const LotteryContainer = () => {

    const [ euroMillionsNumbers, setEuroMillionsNumbers ] = useState( [] )
    const [ euroMillionsExtraNumbers, setEuroMillionsExtraNumbers ] = useState( [] )
    const [ isEuroMillionsMenuButtonDisplayed, setIsEuroMillionsMenuButtonDisplayed ] = useState( true )
    const [ isEuroMillionsGenerateButtonDisplayed, setIsEuroMillionsGenerateButtonDisplayed ] = useState( false )
    const [ isEuroLuckyStarsButtonDisplayed, setIsEuroLuckyStarsButtonDisplayed ] = useState( false )

    const [ lottoNumbers, setLottoNumbers ] = useState( [] )
    const [ isLottoMenuButtonDisplayed, setIsLottoMenuButtonDisplayed ] = useState( true )
    const [ isLottoGenerateButtonDisplayed, setIsLottoGenerateButtonDisplayed ] = useState( false )

    const [ thunderballNumbers, setThunderballNumbers ] = useState( [] )
    const [ thunderballExtraNumber, setThunderballExtraNumber ] = useState( [] )
    const [ isThunderballMenuButtonDisplayed, setIsThunderballMenuButtonDisplayed ] = useState( true )
    const [ isThunderballGenerateButtonDisplayed, setIsThunderballGenerateButtonDisplayed ] = useState( false )
    const [ isThunderballExtraButtonDisplayed, setIsThunderballExtraButtonDisplayed ] = useState( false )

    const [ irishLotteryNumbers, setIrishLotteryNumbers ] = useState( [] )
    const [ isIrishLotteryMenuButtonDisplayed, setIsIrishLotteryMenuButtonDisplayed ] = useState( true )
    const [ isIrishGenerateButtonDisplayed, setIsIrishGenerateButtonDisplayed ] = useState( false )

    const [ isEuroMillionsRulesDisplayed, setIsEuroMillionsRulesDisplayed ] = useState( false )
    const [ isLottoRulesDisplayed, setIsLottoRulesDisplayed ] = useState( false )
    const [ isThunderballRulesDisplayed, setIsThunderballRulesDisplayed ] = useState( false )
    const [ isIrishLotteryRulesDisplayed, setIsIrishLotteryRulesDisplayed ] = useState( false )

    const handleEuroMillionsSelect = () => {

        setIsEuroMillionsMenuButtonDisplayed( false )
        setIsEuroMillionsGenerateButtonDisplayed( true )
        setIsEuroMillionsRulesDisplayed( true )
        setIsLottoMenuButtonDisplayed( false )
        setIsThunderballMenuButtonDisplayed( false )
        setIsIrishLotteryMenuButtonDisplayed( false )
    };

    const handleLottoSelect = () => {
        setIsLottoMenuButtonDisplayed( false ) 
        setIsLottoGenerateButtonDisplayed( true ) 
        setIsLottoRulesDisplayed( true )
        setIsEuroMillionsMenuButtonDisplayed( false )
        setIsThunderballMenuButtonDisplayed( false )
        setIsIrishLotteryMenuButtonDisplayed( false )
    };

    const handleThunderballSelect = () => {
        setIsThunderballMenuButtonDisplayed( false )
        setIsThunderballGenerateButtonDisplayed( true )
        setIsThunderballRulesDisplayed( true ) 
        setIsEuroMillionsMenuButtonDisplayed( false )
        setIsLottoMenuButtonDisplayed( false ) 
        setIsIrishLotteryMenuButtonDisplayed( false ) 
    };

    const handleIrishLotterySelect = () => {
        setIsIrishLotteryMenuButtonDisplayed( false )
        setIsIrishLotteryRulesDisplayed( true ) 
        setIsIrishGenerateButtonDisplayed( true )  
        setIsThunderballMenuButtonDisplayed( false )
        setIsEuroMillionsMenuButtonDisplayed( false )
        setIsLottoMenuButtonDisplayed( false )
        
    };

    const handleReturnHome = () => {
        setEuroMillionsNumbers( [] )
        setEuroMillionsExtraNumbers( [] )
        setLottoNumbers( [] )
        setThunderballNumbers( [] )
        setThunderballExtraNumber( [] )
        setIrishLotteryNumbers( [] )

        setIsEuroMillionsMenuButtonDisplayed( true )
        setIsLottoMenuButtonDisplayed( true )
        setIsThunderballMenuButtonDisplayed( true )
        setIsIrishLotteryMenuButtonDisplayed( true )

        setIsEuroMillionsRulesDisplayed( false )
        setIsLottoRulesDisplayed( false )
        setIsThunderballRulesDisplayed( false )
        setIsIrishLotteryRulesDisplayed( false )

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

        <IrishLotteryPicker
        irishLotteryNumbers={ irishLotteryNumbers }
        setIrishLotteryNumbers={ setIrishLotteryNumbers }
        handleIrishLotterySelect={ handleIrishLotterySelect }
        isIrishLotteryMenuButtonDisplayed={ isIrishLotteryMenuButtonDisplayed }
        isIrishLotteryRulesDisplayed={ isIrishLotteryRulesDisplayed }
        isIrishGenerateButtonDisplayed={ isIrishGenerateButtonDisplayed }
        setIsIrishGenerateButtonDisplayed={ setIsIrishGenerateButtonDisplayed }
        
        />
        
        { lottoNumbers.length > 0 || euroMillionsExtraNumbers.length > 0 || thunderballExtraNumber.length || irishLotteryNumbers.length > 0 ? 
            <div>
                <h2>Good Luck!!</h2> 
                <button onClick={ () => handleReturnHome() }>Main Menu</button> 
            </div> : null}
        </>

    )
};

export default LotteryContainer