import React from 'react';

const EuroMillionsPicker = ({
    euroMillionsNumbers,
    setEuroMillionsNumbers,
    euroMillionsExtraNumbers,
    setEuroMillionsExtraNumbers,
    isEuroMillionsMenuButtonDisplayed,
    isEuroMillionsGenerateButtonDisplayed,
    setIsEuroMillionsGenerateButtonDisplayed,
    isEuroLuckyStarsButtonDisplayed,
    setIsEuroLuckyStarsButtonDisplayed,
    handleEuroMillionsSelect,
    isEuroMillionsRulesDisplayed
}) => {

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

            // const sortedEuroMillionsNumbers = euroMillionsNumbers.sort((a, b) => a - b)
            // const displayedEuroMillionsNumbers = sortedEuroMillionsNumbers.join(" ")
            // console.log("euros:", displayedEuroMillionsNumbers)
            // setEuroMillionsNumbers( displayedEuroMillionsNumbers )
            // setIsEuroMillionsGenerateButtonDisplayed( false )
            // setIsEuroLuckyStarsButtonDisplayed( true )

            const sortedEuroMillionsNumbers = euroMillionsNumbers.sort((a, b) => a - b)
            console.log("euros:", sortedEuroMillionsNumbers)
            setEuroMillionsNumbers( sortedEuroMillionsNumbers )
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
                // const sortedLuckyStarsNumbers = euroLuckyStars.sort((a, b) => a - b)
                // const displayedLuckyStarsNumbers = sortedLuckyStarsNumbers.join(" ")
                // console.log("euros:", displayedLuckyStarsNumbers)
                // setEuroMillionsExtraNumbers( displayedLuckyStarsNumbers )
                // setIsEuroLuckyStarsButtonDisplayed( false )

                const sortedLuckyStarsNumbers = euroLuckyStars.sort((a, b) => a - b)
                console.log("euros:", sortedLuckyStarsNumbers)
                setEuroMillionsExtraNumbers( sortedLuckyStarsNumbers )
                setIsEuroLuckyStarsButtonDisplayed( false )
    };

    const displayEuroMillionsNumbers = () => {
        const numbersPicked = euroMillionsNumbers.map( number => 
            <li className="euro-millions-number">{number}</li>
        )
            return <ul>{ numbersPicked }</ul>
    };

    const displayEuroMillionsExtraNumbers = () => {
        const luckyStarsPicked = euroMillionsExtraNumbers.map( luckyStar => 
            <li className="euro-millions-number">{ luckyStar }</li>
        )
            return <ul>{ luckyStarsPicked }</ul>
    };


    return(
        <>
        { isEuroMillionsRulesDisplayed ? <h3 className="game-rules">For the EuroMillions game, the app will generate 5 regular numbers from a range of 1 to 50 and 2 Lucky Star numbers of a range of 1 to 12. </h3> : null }
        { isEuroMillionsMenuButtonDisplayed ? 
        <button className="euro-millions-btn" onClick={ () => handleEuroMillionsSelect() }>EuroMillions</button> 
        : null }

        { isEuroMillionsGenerateButtonDisplayed ? <button className="euro-millions-btn" onClick={ () => handleEuroMillionsClick() }>Generate EuroMillions Numbers</button> : null}

        { displayEuroMillionsNumbers() }

        { isEuroLuckyStarsButtonDisplayed ? <button className="euro-millions-btn" onClick={ () => handleEuroMillionsLuckyStarsClick() }>Generate Lucky Star Numbers</button> : null}
        
        { displayEuroMillionsExtraNumbers() }
        </>
    )
};

export default EuroMillionsPicker;

