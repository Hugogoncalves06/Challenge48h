import React from 'react';
import fouras from '../data/fouras.gif';


function Enigme() {
  return (
    <div className="Enigme">
        <header className="Enigme-Header"></header>
            <img src={fouras} className="Enigme-fouras" alt="fouras" />
            <p>
            Plus j'ai de gardiens,<br/>
            Moins je suis gardé. <br/>
            Moins j'ai de gardiens, <br/>
            Plus je suis gardé. <br/>
            Qui est-il ?    <br/>
            </p>
            <label for="answer">Entrer votre réponse </label>
            <input type="text" answer="answer"></input>
    </div>
    
  );
}

export default Enigme;
