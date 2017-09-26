const electron = require('electron');
const app = electron.app;
const browserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain
let mainWindow

const countdown = require('./countdown')

app.on('ready', _ => {
    mainWindow = new browserWindow({
    height: 420,
    width: 400,
    title: 'Electron Demo'
  });
  console.log('app is running!');
  mainWindow.loadURL(`file://${__dirname}/countdown.html`)

  mainWindow.on('closed', _ => {
    mainWindow = null;
  });

});

ipc.on('countdown-start', _ => {
  countdown(count => {
      console.log('Count: ', count);
      mainWindow.webContents.send('countdown', count);
  });
});
