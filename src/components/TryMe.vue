<template>
    <div class="h-100 w-100"
         :style="{ backgroundImage: `url('${ bgImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}">
        <div class="container h-100 ">
            <div class="row h-100">
                <div class="col-3 h-100"></div>
                <div class="col-6 h-100">
                    <robot-hi v-bind:images="this.images"/>
                </div>
                <div class="col-3 h-100">

                </div>
                <img v-bind:src="buttonImage" class="button cursor-pointer" v-on:click="$emit('complete')">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["images"],
    components: {
        RobotHi: () => import("./RobotHi.vue")
    },
    data() {
        return {};
    },
    computed: {
        bgImage() {
            return this.images["tryMeBackground"];
        },
        buttonImage() {
            return this.images["tryMeButton"];
        }
    },
    methods: {},
    mounted() {
    }
};
</script>

<style scoped lang="scss">
    .button {
        border-style: solid;
        border-width: thin;
        border-color: #464d5f;
        position: absolute;
        top: 42%;
        left: 52%;
        height: 7%;
        width: auto;
        opacity: 0;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
        animation-fill-mode: forwards;
        animation-delay: 0.5s;
    }
</style>
