<template>
    <div class="h-100 w-100"
         :style="{ backgroundImage: `url(introFrame/bg.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}">
        <div class="start-button-intro cursor-pointer">
            <img src="introFrame/button-go.png" class="img-fluid" v-on:click="$emit('complete')">
        </div>
        <div class="container h-100 ">
            <div class="col-12 h-50 d-flex justify-content-center">
                <img src="introFrame/robot.png" class="robot-intro">
            </div>
            <div class="col-12 h-25 d-flex justify-content-center">
                <div class="container h100">
                    <div class="row h-25">
                    </div>
                    <div class="row">
                        <div class="col-3 h-100"></div>
                        <div class="col-6 h-100"><img src="introFrame/text1.png" class="img-fluid text1-intro"></div>
                        <div class="col-3 h-100"></div>
                    </div>
                    <div class="row">
                        <div class="col-3 h-100"></div>
                        <div class="col-6 h-100"><img src=" introFrame/text2.png" class="img-fluid text2-intro"></div>
                        <div class="col-3 h-100"></div>
                    </div>
                    <div class="row">
                        <div class="col-3 h-100"></div>
                        <div class="col-6 h-100"><img src="introFrame/text3.png" class="img-fluid text3-intro"></div>
                        <div class="col-3 h-100"></div>
                    </div>
                </div>
            </div>
            <div class="col-12 h-25 d-flex justify-content-center">
                <div class="container h100">
                    <div class="row h-100">
                        <div class="col-4 h-100"></div>
                        <div class="col-4 h-75 blue-line d-flex justify-content-center">
                            <div class="col-1"></div>
                            <div class="col-4 d-flex h100">
                                <div class="align-self-center h-75">
                                    <img src="demokritos.jpg" style="height: 100%; max-width: 100%">
                                </div>
                            </div>
                            <div class="col-2"></div>
                            <div class="col-4  d-flex h-100">
                                <div class="align-self-center h-75">
                                    <img src="SciFY.png" style="height: 100%; max-width: 100%">
                                </div>
                            </div>
                            <div class="col-1"></div>

                        </div>
                        <div class="col-4 h-100"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [],
        components: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    .start-button-intro {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 10%;
        transform: translate(-50%, -20%);
        z-index: 2;
        animation-fill-mode: forwards;
        animation: start-button-intro-movement 4s linear;
    }

    @keyframes start-button-intro-movement {
        0% {
            left: -50%;
        }
        100% {
            left: 50%;
        }
    }

    .robot-intro {
        height: 90%;
        width: auto;
        position: relative;
        top: 20%;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s, MoveUpDown 3s linear infinite;
    }

    .text1-intro {
        opacity: 0;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
        animation-fill-mode: forwards;
        animation-delay: 0.5s;
    }

    .text2-intro {
        opacity: 0;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
        animation-fill-mode: forwards;
        animation-delay: 1s;
    }

    .text3-intro {
        opacity: 0;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
        animation-fill-mode: forwards;
        animation-delay: 1.5s;
    }

    @keyframes MoveUpDown {
        0%, 100% {
            top: 20%;
        }
        50% {
            top: 10%;
        }
    }

    .blue-line {
        width: 100%;
        border-top: 3px solid #4477a6;
        opacity: 0;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
        animation-fill-mode: forwards;
        animation-delay: 2s;
    }
</style>