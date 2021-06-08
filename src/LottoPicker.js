import React from 'react';

const LottoPicker = ( 
    { lottoNumbers, 
    setLottoNumbers,
    handleLottoSelect,
    isLottoGenerateButtonDisplayed,
    isLottoMenuButtonDisplayed } 
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

            const displayedLottoNumbers = sortedLottoNumbers.join(" ")
            setLottoNumbers( displayedLottoNumbers )
    };
    


    return(
        <>
        
        { isLottoMenuButtonDisplayed ? <button className="lotto-btn" onClick={ ()=> handleLottoSelect() }>Lotto</button> : null}
        { isLottoGenerateButtonDisplayed ? <button className="lotto-btn" onClick={ ()=> handleLottoClick() }>Generate Lotto Numbers</button> : null }
        <h1>{ lottoNumbers }</h1>
        </>
    )
};

export default LottoPicker;