import React from 'react';

const IrishLotteryPicker = ({ 
    irishLotteryNumbers,
    setIrishLotteryNumbers,
    handleIrishLotterySelect,
    isIrishLotteryMenuButtonDisplayed,
    isIrishLotteryRulesDisplayed,
    isIrishGenerateButtonDisplayed,
    setIsIrishGenerateButtonDisplayed,

 }) => {

    const handleIrishLotteryClick = () => {
        let irishLottoNumbers = []
        let i = 0
            while( i  <= 5 ){
                const randomIrishLotteryNumber = Math.floor(Math.random() * 47) + 1
                //add a '0' to numbers less than 10
                const formattedRandomIrishLotteryNumber = (randomIrishLotteryNumber < 10 ? '0' : '') + randomIrishLotteryNumber;
                if(!irishLottoNumbers.includes(formattedRandomIrishLotteryNumber)){
                irishLottoNumbers.push(formattedRandomIrishLotteryNumber) 
                i ++
            //inside the if statement i will only increase when a number is pushed into the lotteryNumbers array
                }
            }

            const sortedIrishLotteryNumbers = irishLottoNumbers.sort((a, b) => a - b)
            setIrishLotteryNumbers( sortedIrishLotteryNumbers )
            setIsIrishGenerateButtonDisplayed( false )
            // setIsIrishLotteryGenerateButtonDisplayed( false )
    };

    const displayIrishLotteryNumbers = () => {
        const irishLotteryNumbersPicked = irishLotteryNumbers.map( irishLotteryNumber => 
            <li className="irish-lotto-number">{ irishLotteryNumber }</li>
        )
            return <ul>{ irishLotteryNumbersPicked }</ul>
    };


    return(
        <>
         { isIrishLotteryRulesDisplayed ? <div>
            <h2 className="game-title">Irish Lottery Numbers Generator</h2>
            <h3 className="game-rules" >For the Irish Lottery draw, the app will generate 6 regular numbers from a range of 1 to 47. </h3> 
        </div> : null}

        { isIrishLotteryMenuButtonDisplayed ? <button className="irish-btn" onClick={()=> handleIrishLotterySelect()}>Irish Lottery</button> : null}
        { isIrishGenerateButtonDisplayed ? <button className="irish-btn" onClick={ ()=> handleIrishLotteryClick() }>Generate Lottery Numbers</button> : null }
        { displayIrishLotteryNumbers() }
        </>
    )

};

export default IrishLotteryPicker;