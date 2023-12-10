import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [val, setVal] = useState('');
  const [data, setData] = useState([]);
  const [x, setX] = useState('');
  const [qte, setQte] = useState([]);
  const [u, setU] = useState('');
  const [unite, setUnite] = useState([]);
  const [liste, setListe] = useState([]);

  const confirmer = (e) => {
    e.preventDefault();
    setData([...data, val]);
    setQte([...qte, x]);
    setUnite([...unite, u]);
    setVal('');
    setX('');
    setU('');
  };

  const vider =()=>
  {
    setVal("")
    setX("")
    setU("")
  }

  // Mise à jour de la liste lorsque les données changent
  useEffect(() => {
    const newListe = [];
    for (let i = 0; i < data.length; i++) {
      newListe.push(data[i] + ' : ' + qte[i] + ' ' + unite[i]);
    }
    setListe(newListe);
  }, [data, qte, unite]);

  return (
    <>
      <h3>TODO LISTE</h3>
      <br />
      <br />
      <br />
      <form onSubmit={confirmer}>
        <input
          type="text"
          name="objet"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Nom du produit"
        />
        <input
          type="number"
          onChange={(e) => setX(e.target.value)}
          name="qte"
          placeholder="Quantité du produit"
        />
        <select name="unite" onChange={(e) => setU(e.target.value)} id="">
          <option value="">Sélectionner le type de produit</option>
          <option value="kg">kg</option>
          <option value="litre">litre</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>
      <br />
      <br />
      <br />
      <div className="liste">
        <ol>
          {liste.map((item, id) => (
            <li key={id}>{item}
             <button> Supprimer</button>
             <br /><br /><br /></li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
