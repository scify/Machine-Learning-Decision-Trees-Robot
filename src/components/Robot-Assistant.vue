<template>
<div class="row">
    <div class="col-md-6">
        <div class="robot">
            <img src="robot.png">
        </div>
    </div>
    <div class="col-md-6">
        <p class="robot-saying speech-bubble" v-html="saying"></p>
    </div>
</div>
</template>
<script>
    export default {
        props: [
            'saying'
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