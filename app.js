function updateBatteryStatus(battery){
    document.getElementById('battery-level').textContent = `${Math.round(battery.level * 100)}%`;

    document.getElementById('charging-status').textContent = `${battery.charging ? 'Yes':'No'}`;
}


navigator.getBattery().then(function (battery) {
    console.log(battery);

    updateBatteryStatus(battery)

    battery.addEventListener('chargingchange', function() {
        updateBatteryStatus(battery)
    })

    battery.addEventListener('chargingtimechange', function() {
        updateBatteryStatus(battery)
    })
})