import React, { useState } from 'react';
import EuroMillionsPicker from './EuroMillionsPicker.js';
import LottoPicker from './LottoPicker.js';

const LotteryContainer = () => {

    const [ euroMillionsNumbers, setEuroMillionsNumbers ] = useState( [] )
    const [ euroMillionsExtraNumbers, setEuroMillionsExtraNumbers ] = useState( [] )
    const [ isEuroMillionsMenuButtonDisplayed, setIsEuroMillionsMenuButtonDisplayed ] = useState( true )
    const [ isEuroMillionsGenerateButtonDisplayed, setIsEuroMillionsGenerateButtonDisplayed ] = useState( false )
    const [ isEuroLuckyStarsButtonDisplayed, setIsEuroLuckyStarsButtonDisplayed ] = useState( false )

    const [ lottoNumbers, setLottoNumbers ] = useState( [] )
    const [ isLottoMenuButtonDisplayed, setIsLottoMenuButtonDisplayed ] = useState( true )
    const [ isLottoGenerateButtonDisplayed, setIsLottoGenerateButtonDisplayed ] = useState( false )

    const handleEuroMillionsSelect = () => {
        setIsEuroMillionsMenuButtonDisplayed( false )
        setIsEuroMillionsGenerateButtonDisplayed( true ) 
        setIsLottoMenuButtonDisplayed( false )
        setIsLottoGenerateButtonDisplayed( false ) 
    };

    const handleLottoSelect = () => {
        setIsEuroMillionsMenuButtonDisplayed( false )
        setIsEuroMillionsGenerateButtonDisplayed( false ) 
        setIsLottoMenuButtonDisplayed( false ) 
        setIsLottoGenerateButtonDisplayed( true ) 
    };

    const handleReturnHome = () => {
        setEuroMillionsNumbers( [] )
        setEuroMillionsExtraNumbers( [] )
        setLottoNumbers( [] )
        setIsLottoGenerateButtonDisplayed( false )
        setIsEuroMillionsMenuButtonDisplayed( true )
        setIsLottoMenuButtonDisplayed( true )
    };

    return(

        <>
        { isEuroMillionsMenuButtonDisplayed || isLottoMenuButtonDisplayed ? 
        <h2>What game are you playing?</h2> 
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

        />
        
        <LottoPicker 
        lottoNumbers={ lottoNumbers }
        setLottoNumbers={ setLottoNumbers }
        handleLottoSelect={ handleLottoSelect }
        isLottoGenerateButtonDisplayed={ isLottoGenerateButtonDisplayed }
        isLottoMenuButtonDisplayed={ isLottoMenuButtonDisplayed }
        />
        
        { lottoNumbers.length > 0 || euroMillionsExtraNumbers.length > 0 ? 
        <h2>Good Luck!!</h2> 
        : null }
        { lottoNumbers.length > 0 || euroMillionsExtraNumbers.length > 0 ? 
        <button onClick={ () => handleReturnHome() }>Main Menu</button> 
        : null }
        </>

    )
};

export default LotteryContainer