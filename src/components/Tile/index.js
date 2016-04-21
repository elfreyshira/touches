import React, { Component } from 'react';
import Fa from 'react-fa';
import styles from './styles.scss';

export default class Tile extends Component {
  render() {
    return (
      <div className={styles.base} style={{width: this.props.width, height: this.props.height}}>
      <Fa name="frown-o" />
      </div>
    );
  }
}
