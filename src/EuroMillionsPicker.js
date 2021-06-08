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
    handleEuroMillionsSelect
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

                const sortedLuckyStarsNumbers = euroLuckyStars.sort((a, b) => a - b).join(" ")
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


    return(
        <>
        { isEuroMillionsMenuButtonDisplayed ? 
        <button className="euro-millions-btn" onClick={ () => handleEuroMillionsSelect() }>Euro Millions</button> 
        : null }

        { isEuroMillionsGenerateButtonDisplayed ? <button className="euro-millions-btn" onClick={ () => handleEuroMillionsClick() }>Generate Euro Millions Numbers</button> : null}

        {/* <h1>{ euroMillionsNumbers }</h1> */}
        { displayEuroMillionsNumbers() }

        { isEuroLuckyStarsButtonDisplayed ? <button className="euro-millions-btn" onClick={ () => handleEuroMillionsLuckyStarsClick() }>Generate Lucky Star Numbers</button> : null}
        
        <h1>{euroMillionsExtraNumbers}</h1>
        </>
    )
};

export default EuroMillionsPicker;

