<template>
    <div class="fixed-bottom container-fluid pt-4 pb-4 main-banner" v-if="!cookiesAreSet">
        <div class="row align-items-center">
            <div class="col-lg-9 col-md-10 col-sm-12  mx-auto">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-9 col-sm-11">
                            <p class="mb-0">This website uses cookies to ensure you
                                get the best experience on our website. <a href="#" target="_blank">Learn more</a></p>
                        </div>
                        <div class="col-md-3 col-sm-11">
                            <div class="row align-items-center">
                                <div class="col-md-6 col-sm-12">
                                    <a @click="saveConsent(false)">Don't Agree</a>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <b-button class="w-100" variant="success" @click="saveConsent(true)">Agree
                                    </b-button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import {setOptions, bootstrap} from 'vue-gtag'

    const THALES_COOKIES_SET = 'THALES_COOKIES_SET';

    export default {
        data() {
            return {
                cookiesAreSet: false
            }
        },
        created() {
            this.updateGA();
        },
        methods: {
            saveConsent(allowCookies) {
                this.$cookies.set(THALES_COOKIES_SET, allowCookies);
                this.updateGA();
            },
            updateGA() {
                console.log(process.env.VUE_APP_GA_ID);
                setOptions({
                    config: {id: process.env.VUE_APP_GA_ID},
                    enabled: this.$cookies.isKey(THALES_COOKIES_SET) ? this.$cookies.get(THALES_COOKIES_SET) : false
                });

                bootstrap().then((gtag) => {
                    console.log("GA enabled", gtag);
                });
                this.cookiesAreSet = this.$cookies.isKey(THALES_COOKIES_SET);
            }
        }

    }
</script>

<style scoped>

    .main-banner {
        background-color: #6EDAE3;
    }
    a:hover {
        cursor: pointer;
    }

</style>
