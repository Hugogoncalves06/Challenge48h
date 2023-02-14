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
        <div className="tir">
            <div className='tir'>
                <h1>Shoot game</h1> 
                <Unity 
                unityProvider={unityProvider} 
                style = {{
                    idth: "1101", 
                    height: "515",
                    border: "2px solid black",
                    background: "green"}}
                />
            </div>
        </div> 
    );
  }

  export default Tir;