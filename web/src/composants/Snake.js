import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import '../css/Tir.css'

function Snake() {
    const { unityProvider } = useUnityContext({
      loaderUrl: "./Snake/build/Snake.loader.js",
      dataUrl: "./Snake/build/Snake.data",
      frameworkUrl: "./Snake/build/Snake.framework.js",
      codeUrl: "./Snake/build/Snake.wasm",
    });

    return (
        <div className="Tir">
            <h1>Snake games</h1>            
            <Unity 
            unityProvider={unityProvider} 
            style = {{
                idth: "1101", 
                height: "515",
                border: "2px solid black",
                background: "green"}}
            />
        </div> 
    );
  }

  export default Snake;