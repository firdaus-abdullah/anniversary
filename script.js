// 🛑 CHANGE THIS TO YOUR ACTUAL ANNIVERSARY/WEDDING DATE (Year, Month-1, Day)
// Example: May 10, 2018 is new Date(2018, 4, 10) because January is 0, February is 1, etc.
const anniversaryDate = new Date("May 10, 2018 00:00:00").getTime();

// Get the current year and set the next anniversary date
const now = new Date();
const currentYear = now.getFullYear();

// Assuming your anniversary is on the same month/day every year
const nextAnniversaryDate = new Date(now.getMonth() < 4 ? currentYear : currentYear + 1, 4, 10).getTime(); 
// The '4' here is for May (0=Jan, 4=May, 10=Day) - Adjust '4' and '10' to your month/day!


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
            **${years}** Years, **${months}** Months, **${days}** Days, 
            <br>
            **${hours}** Hours, **${minutes}** Minutes, **${seconds}** Seconds
        </p>
    `;

    // --- Next Anniversary Countdown ---
    const diffUntilNext = nextAnniversaryDate - today;
    const daysUntil = Math.ceil(diffUntilNext / oneDay);
    
    if (daysUntil > 0) {
        document.getElementById('days-until').textContent = daysUntil;
    } else {
        document.getElementById('days-until').textContent = "0! It's TODAY! 🎉";
    }
}

// Update the counter every second
setInterval(updateTimeTogether, 1000);

// Run immediately on load
updateTimeTogether();
