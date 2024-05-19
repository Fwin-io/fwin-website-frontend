import React, { Component } from "react";
import './Roulettegame.css';

class Roulettegame extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div
          role="group"
          dir="ltr"
          class="flex items-center justify-center gap-1 roulette-table flex-wrap"
          tabindex="0"
          
        >
          <div class="grid grid-cols-5 grid-rows-[repeat(14,1fr)] gap-1 sm:grid-cols-[repeat(14,1fr)] sm:grid-rows-5">
            <button
              type="button"
              class="cursor-pointer bg-background border-[3px] rounded-lg flex items-center justify-center hover:bg-border text-foreground sm:[writing-mode:unset] [writing-mode:horizontal-tb] r-1st21 col-start-5 row-span-2 row-start-[14] sm:col-start-[14] sm:row-span-1 sm:row-start-1"
            >
              2:1
            </button>
            <button
              type="button"
              class="cursor-pointer bg-background border-[3px] rounded-lg flex items-center justify-center hover:bg-border text-foreground sm:[writing-mode:unset] [writing-mode:horizontal-tb] r-2st21 col-start-4 row-span-2 row-start-[14] sm:col-start-[14] sm:row-span-1 sm:row-start-2"
            >
              2:1
            </button>
            <button
              type="button"
              class="cursor-pointer bg-background border-[3px] rounded-lg flex items-center justify-center hover:bg-border text-foreground sm:[writing-mode:unset] [writing-mode:horizontal-tb] r-3st21 col-start-3 row-span-2 row-start-[14] sm:col-start-[14] sm:row-span-1 sm:row-start-3"
            >
              2:1
            </button>
            <button
              type="button"
              class="cursor-pointer bg-background border-[3px] rounded-lg flex items-center justify-center hover:bg-border text-foreground sm:[writing-mode:unset] [writing-mode:horizontal-tb] r-1st12 col-start-2 row-span-4 row-start-2 sm:col-span-4 sm:col-start-2 sm:col-end-6 sm:row-span-1 sm:row-start-4"
            >
              1st 12
            </button>
            <button
              type="button"
              class="cursor-pointer bg-background border-[3px] rounded-lg flex items-center justify-center hover:bg-border text-foreground sm:[writing-mode:unset] [writing-mode:horizontal-tb] r-2st12 col-start-2 row-span-4 row-start-6 sm:col-span-4 sm:col-start-6 sm:col-end-10 sm:row-span-1 sm:row-start-4"
            >
              2st 12
            </button>
            <button
              type="button"
              class="cursor-pointer bg-background border-[3px] rounded-lg flex items-center justify-center hover:bg-border text-foreground sm:[writing-mode:unset] [writing-mode:horizontal-tb] r-3st12 col-start-2 row-span-4 row-start-10 sm:col-span-4 sm:col-start-10 sm:col-end-[14] sm:row-span-1 sm:row-start-4"
            >
              3st 12
            </button>
            <button
              type="button"
              class="cursor-pointer bg-background border-[3px] rounded-lg flex items-center justify-center hover:bg-border text-foreground sm:[writing-mode:unset] [writing-mode:horizontal-tb] r-1to18 col-start-1 row-span-2 row-start-2 sm:col-span-2 sm:col-start-2 sm:col-end-4 sm:row-span-1 sm:row-start-5"
            >
              1 to 18
            </button>
            <button
              type="button"
              class="cursor-pointer bg-background border-[3px] rounded-lg flex items-center justify-center hover:bg-border text-foreground sm:[writing-mode:unset] [writing-mode:horizontal-tb] r-even col-start-1 row-span-2 row-start-4 sm:col-span-2 sm:col-start-4 sm:col-end-6 sm:row-span-1 sm:row-start-5"
            >
              even
            </button>
            <button
              type="button"
              class="r-red col-start-1 row-span-2 row-start-6 cursor-pointer rounded-lg bg-poly-r-red text-xl hover:bg-poly-red sm:col-span-2 sm:col-start-6 sm:col-end-8 sm:row-span-1 sm:row-start-5"
            ></button>
            <button
              type="button"
              class="r-black col-start-1 row-span-2 row-start-8 cursor-pointer rounded-lg border-[3px] border-poly-r-black bg-poly-r-black dark:border-border dark:hover:bg-border sm:col-span-2 sm:col-start-8 sm:col-end-10 sm:row-span-1 sm:row-start-5"
            ></button>
            <button
              type="button"
              class="cursor-pointer bg-background border-[3px] rounded-lg flex items-center justify-center hover:bg-border text-foreground sm:[writing-mode:unset] [writing-mode:horizontal-tb] r-odd col-start-1 row-span-2 row-start-10 sm:col-span-2 sm:col-start-10 sm:col-end-12 sm:row-span-1 sm:row-start-5"
            >
              odd
            </button>
            <button
              type="button"
              class="cursor-pointer bg-background border-[3px] rounded-lg flex items-center justify-center hover:bg-border text-foreground sm:[writing-mode:unset] [writing-mode:horizontal-tb] r-19to36 col-start-1 row-span-2 row-start-12 sm:col-span-2 sm:col-start-12 sm:col-end-[14] sm:row-span-1 sm:row-start-5"
            >
              19to36
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:[writing-mode:unset] [writing-mode:horizontal-tb] border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full sm:row-span-3 sm:col-start-1 sm:col-span-1 col-span-3 col-start-3 h-full border-poly-r-green bg-poly-r-green hover:bg-poly-r-green data-[state=on]:bg-poly-r-green hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))]"
              aria-label="0"
              tabindex="-1"
              data-radix-collection-item=""
            >
              0
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-5 row-start-2 sm:col-start-2 sm:row-start-1 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="3"
              tabindex="-1"
              data-radix-collection-item=""
            >
              3
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-5 row-start-3 sm:col-start-3 sm:row-start-1 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="6"
              tabindex="-1"
              data-radix-collection-item=""
            >
              6
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-5 row-start-4 sm:col-start-4 sm:row-start-1 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="9"
              tabindex="-1"
              data-radix-collection-item=""
            >
              9
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-5 row-start-5 sm:col-start-5 sm:row-start-1 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="12"
              tabindex="-1"
              data-radix-collection-item=""
            >
              12
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-5 row-start-6 sm:col-start-6 sm:row-start-1 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="15"
              tabindex="-1"
              data-radix-collection-item=""
            >
              15
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-5 row-start-7 sm:col-start-7 sm:row-start-1 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="18"
              tabindex="-1"
              data-radix-collection-item=""
            >
              18
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-5 row-start-8 sm:col-start-8 sm:row-start-1 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="21"
              tabindex="-1"
              data-radix-collection-item=""
            >
              21
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-5 row-start-9 sm:col-start-9 sm:row-start-1 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="24"
              tabindex="-1"
              data-radix-collection-item=""
            >
              24
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-5 row-start-10 sm:col-start-10 sm:row-start-1 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="27"
              tabindex="-1"
              data-radix-collection-item=""
            >
              27
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-5 row-start-11 sm:col-start-11 sm:row-start-1 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="30"
              tabindex="-1"
              data-radix-collection-item=""
            >
              30
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-5 row-start-12 sm:col-start-12 sm:row-start-1 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="33"
              tabindex="-1"
              data-radix-collection-item=""
            >
              33
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-5 row-start-13 sm:col-start-13 sm:row-start-1 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="36"
              tabindex="-1"
              data-radix-collection-item=""
            >
              36
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-4 row-start-2 sm:col-start-2 sm:row-start-2 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="2"
              tabindex="-1"
              data-radix-collection-item=""
            >
              2
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-4 row-start-3 sm:col-start-3 sm:row-start-2 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="5"
              tabindex="-1"
              data-radix-collection-item=""
            >
              5
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-4 row-start-4 sm:col-start-4 sm:row-start-2 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="8"
              tabindex="-1"
              data-radix-collection-item=""
            >
              8
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-4 row-start-5 sm:col-start-5 sm:row-start-2 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="11"
              tabindex="-1"
              data-radix-collection-item=""
            >
              11
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-4 row-start-6 sm:col-start-6 sm:row-start-2 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="14"
              tabindex="-1"
              data-radix-collection-item=""
            >
              14
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-4 row-start-7 sm:col-start-7 sm:row-start-2 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="17"
              tabindex="-1"
              data-radix-collection-item=""
            >
              17
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-4 row-start-8 sm:col-start-8 sm:row-start-2 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="20"
              tabindex="-1"
              data-radix-collection-item=""
            >
              20
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-4 row-start-9 sm:col-start-9 sm:row-start-2 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="23"
              tabindex="-1"
              data-radix-collection-item=""
            >
              23
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-4 row-start-10 sm:col-start-10 sm:row-start-2 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="26"
              tabindex="-1"
              data-radix-collection-item=""
            >
              26
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-4 row-start-11 sm:col-start-11 sm:row-start-2 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="29"
              tabindex="-1"
              data-radix-collection-item=""
            >
              29
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-4 row-start-12 sm:col-start-12 sm:row-start-2 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="32"
              tabindex="-1"
              data-radix-collection-item=""
            >
              32
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-4 row-start-13 sm:col-start-13 sm:row-start-2 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="35"
              tabindex="-1"
              data-radix-collection-item=""
            >
              35
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-3 row-start-2 sm:col-start-2 sm:row-start-3 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="1"
              tabindex="-1"
              data-radix-collection-item=""
            >
              1
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-3 row-start-3 sm:col-start-3 sm:row-start-3 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="4"
              tabindex="-1"
              data-radix-collection-item=""
            >
              4
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-3 row-start-4 sm:col-start-4 sm:row-start-3 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="7"
              tabindex="-1"
              data-radix-collection-item=""
            >
              7
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-3 row-start-5 sm:col-start-5 sm:row-start-3 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="10"
              tabindex="-1"
              data-radix-collection-item=""
            >
              10
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-3 row-start-6 sm:col-start-6 sm:row-start-3 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="13"
              tabindex="-1"
              data-radix-collection-item=""
            >
              13
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-3 row-start-7 sm:col-start-7 sm:row-start-3 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="16"
              tabindex="-1"
              data-radix-collection-item=""
            >
              16
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-3 row-start-8 sm:col-start-8 sm:row-start-3 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="19"
              tabindex="-1"
              data-radix-collection-item=""
            >
              19
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-3 row-start-9 sm:col-start-9 sm:row-start-3 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="22"
              tabindex="-1"
              data-radix-collection-item=""
            >
              22
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-3 row-start-10 sm:col-start-10 sm:row-start-3 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="25"
              tabindex="-1"
              data-radix-collection-item=""
            >
              25
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-3 row-start-11 sm:col-start-11 sm:row-start-3 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="28"
              tabindex="-1"
              data-radix-collection-item=""
            >
              28
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-3 row-start-12 sm:col-start-12 sm:row-start-3 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-black border-poly-r-black dark:border-border hover:bg-poly-r-black data-[state=on]:bg-poly-r-black hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="31"
              tabindex="-1"
              data-radix-collection-item=""
            >
              31
            </button>
            <button
              type="button"
              aria-pressed="false"
              data-state="off"
              class="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 col-start-3 row-start-13 sm:col-start-13 sm:row-start-3 border-[3px] xl:text-xl text-base text-white duration-100 xl:px-3 py-1 lg:px-1 px-2 w-full h-full bg-poly-r-red border-poly-r-red hover:bg-poly-r-red data-[state=on]:bg-poly-r-red hover:border-poly-r-selected dark:hover:border-poly-r-selected hover:text-poly-r-selected data-[state=on]:text-poly-r-selected dark:data-[state=on]:border-poly-r-selected data-[state=on]:border-poly-r-selected data-[state=on]:shadow-[inset_0_0_0_2000px_hsl(var(--poly-roulette-shadow-selected))] sm:[writing-mode:unset] [writing-mode:horizontal-tb]"
              aria-label="34"
              tabindex="-1"
              data-radix-collection-item=""
            >
              34
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Roulettegame;
