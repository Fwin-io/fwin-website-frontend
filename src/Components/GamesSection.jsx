import React, { Component, useState } from 'react';
import Homepage from './GamesSelect/Homepage';
import Coinflip from './GamesSelect/Coinflip';
import Crash from './GamesSelect/Crash';
import Dice from './GamesSelect/Dice';
import Roulette from './GamesSelect/Roulette';
import Slots from './GamesSelect/Slots';

class GamesSection extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }
    render() {
        const { selectedGame } = this.props;
        const { isMenuOpen } = this.state;
        return (
            <div className='px-4 py-5 lg:px-8'>
                {selectedGame === 'homepage' && <Homepage />}
                {selectedGame === 'coinflip' && <Coinflip />}
                {selectedGame === 'crash' && <Crash />}
                {selectedGame === 'dice' && <Dice />}
                {selectedGame === 'roulette' && <Roulette />}
                {selectedGame === 'slots' && <Slots />}
            </div>
        );
    }
}


export default GamesSection;