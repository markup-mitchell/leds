import React, {Component} from 'react';
import styled from 'styled-components';

const OffBulb = styled.div`
  --dark: ${props=>props.dark};
  --darkest: ${props=>props.darkest};
  width: 30px;
   height: 30px;
   background: radial-gradient(
      farthest-corner at 60% 45%,
      var(--dark),var(--darkest));
   border-radius: 100%;
`;

 const OnBulb = styled.div`
  --bulb: ${props=>props.bulb};
  --glow: ${props=>props.glow};
  width: 30px;
  height: 30px;
  border-radius: 100%;
  filter: brightness(1.3);
  background: radial-gradient(
    var(--glow), var(--bulb), var(--bulb),var(--bulb));
  box-shadow: 0 0 20px var(--bulb);
`

const Surround = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: radial-gradient(
      farthest-corner at 100% 30%,
      #888888, #444444);
  border-radius: 50%;
  box-shadow: ${props=>props.shadow || '0' };
`;

export default class LED extends Component{
  constructor(){
    super();
    this.state = {
      on: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState(this.state.on ? {on: false} : {on: true}); 
    console.log(this.state.on);
  } // this is the shit the Kent C. Dodds video shows how to get rid of with public classes?
  
  render() {
    const on = this.state.on;
    return (
      <div>
      { on ? (
        <Surround>
          <OnBulb bulb={this.props.bulb} glow={this.props.glow} />
        </Surround>
      ):(
        <Surround shadow='-1px 3px 0px #777'>
          <OffBulb 
            bulb={this.props.bulb} 
            dark={this.props.dark}
            darkest={this.props.darkest}
          />
        </Surround>
      )}
        <button onClick={this.toggle}>On/Off</button>
      </div>
    )}
};

