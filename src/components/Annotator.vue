<template>
    <div class="col-11 h-100 d-flex justify-content-start flex-column">
        <div class="row text-1 align-self-center" v-if="lastTrainingInput">{{ $t('you_chose') }}: <b>{{ lastTrainingInput }}</b></div>
        <div class="row text-1 align-self-center" v-else><b>{{ $t('train_thales') }}!</b></div>
        <div class="row text-2 align-self-center" v-if="lastTrainingInput"></div>
        <div class="row text-2 align-self-center" v-else><b>{{ $t('what_is_this_image_about') }}</b></div>
        <div class="row element-container h-50">
            <div class="row align-self-center col-12 no-gutters h-100" v-if="lastTrainingInput">
                <div class="col-6" style="padding-left: 0; padding-right: 4px">
                    <button v-on:click="addElementToTrainingSet(features[0])" type="button"
                            class="btn btn-apple btn-two-line mt-1 mb-1" v-if="lastTrainingInput === features[1]" key="AppleBtnUndo">
                        {{ $t('i_changed_my_mind') }} {{ features[0] }}
                    </button>
                    <button v-on:click="addElementToTrainingSet(features[1])" type="button"
                            class="btn btn-orange btn-two-line mt-1 mb-1" key="OrangeBtnUndo" v-else>{{ $t('i_changed_my_mind') }} {{ features[1] }}
                    </button>
                </div>
                <div class="col-6" style="padding-right: 0; padding-left: 4px">
                    <button v-on:click="bringNext" type="button"
                            class="btn btn-next btn-two-line mt-1" key="NextBtn">{{ $t('next_fruit') }}!
                    </button>
                </div>
            </div>
            <div class="row align-self-center col-12 no-gutters" v-else>
                <div class="col-6" style="padding-left: 0; padding-right: 4px">
                    <button v-on:click="addElementToTrainingSet(features[0])" type="button"
                            class="selectionBtn btn btn-apple mt-1 mb-1" key="AppleButton">{{ features[0] }}
                    </button>
                </div>
                <div class="col-6" style="padding-right: 0; padding-left: 4px">
                    <button v-on:click="addElementToTrainingSet(features[1])" type="button"
                            class="selectionBtn btn btn-orange mt-1" key="OrangeBtn">{{ features[1] }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: [
        "features",
        "addElementToTrainingSet",
        "lastTrainingInput",
        "nextButton"
    ],
    components: {
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        bringNext() {
            this.nextButton();
        }
    },
    mounted() {
    }
};
</script>

<style scoped lang="scss">
    .text-1 {
        font-size: 2.4em;
        font-family: "Roboto", sans-serif;
        color: #606060;
    }

    .text-2 {
        font-family: "Roboto", sans-serif;
        font-size: 1.7em;
        color: #606060;
    }

    .btn-apple {
        color: #FFFFFF;
        background-color: #f44336;
    }

    .btn-orange {
        color: #FFFFFF;
        background-color: #FF9800;
    }

    .btn-next {
        color: white;
        background-color: #52a948;
    }

    .selectionBtn {
        width: 100%;
        font-size: 25px;

    }



    .btn-two-line {
        font-family: "Roboto", sans-serif;
        font-size: x-large;
        border-style: solid;
        border-width: thin;
        border-color: #464d5f;
        width: 100%;
        height: 100%;
        text-align: center;
        white-space: normal;
    }
</style>