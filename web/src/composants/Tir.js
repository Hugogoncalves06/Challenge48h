import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import '../css/Tir.css'

function Tir() {
    const { unityProvider } = useUnityContext({
      loaderUrl: "./Tir/build/Tir.loader.js",
      dataUrl: "./Tir/build/Tir.data",
      frameworkUrl: "./Tir/build/Tir.framework.js",
      codeUrl: "./Tir/build/Tir.wasm",
    });

    return (
        <div className="Tir">
            <h1>Crusher games</h1>            
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

  export default Tir;