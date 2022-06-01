<template>
    <div class="h-100 w-100"
         :style="{ backgroundImage: `url('${ bgImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}">
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
                                         :style="{backgroundImage: `url('${ robotWithBoardImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                        <div class="board-div d-flex justify-content-center">
                                            <div class="align-self-center board-text">
                                                <div class="w-100 text-center">{{ $t('how') }}</div>
                                                <div class="w-100 text-center">{{ $t('think') }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-7 h-100 container d-flex justify-content-center flex-column element-container no-gutters">
                    <div class="row d-flex justify-content-center align-content-center model-box">
                        <div class="row col-12 h-25 justify-content-center py-3 px-0">
                            <div class="w-100 h-100 d-flex flex-row" v-if="decisionTree">
                                <div class="h-100 w-75">
                                    <ElementPresentation v-bind:element="this.element" v-bind:modelMode="true"/>
                                </div>
                                <div class="h-100 w-25 d-flex justify-content-start">
                                    <div class="text-frame text-left align-self-center mr-3">
                                        <span v-html="$t('i_think_its_a')"> </span> <b>{{ robotText }}</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row col-12 h-75 justify-content-center"  style="overflow-y: auto">
                            <decision-tree v-bind:decision-tree="this.decisionTree"/>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-between align-content-center"
                         style="width: 100%; height: 10%">
                        <div class="back-btn align-self-center cursor-pointer" v-on:click="$emit('back')">{{ $t('back') }}
                        </div>
                        <div class="forget-btn align-self-center cursor-pointer" v-on:click="$emit('reset')">{{ $t('forget') }}
                        </div>
                        <div class="finish-btn align-self-center cursor-pointer" v-on:click="$emit('finish')">{{ $t('end') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: [
        "images",
        "element",
        "robotText",
        "decisionTree"
    ],
    components: {
        ElementPresentation: () => import("./ElementPresentation"),
        DecisionTree: () => import("./DecisionTree")
    },
    data() {
        return {};
    },
    computed: {
        bgImage() {
            return this.images["defaultBackground"];
        },
        robotWithBoardImage() {
            return this.images["robotWithBoard"];
        }
    },
    methods: {},
    mounted() {
    }
};
</script>

<style scoped lang="scss">


    .text-frame {
        font-family: "Roboto", sans-serif;
        font-size: x-large;
        color: black;
    }

    .back-btn {
        font-family: "Roboto", sans-serif;
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
        font-family: "Roboto", sans-serif;
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
        font-family: "Roboto", sans-serif;
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
