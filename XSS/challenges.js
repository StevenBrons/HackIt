let challenges = [
    {
        title: "Challenge 1",
        text: "Cross-site scripting (XSS) is a security vulnerabillity where custom code is injected into a webpage.<br>In this challenge you will perform a XSS attack on this webpage.",
        task: "Find a way to popup an alert when this page is loaded",
    },
    {
        title: "Challenge 2",
        text: "",
    },
    {
        title: "Challenge 3",
        text: "asdjfljl jdsl jdlsj lkdslf ldjlkdsj jdl ld jldjs",
    },
    {
        title: "Challenge 4",
        text: "asdjfljl jdsl jdlsj lkdslf ldjlkdsj jdl ld jldjs",
    },
];

for (let c of challenges) {
    c.key = Math.random().toString(36).substring(7);
    c.comments = [];   
}

module.exports = challenges;