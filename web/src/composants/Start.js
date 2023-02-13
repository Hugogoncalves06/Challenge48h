import '../css/Start.css';

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
      <h1>Cliquer <a href="https://localhost:3000/Enigme"> ici </a> pour commencer</h1>
      <ClosePageButton />
    </div>
  );
}

export default Start;
