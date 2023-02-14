import React from 'react';
import fouras from '../data/fouras.gif';
import '../css/Enigme.css'


function Enigme() {
  return (
    <div className="Enigme">
            <img src={fouras} className="Enigme-fouras" alt="fouras" />
            <p className='texte'>
            Plus j'ai de gardiens,<br/>
            Moins je suis gardé. <br/>
            Moins j'ai de gardiens, <br/>
            Plus je suis gardé. <br/>
            Qui est-il ?    <br/>
            </p>
            <label className="answer" for="answer">Entrer votre réponse </label>
            <input type="text" answer="answer"></input>
     </div>
  );
}

export default Enigme;