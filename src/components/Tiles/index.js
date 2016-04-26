import React, { Component } from 'react';
import Tile from '../Tile';
import getOptimalTiling from '../../lib/layout/getOptimalTiling';
import _ from 'lodash';

const fixtures = {
  numberOfTiles: 9
};

export default class Tiles extends Component {

  componentWillMount() {
    const {tilePerRow, tilePerColumn, tileWidth, tileHeight} = getOptimalTiling(
      window.innerWidth, window.innerHeight, fixtures.numberOfTiles);

    this.tilePerRow = tilePerRow;
    this.tilePerColumn = tilePerColumn;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
  }

  render() {
    return (
      <div>
      {_.times(this.tilePerColumn, (rowIdx) => {
        return (
          <div key={rowIdx}>
          {_.times(this.tilePerRow, (colIdx) => {
            return (
              <Tile
              key={colIdx}
              width={this.tileWidth}
              height={this.tileHeight}
              />
              );
          })}
          </div>
        );
      })}
      </div>
    );
  }
}
