import React from 'react';

const LottoPicker = ( 
    { lottoNumbers, 
    setLottoNumbers,
    handleLottoSelect,
    isLottoGenerateButtonDisplayed,
    isLottoMenuButtonDisplayed, 
    setIsLottoGenerateButtonDisplayed,
    isLottoRulesDisplayed
} 
    ) => {

    const handleLottoClick = () => {
        let lottoNumbers = []
        let i = 0
            while( i  <= 5 ){
                const randomLotteryNumber = Math.floor(Math.random() * 59) + 1
                //add a '0' to numbers less than 10
                const formattedRandomLotteryNumber = (randomLotteryNumber < 10 ? '0' : '') + randomLotteryNumber;
                if(!lottoNumbers.includes(formattedRandomLotteryNumber)){
                lottoNumbers.push(formattedRandomLotteryNumber) 
                i ++
            //inside the if statement i will only increase when a number is pushed into the lotteryNumbers array
                }
            }

            const sortedLottoNumbers = lottoNumbers.sort((a, b) => a - b)
            setLottoNumbers( sortedLottoNumbers )
            setIsLottoGenerateButtonDisplayed( false )
    };

    const displayLottoNumbers = () => {
        const lottoNumbersPicked = lottoNumbers.map( lottoNumber => 
            <li className="lotto-number">{ lottoNumber }</li>
        )
            return <ul>{ lottoNumbersPicked }</ul>
    };
    


    return(
        <>
        { isLottoRulesDisplayed ? <div>
            <h2 className="game-title">Lotto Numbers Generator</h2>
            <h3 className="game-rules" >For the Lotto draw, the app will generate 6 regular numbers from a range of 1 to 59. </h3> 
        </div> : null}
        
        { isLottoMenuButtonDisplayed ? <button className="lotto-btn" onClick={ ()=> handleLottoSelect() }>Lotto</button> : null}
        { isLottoGenerateButtonDisplayed ? <button className="lotto-btn" onClick={ ()=> handleLottoClick() }>Generate Lotto Numbers</button> : null }
        { displayLottoNumbers() }
        </>
    )
};

export default LottoPicker;