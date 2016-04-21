import 'normalize.css';

import React, { Component } from 'react';
import Tiles from './components/Tiles';

import getTileList from './lib/getTileList';
window.getTileList = getTileList;

export default class App extends Component {
  render() {
    return (
      <Tiles />
    );
  }
}
