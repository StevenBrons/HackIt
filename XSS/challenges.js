let challenges = [
    {
        title: "Challenge 0",
        text: "Cross-site scripting (XSS) is a security vulnerabillity where custom code is injected into a webpage.<br>In this challenge you will perform a XSS attack on this webpage.",
        task: "Find a way to popup an alert when this page is loaded",
        hint: "How can you run JavaScript code in a website?",
    },
    {
        //value is used
        title: "Challenge 1",
        text: "The comment system has been updated! Can you find a way to break it?",
        task: "Find a way to popup an alert when this page is loaded",
        hint: "What has changed since the last challenge?",
    },
    {
        //Javascript replaced characters
        title: "Challenge 2",
        text: "The ultra secure comment system is now impossible to break, or is ist?",
        task: "Find a way to popup an alert when this page is loaded",
        hint: "What causes the characters to disappear, and how can I disable it?",
    },
    {
        //JavaScript out of scope!
        title: "Challenge 3",
        text: "The site has once again been improved, lets see if you can work your way around it.",
        task: "Find a way to popup an alert when this page is loaded",
        hint: "How do I remove an event listener?",
    },
    {
        //error on <script> tags (server-size)
        title: "Challenge 4",
        text: "The comment system been completely overhauled, no script can get past this barrier!",
        task: "Find a way to popup an alert when this page is loaded",
        hint: "Is there a way of running javascript without the &ltscript&gt tag?",
    },
    {
        //directly get the key
        title: "Challenge 5",
        text: "Let's see if you are capable of finishing this challenge. Break our challenge-system!",
        task: "<i>Find a way to popup an alert when this page is loaded</i>",
        hint: "How does this website detect if a challenge is completed?",
    },
    {
        //directly get the key within time
        title: "Challenge 6",
        text: "See this as the final challenge. Are you still capable of breaking our win-detection?",
        task: "<i>Find a way to popup an alert when this page is loaded</i>",
        hint: "You need some way to do what you did in challenge 5 automatically",
    },
];

for (let c of challenges) {
    c.key = Math.random().toString(36).substring(7);
    c.comments = [];   
}

module.exports = challenges;