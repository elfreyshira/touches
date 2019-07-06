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
      page: 'input'
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

  confirm () {
    return (
      <div>
        Is everybody really ready?
        <br/>
        <button onClick={(evt) => this.setState({page: 'show'})}>Yes</button>
        <button onClick={() => this.setState({page:'input'})}>No</button>

      </div>
    )
  },

  render () {
    if (this.state.page === 'input') {
      return (
        <div>
          <form onSubmit={this.doStuff}>
            <input ref="elfrey" type="text" />
          </form>
          <button onClick={(evt) => this.doStuff(evt)}>Next</button>
          <br/><br/>

          <button onClick={() => this.setState({page: 'confirm'})}>Start</button>
        </div>
      );
    }
    else if (this.state.page === 'confirm') {
      return this.confirm();
    }
    else {
      return (
        <div>
          {
            _.map(_.shuffle(this.state.list), (lol) => {
              return <p>{lol}</p>
            })
          }
        </div>
      )
    }
    
  }
})

// export default class App extends Component {
//   render() {
//     return (
//       <Tiles />
//     );
//   }
// }
