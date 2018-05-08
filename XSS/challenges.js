let challenges = [
    {
        title: "Challenge 1",
        text: "Cross-site scripting (XSS) is a security vulnerabillity where custom code is injected into a webpage.<br>In this challenge you will perform a XSS attack on this webpage.",
        task: "Find a way to popup an alert when this page is loaded",
        hint: "How can you run JavaScript in an website?",
    },
    {
        //Javascript replaced dingen
        title: "Challenge 2",
        text: "The comment system has been updated! Can you find a way to break it?",
        task: "Find a way to popup an alert when this page is loaded",
        hint: "What causes the characters to disappear, and how can I disable it?",
    },
    {
        //JavaScript out of scope!
        title: "Challenge 3",
        text: "sdfdsf",
        task: "Find a way to popup an alert when this page is loaded",
        hint: "Is there a way of running javascript without the <script> tag?",
    },
    {
        //error on <script> tags (server-size)
        title: "Challenge 4",
        text: "Ever heard of JSFuck?",
        task: "Find a way to popup an alert when this page is loaded",
        hint: "Is there a way of running javascript without the <script> tag?",
    },
    {
        //error on <script> tags (server-size)
        title: "Challenge 4",
        text: "Ever heard of JSFuck?",
        task: "Find a way to popup an alert when this page is loaded",
        hint: "Is there a way of running javascript without the <script> tag?",
    },
];

for (let c of challenges) {
    c.key = Math.random().toString(36).substring(7);
    c.comments = [];   
}

module.exports = challenges;