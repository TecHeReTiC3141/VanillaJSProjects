let week_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


document.addEventListener('DOMContentLoaded', () => {

    let giveAwayEnding = document.querySelector('.giveaway-ending');
    let timeLeft = document.querySelector('.time-left');
    let [days, hrs, mins, secs] = timeLeft.querySelectorAll('li span');
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
    console.log(ending_time);
    let timeTimezoneOffset = -new Date().getTimezoneOffset() * 60 * 1000;

    let formatValue = (value => {
        return (value < 10 ? `0${value}` : value);
    });

    function updateTimeLeft() {
        if (ending_time - Date.now() - timeTimezoneOffset < 0) {
            clearInterval(updateInt);
            timeLeft.replaceChildren();
            let expired = document.createElement('h4');
            expired.classList.add('expired');
            expired.innerText = 'Sorry, this giveaway has expired';
            timeLeft.appendChild(expired);
        }
        let time_left = new Date(ending_time - Date.now() - timeTimezoneOffset);
        console.log(time_left);

        let days = Math.floor(time_left.getTime() / (24 * 3600 * 1000)),
            hours = time_left.getHours(),
            minutes = time_left.getMinutes(),
            seconds = time_left.getSeconds();
        let parts = [days, hours, minutes, seconds];
        [days, hrs, mins, secs].forEach((item, index) => {
            item.innerText = formatValue(parts[index]);
        });
    }
    updateTimeLeft();
    let updateInt = setInterval(updateTimeLeft, 1000);
});