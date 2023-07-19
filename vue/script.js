const app =  Vue.createApp({
    data() {
        return {
            messaggio: "Benvenuto su Vue framework",
            image: "img/vue.jpg",
        };
    },
});
console.log(app);
app.mount("#app")
