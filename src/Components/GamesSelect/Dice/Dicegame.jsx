import React, { Component } from 'react';


class Dicegame extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
    }

   

    render() {
        

        return (
          <>
            <div
              role="group"
              dir="ltr"
              class="flex items-center justify-center gap-1  w-full md:pt-16 pt-8"
              tabindex="0"
            >
              <div class="grid grid-cols-3 gap-4">
              <button

  aria-pressed="false"
  data-state="off"
  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:text-accent-foreground border-input hover:text-accent-foreground   h-fit w-fit border-0 bg-transparent p-0 hover:bg-transparent data-[state=on]:bg-transparent"
  aria-label="Dice 1"
  tabindex="-1"
  data-radix-collection-item=""
>
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="79"
      height="79"
      rx="19.5"
      fill="white"
      stroke="#808080"
      stroke-width="1"
    ></rect>
    <circle cx="40" cy="40" r="7" fill="black"></circle>
  </svg>
</button>
                <button
                  type="button"
                  aria-pressed="false"
                  data-state="off"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:text-accent-foreground border-input hover:text-accent-foreground dice-choice reset clear h-fit w-fit border-0 bg-transparent p-0 hover:bg-transparent data-[state=on]:bg-transparent"
                  aria-label="Dice 2"
                  tabindex="-1"
                  data-radix-collection-item=""
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="79"
                      height="79"
                      rx="19.5"
                      fill="white"
      stroke="#808080"
      stroke-width="1"
                    ></rect>
                    <circle cx="20" cy="20" r="7"></circle>
                    <circle cx="60" cy="60" r="7"></circle>
                  </svg>
                </button>
                <button
                  type="button"
                  aria-pressed="false"
                  data-state="off"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:text-accent-foreground border-input hover:text-accent-foreground dice-choice reset clear h-fit w-fit border-0 bg-transparent p-0 hover:bg-transparent data-[state=on]:bg-transparent"
                  aria-label="Dice 3"
                  tabindex="-1"
                  data-radix-collection-item=""
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="79"
                      height="79"
                      rx="19.5"
                      fill="white"
      stroke="#808080"
      stroke-width="1"
                    ></rect>
                    <circle cx="40" cy="40" r="7"></circle>
                    <circle cx="60" cy="60" r="7"></circle>
                    <circle cx="20" cy="20" r="7"></circle>
                  </svg>
                </button>
                <button
                  type="button"
                  aria-pressed="false"
                  data-state="off"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:text-accent-foreground border-input hover:text-accent-foreground dice-choice reset clear h-fit w-fit border-0 bg-transparent p-0 hover:bg-transparent data-[state=on]:bg-transparent"
                  aria-label="Dice 4"
                  tabindex="0"
                  data-radix-collection-item=""
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="79"
                      height="79"
                      rx="19.5"
                      fill="white"
      stroke="#808080"
      stroke-width="1"
                    ></rect>
                    <circle cx="20" cy="20" r="7"></circle>
                    <circle cx="60" cy="20" r="7"></circle>
                    <circle cx="60" cy="60" r="7"></circle>
                    <circle cx="20" cy="60" r="7"></circle>
                  </svg>
                </button>
                <button
                  type="button"
                  aria-pressed="false"
                  data-state="off"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:text-accent-foreground border-input hover:text-accent-foreground dice-choice reset clear h-fit w-fit border-0 bg-transparent p-0 hover:bg-transparent data-[state=on]:bg-transparent"
                  aria-label="Dice 5"
                  tabindex="-1"
                  data-radix-collection-item=""
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="79"
                      height="79"
                      rx="19.5"
                      fill="white"
      stroke="#808080"
      stroke-width="1"
                    ></rect>
                    <circle cx="40" cy="40" r="7"></circle>
                    <circle cx="20" cy="20" r="7"></circle>
                    <circle cx="60" cy="20" r="7"></circle>
                    <circle cx="60" cy="60" r="7"></circle>
                    <circle cx="20" cy="60" r="7"></circle>
                  </svg>
                </button>
                <button
                  type="button"
                  aria-pressed="false"
                  data-state="off"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:text-accent-foreground border-input hover:text-accent-foreground dice-choice reset clear h-fit w-fit border-0 bg-transparent p-0 hover:bg-transparent data-[state=on]:bg-transparent"
                  aria-label="Dice 6"
                  tabindex="-1"
                  data-radix-collection-item=""
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="79"
                      height="79"
                      rx="19.5"
                      fill="white"
      stroke="#808080"
      stroke-width="1"
                    ></rect>
                    <circle cx="20" cy="40" r="7"></circle>
                    <circle cx="20" cy="60" r="7"></circle>
                    <circle cx="60" cy="40" r="7"></circle>
                    <circle cx="60" cy="60" r="7"></circle>
                    <circle cx="60" cy="20" r="7"></circle>
                    <circle cx="20" cy="20" r="7"></circle>
                  </svg>
                </button>
              </div>
            </div>
          </>
        );
    }
}

export default Dicegame;