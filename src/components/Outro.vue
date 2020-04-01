<template>
    <div class="h-100 w-100"
         :style="{ backgroundImage: `url('${ bgImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}">
        <div class="container h-100 ">
            <div class="row h-100">
                <div class="col-5 h-100">
                    <div class="container h-100 col-12 no-gutters p-0">
                        <div class="row h-25 p-0 col-12  no-gutters p-0">
                        </div>
                        <div class="row h-75">
                            <div class="container h-100">
                                <div class="row h-100 d-flex justify-content-center">
                                    <div class="h-100 col-11"
                                         :style="{backgroundImage: `url('${ robotImage }')`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-7 h-100 container d-flex justify-content-center flex-column element-container">
                    <div class="row d-flex justify-content-center align-content-center basic-box">
                        <div class="row col-12 h-25 justify-content-center p-3">
                            <div class="outro-text-1 col-10 align-self-center h-100 d-flex justify-content-center align-content-center">
                                <div class="align-self-center"><b>Τί να θυμάστε από αυτή την άσκηση</b></div>
                            </div>
                        </div>
                        <div class="row col-12 h-75 justify-content-center no-gutters">
                            <div class="col-12 h-75 d-flex justify-content-center align-content-center no-gutters">
                                <div class="align-self-center col-12 outro-text-2 no-gutters">
                                    <ol type="1">
                                        <li>Ο Θαλής μαθαίνει με παραδείγματα!
                                            -Όσα περισσότερα τόσο το καλύτερο;
                                            -Συνήθως ναι. Αλλά μόνο αν αυτά είναι σωστά!
                                        </li>
                                        <li>
                                            Κατα την επιλογη των παραδειγμάτων επιλέγουμε τα πιο αντιπροσωπευτικά
                                            χαρακτηριστικά. Αν ειχαμε επιλέξει ως χαρακτηριστικό μόνο "το κοτσάνι" δε θα
                                            μπορούσαμε να διαφοροποιήσουμε μήλα απο πορτοκάλια.
                                        </li>
                                        <li>
                                            Τα Δένδρα απόφασης που είδαμε σε αυτή την άσκηση ειναι ένας απο τους πολλούς
                                            διαφορετικους αλγορίθμους μάθησης
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div class="col-12 h-25 d-flex justify-content-center">
                                <div class="container h100">
                                    <div class="row h-100">
                                        <div class="col-2 h-100"></div>
                                        <div class="col-8 h-100 d-flex justify-content-center">
                                            <div class="col-1"></div>
                                            <div class="col-4 d-flex h100">

                                                <a href="http://www.demokritos.gr/" target="_blank"
                                                   class="align-self-center h-75">
                                                    <img v-bind:src="demokritosImage"
                                                         style="height: 100%; max-width: 100%">
                                                </a>
                                            </div>
                                            <div class="col-2"></div>
                                            <div class="col-4  d-flex h-100">

                                                <a href="https://www.scify.gr/site/en" target="_blank"
                                                   class="align-self-center h-75">
                                                    <img v-bind:src="scifyImage"
                                                         style="height: 100%; max-width: 100%">
                                                </a>
                                            </div>
                                            <div class="col-1"></div>

                                        </div>
                                        <div class="col-2 h-100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center align-content-center"
                         style="width: 100%; height: 10%">
                        <div class="forget-btn align-self-center cursor-pointer" v-on:click="$emit('reload')">ΞΕΚΙΝΑ
                            ΞΑΝΑ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["images"],
        components: {},
        data() {
            return {}
        },
        computed: {
            bgImage() {
                return this.images["defaultBackground"];
            },
            robotImage() {
                return this.images["outroRobot"];
            },
            demokritosImage() {
                return this.images["demokritos"];
            },
            scifyImage() {
                return this.images["scify"];
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    .outro-text-1 {
        font-family: "Roboto";
        font-size: x-large;
        color: #606060;
        border-style: dashed;
        border-width: medium;
        border-color: #606060;
        background-color: #ebebeb;
        text-align: center;
    }

    .outro-text-2 {
        font-family: "Roboto";
        font-size: x-large;
        color: #606060;
        text-align: left;
    }

    .basic-box {
        height: 90%;
        width: 100%;
        border-bottom-style: solid;
        border-bottom-width: thin;
        border-color: #949494;
        background-color: transparent;
    }

    .forget-btn {
        font-family: "Roboto";
        font-size: medium;
        background-color: #0c5460;
        border-style: solid;
        border-width: thin;
        border-color: #464d5f;
        color: white;
        width: 25%;
        height: auto;
        text-align: center;
    }
</style>
