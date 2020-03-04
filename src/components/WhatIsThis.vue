<template>
    <div class="h-100 w-100"
         :style="{ backgroundImage: `url('${ bgImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}">
        <div class="container h-100 ">
            <div class="row h-100">
                <div class="col-5 h-100">
                    <robot-hi v-bind:images="this.images"/>
                </div>
                <div class="col-7 h-100 container d-flex justify-content-center flex-column element-container">
                    <element-presentation v-bind:element="this.element"/>
                    <div class="row d-flex justify-content-center align-content-center" style="height: 10%">
                        <div class="col-4 h-100 align-self-center pt-4">
                            <button class="btn orange-btn" v-on:click="$emit('complete')"><i>Θαλή; Τι είναι αυτό;</i>
                            </button>
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
            'images',
            'element'
        ],
        components: {
            RobotHi: () => import('./RobotHi.vue'),
            ElementPresentation: () => import('./ElementPresentation')
        },
        data() {
            return {}
        },
        computed: {
            bgImage() {
                return this.images["defaultBackground"];
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    .orange-btn {
        font-family: "Roboto";
        font-size: large;
        background-color: #fd7202;
        border-style: solid;
        border-width: thin;
        border-color: #464d5f;
        color: white;
        width: 100%;
        height: auto;
    }
</style>