import React, {Component} from 'react';
import styled from 'styled-components';
import LED from './LED';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: 50px 50px 50px 50px;
  background: #999;
`;

const Panel = ({props}) => (
  <Grid>
    <LED/>
    <LED/>
    <LED/>
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
