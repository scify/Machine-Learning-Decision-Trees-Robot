<template>
    <div class="container h-100">
        <div class="row h-25 d-flex justify-content-center">
            <div rel="prefetch" :style="{backgroundImage: `url('${ textBubbleImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}"
                 class="h-100 w-100 bubble-position">
                <div class="text-box d-flex justify-content-start align-content-center">
                    <div class="align-self-center">
                        <span class="yellowText">Γειά! Είμαι ο Θαλής!</span>
                        <br>
                        <span class="whiteText">Αυτή τη στιγμή δε γνωρίζω τίποτα,<br>αλλά έχω την ικανότητα να μαθαίνω!</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row h-75">
            <div class="container h-100">
                <div class="row h-100 d-flex justify-content-center">
                    <div rel="prefetch" class="h-100 col-11"
                         :style="{backgroundImage: `url('${ robotImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['images'],
        components: {
        },
        data() {
            return {}
        },
        computed: {
            robotImage() {
                return this.images["robot-hi"];
            },
            textBubbleImage() {
                return this.images["text-bubble"];
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    .robot-hi {
        height: 100%;
        width: auto;
        position: relative;
    }

    .bubble-position {
        position: relative;
        left: 10%;
        top: 30%;
    }

    .text-box {
        width: 80%;
        height: 60%;
        position: relative;
        top: 5%;
        left: 5%;
    }

    .yellowText {
        font-family: "Roboto";
        font-size: x-large;
        color: #fddd02;
    }

    .whiteText {
        font-family: "Roboto";
        font-size: large;
        color: #ffffff;
    }
</style>