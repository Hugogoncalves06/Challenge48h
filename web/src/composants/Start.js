import '../css/Start.css';
import React from 'react';

const ClosePageButton = () => {
  const closePage = () => {
    window.close();
  };

  return (
    <div class="container">
    <button onClick={closePage}>Start</button>
    </div>
  );
};

function Start() {
  return (
    <div>
      <h1>Cliquer <a href="http://localhost:3000/Enigme"> ici </a> pour commencer</h1>
      <ClosePageButton />
    </div>
  );
}

export default Start;
