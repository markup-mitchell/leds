import React, {Component} from 'react';
import styled from 'styled-components';
import LED from './LED';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70px 70px 70px 70px;
  grid-template-rows: 70px 70px 70px 70px;
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
