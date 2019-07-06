import 'normalize.css';

import React, { Component } from 'react';
import Tiles from './components/Tiles';
import _ from 'lodash';

import getTileList from './lib/getTileList';
window.getTileList = getTileList;

export default React.createClass({

  getInitialState () {
    return {
      list: [],
      show: false
    }
  },

  doStuff (evt) {
    this.setState({
      list: this.state.list.concat(this.refs.elfrey.value)
    })
    this.refs.elfrey.value = ''
    evt.preventDefault()
    return false
  },

  show () {
    this.setState({
      show: true
    })
  },

  render () {
    return (
      <div>
        <form onSubmit={this.doStuff}>
          <input ref="elfrey" type="text" />
        </form>
        <button onClick={(evt) => this.doStuff(evt)}>Next</button>
        <br/><br/>
        <button onClick={() => this.show()}>Start</button>
        {
          this.state.show ?
            _.map(_.shuffle(this.state.list), (lol) => {
              return <p>{lol}</p>
            })
            : null
        }
      </div>
    );
  }
})

// export default class App extends Component {
//   render() {
//     return (
//       <Tiles />
//     );
//   }
// }
