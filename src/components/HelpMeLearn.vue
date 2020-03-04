<template>
    <div class="h-100 w-100"
         :style="{ backgroundImage: `url('${ bgImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}">
        <div class="container h-100 ">
            <div class="row h-100">
                <div class="col-5 h-100">
                    <div class="container h-100 col-12 no-gutters p-0">
                        <div class="row h-25 p-0 col-12  no-gutters p-0">
                            <div class="h-100 col-12 p-0">
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
                                <div class="row h-100 d-flex justify-content-center">
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
                    <div class="row d-flex justify-content-center align-content-center align-self-center"
                         style="width: 100%; height: 10%">
                    </div>
                    <ElementPresentation v-bind:element="this.element"></ElementPresentation>
                    <div class="row" style="height: 1%"></div>
                    <div class="row d-flex justify-content-center align-content-center align-self-center box-bottom"
                         v-if="element">
                        <Annotator v-bind:features="this.features" v-bind:add-element-to-training-set="this.addElementToTrainingSet"/>
                    </div>
                    <div class="row d-flex justify-content-end align-content-center"
                         style="width: 100%; height: 10%">
                        <div class="finish-btn align-self-center cursor-pointer" v-on:click="$emit('finish')">ΤΕΛΟΣ</div>
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
            'element',
            'features',
            'addElementToTrainingSet'
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