<template>
    <div class="row d-flex justify-content-center align-content-center align-self-center box-grey"
         v-if="element">
        <div class="h-100 col-6 no-gutters pl-0 border-grey-box d-flex justify-content-center">
            <div class="pl-3 align-self-center"><img :src="element.img" class="img-fluid"></div>
        </div>
        <div class="h-100 col-6 no-gutters pl-0 d-flex justify-content-center align-content-center">
            <div class="element-info-container align-self-center">
                <div class="element-info">
                    <p>Χρώμα: <b>{{ element.χρώμα }}</b></p>
                    <br>
                    <p>Βάρος: <b>{{ element.βάρος }} γρ.</b></p>
                    <br>
                    <p>Κοτσάνι: <b>{{ element.κοτσάνι ? 'Ναι' : 'Όχι' }}</b></p>
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
    .box-grey {
        height: 33%;
        width: 90%;
        border-style: dotted;
        border-width: medium;
        border-color: #949494;
        background-color: #ebebeb;
    }

    .border-grey-box {
        border-right-style: dotted;
        border-right-width: medium;
        border-right-color: #949494;
    }
</style>