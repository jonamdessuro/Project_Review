// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.couldinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
        "texts of susan smith",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.couldinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
        "texts of anna johnson",
    },
    {
        id: 3,
        name: "peter jones",
        job: "inter",
        img:
            "https://res.couldinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mjS.jpg",
        text:
        "texts of peter jones",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.couldinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    }
];

// select items 
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");