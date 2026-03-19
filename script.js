function mokiActivity() {
    let activities = [
        "Sleeping on the couch",
        "Looking for treats",
        "Playing with a toy",
        "Learning a new trick",
        "Waiting for a walk"
    ];

    let randomActivity = activities[Math.floor(Math.random() * activities.length)];

    document.getElementById("activity").innerText = randomActivity;
}

function giveTreat() {

document.getElementById("thankyou").innerText = "Thank you! 🐶";

}

