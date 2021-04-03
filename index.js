const notificationAudio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3');

let ticketCounter = 0;
let notificationCounter = 0

setInterval( () => { 

    // Notification alert
    let alert = document.querySelectorAll(".chat-alert")
    if (alert.length > notificationCounter) {
        notificationCounter = alert.length
        notificationAudio.play()
    }
    // Notification was seen
    if (alert.length < notificationAudio) {
        notificationCounter = alert.length
    }


    // Checking URL
    let currentUrl = window.location.href
    if (!currentUrl.includes("new-ticket") && !currentUrl.includes("chat")) {
        // New ticket in queue
        if ((document.querySelectorAll(".sidebar-scroll-container")[0].childNodes).length > ticketCounter) {
            ticketCounter = (document.querySelectorAll(".sidebar-scroll-container")[0].childNodes).length;
            notificationAudio.play();
        } 

        // Ticket was taken
        if ((document.querySelectorAll(".sidebar-scroll-container")[0].childNodes).length < ticketCounter) {
            ticketCounter = (document.querySelectorAll(".sidebar-scroll-container")[0].childNodes).length;
        }
    }

}, 4000)