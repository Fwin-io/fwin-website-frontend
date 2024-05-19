import React, { Component, useState } from 'react';
import fwinlogo from '../Assets/fwin.jpg';
class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }
    render() {
        return (  
            <div class="px-4 lg:px-8">
                <footer class="flex flex-col gap-8 bg-background pb-6 pt-12">
                    <div class="flex justify-between">
                        <div class="flex gap-2">
                            <img src={fwinlogo} width={220}></img>
                        </div>

                        <div class="flex flex-col gap-2 text-left font-semibold">
                            <a target="_blank" class="text-foreground hover:underline" href="https://twitter.com/PolyflipIO">X / Twitter </a>
                            <a target="_blank" class="text-foreground hover:underline" href="https://discord.com/invite/tJvyxWJjfr">Discord</a>
                            <a target="_blank" class="text-foreground hover:underline" href="https://docs.polyflip.io/">Docs</a>
                        </div>

                    </div>
                    <p class="text-muted-foreground text-left font-sans font-semibold text-gray-500">
                      <a className='text-black font-bold'>Fwin </a> 
                      sets a new standard in online betting with its innovative 
                      <a className='text-black font-bold'> probably fair</a> algorithm, ensuring every game is transparent and unbiased. Experience thrilling gameplay in a secure environment, where cutting-edge technology guarantees integrity at every turn. Join Fwin today for an unmatched betting adventure where fairness meets innovation
                    </p>
                    <span class="mt-4 text-sm text-foreground text-left font-bold">Copyright © 2024 fwin. All rights reserved.</span>
                </footer>
            </div>
          );
    }
}


export default Footer;