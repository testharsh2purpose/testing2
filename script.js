const scanTime = 0.5; // 500ms
const bluetooth = new webbluetooth.Bluetooth({ scanTime });

(async () => {
    const devices = await bluetooth.getDevices();
    console.log(devices);
    // process.exit() doesn't work in browser environment
})();
