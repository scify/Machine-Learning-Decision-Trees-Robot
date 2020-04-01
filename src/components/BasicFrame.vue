<template>
    <div class="h-100 w-100"
         :style="{ backgroundImage: `url('${ bgImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}">
        <div class="container h-100 ">
            <div class="row h-100">
                <div class="col-5 h-100">
                    <div class="container h-100 col-12 no-gutters p-0">
                        <div class="row h-25 p-0 col-12  no-gutters p-0">
                            <div class="h-100 col-12 p-0" v-if="decisionTree">
                                <div :style="{backgroundImage: `url('${ textBubbleImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}"
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
                            <div class="h-100 col-12 p-0" v-else>
                                <div :style="{backgroundImage: `url('${ textBubbleImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}"
                                     class="h-100 w-100 bubble-position">
                                    <div class="text-box d-flex justify-content-center align-content-center">
                                        <div class="align-self-center">
                                            <span class="whiteText">Πρώτη φορά βλέπω κάτι τέτοιο!</span>
                                            <br>
                                            <span class="yellowText">Βοήθησέ με να μάθω!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row h-75">
                            <div class="container h-100">
                                <div class="row h-100 d-flex justify-content-center" v-if="decisionTree">
                                    <div v-if="robotText === null" class="h-100 col-11"
                                         :style="{backgroundImage: `url('${ robotImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                        <div class="think" v-on:click="$emit('how-it-works')">
                                            <span>Δες στο μυαλό μου</span>
                                            <img v-bind:src="thinkImage" class="img-fluid cursor-pointer">
                                        </div>
                                    </div>
                                    <div v-else class="h-100 col-11"
                                         :style="{backgroundImage: `url('${ robotWithBoardImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                        <div class="think" v-on:click="$emit('how-it-works')">
                                            <span>Δες στο μυαλό μου</span>
                                            <img v-bind:src="thinkImage" class="img-fluid cursor-pointer">
                                        </div>
                                        <div class="board-div d-flex justify-content-center">
                                            <div class="align-self-center board-text">
                                                <p>{{ robotText}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row h-100 d-flex justify-content-center" v-else>
                                    <div class="h-100 col-11"
                                         :style="{backgroundImage: `url('${ robotWithBoardImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                        <div class="board-div d-flex justify-content-center">
                                            <div class="align-self-center board-text">?</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-7 h-100 container d-flex justify-content-center flex-column element-container">
                    <div class="row w-100" style="height: 10%"></div>
                    <ElementPresentation v-bind:element="this.element"/>
                    <div class="row w-100" style="height: 5%"></div>
                    <div class="row d-flex justify-content-center align-content-center align-self-center box-bottom"
                         v-if="element">
                        <Annotator v-bind:features="this.features"
                                   v-bind:add-element-to-training-set="this.addElementToTrainingSet"
                                   v-bind:lastTrainingInput="this.lastTrainingInput"
                                   v-bind:nextButton="this.nextButton"/>
                    </div>
                    <div class="row d-flex justify-content-end align-content-center" style="width: 100%; height: 10%">
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
            'images',
            'decisionTree',
            'lastTrainingInput',
            'element',
            'features',
            'addElementToTrainingSet',
            'nextButton',
            'robotText',
            'classify'
        ],
        components: {
            ElementPresentation: () => import('./ElementPresentation'),
            Annotator: () => import('./Annotator'),
        },
        data() {
            return {}
        },
        computed: {
            bgImage() {
                return this.images["defaultBackground"];
            },
            textBubbleImage() {
                return this.images["text-bubble"];
            },
            robotWithBoardImage() {
                return this.images["robotWithBoard"];
            },
            robotImage() {
                return this.images["basicFrameRobot"];
            },
            thinkImage() {
                return this.images["think"];
            }
        },
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
        height: 5em;
        left: -7%;
        animation: fadeinout-data-v-3d04adc2 3s infinite;

        &:hover {
            cursor: pointer;
        }
    }

    .think img {
        width: 5rem;
    }

    .think span {
        float: left;
        width: 100px;
        padding-top: 25px;
        line-height: 1.1em;
        color: azure;
        margin-right: -9px;
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

        &:hover {
            cursor: pointer;
        }
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
