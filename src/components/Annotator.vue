<template>
    <div class="col-8 h-100 d-flex justify-content-start flex-column">
        <div class="row text-1 align-self-center"><b>Εκπαίδευσε το Θαλή!</b></div>
        <div class="row text-2 align-self-center"><b>Τι αφορά η παραπάνω εικόνα;</b>
        </div>
        <div class="row element-container">
            <div class="row align-self-center col-12 no-gutters">
                <div class="col-6" style="padding-left: 0; padding-right: 4px">
                    <button v-on:click="addElementToTrainingSet(features[0])" type="button"
                            class="selectionBtn btn btn-apple mt-1 mb-1">{{ features[0] }}
                    </button>
                </div>
                <div class="col-6" style="padding-right: 0; padding-left: 4px">
                    <button v-on:click="addElementToTrainingSet(features[1])" type="button"
                            class="selectionBtn btn btn-orange mt-1">{{ features[1] }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            'features',
            'addElementToTrainingSet'
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
    .text-1 {
        font-size: 2.4em;
        font-family: "Roboto";
        color: #606060;
    }

    .text-2 {
        font-family: "Roboto";
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

    .selectionBtn {
        width: 100%;
        font-size: 25px;

    }
</style>