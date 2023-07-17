import React from 'react'

export default function Komponenta2(props) {
    const { ime, godine } = props;

    return (
      <div>
        <h2>Komponenta2 je tipa funkcija kratica za pocetno pisanje je rcf</h2>
        <p>Ime: {ime}</p>
        <p>Godine: {godine}</p>
      </div>
    );
  }
