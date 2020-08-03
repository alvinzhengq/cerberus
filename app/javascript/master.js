import Vue from "./libs/vue";
const {BrowserWindow} = require('electron').remote;

import setFileServer from './pages/fileServer';
import imageConfig from './pages/imageConfig';

import "../stylesheets/master.css";
import "../stylesheets/nav.css";
import "../stylesheets/fileServer.css";

var app;
var fileSysBase;
var configFileLocation;

if(process.env.DEV == 1){
    fileSysBase = process.cwd() + "/app/"
}else{
    fileSysBase = process.cwd() + "/resources/app/app/"
}

window.onload = () => {
  app = new Vue({
    el: "#app",
    data: {
      currentView: "setFileServer",
      fileServerData: {
        fileServerURL: "",
        fileServerPassword: ""
      },
      configFile: {},
      readMeFile: ""
    }
  });

    setTimeout(() => {
        setFileServer(app, fileSysBase);
        titleBar();
    }, 500);

    navBar();
}

const navBar = () => {
    var currentTransition;

    document.getElementById("setFileServer").onclick = () => {
        app.currentView = "";

        clearTimeout(currentTransition);
        currentTransition = setTimeout(()=>{
            app.currentView = "setFileServer";
            setTimeout(()=>{
                setFileServer(app, fileSysBase);
            }, 500)
        }, 500)
    }

    document.getElementById("vulnConfig").onclick = () => {
        app.currentView = "";

        clearTimeout(currentTransition);
        currentTransition = setTimeout(()=>{
            app.currentView = "vulnConfig";
        }, 500)
    }

    document.getElementById("imageConfig").onclick = () => {
        app.currentView = "";

        clearTimeout(currentTransition);
        currentTransition = setTimeout(()=>{
            app.currentView = "imageConfig";
            setTimeout(()=>{
                imageConfig(app, fileSysBase);
            }, 500)
        }, 500)
    }

    document.getElementById("releasePage").onclick = () => {
        app.currentView = "";

        clearTimeout(currentTransition);
        currentTransition = setTimeout(()=>{
            app.currentView = "releasePage";
        }, 500)
    }
}

const titleBar = () => {
    var currentWindow = BrowserWindow.getFocusedWindow();

    document.getElementById("min").onclick = () => {
        currentWindow.minimize();
    }

    document.getElementById("max").onclick = () => {
        if(currentWindow.isMaximized()){
            currentWindow.unmaximize();
        }else{
            currentWindow.maximize();
        }
    }

    document.getElementById("close").onclick = () => {
        currentWindow.close();
    }
}
