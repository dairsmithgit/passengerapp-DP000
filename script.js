// bindings/variables for doc elements and time displays
let countEl = document.getElementById('countElement');
let count = 0;
let saveEl = document.getElementById('saveEntries');
let localInterval = 0;
let japanInterval = 0;
let laInterval = 0;
let utcInterval = 0;

// functions to increase/decrease the number of observed passengers
function increment() {
    count += 1;
    countEl.textContent = count;

}

function decrement() {
    if (count > 0) {
        count -= 1;
    }
    countEl.textContent = count;
}

// function to save the observed number of passengers for a day or 'trip'
// add feature: store the Date object for the moment the save is made
// make the times of save visible in drop-down for each save
function save() {
    let saveDateLocal = new Date();
    // tried multiple ways to make a newline work with textcontent but to no avail
    let countInfo = ` Passengers: ${count} Time of Entry: ${saveDateLocal} `;
    let newDataEntry = document.createElement('div');

    newDataEntry.textContent = countInfo;
    newDataEntry.classList.add('saveEntry');

    console.log(count);

    saveEl.appendChild(newDataEntry);
    count = 0;
    countEl.textContent = count;
}

// functions to display the local and foreign TODs
function displayLocalTime() {
    let localDate = new Date();
    document.getElementById('localTime').innerHTML =
        localDate.toLocaleString();
}

function displayJapanTime() {
    let japanDate = new Date();
    document.getElementById('japanTime').innerHTML =
        japanDate.toLocaleString('en-US', { timeZone: 'Japan' });
}

function displayLaTime() {
    let laTime = new Date();
    document.getElementById('laTime').innerHTML =
        laTime.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
}

function displayLondonTime() {
    let londonTime = new Date();
    document.getElementById('londonTime').innerHTML =
        londonTime.toLocaleString('en-US', { timeZone: 'Etc/UTC' });
}

// function to refresh Date objects in real time
function displayTimes() {
    setTimeout(() => {
        localInterval = setInterval(displayLocalTime, 0);
        japanInterval = setInterval(displayJapanTime, 0);
        laInterval = setInterval(displayLaTime, 0);
        utcInterval = setInterval(displayLondonTime, 0);
    }, 0);
}

document.onload = displayTimes();