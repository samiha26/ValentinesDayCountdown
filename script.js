// Set the date for Valentine's Day
const valentinesDay = new Date('2024-02-14T00:00:00').getTime();

// Array of surprises for each day
const surprises = [
    "url(images/1.gif)", 
    "url('images/2.gif')",
    "url(images/3.gif)", 
    "url('images/4.gif')",
    "url(images/5.gif)", 
    "url('images/6.gif')",
    "url(images/7.gif)", 
    "url('images/8.gif')",
    "url(images/9.gif)", 
    "url('images/10.gif')",
    "url(images/11.gif)", 
    "url('images/12.gif')",
];
// Update the countdown every second
const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = valentinesDay - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Display an image with short text for each day leading up to Valentine's Day
    const content = [
        { image: 'images/day0.jpg', text: 'Happy Valentine\'s Day Love! 💖\n I LOVE YOU!!!' },
        { image: 'images/day1.jpg', text: 'Only 1Day left!! Remember this day?\n KK12 concert ahahaha!' },
        { image: 'images/day2.jpg', text: 'Late night walks with you are some of \nmy core memories! Will always cheerish them💖' },
        { image: 'images/day3.jpg', text: 'First solo trip together!\nLook we are twinning! *O*' },
        { image: 'images/day4.jpg', text: 'Crazy, Silly, Weird US huhuhu' },
        { image: 'images/day5.jpg', text: 'Sunset time! Will you watch\nsunset with me today?\n Let\'s go on a Sunset Date today!\n Wear your brightest happiest cloth!\n See you around 4pm!' },
        { image: 'images/day6.jpg', text: 'I love exploring new places with you!\n You are my happy place💖' },
        { image: 'images/day7.jpg', text: 'Will you be my Valentine? \nP.S: I\'m eagerly waiting for you to ask me too .-.' },
        { image: 'images/day8.jpg', text: 'Let me be your queen forever and\nlet\'s build our own Palace together...' },
        { image: 'images/day9.jpg', text: 'Haha COVID Time! \nWe are a part of our future children\'s \nglobal pandemic history ahahahah!\nI feel old lol :P' },
        { image: 'images/day10.jpeg', text: 'Get ready to be my baby\'s dad soon!\n The clock is ticking.. \ntick tock tick tock...' },
        { image: 'images/day11.jpg', text: 'Accha babu? When we have our own home\nwe will get alot of orange cats oki??\nThen sharadin oder orange activities dekhbo \nar moja nibo :p >.<' },
        { image: 'images/day12.jpg', text: 'LOOK AT YOU!!! \nJUST A LITTLE BABY! \nMY BABY!' },
        { image: 'images/day13.jpg', text: 'You & I = cuties 💖' },
        { image: 'images/day14.jpg', text: 'Meow Meow Meow!' },
        { image: 'images/day15.jpg', text: 'Remember our first date?\nOH! You looked so handsome!' },
        { image: 'images/day16.jpg', text: 'Hiii baaabbuuu! This is for you!\nRemember to check it every day!\nI love you!' },

    ];

    const messageContainer = document.getElementById('message-container');
    const surpriseContainer = document.getElementById('surprise-container');

    // Display an image with short text for each day leading up to Valentine's Day
    const displayContent = () => {
        const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));

        if (daysLeft >= 0 && daysLeft < content.length) {
            const entry = content[daysLeft];
            messageContainer.innerHTML = `<div class="card"><img src="${entry.image}" alt="Day ${daysLeft + 1} Image" /><p>${entry.text}</p></div>`;
        } else {
            messageContainer.innerHTML = "Countdown to Valentine's Day!";
        }
    };

    // Function to show an animated surprise
    function showAnimatedSurprise() {
        const randomIndex = Math.floor(Math.random() * surprises.length);
        const animatedFigure = surprises[randomIndex];
        surpriseContainer.innerHTML = `<div class="animated-surprise" style="background-image: ${animatedFigure}"></div>`;
    }

    // Initial display
    displayContent();
    // Show animated surprise when the button is clicked
    document.getElementById('open-gift-box').addEventListener('click', showAnimatedSurprise);


}, 1000);







