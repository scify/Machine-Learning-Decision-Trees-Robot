<template>
    <div class="h-100 w-100"
         :style="{ backgroundImage: `url(bg.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}">
        <div class="container h-100 ">
            <div class="row h-100">
                <div class="col-5 h-100">
                    <div class="container h-100 col-12 no-gutters p-0">
                        <div class="row h-25 p-0 col-12  no-gutters p-0">
                            <div class="h-100 col-12 p-0">
                                <div :style="{backgroundImage: `url(text-bubble.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}"
                                     class="h-100 w-100 bubble-position" v-if="robotText === null">
                                    <div class="text-box d-flex justify-content-center align-content-center">
                                        <div class="align-self-center" v-if="lastTrainingInput">
                                            <span class="whiteText">Ώστε είναι ένα </span>
                                            <span class="yellowText">{{ lastTrainingInput }} </span>
                                            <span class="whiteText">!</span>
                                        </div>
                                        <div class="align-self-center" v-else>
                                            <span class="whiteText">Νομίζω ότι ξέρω τι είναι!</span>
                                            <br>
                                            <span class="yellowText">Να σου πω;</span>
                                            <span class="predict-btn" v-on:click="classify">ΝΑΙ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row h-75">
                            <div class="container h-100">
                                <div class="row h-100 d-flex justify-content-center">
                                    <div v-if="robotText === null" class="h-100 col-11"
                                         :style="{backgroundImage: `url(basicFrame/robot.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                        <div class="think" v-on:click="$emit('how-it-works')">
                                            <img src="think.png" class="img-fluid">
                                        </div>
                                    </div>
                                    <div v-else class="h-100 col-11"
                                         :style="{backgroundImage: `url(robotWithBoard.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                        <div class="think" v-on:click="$emit('how-it-works')">
                                            <img src="think.png" class="img-fluid">
                                        </div>
                                        <div class="board-div d-flex justify-content-center">
                                            <div class="align-self-center board-text">
                                                <p>{{ robotText}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-7 h-100 container d-flex justify-content-center flex-column element-container">
                    <div class="row d-flex justify-content-center align-content-center align-self-center"
                         style="width: 100%; height: 10%">
                        <div class="next-btn align-self-center" v-on:click="nextButton">Φέρε και άλλο φρούτο!
                            >>
                        </div>
                    </div>
                    <element-presentation v-bind:element="this.element"></element-presentation>
                    <div class="row" style="height: 1%"></div>
                    <div class="row d-flex justify-content-center align-content-center align-self-center box-bottom"
                         v-if="element">
                        <annotator v-bind:features="this.features" v-bind:add-element-to-training-set="this.addElementToTrainingSet"></annotator>
                    </div>
                    <div class="row d-flex justify-content-end align-content-center"
                         style="width: 100%; height: 10%">
                        <div class="finish-btn align-self-center" v-on:click="$emit('finish')">ΤΕΛΟΣ</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            'lastTrainingInput',
            'element',
            'features',
            'addElementToTrainingSet',
            'nextButton',
            'robotText',
            'classify'
        ],
        components: {
        },
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

    .think {
        position: absolute;
        width: 5em;
        height: 5em;
        left: 10%;
        -webkit-animation: fadeinout 3s infinite;
        animation: fadeinout 3s infinite;
    }

    @-webkit-keyframes fadeinout {
        0% {
            opacity: 0.3;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.3;
        }
    }

    @keyframes fadeinout {
        0% {
            opacity: 0.3;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.3;
        }
    }

    .predict-btn {
        font-family: "Roboto";
        color: white;
        border-style: dashed;
        border-color: white;
        background-color: #52a948;
        font-size: x-large;
        text-align: center;
        width: 30%;
        border-width: thin;
        padding-left: 0.5em;
        padding-right: 0.5em;
        margin-left: 1em;
    }

    .next-btn {
        font-family: "Roboto";
        font-size: x-large;
        background-color: #52a948;
        border-style: solid;
        border-width: thin;
        border-color: #464d5f;
        color: white;
        width: 80%;
        height: auto;
        text-align: center;
    }

    .board-text {
        font-family: "Roboto";
        font-size: x-large;
        color: #606060;
    }

    .box-bottom {
        height: 30%;
        width: 100%;
        border-bottom-style: solid;
        border-bottom-width: thin;
        border-color: #949494;
        background-color: transparent;
    }
</style>