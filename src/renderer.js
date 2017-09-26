const electron = require('electron');
const ipc = electron.ipcRenderer

document.getElementById('startTimer').addEventListener('click', _ => {
    ipc.send('countdown-start');
});

ipc.on('countdown', (evt, count) => {
  document.getElementById('theCount').innerHTML = count;
});
