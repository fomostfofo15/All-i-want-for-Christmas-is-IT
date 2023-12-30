const navMenu = document.getElementById('nav__menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*== REMOVE MENU MOBILE ==*/
const navlink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav__menu')
    navMenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction))

/*== DAY COUNTER FOR CHRISMAS==*/
const titleData = document.getElementById('title-data'),
    numberData = document.getElementById('number-data'),
    textData = document.getElementById('text-data'),
    msgChristmas = document.getElementById('msg-christmas')

const christmasCountdown = () => {
    let now = new Date(); // Get today's date
    let currentMonth = now.getMonth() + 1; // Get the current month
    let currentDay = now.getDate(); // Get the current day of the month

    // Calculate the year the next Christmas will be
    let nextChristmasYear = now.getFullYear();
    if (currentMonth === 12 && currentDay > 25) {
        nextChristmasYear += 1;
    }
    let nextChristmasDate = `Dec 25, ${nextChristmasYear} 00:00:00`;
    let christmasDay = new Date(nextChristmasDate);
    let timeLeft = christmasDay - now;

    let days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0;

    // Don't calculate the time left if it is Christmas day
    if (currentMonth !== 12 || (currentMonth === 12 && currentDay !== 25)) {
        days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
        hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
        minutes = Math.floor(timeLeft / 1000 / 60) % 60;
        seconds = Math.floor(timeLeft / 1000) % 60;
    }

    // Show missing days (assuming numberData and textData are valid DOM elements)
    let numberData = document.getElementById('numberData');
    let textData = document.getElementById('textData');

    if (numberData && textData) {
        numberData.innerHTML = days < 10 ? `0${days}` : days;
        textData.innerHTML = 'Days';
    } else {
        console.error("numberData or textData is not a valid DOM element.");
    }
    // Check for 25th and switch to hours countdown
    // Assuming currentDay and hours are properly defined

    if (currentDay === 24) {
        const currentDate = new Date();
        const currentHours = currentDate.getHours();

        if (hours === 0) {
            const currentMinutes = currentDate.getMinutes();
            const remainingMinutes = 1439 - ((currentHours * 60) + currentMinutes);

            if (remainingMinutes > 1) {
                // Update countdown to display remaining minutes
                numberData.innerHTML = remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
                textData.innerHTML = 'Minutes';
            } else {
                // Countdown the last 60 seconds
                const remainingSeconds = 60 - currentDate.getSeconds();
                numberData.innerHTML = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
                textData.innerHTML = 'Seconds';
            }
        } else {
            const remainingHours = 23 - currentHours;
            numberData.innerHTML = remainingHours < 10 ? `0${remainingHours}` : remainingHours;
            textData.innerHTML = 'Hours';
        }
    }
    // Show message on Christmas Day
    if (currentMonth === 12 && currentDay === 25) {
        const titleData = document.getElementById('title-data');
        const msgChristmas = document.getElementById('msg-christmas');
        titleData.innerHTML = ''; // Remove existing content
        msgChristmas.innerHTML = 'Today is Dec 25,Merry Christmas '; // Set content to 'Merry Christmas'
    }
    //Show remaining days & remove Christmas message
    if (currentMonth == 12 && currentDay === 26) {
        titleData.style.display = 'block'
        msgChristmas.style.display = 'none'
    }
}
setInterval(christmasCountdown, 1000)