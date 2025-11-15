// 🛑 UPDATED: Firdaus & Fazlin's wedding on November 2, 2018
// (Year, Month-1, Day) -> 2018, 10 (November), 2
const anniversaryDate = new Date("November 2, 2018 00:00:00").getTime();

// Get the current year and set the next anniversary date
const now = new Date();
const currentYear = now.getFullYear();

// Set the next anniversary date (November 2)
// 10 is November (0=Jan, 10=Nov, 2=Day)
const nextAnniversaryDate = new Date(
    now.getMonth() < 10 || (now.getMonth() === 10 && now.getDate() < 2) 
    ? currentYear 
    : currentYear + 1, 
    10, 
    2
).getTime(); 


function updateTimeTogether() {
    const today = new Date().getTime();
    const difference = today - anniversaryDate;

    // Time calculations in milliseconds
    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneYear = oneDay * 365.25; // Accounting for leap years

    // Calculate time components
    const years = Math.floor(difference / oneYear);
    const months = Math.floor((difference % oneYear) / (oneDay * 30.4375)); // Average month length
    const days = Math.floor((difference % (oneDay * 30.4375)) / oneDay);
    const hours = Math.floor((difference % oneDay) / oneHour);
    const minutes = Math.floor((difference % oneHour) / oneMinute);
    const seconds = Math.floor((difference % oneMinute) / oneSecond);

    document.getElementById('time-together').innerHTML = `
        <p>
            ${years} Years, ${months} Months, ${days} Days, 
            <br>
            ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds
        </p>
    `;

    // --- Next Anniversary Countdown ---
    const diffUntilNext = nextAnniversaryDate - today;
    const oneDayInMs = 1000 * 60 * 60 * 24;
    const daysUntil = Math.ceil(diffUntilNext / oneDayInMs);
    
    if (daysUntil > 1) {
        document.getElementById('days-until').textContent = daysUntil;
    } else if (daysUntil === 1) {
        document.getElementById('days-until').textContent = "1 day!";
    } else if (daysUntil === 0) {
        document.getElementById('days-until').textContent = "0! It's TODAY! 🎉";
    } else {
        // If the date has passed but the next year hasn't been set yet (shouldn't happen with the logic above)
        document.getElementById('days-until').textContent = "Loading...";
    }
}

// Update the counter every second
setInterval(updateTimeTogether, 1000);

// Run immediately on load
updateTimeTogether();
