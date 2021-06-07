import React, { useState } from 'react';
// import EuroMillionsPicker from './EuroMillionsPicker.js';
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
        // window.location.reload( false )
    };

    //function to handle click of EuroMillions button
    const handleEuroMillionsClick = () => {
        let euroMillionsNumbers = []
        let i = 0
            while( i  <= 4 ){
                const randomLotteryNumber = Math.floor(Math.random() * 50) + 1
                //add a '0' to numbers less than 10
                const formattedRandomLotteryNumber = (randomLotteryNumber < 10 ? '0' : '') + randomLotteryNumber;
                if(!euroMillionsNumbers.includes(formattedRandomLotteryNumber)){
                euroMillionsNumbers.push(formattedRandomLotteryNumber) 
                i ++
            //inside the if statement i will only increase when a number is pushed into the lotteryNumbers array
                }
            }

            const sortedEuroMillionsNumbers = euroMillionsNumbers.sort((a, b) => a - b)
            const displayedEuroMillionsNumbers = sortedEuroMillionsNumbers.join(" ")
            console.log("euros:", displayedEuroMillionsNumbers)
            setEuroMillionsNumbers( displayedEuroMillionsNumbers )
            setIsEuroMillionsGenerateButtonDisplayed( false )
            setIsEuroLuckyStarsButtonDisplayed( true )
    };

    const handleEuroMillionsLuckyStarsClick = () => {
        let euroLuckyStars = []
        let i = 0

            while( i <= 1) {
                const randomLuckyStarsNumber = Math.floor(Math.random() * 12) + 1
                const formattedRandomLuckyStarsNumber = (randomLuckyStarsNumber < 10 ? '0' : '') + randomLuckyStarsNumber 
                    if(!euroLuckyStars.includes(formattedRandomLuckyStarsNumber)){
                    euroLuckyStars.push(formattedRandomLuckyStarsNumber) 
                    i ++
                    }    
            }
                const sortedLuckyStarsNumbers = euroLuckyStars.sort((a, b) => a - b)
                const displayedLuckyStarsNumbers = sortedLuckyStarsNumbers.join(" ")
                console.log("euros:", displayedLuckyStarsNumbers)
                setEuroMillionsExtraNumbers( displayedLuckyStarsNumbers )
                setIsEuroLuckyStarsButtonDisplayed( false )
    };

    return(

        <>
        { isEuroMillionsMenuButtonDisplayed || isLottoMenuButtonDisplayed ? 
        <h2>What game are you playing?</h2> 
        : null }

        {/* <EuroMillionsPicker /> */}
        
        <LottoPicker 
        lottoNumbers={ lottoNumbers }
        setLottoNumbers={ setLottoNumbers }
        handleLottoSelect={ handleLottoSelect }
        isLottoGenerateButtonDisplayed={ isLottoGenerateButtonDisplayed }
        isLottoMenuButtonDisplayed={ isLottoMenuButtonDisplayed }
        />
        
        

        { isEuroMillionsMenuButtonDisplayed ? 
        <button className="euro-millions-btn" onClick={ () => handleEuroMillionsSelect() }>Euro Millions</button> 
        : null }
        { isEuroMillionsGenerateButtonDisplayed ? <button className="euro-millions-btn" onClick={ () => handleEuroMillionsClick() }>Generate Euro Millions Numbers</button> : null}
        <h1>{ euroMillionsNumbers }</h1>
        { isEuroLuckyStarsButtonDisplayed ? <button className="euro-millions-btn" onClick={ () => handleEuroMillionsLuckyStarsClick() }>Generate Lucky Star Numbers</button> : null}
        <h1>{euroMillionsExtraNumbers}</h1>
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