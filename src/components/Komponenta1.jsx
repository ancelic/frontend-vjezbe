import React, { Component } from 'react'

export default class Komponenta1
 extends Component {
  render() {
    const { ime, godine } = this.props;
    return (
      <div>
        <h2>Komponenta1 je s tipom klasa</h2>
        <p>Ime: {ime}</p>
        <p>Godine: {godine}</p>
      </div>
    );
  }
}
