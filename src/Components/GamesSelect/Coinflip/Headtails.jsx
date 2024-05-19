import React, { Component } from 'react';
import coinhead from '../../../Assets/CoinHead.avif';
import cointail from '../../../Assets/CoinTail.avif';
import minicoinhead from '../../../Assets/MiniCoinHead.avif';
import minicointail from '../../../Assets/MiniCoinTail.avif';

class Headtails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCoins: {}, // Initialize with empty object to hold selections for each coin
        };
    }

    handleCoinSelect = (coin, num) => {
        this.setState(prevState => ({
            selectedCoins: {
                ...prevState.selectedCoins,
                [num]: coin, // Store the selection for the specific coin
            },
        }));
    };

    render() {
        const { selectedNumber } = this.props;
        const numbersArray = Array.from({ length: selectedNumber }, (_, index) => index + 1);

        let gridClasses = "grid items-center justify-between gap-x-1 gap-y-4";
        if (selectedNumber === 2) {
            gridClasses += " grid-cols-2";
        } else if (selectedNumber === 3) {
            gridClasses += " grid-cols-2 lg:grid-cols-3";
        } else if (selectedNumber >= 4) {
            gridClasses += " grid-cols-2 lg:grid-cols-4";
        } else {
            gridClasses += " grid-cols-1";
        }

        return (
            <>
                <div id="coin-grid" className={gridClasses}>
                    {numbersArray.map(num => (
                        <div key={num} class="flex flex-col items-center gap-2 text-center">
                            <p class="text-base font-bold">Coin {num}</p>
                            <div class="relative h-[140px] w-[140px]">
                                <img alt="CoinHead" fetchpriority="high" width="140" height="140" decoding="async" data-nimg="1" class="opacity-100 absolute" src={this.state.selectedCoins[num] === 'head' ? coinhead : cointail} />
                            </div>
                            <div role="radiogroup" aria-required="false" dir="ltr" class="flex max-w-md gap-2 pt-2" tabindex="0">
                                <div class={`space-y-2 ${this.state.selectedCoins[num] === 'head' ? 'border-primary bg-black' : 'border-border hover:bg-gray-100'} cursor-pointer rounded-md border p-2 hover:bg-border`} onClick={() => this.handleCoinSelect('head', num)}>
                                    <img alt="Head coin" fetchpriority="high" width="24" height="24" decoding="async" data-nimg="1" src={minicoinhead} />
                                </div>
                                <div class={`space-y-2 ${this.state.selectedCoins[num] === 'tail' ? 'border-primary bg-black' : 'border-border hover:bg-gray-100'} cursor-pointer rounded-md border p-2 hover:bg-border`} onClick={() => this.handleCoinSelect('tail', num)}>
                                    <img alt="Tail coin" fetchpriority="high" width="24" height="24" decoding="async" data-nimg="1" src={minicointail} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default Headtails;

