<template>
    <div class="row d-flex justify-content-center align-content-center align-self-center box-grey-model-mode"
         v-if="modelMode">
        <div class="h-100 col-6 no-gutters border-grey-box d-flex justify-content-center">
            <div class="align-self-center" style="max-width: 60%"><img :src="element.img" class="img-fluid"></div>
        </div>
        <div class="h-100 col-6 no-gutters pl-0 d-flex flex-column justify-content-center align-content-center">
            <div class="element-text p-1 ml-1">{{ $t('color') }}: <b>{{ element[$t('attr_1')] }}</b></div>
            <div class="element-text p-1 ml-1">{{ $t('weight') }}: <b>{{ element[$t('attr_2')] }} {{ $t('grams') }}.</b></div>
            <div class="element-text p-1 ml-1">{{ $t('stem') }}: <b>{{ element[$t('attr_3')] ? $t('yes') : $t('no') }}</b></div>
        </div>
    </div>
    <div class="row d-flex justify-content-center align-content-center align-self-center box-grey" v-else>
        <div class="h-100 col-6 no-gutters border-grey-box d-flex justify-content-center">
            <div class="align-self-center" style="max-width: 90%"><img :src="element.img" class="img-fluid"></div>
        </div>
        <div class="h-100 col-6 no-gutters pl-0 d-flex flex-column justify-content-center align-content-center">
            <div class="element-text p-2 ml-3">{{ $t('color') }}: <b>{{ element[$t('attr_1')] }}</b></div>
            <div class="element-text p-2 ml-3">{{ $t('weight') }}: <b>{{ element[$t('attr_2')] }} {{ $t('grams') }}.</b></div>
            <div class="element-text p-2 ml-3">{{ $t('stem') }}: <b>{{ element[$t('attr_3')] ? $t('yes') : $t('no') }}</b></div>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        "element",
        "modelMode"
    ],
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {},
    mounted() {

    }
};
</script>

<style scoped lang="scss">

    .element-text {
        font-family: "Roboto", sans-serif;
        font-size: 1.4em;
    }

    .box-grey {
        height: 33%;
        width: 90%;
        border-style: dotted;
        border-width: medium;
        border-color: #949494;
        background-color: #ebebeb;
    }

    .box-grey-model-mode {
        height: 100%;
        width: 100%;
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