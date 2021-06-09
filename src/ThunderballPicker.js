import React from 'react';

const ThunderballPicker = ({
    isThunderballRulesDisplayed,
    handleThunderballSelect,
    isThunderballMenuButtonDisplayed,
    setThunderballNumbers,
    thunderballNumbers,
    setIsThunderballGenerateButtonDisplayed,
    isThunderballGenerateButtonDisplayed,
    isThunderballExtraButtonDisplayed,
    setIsThunderballExtraButtonDisplayed,
    thunderballExtraNumber,
    setThunderballExtraNumber

}) => {
     //function to handle click of Thunderball button
     const handleThunderballClick = () => {
        let thunderballNumbers = []
        let i = 0
            while( i  <= 4 ){
                const randomLotteryNumber = Math.floor(Math.random() * 39) + 1
                //add a '0' to numbers less than 10
                const formattedRandomLotteryNumber = (randomLotteryNumber < 10 ? '0' : '') + randomLotteryNumber;
                if(!thunderballNumbers.includes(formattedRandomLotteryNumber)){
                thunderballNumbers.push(formattedRandomLotteryNumber) 
                i ++
            //inside the if statement i will only increase when a number is pushed into the lotteryNumbers array
                }
            }
            const sortedThunderballNumbers = thunderballNumbers.sort((a, b) => a - b)
            console.log("thunder:", sortedThunderballNumbers)
            setThunderballNumbers( sortedThunderballNumbers )
            setIsThunderballGenerateButtonDisplayed( false )
            setIsThunderballExtraButtonDisplayed( true )
    };

    const displayThunderballNumbers = () => {
        const numbersPicked = thunderballNumbers.map( number => 
            <li className="thunderball-number">{number}</li>
        )
            return <ul>{ numbersPicked }</ul>
    };

    const handleThunderballExtraClick = () => {
                const randomThunderballNumber = Math.floor(Math.random() * 14) + 1
                const formattedRandomThunderballNumber = (randomThunderballNumber < 10 ? '0' : '') + randomThunderballNumber 
                setThunderballExtraNumber( formattedRandomThunderballNumber )
                setIsThunderballExtraButtonDisplayed( false )
    };

    // const displayThunderballExtraNumber = () => {
    //     const thunderball = thunderballExtraNumber
    //     return <ul className="thunderball-number">{ thunderball }</ul>
        
            
    // };

    return(
        <>
        { isThunderballRulesDisplayed ? <div>
            <h2 className="game-title">Thunderball Numbers Generator</h2>
        <h3 className="game-rules">For the Thunderball game, the app will generate 5 five regular numbers from 1 to 39 and one 'Thunderball' number from 1 to 14</h3> 
        </div> : null}
        {/* { isThunderballRulesDisplayed ? <h3 className="game-rules">For the Thunderball game, the app will generate 5 five regular numbers from 1 to 39 and one 'Thunderball' number from 1 to 14</h3> : null} */}
        { isThunderballMenuButtonDisplayed ? <button className="thunderball-btn" onClick={ ()=> handleThunderballSelect()}>Thunderball</button> : null}
        { isThunderballGenerateButtonDisplayed ? <button className="thunderball-btn" onClick={ ()=> handleThunderballClick()} >Generate Thunderball Numbers</button> : null}

        { displayThunderballNumbers() }

        { isThunderballExtraButtonDisplayed ? <button className="thunderball-btn" onClick={ ()=> handleThunderballExtraClick() }>Generate Thunderball</button> : null }
        
        { thunderballExtraNumber.length > 0 ? <p className="thunderball-number">{ thunderballExtraNumber }</p>: null}
        </>
    )

};

export default ThunderballPicker;