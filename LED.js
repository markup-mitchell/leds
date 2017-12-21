import React, {Component} from 'react';
import styled from 'styled-components';

const Bulb = styled.div`
 width: 30px;
   height: 30px;
   background: radial-gradient(
      farthest-corner at 60% 45%,
      #990000,#220000);
   border-radius: 100%;
`;

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
  box-shadow: -1px 3px 1px #444;
`;

const LED = function() {
  let state = 'off';
  return (
  <Surround>
    <Bulb/>
  </Surround>
  )
};

export default LED;
