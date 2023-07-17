import React, { Component } from 'react'
import Komponenta1 from './components/Komponenta1';
import Komponenta2 from "./components/Komponenta2";
import Komponenta3 from './components/Komponenta3';


export default class App extends Component {
  render() {
    const korisnici = [
      { ime: 'Luca Toni', godine: 20 },
      { ime: 'Mario Mandzukic', godine: 25 },
      { ime: 'Elber', godine: 30 }
    ];
    return (
      <div>
      <Komponenta3>
      <Komponenta1 ime={korisnici[0].ime} godine={korisnici[0].godine} />
      <Komponenta2 ime={korisnici[1].ime} godine={korisnici[1].godine} />
      </Komponenta3>  
      </div>
    )
  }
}
