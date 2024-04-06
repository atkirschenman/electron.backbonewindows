import { app, BrowserWindow } from 'electron';

let buttonWin: BrowserWindow;
let browser1win: BrowserWindow;

function createWebWindow() {
  buttonWin = new BrowserWindow({
    width: 900,  // Set your desired width
    height: 600, // Set your desired height
    x: 900,      // Set your desired x position
    y: 100,      // Set your desired y position
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  buttonWin.loadURL('http://192.168.68.1'); // Replace with your desired URL
}

function createButtonWindow() {
  browser1win = new BrowserWindow({
    width: 300,  // Set your desired width
    height: 600, // Set your desired height
    x: 599,      // Set your desired x position
    y: 100,      // Set your desired y position
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  browser1win.loadURL('http://localhost:3000'); // Replace with your desired URL
}

function loadApp()
{
  createWebWindow();
  createButtonWindow();
}

app.whenReady().then(loadApp);
