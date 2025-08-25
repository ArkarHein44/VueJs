const app = Vue.createApp({
  data() {
    return {
      title: "Grammar in Use(Elementary)",
      print: "Cambridge press",
      edition: "4th Edition",
      count: 0,
      heading: "Moon landing",
      display: true,
      books: [
        {
          name: "Grammar in Use Elementary",
          print: "Cambridge",
          level: "A1",
          category: "English Book",
          img: "./img/1.jpg",
          isFav: true,
        },
        {
          name: "Vocabulary in Use Elementary",
          print: "Cambridge",
          level: "A1",
          category: "English Book",
          img: "./img/2.jpeg",
          isFav: true,
        },
        {
          name: "Colocation in Use",
          print: "Cambridge",
          level: "B1",
          category: "English Book",
          img: "./img/3.jpg",
          isFav: false,
        },
      ],
      link: "https://www.google.com/",
    };
  },
  methods: {
    changeHeading() {
      this.heading = "APPOLO 11";
    },
    mouseOverHandler(event, data) {
      console.log("mose over is working", event, data);
    },
    mouseLeaveHandler(event) {
      console.log("move leave is working", event.type);
    },
    dbclickHandler() {
      console.log("double click is working");
    },
  },
});

app.mount("#app");
