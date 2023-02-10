let week_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


document.addEventListener('DOMContentLoaded', () => {

    let giveAwayEnding = document.querySelector('.giveaway-ending');
    let [days, hrs, mins, secs] = document.querySelectorAll('.time-left li span');
    console.log(days, hrs, mins, secs);

    function setupDate() {
        let ending = new Date(Date.now() + 10 * 24 * 3600 * 1000);
        console.log(ending);
        ending.setHours(11);
        ending.setMinutes(30);
        ending.setSeconds(0);
        giveAwayEnding.innerText =
            `Giveaway Ends On ${week_days[ending.getDay()]}, ${ending.getDate()} ${months[ending.getMonth()]} ${ending.getFullYear()} ${ending.getHours()}:${ending.getMinutes()}am`;
        return ending.getTime();
    }
    let ending_time = setupDate();
    let timeTimezoneOffset = -new Date().getTimezoneOffset() * 60 * 1000;
    function updateTimeLeft() {
        let time_left = new Date(ending_time - Date.now() - timeTimezoneOffset);
        days.innerText = Math.floor(time_left.getTime() / (24 * 3600 * 1000));
        if (days.innerText < 10) {
            days.innerText = `0${days.innerText}`;
        }
        let hours = time_left.getHours(),
            minutes = time_left.getMinutes(),
            seconds = time_left.getSeconds();
        hrs.innerText = (hours < 10 ? `0${hours}` : hours);
        mins.innerText = (minutes < 10 ? `0${minutes}` : minutes);
        secs.innerText = (seconds < 10 ? `0${seconds}` : seconds);
    }
    updateTimeLeft();
    setInterval(updateTimeLeft, 1000);
});