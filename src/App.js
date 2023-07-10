import React from 'react';

function App() {
  const varijabla1 = 'Coca';
  const varijabla2 = 'Cola';

  const prikaziTekstFunkcija = (prviString, drugiString) => prviString + ' ' + drugiString;

  return (
    <div>
      <p>Ovo je tekst koji se prikazuje na ekranu.</p>
      <br/>
      <p>Tekst + varijabla: {varijabla1}</p>
      <p>{prikaziTekstFunkcija(varijabla1, varijabla2)}</p>
    </div>
  );
}

export default App;