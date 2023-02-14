import React from 'react';
import fouras from '../data/fouras.gif';
import '../css/Enigme.css';

function Enigme() {
  return (
    <div className="Enigme">
      <div className="images">
        <img src={fouras} className="Enigme-fouras" alt="fouras" />
      </div>
      <div className="user">
        <h2 className='texte'>
          Plus j'ai de gardiens,<br />
          Moins je suis gardé. <br />
          Moins j'ai de gardiens, <br />
          Plus je suis gardé. <br />
          Qui est-il ?    <br />
        </h2>
        <label className="answer" for="answer">Entrer votre réponse (un seul mot)</label>
        <input className="falseUsers" type="text" answer="answer"></input>
        </div>
        <input className="trueUsers" type="text" answer="answer"></input>
      
    </div>
  );
}

export default Enigme;