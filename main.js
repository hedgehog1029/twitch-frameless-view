var electron = require("electron");
let window;

let username = process.argv[2];
electron.app.on("ready", () => {
	window = new electron.BrowserWindow({ frame: false, width: 800, height: 600, movable: true });

	window.loadURL(`https://www.twitch.tv/${username}/popout`);
	window.show();
});
