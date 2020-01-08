<template>
    <div class="h-100 w-100"
         :style="{ backgroundImage: `url(bg.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}">
        <div class="container h-100 ">
            <div class="row h-100">
                <div class="col-5 h-100">
                    <robot-hi></robot-hi>
                </div>
                <div class="col-7 h-100 container d-flex justify-content-center flex-column element-container">
                    <element-presentation v-bind:element="this.element"></element-presentation>
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
            'element'
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