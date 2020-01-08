<template>
    <div class="h-100 w-100"
         :style="{ backgroundImage: `url(bg.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}">
        <div class="container h-100 ">
            <div class="row h-100">
                <div class="col-5 h-100">
                    <div class="container h-100 col-12 no-gutters p-0">
                        <div class="row h-25 p-0 col-12  no-gutters p-0">
                        </div>
                        <div class="row h-75">
                            <div class="container h-100">
                                <div class="row h-100 d-flex justify-content-center">
                                    <div class="h-100 col-11"
                                         :style="{backgroundImage: `url(robotWithBoard.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                        <div class="board-div d-flex justify-content-center">
                                            <div class="align-self-center board-text">
                                                <div class="w-100 text-center">ΠΩΣ</div>
                                                <div class="w-100 text-center">ΣΚΕΦΤΟΜΑΙ</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-7 h-100 container d-flex justify-content-center flex-column element-container">
                    <div class="row d-flex justify-content-center align-content-center model-box">
                        <div class="row col-12 h-25 justify-content-center p-3">
                            <div class="col-12 h-75 container">
                                <div class="col-12 row h-100 justify-content-center align-content-center"
                                     v-if="decisionTree">
                                    <div class="col-4 h-100 d-flex justify-content-center align-content-center">
                                        <img :src="element.img" style="height: 100%;width: auto">
                                    </div>
                                    <div class="col-6 h-100 d-flex justify-content-center align-content-center">
                                        <div class="text-frame text-center align-self-center">
                                            Αυτό είναι ένα: <b>
                                            <p>{{ robotText }}</p>
                                        </b>
                                        </div>
                                    </div>
                                    <div class="col-2"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row col-12 h-75 justify-content-center">
                            <decision-tree v-bind:decision-tree="this.decisionTree"></decision-tree>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-between align-content-center"
                         style="width: 100%; height: 10%">
                        <div class="back-btn align-self-center cursor-pointer" v-on:click="$emit('back')">ΕΠΙΣΤΡΟΦΗ</div>
                        <div class="forget-btn align-self-center cursor-pointer" v-on:click="$emit('reset')">ΞΕΧΑΣΕ</div>
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
            'element',
            'robotText',
            'decisionTree'
        ],
        components: {
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">


    .text-frame {
        font-family: "Roboto";
        font-size: x-large;
        color: black;
    }

    .back-btn {
        font-family: "Roboto";
        font-size: medium;
        background-color: #52a948;
        border-style: solid;
        border-width: thin;
        border-color: #464d5f;
        color: white;
        width: 25%;
        height: auto;
        text-align: center;
    }

    .forget-btn {
        font-family: "Roboto";
        font-size: medium;
        background-color: #0c5460;
        border-style: solid;
        border-width: thin;
        border-color: #464d5f;
        color: white;
        width: 25%;
        height: auto;
        text-align: center;
    }

    .board-text {
        font-family: "Roboto";
        font-size: x-large;
        color: #606060;
    }

    .model-box {
        height: 90%;
        width: 100%;
        border-bottom-style: solid;
        border-bottom-width: thin;
        border-color: #949494;
        background-color: transparent;
    }
</style>