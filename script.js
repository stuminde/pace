document.getElementById('convert').addEventListener('click', function() {
    const paceInMiles = parseFloat(document.getElementById('pace').value);
    if (isNaN(paceInMiles) || paceInMiles <= 0) {
        document.getElementById('result').innerText = "Please enter a valid pace.";
        return;
    }
    
    const paceInKm = paceInMiles * 1.60934; // 1 mile = 1.60934 km
    const paceInMinutesPerKm = paceInMiles / paceInKm * paceInMiles; // Convert pace
    document.getElementById('result').innerText = `Your pace is approximately ${paceInMinutesPerKm.toFixed(2)} minutes per kilometer.`;
});
