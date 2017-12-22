import React, {Component} from 'react';
import styled from 'styled-components';
import LED from './LED';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70px 70px 70px 70px;
  grid-template-rows: 70px 70px 70px 70px;
  background: #999;
`;

const red = '#ff0000';
const orange = '#ffa500';
const darkRed = '#990000';
const darkestRed = '#220000';

const blue = '#1d2bee';
const lightBlue = '#add8e6';
const darkBlue = '#0000ff';
const darkestBlue = '#000022';

const green = '#00cc00';
const lightGreen = '#75f0bb';
const darkGreen = '#009900';
const darkestGreen = '#002200';


const Panel = () => (
  <Grid>
    <LED bulb={red} glow={orange} dark={darkRed} darkest={darkestRed}/>
    <LED bulb={blue} glow={lightBlue} dark={darkBlue} darkest={darkestBlue}/>
    <LED bulb={green} glow={lightGreen} dark={darkGreen} darkest={darkestGreen}/>
    <LED/>
    <LED/>
    <LED/>
    <LED/>
    <LED/>
    <LED/>
    <LED/>
    <LED/>
    <LED/>
  </Grid>
);

export default Panel;
