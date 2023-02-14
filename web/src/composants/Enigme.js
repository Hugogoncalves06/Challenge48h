import React from 'react';
import fouras from '../data/fouras.gif';
import '../css/Enigme.css';

function Enigme() {
  setTimeout(function() {
    document.getElementById("myButton").style.display = "block"}, 5000); // Afficher le bouton après 90 secondes
  return (
    <div className="Enigme">
      <div className="images">
        <img src={fouras} className="Enigme-fouras" alt="fouras" />
      </div>
      <form action="" method="get" name="formSaisie">
      <div className="user">
        <h2 className='texte'>
          Plus j'ai de gardiens,<br />
          Moins je suis gardé. <br />
          Moins j'ai de gardiens, <br />
          Plus je suis gardé. <br />
          Qui est-il ?    <br />
        </h2>
        <label className="answer" for="answer">Entrer votre réponse (un seul mot)</label>
        <input className="falseUsers" type="text" false="answers"></input>
        </div>
        
        <input className="trueUsers" type="text" id="answer"></input>
        <button className="Time" id="myButton" >Regardez plus bas !</button>
        </form>
    </div>
  );
}

document.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if ( (event.key === "Enter") && (document.formSaisie.answer.value != '') ) {
  if(document.formSaisie.answer.value == "secret") {
    document.formSaisie.action = "http://localhost:3000/Snake";
    // alors on envoie le formulaire
    document.formSaisie.submit();
  }
  else {
    // sinon on affiche un message
    alert("Réessayez");
  }
  }
});

function Test() {
  // si la valeur du champ answer est non vide
  
}

export default Enigme;