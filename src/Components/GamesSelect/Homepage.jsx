import React, { Component } from 'react';
import coinflip from '../../Assets/coinflip.avif';
import roulette from '../../Assets/roulette.avif';
import crash from '../../Assets/crash.avif';
import dice from '../../Assets/dice.avif';

class Homepage extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <section className='space-y-5'>
                    <div>
                        <div className='flex'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#paint0_linear_4728_6894)"></rect><path d="M17.8108 11.0755C18.5225 11.4864 18.5225 12.5136 17.8108 12.9245L9.27029 17.8554C8.55858 18.2663 7.66895 17.7527 7.66895 16.9308L7.66895 7.06915C7.66895 6.24735 8.55858 5.73371 9.27029 6.14462L17.8108 11.0755Z" fill="#09090B"></path><defs><linearGradient id="paint0_linear_4728_6894" x1="41.6145" y1="-16.5" x2="15.6677" y2="-28.3118" gradientUnits="userSpaceOnUse"><stop offset="0.104167" stop-color="#FF4E4E"></stop><stop offset="0.380208" stop-color="#FFDB5B"></stop><stop offset="0.635417" stop-color="#58F57B"></stop><stop offset="0.916667" stop-color="#4690FF"></stop></linearGradient></defs></svg>
                            <span className='font-sans text-md font-bold px-2'>Games</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 justify-between gap-4 md:grid-cols-4'>
                        <a href="/en/game/coinflip"><img alt="Coinflip banner" loading="lazy" width="3630" height="1816" decoding="async" data-nimg="1" class="rounded-md" src={coinflip} /></a>
                        <a href="/en/game/coinflip"><img alt="Coinflip banner" loading="lazy" width="3630" height="1816" decoding="async" data-nimg="1" class="rounded-md" src={roulette} /></a>
                        <a href="/en/game/coinflip"><img alt="Coinflip banner" loading="lazy" width="3630" height="1816" decoding="async" data-nimg="1" class="rounded-md" src={crash} /></a>
                        <a href="/en/game/coinflip"><img alt="Coinflip banner" loading="lazy" width="3630" height="1816" decoding="async" data-nimg="1" class="rounded-md" src={dice} /></a>
                    </div>
                    <div>
                        <div className='flex'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#003A25"></rect><circle cx="12" cy="12" r="3" fill="#58F57B" class="animate-pulse"></circle></svg>
                            <span className='font-sans text-md font-bold px-2'>Live</span>
                        </div>
                    </div>
                    <div className='relative h-[400px] overflow-y-auto rounded-md border'>
                        <table className='w-full caption-bottom text-sm grid'>
                            <thead className='[&_tr]:border-b sticky top-0 z-10 grid bg-white'>
                                <tr class="text-hsl(240, 4%, 46%) border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted flex w-full"><th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 flex items-center xl:w-[12%] lg:w-[15%] md:w-[8%] sm:w-[9%] w-[16%]">Game</th><th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 items-center xl:w-[8%] lg:w-[10%] md:w-[10%] sm:w-[12%] sm:flex hidden w-0">ID</th><th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 flex items-center xl:w-[19%] lg:w-[8.5%] md:w-[10%] sm:w-[13%] w-[18%]">Player</th><th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 items-center xl:w-[10%] lg:w-[11%] md:w-[12.5%] sm:w-[20%] sm:flex hidden w-0">Bet</th><th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 items-center xl:w-[23%] lg:w-[21%] md:w-[23.5%] md:flex hidden w-0">Choice</th><th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 flex items-center xl:w-[16%] lg:w-[19.5%] md:w-[21%] sm:w-[26%] w-[32%]">Result</th><th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 flex items-center xl:w-[12%] lg:w-[15%] md:w-[15%] sm:w-[20%] w-[34%]">Payout</th></tr>
                            </thead>
                            <tbody className='[&_tr:last-child]:border-0 relative grid h-[5148px] md:h-[1146px]'>
                                <tr class=" translate-y-0 border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted absolute flex w-full" data-index="0" data-state="false">
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center xl:w-[12%] lg:w-[15%] md:w-[8%] sm:w-[9%] w-[16%]">
                                        <a class="flex items-center gap-2 text-poly-yellow" href="/en/game/coinflip">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect width="24" height="24" fill="#FFDB5B" rx="6"></rect><path fill="#3D2F00" fill-rule="evenodd" d="M17.8434 4.14129C17.1126 3.41053 16.1215 3 15.088 3H8.91195c-1.03344 0-2.02456.41053-2.75532 1.14129L4.14129 6.15663C3.41054 6.88739 3 7.87851 3 8.91195V15.088c0 1.0335.41053 2.0246 1.14129 2.7554l2.01534 2.0153C6.88739 20.5895 7.87851 21 8.91195 21H15.088c1.0335 0 2.0246-.4105 2.7554-1.1413l2.0153-2.0153C20.5895 17.1126 21 16.1215 21 15.088V8.91195c0-1.03344-.4105-2.02456-1.1413-2.75532l-2.0153-2.01534ZM6.49911 10.6277c-.76086.7608-.76086 1.9944 0 2.7553l4.13299 4.133c.7609.7608 1.9945.7608 2.7553 0l4.133-4.133c.7609-.7609.7609-1.9945 0-2.7553l-4.133-4.13303c-.7608-.76086-1.9944-.76086-2.7553 0L6.49911 10.6277Z" clip-rule="evenodd"></path></svg>
                                            <span class="hidden lg:block">Coinflip</span>
                                        </a>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 items-center xl:w-[8%] lg:w-[10%] md:w-[10%] sm:w-[12%] sm:flex hidden w-0">
                                        <a target="_blank" href="https://polygonscan.com/tx/0x7680ab4e5826244375647e9ab30cbcad2f948ad016c54c63a771661792279545">78252</a>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center xl:w-[19%] lg:w-[8.5%] md:w-[10%] sm:w-[13%] w-[18%]">
                                        <a href="/en/player/0xC6E37F09f461E0B15844B7054601d488173598B9">
                                            <div class="flex items-center gap-2">
                                                <div class="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-rgb-95-208-243" >🐳</div>
                                                <p class="hidden xl:block">0xC6E3...3598B9</p>
                                            </div>
                                        </a>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 items-center xl:w-[10%] lg:w-[11%] md:w-[12.5%] sm:w-[20%] sm:flex hidden w-0">
                                        <p class="flex items-center gap-2">20 
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#6100FF"></rect><path d="M15.4186 9.6977C15.1744 9.55816 14.8604 9.55816 14.5814 9.6977L12.6279 10.8489L11.3023 11.5814L9.3837 12.7326C9.13952 12.8721 8.82556 12.8721 8.54649 12.7326L7.04649 11.8256C6.80231 11.6861 6.62789 11.407 6.62789 11.093V9.34886C6.62789 9.06979 6.76742 8.79072 7.04649 8.6163L8.54649 7.74421C8.79068 7.60468 9.10463 7.60468 9.3837 7.74421L10.8837 8.65119C11.1279 8.79072 11.3023 9.06979 11.3023 9.38375V10.5349L12.6279 9.76747V8.58142C12.6279 8.30235 12.4884 8.02328 12.2093 7.84886L9.41859 6.20933C9.1744 6.06979 8.86045 6.06979 8.58138 6.20933L5.72091 7.88374C5.44184 8.02328 5.30231 8.30235 5.30231 8.58142V11.8605C5.30231 12.1396 5.44184 12.4186 5.72091 12.593L8.54649 14.2326C8.79068 14.3721 9.10463 14.3721 9.3837 14.2326L11.3023 13.1163L12.6279 12.3489L14.5465 11.2326C14.7907 11.093 15.1046 11.093 15.3837 11.2326L16.8837 12.1047C17.1279 12.2442 17.3023 12.5233 17.3023 12.8372V14.5814C17.3023 14.8605 17.1628 15.1396 16.8837 15.314L15.4186 16.1861C15.1744 16.3256 14.8604 16.3256 14.5814 16.1861L13.0814 15.314C12.8372 15.1744 12.6628 14.8954 12.6628 14.5814V13.4651L11.3372 14.2326V15.3837C11.3372 15.6628 11.4767 15.9419 11.7558 16.1163L14.5814 17.7558C14.8256 17.8954 15.1395 17.8954 15.4186 17.7558L18.2442 16.1163C18.4884 15.9768 18.6628 15.6977 18.6628 15.3837V12.0698C18.6628 11.7907 18.5232 11.5117 18.2442 11.3372L15.4186 9.6977Z" fill="white"></path>
                                        </svg>
                                        </p>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 items-center xl:w-[23%] lg:w-[21%] md:w-[23.5%] md:flex hidden w-0">
                                        <div class="flex gap-2">
                                            <img alt="Tail coin" fetchpriority="high" width="344" height="344" decoding="async" data-nimg="1" class="h-4 w-4 md:h-6 md:w-6 text-transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMiniCoinTail.618b1840.png&amp;w=384&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMiniCoinTail.618b1840.png&amp;w=750&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMiniCoinTail.618b1840.png&amp;w=750&amp;q=75" />
                                            </div>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center xl:w-[16%] lg:w-[19.5%] md:w-[21%] sm:w-[26%] w-[32%]">
                                        <div class="flex gap-2"><img alt="Head coin" fetchpriority="high" width="344" height="344" decoding="async" data-nimg="1" class="text-transparent h-4 w-4 md:h-6 md:w-6" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMiniCoinHead.75984497.png&amp;w=384&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMiniCoinHead.75984497.png&amp;w=750&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMiniCoinHead.75984497.png&amp;w=750&amp;q=75" />
                                        </div>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center xl:w-[12%] lg:w-[15%] md:w-[15%] sm:w-[20%] w-[34%]">
                                        <a class="flex gap-2" target="_blank" href="https://polygonscan.com/tx/0x7680ab4e5826244375647e9ab30cbcad2f948ad016c54c63a771661792279545">
                                            <p class="flex items-center gap-2">0 
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#6100FF"></rect><path d="M15.4186 9.6977C15.1744 9.55816 14.8604 9.55816 14.5814 9.6977L12.6279 10.8489L11.3023 11.5814L9.3837 12.7326C9.13952 12.8721 8.82556 12.8721 8.54649 12.7326L7.04649 11.8256C6.80231 11.6861 6.62789 11.407 6.62789 11.093V9.34886C6.62789 9.06979 6.76742 8.79072 7.04649 8.6163L8.54649 7.74421C8.79068 7.60468 9.10463 7.60468 9.3837 7.74421L10.8837 8.65119C11.1279 8.79072 11.3023 9.06979 11.3023 9.38375V10.5349L12.6279 9.76747V8.58142C12.6279 8.30235 12.4884 8.02328 12.2093 7.84886L9.41859 6.20933C9.1744 6.06979 8.86045 6.06979 8.58138 6.20933L5.72091 7.88374C5.44184 8.02328 5.30231 8.30235 5.30231 8.58142V11.8605C5.30231 12.1396 5.44184 12.4186 5.72091 12.593L8.54649 14.2326C8.79068 14.3721 9.10463 14.3721 9.3837 14.2326L11.3023 13.1163L12.6279 12.3489L14.5465 11.2326C14.7907 11.093 15.1046 11.093 15.3837 11.2326L16.8837 12.1047C17.1279 12.2442 17.3023 12.5233 17.3023 12.8372V14.5814C17.3023 14.8605 17.1628 15.1396 16.8837 15.314L15.4186 16.1861C15.1744 16.3256 14.8604 16.3256 14.5814 16.1861L13.0814 15.314C12.8372 15.1744 12.6628 14.8954 12.6628 14.5814V13.4651L11.3372 14.2326V15.3837C11.3372 15.6628 11.4767 15.9419 11.7558 16.1163L14.5814 17.7558C14.8256 17.8954 15.1395 17.8954 15.4186 17.7558L18.2442 16.1163C18.4884 15.9768 18.6628 15.6977 18.6628 15.3837V12.0698C18.6628 11.7907 18.5232 11.5117 18.2442 11.3372L15.4186 9.6977Z" fill="white"></path>
                                            </svg>
                                            </p>
                                        </a>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </section>
                <section class="mt-5 space-y-5"><div class="flex items-center gap-2"><div class="flex h-6 w-6 items-center justify-center rounded-md border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart4 h-4 w-4"><path d="M3 3v18h18"></path><path d="M13 17V9"></path><path d="M18 17V5"></path><path d="M8 17v-3"></path></svg></div><h3>Analytics</h3></div><div class="hide-scroll-bar flex items-center gap-5 overflow-x-auto"><div class="w-full min-w-48 space-y-2 rounded-md border p-5"><div class="flex items-center gap-1 text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign rounded-md bg-border p-1"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg><h3>Volume</h3></div><div class="text-2xl"><span class="flex items-center gap-1">8,927,995<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#6100FF"></rect><path d="M15.4186 9.6977C15.1744 9.55816 14.8604 9.55816 14.5814 9.6977L12.6279 10.8489L11.3023 11.5814L9.3837 12.7326C9.13952 12.8721 8.82556 12.8721 8.54649 12.7326L7.04649 11.8256C6.80231 11.6861 6.62789 11.407 6.62789 11.093V9.34886C6.62789 9.06979 6.76742 8.79072 7.04649 8.6163L8.54649 7.74421C8.79068 7.60468 9.10463 7.60468 9.3837 7.74421L10.8837 8.65119C11.1279 8.79072 11.3023 9.06979 11.3023 9.38375V10.5349L12.6279 9.76747V8.58142C12.6279 8.30235 12.4884 8.02328 12.2093 7.84886L9.41859 6.20933C9.1744 6.06979 8.86045 6.06979 8.58138 6.20933L5.72091 7.88374C5.44184 8.02328 5.30231 8.30235 5.30231 8.58142V11.8605C5.30231 12.1396 5.44184 12.4186 5.72091 12.593L8.54649 14.2326C8.79068 14.3721 9.10463 14.3721 9.3837 14.2326L11.3023 13.1163L12.6279 12.3489L14.5465 11.2326C14.7907 11.093 15.1046 11.093 15.3837 11.2326L16.8837 12.1047C17.1279 12.2442 17.3023 12.5233 17.3023 12.8372V14.5814C17.3023 14.8605 17.1628 15.1396 16.8837 15.314L15.4186 16.1861C15.1744 16.3256 14.8604 16.3256 14.5814 16.1861L13.0814 15.314C12.8372 15.1744 12.6628 14.8954 12.6628 14.5814V13.4651L11.3372 14.2326V15.3837C11.3372 15.6628 11.4767 15.9419 11.7558 16.1163L14.5814 17.7558C14.8256 17.8954 15.1395 17.8954 15.4186 17.7558L18.2442 16.1163C18.4884 15.9768 18.6628 15.6977 18.6628 15.3837V12.0698C18.6628 11.7907 18.5232 11.5117 18.2442 11.3372L15.4186 9.6977Z" fill="white"></path></svg></span></div></div><div class="w-full min-w-48 space-y-2 rounded-md border p-5"><div class="flex items-center gap-1 text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy rounded-md bg-border p-1"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg><h3>Bets</h3></div><div class="text-2xl"><span class="flex items-center gap-1">1,197,909</span></div></div><div class="w-full min-w-48 space-y-2 rounded-md border p-5"><div class="flex items-center gap-1 text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round rounded-md bg-border p-1"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg><h3>Players</h3></div><div class="text-2xl"><span class="flex items-center gap-1">8,383</span></div></div></div></section>
            </>
        );
    }
}
 
export default Homepage;