<template>
<!--<div class="row">
    <div class="col">
        <div class="robot">
            <img src="robot.png">
        </div>
    </div>
    <div class="col">
        <p class="robot-saying speech-bubble" v-html="saying"></p>
    </div>
</div>-->
    <p v-html="saying"></p>
</template>
<script>
    export default {
        props: [
            'saying',
            'testVariable'
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