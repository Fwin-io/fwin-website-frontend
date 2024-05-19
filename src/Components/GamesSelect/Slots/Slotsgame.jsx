import React from 'react';
import './Slotsgame.css';



const RepeatButton = (props) => {
  return (
    <button 
      aria-label='Play again.' 
      id='repeatButton' 
      onClick={props.onClick}>
    </button>
  );
};

const WinningSound = () => {
  return (
    <audio autoPlay="autoplay" className="player" preload="false">
      <source src="https://andyhoffman.codes/random-assets/img/slots/winning_slot.wav" />
    </audio>  
  );
};

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state = {
      position: 0,
      timeRemaining: this.props.timer
    };
    this.start = this.setStartPosition();
    this.speed = Spinner.iconHeight * this.multiplier;
  }

  forceUpdateHandler() {
    this.reset();
  }

  reset() {
    if (this.timer) { 
      clearInterval(this.timer); 
    }  

    this.start = this.setStartPosition();

    this.setState({
      position: this.start,
      timeRemaining: this.props.timer        
    });

    this.timer = setInterval(() => {
      this.tick()
    }, 100);      
  }

  static iconHeight = 188;
  multiplier = Math.floor(Math.random() * (4 - 1) + 1);

  setStartPosition() {
    return ((Math.floor((Math.random() * 9))) * Spinner.iconHeight) * -1;
  }

  moveBackground() {
    this.setState({ 
      position: this.state.position - this.speed,
      timeRemaining: this.state.timeRemaining - 100
    });
  }

  getSymbolFromPosition() {
    let { position } = this.state;
    const totalSymbols = 9;
    const maxPosition = (Spinner.iconHeight * (totalSymbols - 1) * -1);
    let moved = (this.props.timer / 100) * this.multiplier;
    let startPosition = this.start;
    let currentPosition = startPosition;    

    for (let i = 0; i < moved; i++) {              
      currentPosition -= Spinner.iconHeight;

      if (currentPosition < maxPosition) {
        currentPosition = 0;
      }      
    }

    this.props.onFinish(currentPosition);
  }

  tick() {      
    if (this.state.timeRemaining <= 0) {
      clearInterval(this.timer);        
      this.getSymbolFromPosition();    
    } else {
      this.moveBackground();
    }      
  }

  componentDidMount() {
    clearInterval(this.timer);

    this.setState({
      position: this.start,
      timeRemaining: this.props.timer
    });

    this.timer = setInterval(() => {
      this.tick()
    }, 100);
  }

  render() {
    let { position } = this.state;   

    return (            
      <div 
        style={{backgroundPosition: '0px ' + position + 'px'}}
        className="icons"          
      />
    );
  }
}

class Slotsgame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null
    };
    this.finishHandler = this.finishHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ winner: null });
    this.emptyArray();
    this._child1.forceUpdateHandler();
    this._child2.forceUpdateHandler();
    this._child3.forceUpdateHandler();
  }



  static matches = [];

  finishHandler(value) {
    Slotsgame.matches.push(value);  

    if (Slotsgame.matches.length === 3) {
      const { winner } = this.state;
      const first = Slotsgame.matches[0];
      let results = Slotsgame.matches.every(match => match === first);
      this.setState({ winner: results });
    }
  }

  emptyArray() {
    Slotsgame.matches = [];
  }

  render() {
    const { winner } = this.state;
    const getLoser = () => {       
      return Slotsgame.loser[Math.floor(Math.random() * Slotsgame.loser.length)];
    }
    let repeatButton = null;
    let winningSound = null;

    if (winner !== null) {
      repeatButton = <RepeatButton onClick={this.handleClick} />;
    }
    
    if (winner) {
      winningSound = <WinningSound />;
    }

    return (
      <div className="flex flex-col items-center justify-center">
        <div className="spinner-container">
          <Spinner onFinish={this.finishHandler} ref={(child) => { this._child1 = child; }} timer="1000" />
          <Spinner onFinish={this.finishHandler} ref={(child) => { this._child2 = child; }} timer="1400" />
          <Spinner onFinish={this.finishHandler} ref={(child) => { this._child3 = child; }} timer="2200" />
          <div className="gradient-fade"></div>
        </div>
        {repeatButton}
      </div>
    );
  }
}

export default Slotsgame;
