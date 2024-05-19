import React, { Component, useState } from 'react';
import GamesSection from './GamesSection';
import fwinlogo from '../Assets/fwin.jpg';
import Footer from './Footer';

class Navbar extends Component {


   constructor(props) {
      super(props);
      this.state = {
         isMenuOpen: false,
         selectedGame : "homepage",
      };
      this.menuRef = React.createRef();
   }

   componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
   }

   componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
   }

   handleClickOutside = (event) => {
      if (this.menuRef.current && !this.menuRef.current.contains(event.target)) {
         this.setState({
            isMenuOpen: false
         });
      }
   }

   toggleMenu = () => {
      this.setState(prevState => ({
         isMenuOpen: !prevState.isMenuOpen
      }));
   }

   handleSelectGame = (game) => {
      this.setState({
          selectedGame: game,
          isMenuOpen: false,
      });
  }

   render() {
      const { isMenuOpen, selectedGame } = this.state;
      return (
         <>
           <div>
            <nav class="bg-white md:fixed md:h-20 dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
               <div class="max-w-screen flex flex-wrap items-center justify-between mx-4 py-4 h-full">
                  <a href="https://fwin.io/" class="flex items-center space-x-3 rtl:space-x-reverse">
                     <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><img width={96} src={fwinlogo} /></span>
                  </a>
                  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                     <button type="button" class="text-white bg-[#3230C4] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                     <button onClick={this.toggleMenu} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                     </button>
                  </div>
               </div>
            </nav>
            {/* Mobile Only!!!! */}
            <aside ref={this.menuRef} id="default-sidebar" class={`fixed top-0 left-0 w-72 h-screen md:hidden transition-transform ${isMenuOpen ? '' : '-translate-x-full'} sm:translate-x-0 bg-gray-50 dark:bg-gray-800 z-50`} aria-label="Sidebar"> 
               <div class="h-full p-8 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                  <ul class="space-y-2 font-medium flex flex-col h-full">
                     <li onClick={() => this.handleSelectGame('homepage')}>
                        <a href="#" class="flex items-center p-2 text-gray-900 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-md border bg-white dark:border-none dark:bg-none"><rect width="24" height="24" rx="6" fill="white"></rect><path d="M19.2818 8.41506L13.8883 3.68672C13.3938 3.24449 12.7537 3 12.0904 3C11.4271 3 10.787 3.24449 10.2926 3.68672L4.89901 8.41506C4.61348 8.67042 4.38563 8.98368 4.23063 9.33398C4.07563 9.68428 3.99704 10.0636 4.00009 10.4466V18.3032C4.00009 19.0185 4.28421 19.7044 4.78995 20.2101C5.29569 20.7159 5.98163 21 6.69686 21H17.4839C18.1992 21 18.8851 20.7159 19.3909 20.2101C19.8966 19.7044 20.1807 19.0185 20.1807 18.3032V10.4376C20.1825 10.0561 20.1033 9.67853 19.9483 9.32988C19.7934 8.98122 19.5662 8.66942 19.2818 8.41506ZM13.8883 19.2022H10.2926V14.7075C10.2926 14.4691 10.3873 14.2405 10.5558 14.0719C10.7244 13.9033 10.9531 13.8086 11.1915 13.8086H12.9893C13.2277 13.8086 13.4564 13.9033 13.625 14.0719C13.7935 14.2405 13.8883 14.4691 13.8883 14.7075V19.2022ZM18.3829 18.3032C18.3829 18.5416 18.2882 18.7703 18.1196 18.9389C17.951 19.1074 17.7224 19.2022 17.4839 19.2022H15.6861V14.7075C15.6861 13.9923 15.402 13.3064 14.8962 12.8006C14.3905 12.2949 13.7046 12.0108 12.9893 12.0108H11.1915C10.4763 12.0108 9.79032 12.2949 9.28457 12.8006C8.77883 13.3064 8.49471 13.9923 8.49471 14.7075V19.2022H6.69686C6.45845 19.2022 6.2298 19.1074 6.06122 18.9389C5.89264 18.7703 5.79793 18.5416 5.79793 18.3032V10.4376C5.7981 10.31 5.82544 10.1839 5.87813 10.0676C5.93083 9.95138 6.00768 9.84768 6.10357 9.76345L11.4971 5.04409C11.6612 4.89998 11.872 4.8205 12.0904 4.8205C12.3088 4.8205 12.5197 4.89998 12.6837 5.04409L18.0772 9.76345C18.1731 9.84768 18.25 9.95138 18.3027 10.0676C18.3554 10.1839 18.3827 10.31 18.3829 10.4376V18.3032Z" fill="#2F3A42"></path></svg>

                           <span class="ms-3">Homepage</span>
                        </a>
                     </li>
                     <li onClick={() => this.handleSelectGame('coinflip')}>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect width="24" height="24" fill="#FFDB5B" rx="6"></rect><path fill="#3D2F00" fill-rule="evenodd" d="M17.8434 4.14129C17.1126 3.41053 16.1215 3 15.088 3H8.91195c-1.03344 0-2.02456.41053-2.75532 1.14129L4.14129 6.15663C3.41054 6.88739 3 7.87851 3 8.91195V15.088c0 1.0335.41053 2.0246 1.14129 2.7554l2.01534 2.0153C6.88739 20.5895 7.87851 21 8.91195 21H15.088c1.0335 0 2.0246-.4105 2.7554-1.1413l2.0153-2.0153C20.5895 17.1126 21 16.1215 21 15.088V8.91195c0-1.03344-.4105-2.02456-1.1413-2.75532l-2.0153-2.01534ZM6.49911 10.6277c-.76086.7608-.76086 1.9944 0 2.7553l4.13299 4.133c.7609.7608 1.9945.7608 2.7553 0l4.133-4.133c.7609-.7609.7609-1.9945 0-2.7553l-4.133-4.13303c-.7608-.76086-1.9944-.76086-2.7553 0L6.49911 10.6277Z" clip-rule="evenodd"></path></svg>
                           <span class="flex-1 ms-3 whitespace-nowrap">Coinflip</span>
                           <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </a>
                     </li>
                     <li onClick={() => this.handleSelectGame('crash')}>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#4690FF"></rect><path d="M19.666 4.83664C19.5887 4.60463 19.3567 4.37262 19.1247 4.29528C15.8766 3.44458 12.5511 4.44996 10.3083 7.0794L9.45761 8.08478L7.36952 7.62076C6.36414 7.23408 5.28143 7.6981 4.81741 8.62614L3.116 11.6423C2.96133 11.8743 2.96133 12.1063 3.116 12.3383C3.19334 12.5703 3.42535 12.725 3.65736 12.8023L6.0548 13.3437C5.82279 13.9624 5.74545 14.5811 5.59078 15.1998C5.59078 15.4318 5.66811 15.6638 5.82279 15.8184L8.22022 18.2159C8.3749 18.3706 8.52957 18.4479 8.76158 18.4479H8.83892C9.53495 18.3706 10.1536 18.2932 10.7723 18.0612L11.2364 20.3813C11.3137 20.6133 11.4684 20.8453 11.7004 20.9227C11.7777 21 11.9324 21 12.0097 21C12.1644 21 12.2417 21 12.3964 20.9227L15.4125 19.2213C16.2632 18.7572 16.7273 17.6745 16.4952 16.6691L15.9539 14.5037L16.8819 13.653C19.434 11.4876 20.5168 8.00744 19.666 4.83664ZM7.83354 10.0182C7.36952 10.6369 6.9055 11.2556 6.59615 11.8743L4.97208 11.4876L6.13213 9.3995C6.28681 9.09016 6.59615 9.01282 6.98284 9.09016L8.29756 9.3995L7.83354 10.0182ZM14.5618 17.8292L12.4737 18.9892L12.1644 17.4425C12.8604 17.1332 13.4791 16.6691 14.0205 16.2051L14.5618 15.6638L14.8712 16.9785C15.0258 17.3652 14.7938 17.7519 14.5618 17.8292ZM15.1032 10.0182C14.4845 10.0182 13.9431 9.47684 13.9431 8.85815C13.9431 8.23945 14.4845 7.6981 15.1032 7.6981C15.7219 7.6981 16.2632 8.23945 16.2632 8.85815C16.2632 9.47684 15.7992 10.0182 15.1032 10.0182Z" fill="#002152"></path></svg>
                           <span class="flex-1 ms-3 whitespace-nowrap">Crash</span>
                           <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </a>
                     </li>
                     <li onClick={() => this.handleSelectGame('dice')}>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#FFA463"></rect><rect x="4" y="4" width="16" height="16" rx="4" stroke="#502100" stroke-width="2" stroke-linejoin="round"></rect><circle cx="12" cy="12" r="1.8" fill="#502100"></circle><circle cx="8.39997" cy="8.39997" r="1.8" fill="#502100"></circle><circle cx="15.6" cy="15.6" r="1.8" fill="#502100"></circle></svg>
                         
                           <span class="flex-1 ms-3 whitespace-nowrap">Dice</span>
                           <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </a>
                     </li>
                     <li onClick={() => this.handleSelectGame('roulette')}>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#FF4E4E"></rect><path d="M20.2934 12.2595C20.287 10.9094 19.7473 9.61662 18.7918 8.6628L13.9453 3.74432C13.4681 3.26771 12.8213 3 12.1469 3C11.4725 3 10.8257 3.26771 10.3486 3.74432L5.50201 8.61784C4.54653 9.57166 4.00678 10.8645 4.00039 12.2145C3.99203 12.8944 4.11903 13.5691 4.37399 14.1994C4.62894 14.8297 5.00676 15.403 5.48543 15.8858C5.9641 16.3687 6.53406 16.7515 7.16211 17.0119C7.79017 17.2724 8.46376 17.4052 9.14367 17.4028C8.91771 18.1785 8.54197 18.9025 8.03768 19.5338C7.92888 19.6677 7.86091 19.8301 7.84187 20.0016C7.82284 20.1731 7.85354 20.3465 7.93033 20.501C8.00711 20.6555 8.12673 20.7846 8.27491 20.873C8.42309 20.9614 8.59357 21.0053 8.76601 20.9995H15.5278C15.698 21.0001 15.8648 20.9524 16.0089 20.8619C16.153 20.7714 16.2685 20.6419 16.342 20.4884C16.4154 20.335 16.4438 20.1638 16.4238 19.9948C16.4039 19.8258 16.3364 19.666 16.2292 19.5338C15.7241 18.903 15.3483 18.1789 15.1232 17.4028C15.8011 17.4099 16.4737 17.2823 17.1019 17.0272C17.73 16.7722 18.3012 16.3949 18.7823 15.9171C19.2634 15.4394 19.6447 14.8709 19.9041 14.2445C20.1635 13.6181 20.2959 12.9465 20.2934 12.2685V12.2595ZM17.542 14.6243C17.1167 15.0431 16.5887 15.3426 16.011 15.4925C15.4332 15.6425 14.8262 15.6377 14.251 15.4785C14.2001 15.4742 14.149 15.4742 14.0981 15.4785H13.9183C13.851 15.4912 13.7848 15.5092 13.7205 15.5325H13.5856C13.5427 15.5605 13.5034 15.5937 13.4687 15.6314C13.4118 15.6656 13.3603 15.708 13.3158 15.7573C13.3014 15.7921 13.2833 15.8252 13.2619 15.8562C13.2224 15.9233 13.1864 15.9923 13.154 16.063C13.1496 16.1169 13.1496 16.171 13.154 16.2249C13.154 16.2788 13.154 16.3328 13.154 16.3867C13.2245 17.3622 13.4745 18.3163 13.8913 19.2011H10.4025C10.8285 18.3577 11.0967 17.4435 11.1938 16.5036C11.1938 16.4497 11.1938 16.3957 11.1938 16.3328C11.1982 16.2789 11.1982 16.2248 11.1938 16.1709C11.1638 16.0945 11.1245 16.022 11.0769 15.9551C11.0623 15.9232 11.0442 15.8931 11.0229 15.8652C10.9838 15.8141 10.9349 15.7713 10.8791 15.7393C10.8424 15.7038 10.8033 15.6707 10.7622 15.6404H10.6363C10.5706 15.6101 10.501 15.5889 10.4295 15.5775H10.2586C10.2048 15.573 10.1507 15.573 10.0968 15.5775C9.50493 15.7316 8.88258 15.7246 8.29438 15.5569C7.70617 15.3893 7.17357 15.0673 6.75186 14.6243C6.12701 13.9955 5.77491 13.146 5.77176 12.2595C5.77038 11.8201 5.85631 11.3847 6.02456 10.9788C6.19281 10.5728 6.44003 10.2043 6.75186 9.89467L11.6074 5.02114C11.7434 4.88877 11.9257 4.8147 12.1154 4.8147C12.3052 4.8147 12.4875 4.88877 12.6235 5.02114L17.542 9.89467C17.8538 10.2043 18.101 10.5728 18.2693 10.9788C18.4375 11.3847 18.5234 11.8201 18.5221 12.2595C18.516 13.1454 18.1644 13.9939 17.542 14.6243Z" fill="#4A0000"></path></svg>
                           <span class="flex-1 ms-3 whitespace-nowrap">Roulette</span>
                           <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </a>
                     </li>
                     <li onClick={() => this.handleSelectGame('slots')}>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="24" height="24" rx="4" fill="#6EE7B7"></rect>
  <rect x="6" y="6" width="4" height="10" rx="1" fill="#2C5282"></rect>
  <rect x="11" y="6" width="4" height="10" rx="1" fill="#2C5282"></rect>
  <rect x="16" y="6" width="4" height="10" rx="1" fill="#2C5282"></rect>
</svg>




                           <span class="flex-1 ms-3 whitespace-nowrap">Slots</span>
                           <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-md border bg-white dark:border-none dark:bg-none"><rect width="24" height="24" rx="6" fill="white"></rect><path d="M20.388 9.795L18.687 9.228L19.488 7.626C19.5692 7.45832 19.5964 7.26957 19.5657 7.0858C19.5351 6.90202 19.4482 6.73229 19.317 6.6L17.4 4.683C17.267 4.54988 17.0956 4.46179 16.91 4.43112C16.7243 4.40044 16.5337 4.42873 16.365 4.512L14.763 5.313L14.196 3.612C14.1361 3.4347 14.0225 3.28047 13.8708 3.17078C13.7192 3.06109 13.5371 3.00139 13.35 3H10.65C10.4613 2.99952 10.2773 3.05834 10.1238 3.16816C9.97041 3.27798 9.85538 3.43324 9.795 3.612L9.228 5.313L7.626 4.512C7.45832 4.4308 7.26957 4.40365 7.0858 4.43427C6.90202 4.4649 6.73229 4.55181 6.6 4.683L4.683 6.6C4.54988 6.73299 4.46179 6.90436 4.43112 7.09001C4.40044 7.27566 4.42873 7.46626 4.512 7.635L5.313 9.237L3.612 9.804C3.4347 9.86388 3.28047 9.97755 3.17078 10.1292C3.06109 10.2808 3.00139 10.4629 3 10.65V13.35C2.99952 13.5387 3.05834 13.7227 3.16816 13.8762C3.27798 14.0296 3.43324 14.1446 3.612 14.205L5.313 14.772L4.512 16.374C4.4308 16.5417 4.40365 16.7304 4.43427 16.9142C4.4649 17.098 4.55181 17.2677 4.683 17.4L6.6 19.317C6.73299 19.4501 6.90436 19.5382 7.09001 19.5689C7.27566 19.5996 7.46626 19.5713 7.635 19.488L9.237 18.687L9.804 20.388C9.86438 20.5668 9.97941 20.722 10.1328 20.8318C10.2863 20.9417 10.4703 21.0005 10.659 21H13.359C13.5477 21.0005 13.7317 20.9417 13.8852 20.8318C14.0386 20.722 14.1536 20.5668 14.214 20.388L14.781 18.687L16.383 19.488C16.5496 19.5671 16.7365 19.5932 16.9184 19.5626C17.1003 19.532 17.2684 19.4463 17.4 19.317L19.317 17.4C19.4501 17.267 19.5382 17.0956 19.5689 16.91C19.5996 16.7243 19.5713 16.5337 19.488 16.365L18.687 14.763L20.388 14.196C20.5653 14.1361 20.7195 14.0225 20.8292 13.8708C20.9389 13.7192 20.9986 13.5371 21 13.35V10.65C21.0005 10.4613 20.9417 10.2773 20.8318 10.1238C20.722 9.97041 20.5668 9.85538 20.388 9.795ZM19.2 12.702L18.12 13.062C17.8716 13.1426 17.6438 13.2762 17.4522 13.4536C17.2607 13.631 17.11 13.848 17.0107 14.0894C16.9114 14.3309 16.8658 14.5911 16.8771 14.8519C16.8883 15.1127 16.9562 15.368 17.076 15.6L17.589 16.626L16.599 17.616L15.6 17.076C15.3692 16.961 15.1164 16.897 14.8587 16.8882C14.601 16.8794 14.3444 16.9261 14.1063 17.0251C13.8682 17.124 13.6541 17.273 13.4786 17.462C13.3031 17.6509 13.1702 17.8753 13.089 18.12L12.729 19.2H11.298L10.938 18.12C10.8574 17.8716 10.7238 17.6438 10.5464 17.4522C10.369 17.2607 10.152 17.11 9.91058 17.0107C9.66912 16.9114 9.40895 16.8658 9.1481 16.8771C8.88726 16.8883 8.63199 16.9562 8.4 17.076L7.374 17.589L6.384 16.599L6.924 15.6C7.04379 15.368 7.11167 15.1127 7.12294 14.8519C7.13422 14.5911 7.08861 14.3309 6.98929 14.0894C6.88996 13.848 6.7393 13.631 6.54775 13.4536C6.3562 13.2762 6.12835 13.1426 5.88 13.062L4.8 12.702V11.298L5.88 10.938C6.12835 10.8574 6.3562 10.7238 6.54775 10.5464C6.7393 10.369 6.88996 10.152 6.98929 9.91058C7.08861 9.66912 7.13422 9.40895 7.12294 9.1481C7.11167 8.88726 7.04379 8.63199 6.924 8.4L6.411 7.401L7.401 6.411L8.4 6.924C8.63199 7.04379 8.88726 7.11167 9.1481 7.12294C9.40895 7.13422 9.66912 7.08861 9.91058 6.98929C10.152 6.88996 10.369 6.7393 10.5464 6.54775C10.7238 6.3562 10.8574 6.12835 10.938 5.88L11.298 4.8H12.702L13.062 5.88C13.1426 6.12835 13.2762 6.3562 13.4536 6.54775C13.631 6.7393 13.848 6.88996 14.0894 6.98929C14.3309 7.08861 14.5911 7.13422 14.8519 7.12294C15.1127 7.11167 15.368 7.04379 15.6 6.924L16.626 6.411L17.616 7.401L17.076 8.4C16.961 8.6308 16.897 8.88361 16.8882 9.14132C16.8794 9.39903 16.9261 9.65562 17.0251 9.89371C17.124 10.1318 17.273 10.3459 17.462 10.5214C17.6509 10.6969 17.8753 10.8298 18.12 10.911L19.2 11.271V12.702ZM12 8.4C11.288 8.4 10.592 8.61114 9.99995 9.00671C9.40793 9.40228 8.94651 9.96453 8.67403 10.6223C8.40156 11.2802 8.33027 12.004 8.46917 12.7023C8.60808 13.4007 8.95095 14.0421 9.45442 14.5456C9.95789 15.0491 10.5993 15.3919 11.2977 15.5308C11.996 15.6697 12.7198 15.5984 13.3777 15.326C14.0355 15.0535 14.5977 14.5921 14.9933 14.0001C15.3889 13.408 15.6 12.712 15.6 12C15.6 11.0452 15.2207 10.1295 14.5456 9.45442C13.8705 8.77929 12.9548 8.4 12 8.4ZM12 13.8C11.644 13.8 11.296 13.6944 11 13.4966C10.704 13.2989 10.4733 13.0177 10.337 12.6888C10.2008 12.3599 10.1651 11.998 10.2346 11.6488C10.304 11.2997 10.4755 10.9789 10.7272 10.7272C10.9789 10.4755 11.2997 10.304 11.6488 10.2346C11.998 10.1651 12.3599 10.2008 12.6888 10.337C13.0177 10.4733 13.2989 10.704 13.4966 11C13.6944 11.296 13.8 11.644 13.8 12C13.8 12.4774 13.6104 12.9352 13.2728 13.2728C12.9352 13.6104 12.4774 13.8 12 13.8Z" fill="#2F3A42"></path></svg>
                           <span class="flex-1 ms-3 whitespace-nowrap">Settings</span>
                           <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </a>
                     </li>
                     <li className='flex-grow'>
                        <div className='flex items-end'>
                        <a href="#" class="flex items-center p-2 my-12 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-warning h-6 min-h-6 w-6 min-w-6 cursor-pointer rounded-md p-[2px] text-foreground hover:bg-border dark:text-foreground"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                           <span class="flex-1 ms-3 whitespace-nowrap">Live Support</span>
                           <span class="animate-ping inline-flex h-3 w-3 rounded-full bg-[#3230C4]">
                              
                           </span>
                           
                        </a>
                        </div>
                     </li>
                  </ul>
               </div>
            </aside>
            {/* Desktop */}
            <aside id="default-sidebar" class="border-r border-gray-200 fixed pt-20 top-0 left-0 z-4 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
               <div class="h-full px-4 py-4 overflow-y-auto ">
               <ul class="space-y-2 font-bold flex flex-col h-full">
                        <li onClick={() => this.handleSelectGame('homepage')}>
                           <a href="#" class="flex items-center p-2 text-gray-900 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-md border bg-white dark:border-none dark:bg-none"><rect width="24" height="24" rx="6" fill="white"></rect><path d="M19.2818 8.41506L13.8883 3.68672C13.3938 3.24449 12.7537 3 12.0904 3C11.4271 3 10.787 3.24449 10.2926 3.68672L4.89901 8.41506C4.61348 8.67042 4.38563 8.98368 4.23063 9.33398C4.07563 9.68428 3.99704 10.0636 4.00009 10.4466V18.3032C4.00009 19.0185 4.28421 19.7044 4.78995 20.2101C5.29569 20.7159 5.98163 21 6.69686 21H17.4839C18.1992 21 18.8851 20.7159 19.3909 20.2101C19.8966 19.7044 20.1807 19.0185 20.1807 18.3032V10.4376C20.1825 10.0561 20.1033 9.67853 19.9483 9.32988C19.7934 8.98122 19.5662 8.66942 19.2818 8.41506ZM13.8883 19.2022H10.2926V14.7075C10.2926 14.4691 10.3873 14.2405 10.5558 14.0719C10.7244 13.9033 10.9531 13.8086 11.1915 13.8086H12.9893C13.2277 13.8086 13.4564 13.9033 13.625 14.0719C13.7935 14.2405 13.8883 14.4691 13.8883 14.7075V19.2022ZM18.3829 18.3032C18.3829 18.5416 18.2882 18.7703 18.1196 18.9389C17.951 19.1074 17.7224 19.2022 17.4839 19.2022H15.6861V14.7075C15.6861 13.9923 15.402 13.3064 14.8962 12.8006C14.3905 12.2949 13.7046 12.0108 12.9893 12.0108H11.1915C10.4763 12.0108 9.79032 12.2949 9.28457 12.8006C8.77883 13.3064 8.49471 13.9923 8.49471 14.7075V19.2022H6.69686C6.45845 19.2022 6.2298 19.1074 6.06122 18.9389C5.89264 18.7703 5.79793 18.5416 5.79793 18.3032V10.4376C5.7981 10.31 5.82544 10.1839 5.87813 10.0676C5.93083 9.95138 6.00768 9.84768 6.10357 9.76345L11.4971 5.04409C11.6612 4.89998 11.872 4.8205 12.0904 4.8205C12.3088 4.8205 12.5197 4.89998 12.6837 5.04409L18.0772 9.76345C18.1731 9.84768 18.25 9.95138 18.3027 10.0676C18.3554 10.1839 18.3827 10.31 18.3829 10.4376V18.3032Z" fill="#2F3A42"></path></svg>
                              <span class="ms-3">Homepage</span>
                           </a>
                        </li>
                        <li onClick={() => this.handleSelectGame('coinflip')}>
                           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect width="24" height="24" fill="#FFDB5B" rx="6"></rect><path fill="#3D2F00" fill-rule="evenodd" d="M17.8434 4.14129C17.1126 3.41053 16.1215 3 15.088 3H8.91195c-1.03344 0-2.02456.41053-2.75532 1.14129L4.14129 6.15663C3.41054 6.88739 3 7.87851 3 8.91195V15.088c0 1.0335.41053 2.0246 1.14129 2.7554l2.01534 2.0153C6.88739 20.5895 7.87851 21 8.91195 21H15.088c1.0335 0 2.0246-.4105 2.7554-1.1413l2.0153-2.0153C20.5895 17.1126 21 16.1215 21 15.088V8.91195c0-1.03344-.4105-2.02456-1.1413-2.75532l-2.0153-2.01534ZM6.49911 10.6277c-.76086.7608-.76086 1.9944 0 2.7553l4.13299 4.133c.7609.7608 1.9945.7608 2.7553 0l4.133-4.133c.7609-.7609.7609-1.9945 0-2.7553l-4.133-4.13303c-.7608-.76086-1.9944-.76086-2.7553 0L6.49911 10.6277Z" clip-rule="evenodd"></path></svg>
                              <span class="ms-3 whitespace-nowrap">Coinflip</span>
                           </a>
                        </li>
                        <li onClick={() => this.handleSelectGame('crash')}>
                           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#4690FF"></rect><path d="M19.666 4.83664C19.5887 4.60463 19.3567 4.37262 19.1247 4.29528C15.8766 3.44458 12.5511 4.44996 10.3083 7.0794L9.45761 8.08478L7.36952 7.62076C6.36414 7.23408 5.28143 7.6981 4.81741 8.62614L3.116 11.6423C2.96133 11.8743 2.96133 12.1063 3.116 12.3383C3.19334 12.5703 3.42535 12.725 3.65736 12.8023L6.0548 13.3437C5.82279 13.9624 5.74545 14.5811 5.59078 15.1998C5.59078 15.4318 5.66811 15.6638 5.82279 15.8184L8.22022 18.2159C8.3749 18.3706 8.52957 18.4479 8.76158 18.4479H8.83892C9.53495 18.3706 10.1536 18.2932 10.7723 18.0612L11.2364 20.3813C11.3137 20.6133 11.4684 20.8453 11.7004 20.9227C11.7777 21 11.9324 21 12.0097 21C12.1644 21 12.2417 21 12.3964 20.9227L15.4125 19.2213C16.2632 18.7572 16.7273 17.6745 16.4952 16.6691L15.9539 14.5037L16.8819 13.653C19.434 11.4876 20.5168 8.00744 19.666 4.83664ZM7.83354 10.0182C7.36952 10.6369 6.9055 11.2556 6.59615 11.8743L4.97208 11.4876L6.13213 9.3995C6.28681 9.09016 6.59615 9.01282 6.98284 9.09016L8.29756 9.3995L7.83354 10.0182ZM14.5618 17.8292L12.4737 18.9892L12.1644 17.4425C12.8604 17.1332 13.4791 16.6691 14.0205 16.2051L14.5618 15.6638L14.8712 16.9785C15.0258 17.3652 14.7938 17.7519 14.5618 17.8292ZM15.1032 10.0182C14.4845 10.0182 13.9431 9.47684 13.9431 8.85815C13.9431 8.23945 14.4845 7.6981 15.1032 7.6981C15.7219 7.6981 16.2632 8.23945 16.2632 8.85815C16.2632 9.47684 15.7992 10.0182 15.1032 10.0182Z" fill="#002152"></path></svg>
                              <span class=" ms-3 whitespace-nowrap">Crash</span>
                              </a>
                        </li>
                        <li onClick={() => this.handleSelectGame('dice')}>
                           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#FFA463"></rect><rect x="4" y="4" width="16" height="16" rx="4" stroke="#502100" stroke-width="2" stroke-linejoin="round"></rect><circle cx="12" cy="12" r="1.8" fill="#502100"></circle><circle cx="8.39997" cy="8.39997" r="1.8" fill="#502100"></circle><circle cx="15.6" cy="15.6" r="1.8" fill="#502100"></circle></svg>
                              <span class="ms-3 whitespace-nowrap">Dice</span>
                             </a>
                        </li>
                        <li onClick={() => this.handleSelectGame('roulette')}>
                           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#FF4E4E"></rect><path d="M20.2934 12.2595C20.287 10.9094 19.7473 9.61662 18.7918 8.6628L13.9453 3.74432C13.4681 3.26771 12.8213 3 12.1469 3C11.4725 3 10.8257 3.26771 10.3486 3.74432L5.50201 8.61784C4.54653 9.57166 4.00678 10.8645 4.00039 12.2145C3.99203 12.8944 4.11903 13.5691 4.37399 14.1994C4.62894 14.8297 5.00676 15.403 5.48543 15.8858C5.9641 16.3687 6.53406 16.7515 7.16211 17.0119C7.79017 17.2724 8.46376 17.4052 9.14367 17.4028C8.91771 18.1785 8.54197 18.9025 8.03768 19.5338C7.92888 19.6677 7.86091 19.8301 7.84187 20.0016C7.82284 20.1731 7.85354 20.3465 7.93033 20.501C8.00711 20.6555 8.12673 20.7846 8.27491 20.873C8.42309 20.9614 8.59357 21.0053 8.76601 20.9995H15.5278C15.698 21.0001 15.8648 20.9524 16.0089 20.8619C16.153 20.7714 16.2685 20.6419 16.342 20.4884C16.4154 20.335 16.4438 20.1638 16.4238 19.9948C16.4039 19.8258 16.3364 19.666 16.2292 19.5338C15.7241 18.903 15.3483 18.1789 15.1232 17.4028C15.8011 17.4099 16.4737 17.2823 17.1019 17.0272C17.73 16.7722 18.3012 16.3949 18.7823 15.9171C19.2634 15.4394 19.6447 14.8709 19.9041 14.2445C20.1635 13.6181 20.2959 12.9465 20.2934 12.2685V12.2595ZM17.542 14.6243C17.1167 15.0431 16.5887 15.3426 16.011 15.4925C15.4332 15.6425 14.8262 15.6377 14.251 15.4785C14.2001 15.4742 14.149 15.4742 14.0981 15.4785H13.9183C13.851 15.4912 13.7848 15.5092 13.7205 15.5325H13.5856C13.5427 15.5605 13.5034 15.5937 13.4687 15.6314C13.4118 15.6656 13.3603 15.708 13.3158 15.7573C13.3014 15.7921 13.2833 15.8252 13.2619 15.8562C13.2224 15.9233 13.1864 15.9923 13.154 16.063C13.1496 16.1169 13.1496 16.171 13.154 16.2249C13.154 16.2788 13.154 16.3328 13.154 16.3867C13.2245 17.3622 13.4745 18.3163 13.8913 19.2011H10.4025C10.8285 18.3577 11.0967 17.4435 11.1938 16.5036C11.1938 16.4497 11.1938 16.3957 11.1938 16.3328C11.1982 16.2789 11.1982 16.2248 11.1938 16.1709C11.1638 16.0945 11.1245 16.022 11.0769 15.9551C11.0623 15.9232 11.0442 15.8931 11.0229 15.8652C10.9838 15.8141 10.9349 15.7713 10.8791 15.7393C10.8424 15.7038 10.8033 15.6707 10.7622 15.6404H10.6363C10.5706 15.6101 10.501 15.5889 10.4295 15.5775H10.2586C10.2048 15.573 10.1507 15.573 10.0968 15.5775C9.50493 15.7316 8.88258 15.7246 8.29438 15.5569C7.70617 15.3893 7.17357 15.0673 6.75186 14.6243C6.12701 13.9955 5.77491 13.146 5.77176 12.2595C5.77038 11.8201 5.85631 11.3847 6.02456 10.9788C6.19281 10.5728 6.44003 10.2043 6.75186 9.89467L11.6074 5.02114C11.7434 4.88877 11.9257 4.8147 12.1154 4.8147C12.3052 4.8147 12.4875 4.88877 12.6235 5.02114L17.542 9.89467C17.8538 10.2043 18.101 10.5728 18.2693 10.9788C18.4375 11.3847 18.5234 11.8201 18.5221 12.2595C18.516 13.1454 18.1644 13.9939 17.542 14.6243Z" fill="#4A0000"></path></svg>
                             
                              <span class="ms-3 whitespace-nowrap">Roulette</span>
                              </a>
                        </li>
                        <li onClick={() => this.handleSelectGame('slots')}>
                           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <rect width="24" height="24" rx="4" fill="#6EE7B7"></rect>
                                 <rect x="6" y="6" width="4" height="10" rx="1" fill="#2C5282"></rect>
                                 <rect x="11" y="6" width="4" height="10" rx="1" fill="#2C5282"></rect>
                                 <rect x="16" y="6" width="4" height="10" rx="1" fill="#2C5282"></rect>
                              </svg>
                              <span class=" ms-3 whitespace-nowrap">Slots</span>
                               </a>
                        </li>
                        <li>
                           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-md border bg-white dark:border-none dark:bg-none"><rect width="24" height="24" rx="6" fill="white"></rect><path d="M20.388 9.795L18.687 9.228L19.488 7.626C19.5692 7.45832 19.5964 7.26957 19.5657 7.0858C19.5351 6.90202 19.4482 6.73229 19.317 6.6L17.4 4.683C17.267 4.54988 17.0956 4.46179 16.91 4.43112C16.7243 4.40044 16.5337 4.42873 16.365 4.512L14.763 5.313L14.196 3.612C14.1361 3.4347 14.0225 3.28047 13.8708 3.17078C13.7192 3.06109 13.5371 3.00139 13.35 3H10.65C10.4613 2.99952 10.2773 3.05834 10.1238 3.16816C9.97041 3.27798 9.85538 3.43324 9.795 3.612L9.228 5.313L7.626 4.512C7.45832 4.4308 7.26957 4.40365 7.0858 4.43427C6.90202 4.4649 6.73229 4.55181 6.6 4.683L4.683 6.6C4.54988 6.73299 4.46179 6.90436 4.43112 7.09001C4.40044 7.27566 4.42873 7.46626 4.512 7.635L5.313 9.237L3.612 9.804C3.4347 9.86388 3.28047 9.97755 3.17078 10.1292C3.06109 10.2808 3.00139 10.4629 3 10.65V13.35C2.99952 13.5387 3.05834 13.7227 3.16816 13.8762C3.27798 14.0296 3.43324 14.1446 3.612 14.205L5.313 14.772L4.512 16.374C4.4308 16.5417 4.40365 16.7304 4.43427 16.9142C4.4649 17.098 4.55181 17.2677 4.683 17.4L6.6 19.317C6.73299 19.4501 6.90436 19.5382 7.09001 19.5689C7.27566 19.5996 7.46626 19.5713 7.635 19.488L9.237 18.687L9.804 20.388C9.86438 20.5668 9.97941 20.722 10.1328 20.8318C10.2863 20.9417 10.4703 21.0005 10.659 21H13.359C13.5477 21.0005 13.7317 20.9417 13.8852 20.8318C14.0386 20.722 14.1536 20.5668 14.214 20.388L14.781 18.687L16.383 19.488C16.5496 19.5671 16.7365 19.5932 16.9184 19.5626C17.1003 19.532 17.2684 19.4463 17.4 19.317L19.317 17.4C19.4501 17.267 19.5382 17.0956 19.5689 16.91C19.5996 16.7243 19.5713 16.5337 19.488 16.365L18.687 14.763L20.388 14.196C20.5653 14.1361 20.7195 14.0225 20.8292 13.8708C20.9389 13.7192 20.9986 13.5371 21 13.35V10.65C21.0005 10.4613 20.9417 10.2773 20.8318 10.1238C20.722 9.97041 20.5668 9.85538 20.388 9.795ZM19.2 12.702L18.12 13.062C17.8716 13.1426 17.6438 13.2762 17.4522 13.4536C17.2607 13.631 17.11 13.848 17.0107 14.0894C16.9114 14.3309 16.8658 14.5911 16.8771 14.8519C16.8883 15.1127 16.9562 15.368 17.076 15.6L17.589 16.626L16.599 17.616L15.6 17.076C15.3692 16.961 15.1164 16.897 14.8587 16.8882C14.601 16.8794 14.3444 16.9261 14.1063 17.0251C13.8682 17.124 13.6541 17.273 13.4786 17.462C13.3031 17.6509 13.1702 17.8753 13.089 18.12L12.729 19.2H11.298L10.938 18.12C10.8574 17.8716 10.7238 17.6438 10.5464 17.4522C10.369 17.2607 10.152 17.11 9.91058 17.0107C9.66912 16.9114 9.40895 16.8658 9.1481 16.8771C8.88726 16.8883 8.63199 16.9562 8.4 17.076L7.374 17.589L6.384 16.599L6.924 15.6C7.04379 15.368 7.11167 15.1127 7.12294 14.8519C7.13422 14.5911 7.08861 14.3309 6.98929 14.0894C6.88996 13.848 6.7393 13.631 6.54775 13.4536C6.3562 13.2762 6.12835 13.1426 5.88 13.062L4.8 12.702V11.298L5.88 10.938C6.12835 10.8574 6.3562 10.7238 6.54775 10.5464C6.7393 10.369 6.88996 10.152 6.98929 9.91058C7.08861 9.66912 7.13422 9.40895 7.12294 9.1481C7.11167 8.88726 7.04379 8.63199 6.924 8.4L6.411 7.401L7.401 6.411L8.4 6.924C8.63199 7.04379 8.88726 7.11167 9.1481 7.12294C9.40895 7.13422 9.66912 7.08861 9.91058 6.98929C10.152 6.88996 10.369 6.7393 10.5464 6.54775C10.7238 6.3562 10.8574 6.12835 10.938 5.88L11.298 4.8H12.702L13.062 5.88C13.1426 6.12835 13.2762 6.3562 13.4536 6.54775C13.631 6.7393 13.848 6.88996 14.0894 6.98929C14.3309 7.08861 14.5911 7.13422 14.8519 7.12294C15.1127 7.11167 15.368 7.04379 15.6 6.924L16.626 6.411L17.616 7.401L17.076 8.4C16.961 8.6308 16.897 8.88361 16.8882 9.14132C16.8794 9.39903 16.9261 9.65562 17.0251 9.89371C17.124 10.1318 17.273 10.3459 17.462 10.5214C17.6509 10.6969 17.8753 10.8298 18.12 10.911L19.2 11.271V12.702ZM12 8.4C11.288 8.4 10.592 8.61114 9.99995 9.00671C9.40793 9.40228 8.94651 9.96453 8.67403 10.6223C8.40156 11.2802 8.33027 12.004 8.46917 12.7023C8.60808 13.4007 8.95095 14.0421 9.45442 14.5456C9.95789 15.0491 10.5993 15.3919 11.2977 15.5308C11.996 15.6697 12.7198 15.5984 13.3777 15.326C14.0355 15.0535 14.5977 14.5921 14.9933 14.0001C15.3889 13.408 15.6 12.712 15.6 12C15.6 11.0452 15.2207 10.1295 14.5456 9.45442C13.8705 8.77929 12.9548 8.4 12 8.4ZM12 13.8C11.644 13.8 11.296 13.6944 11 13.4966C10.704 13.2989 10.4733 13.0177 10.337 12.6888C10.2008 12.3599 10.1651 11.998 10.2346 11.6488C10.304 11.2997 10.4755 10.9789 10.7272 10.7272C10.9789 10.4755 11.2997 10.304 11.6488 10.2346C11.998 10.1651 12.3599 10.2008 12.6888 10.337C13.0177 10.4733 13.2989 10.704 13.4966 11C13.6944 11.296 13.8 11.644 13.8 12C13.8 12.4774 13.6104 12.9352 13.2728 13.2728C12.9352 13.6104 12.4774 13.8 12 13.8Z" fill="#2F3A42"></path></svg>
                              <span class="ms-3 whitespace-nowrap">Settings</span>
                            </a>
                        </li>
                        <li className='flex-grow flex flex-col justify-end'>
                        <div class="flex-grow flex items-end">
                           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-warning h-6 min-h-6 w-6 min-w-6 cursor-pointer rounded-md p-[2px] text-foreground hover:bg-border dark:text-foreground"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                              <span class="flex-1 ms-3 whitespace-nowrap">Live Support</span>
                              <span class="animate-ping inline-flex h-3 w-3 rounded-full bg-[#3230C4]"></span>
                           </a>
                           </div>
                        </li>
                        
                  </ul>
               </div>
            </aside>
            {/* Homepage Content*/}
            <div class="md:ml-60 md:pt-20"> 
            <GamesSection selectedGame={selectedGame}  />
            <Footer />
            </div>
            </div>
            {isMenuOpen && <div className="fixed inset-0 bg-gray-900 opacity-50 z-40" onClick={this.toggleMenu}></div>} 
         </>
      );
   }
}

export default Navbar;