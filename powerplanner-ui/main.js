const { app, BrowserWindow } = require('electron')

const url = require('url');
const path = require('path')

let mainWindow;

function createMainWindow() {

  var mainHtml = url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  });

  var mainIcon = url.format({
    pathname: path.join(__dirname, 'dist/assets/logo.png'),
    slashes: false
  });

  mainWindow = new BrowserWindow({
    width: 1028,
    height: 1024,
    title: 'Power Planner',
    icon: mainIcon
  });

  mainWindow.loadURL(mainHtml);
  mainWindow.setMenu(null);

  mainWindow.on('close', () => {
    mainWindow = null;
  });
}
  
app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});

app.on('ready', createMainWindow);