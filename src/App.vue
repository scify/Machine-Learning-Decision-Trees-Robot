<template>
    <div id="allPages" class="big-box">
        <div id="intro" class="border border-dark" style="display: block; height: 675px; width: 1200px"
             :style="{ backgroundImage: `url(intro/bg.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}">
            <div class="start-button-intro">
                <img src="intro/button-go.png" class="img-fluid" v-on:click="leaveIntro">
            </div>
            <div class="container h-100 ">
                <div class="col-12 h-50 d-flex justify-content-center">
                    <img src="intro/robot.png" class="robot-intro">
                </div>
                <div class="col-12 h-25 d-flex justify-content-center">
                    <div class="container h100">
                        <div class="row h-25">
                        </div>
                        <div class="row">
                            <div class="col-3 h-100"></div>
                            <div class="col-6 h-100"><img src="intro/text1.png" class="img-fluid text1-intro"></div>
                            <div class="col-3 h-100"></div>
                        </div>
                        <div class="row">
                            <div class="col-3 h-100"></div>
                            <div class="col-6 h-100"><img src=" intro/text2.png" class="img-fluid text2-intro"></div>
                            <div class="col-3 h-100"></div>
                        </div>
                        <div class="row">
                            <div class="col-3 h-100"></div>
                            <div class="col-6 h-100"><img src="intro/text3.png" class="img-fluid text3-intro"></div>
                            <div class="col-3 h-100"></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 h-25 d-flex justify-content-center">
                    <div class="container h100">
                        <div class="row h-100">
                            <div class="col-4 h-100"></div>
                            <div class="col-4 h-75 blue-line d-flex justify-content-center">
                                <div class="col-1"></div>
                                <div class="col-4 d-flex h100">
                                    <div class="align-self-center h-75">
                                        <img src="intro/demokritos.jpg" style="height: 100%; max-width: 100%">
                                    </div>
                                </div>
                                <div class="col-2"></div>
                                <div class="col-4  d-flex h-100">
                                    <div class="align-self-center h-75">
                                        <img src="intro/SciFY.png" style="height: 100%; max-width: 100%">
                                    </div>
                                </div>
                                <div class="col-1"></div>

                            </div>
                            <div class="col-4 h-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="frame1" class="border border-dark" style="display: none; height: 675px; width: 1200px"
             :style="{ backgroundImage: `url(frame1/bg.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
            <img src="frame1/robot-hi.png" class="robot-hi">
        </div>
        <div class="m-3" style="display: none">
            <div class="row">
                <div class="col-md-4">
                    <div class="selectionContainer box" v-if="element">
                        <div class="row element-container">
                            <div class="img-container">
                                <img :src="element.img">
                            </div>
                            <div class="element-info-container">
                                <div class="element-info">
                                    <p>Χρώμα: <b>{{ element.χρώμα }}</b></p>
                                    <p>Βάρος: <b>{{ element.βάρος }} γρ.</b></p>
                                    <p>Κοτσάνι: <b>{{ element.κοτσάνι ? 'Ναι' : 'Όχι' }}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="robot-container box">
                        <robot-assistant v-bind:saying="robotText"></robot-assistant>
                        <div class="row mt-5">
                            <div class="col-md-12 text-center">
                                <button v-on:click="classify" type="button"
                                        class="btn btn-lg btn-info robot-action">
                                    Δοκίμασέ με!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="training-set-container box" v-if="trainingSet.length">
                        <h4>Τι έχω μάθει μέχρι τώρα:</h4>
                        <div class="set-item row mt-3" v-for="item in trainingSet" :key="item.id">
                            <div class="col-sm-3">
                                <img class="img-thumb" :src="item.img">
                            </div>
                            <div class="col-sm-9 description">
                                <p class="label">Αυτό είναι ένα <b>{{ item.label }}</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="selectionContainer box " v-if="element">
                        Εκπαίδευσε το Θαλή! Τι αφορά η παραπάνω εικόνα;
                        <div class="row element-container">
                            <div class="col-lg-6" style="padding-left: 0; padding-right: 4px">
                                <button v-on:click="addElementToTrainingSet(features[0])" type="button"
                                        class="selectionBtn btn btn-lg btn-apple mt-3 mb-2">{{ features[0] }}
                                </button>
                            </div>
                            <div class="col-lg-6" style="padding-right: 0; padding-left: 4px">
                                <button v-on:click="addElementToTrainingSet(features[1])" type="button"
                                        class="selectionBtn btn btn-lg btn-orange mt-3">{{ features[1] }}
                                </button>
                            </div>
                            <div class="col-lg-12">
                                <hr>
                                <button v-on:click="fetchNextInstance" type="button"
                                        class="btn btn-lg btn-success">Φέρε και άλλο φρούτο!
                                </button>
                                <br><br>
                                <button v-on:click="resetState" type="button" class="btn btn-lg btn-info mb-2">
                                    Ξέχασε
                                    ό,τι ξέρεις...
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-md-8" v-if="tree">
                    <div class="text-center tree-container box">
                        <div class="selectionContainer">
                            <div class="col-md-12">
                                <h2>Πώς σκέφτομαι:</h2>
                                <div class="tree mt-3" v-html="tree"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import dt from './lib/decision-tree';
    import $ from 'jquery';
    import _ from 'lodash';

    export default {
        components: {},
        data() {
            return {
                allData: [],
                trainingSet: [],
                element: null,
                prediction: null,
                features: [],
                robotText: null,
                tree: null,
                decisionTree: null
            }
        },
        computed: {},
        methods: {
            reload() {
                this.trainingSet = [];
                this.decisionTree = null;
                this.element = null;
                let instance = this;
                $.getJSON("set.json", function (object) {
                    instance.allData = object.data;
                    instance.features = object.features;
                    instance.fetchNextInstance();
                });
            },
            fetchNextInstance() {

                if (this.allData.length > 0) {
                    let currentElement = this.element;
                    let newElementIndex = 0;
                    if (currentElement !== null) {
                        let indexOfCurrentElement = _.findIndex(this.allData, function (o) {
                            return o.id === currentElement.id
                        });
                        if (indexOfCurrentElement < this.allData.length - 1)
                            newElementIndex = indexOfCurrentElement + 1;
                    }
                    this.element = this.allData[newElementIndex];
                }
                if (this.trainingSet.length > 0)
                    this.robotText = "Ωχ...Ένα φρούτο! Νομίζω ξέρω τί ειναι!"

            },
            addElementToTrainingSet(label) {
                this.trainingSet.unshift({
                    ...this.element,
                    label: label
                });
                this.train();
            },
            resetState() {
                this.reload();
                this.prediction = null;
                this.robotText = 'Γεία! Είμαι ο Θαλής! Εκπαίδευσέ με για να γίνω σοφότερος!';
                this.tree = null;
            },
            train() {
                if (!this.trainingSet.length)
                    this.robotText = 'Δεν έχω αρκετά δεδομένα για να μάθω...';

                else {
                    let config = {
                        trainingSet: this.trainingSet,
                        categoryAttr: 'label',
                        ignoredAttributes: ['img', 'id']
                    };
                    // Building Decision Tree
                    this.decisionTree = new dt.DecisionTree(config);
                    this.tree = this.treeToHtml(this.decisionTree.root);
                    this.robotText = 'Γιαμ γιαμ! Νόστιμα τα δεδομένα!'
                }
            },
            leaveIntro() {
                $("#intro").css("display", "none");
                $("#frame1").css("display", "block");
            },
            classify() {
                if (!this.decisionTree)
                    this.robotText = 'Δεν έχω αρκετά δεδομένα για να κάνω πρόβλεψη.';
                else {
                    this.prediction = this.decisionTree.predict(this.element);

                    this.robotText = this.prediction ? 'Χμ... μήπως είναι ένα <b>' + this.prediction + '</b>?' : 'Πραγματικά δεν ξέρω τι είναι αυτό...'
                }
            },
            treeToHtml(tree) {
                // only leafs containing category
                if (tree.category) {
                    return ['<ul>',
                        '<li>',
                        '<a href="#">',
                        '<b>', tree.category, '</b>',
                        '</a>',
                        '</li>',
                        '</ul>'].join('');
                }

                return ['<ul>',
                    '<li>',
                    '<a href="#">',
                    '<b>', tree.attribute, ' ', tree.predicateName, ' ', tree.pivot, ' ?</b>',
                    '</a>',
                    '<ul>',
                    '<li>',
                    '<a href="#">Ναι</a>',
                    this.treeToHtml(tree.match),
                    '</li>',
                    '<li>',
                    '<a href="#">Οχι</a>',
                    this.treeToHtml(tree.notMatch),
                    '</li>',
                    '</ul>',
                    '</li>',
                    '</ul>'].join('');
            }
        },
        mounted() {
            this.resetState();
        }
    }
</script>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap';
    @import '~bootstrap-vue/dist/bootstrap-vue.css';

    html,
    body {
        height: 100%;
        margin: 0;
    }

    .big-box {
        display: flex;
        flex-flow: column;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    .robot-hi {
        height: 100%;
        position: relative;
        -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 3s; /* Firefox < 16 */
        -ms-animation: fadein 3s; /* Internet Explorer */
        -o-animation: fadein 3s; /* Opera < 12.1 */
        animation: fadein 3s;
    }

    .start-button-intro {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 10%;
        transform: translate(-50%, -20%);
        z-index: 2;
        animation-fill-mode: forwards;
        animation: start-button-intro-movement 4s linear;
    }

    @keyframes start-button-intro-movement {
        0% {
            left: -50%;
        }
        100% {
            left: 50%;
        }
    }

    .robot-intro {
        height: 90%;
        width: auto;
        position: relative;
        top: 20%;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s, MoveUpDown 3s linear infinite;
    }

    .text1-intro {
        opacity: 0;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
        animation-fill-mode: forwards;
        animation-delay: 0.5s;
    }

    .text2-intro {
        opacity: 0;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
        animation-fill-mode: forwards;
        animation-delay: 1s;
    }

    .text3-intro {
        opacity: 0;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
        animation-fill-mode: forwards;
        animation-delay: 1.5s;
    }

    @keyframes MoveUpDown {
        0%, 100% {
            top: 20%;
        }
        50% {
            top: 10%;
        }
    }

    .blue-line {
        width: 100%;
        border-top: 3px solid #4477a6;
        opacity: 0;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
        animation-fill-mode: forwards;
        animation-delay: 2s;
    }

    .speech-bubble {
        position: relative;
        background: #673AB7;
        border-radius: .4em;
        padding: 10px;
        color: #FFFFFF;
        font-size: 18px;
        @include media-breakpoint-down(md) {
            padding: 5px;
            font-size: 12px;
        }
    }

    .btn-apple {
        color: #FFFFFF;
        background-color: #f44336;
    }

    .btn-orange {
        color: #FFFFFF;
        background-color: #FF9800;
    }

    .speech-bubble:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 30%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-top-color: #673AB7;
        border-bottom: 0;
        border-left: 0;
        margin-left: -10px;
        margin-bottom: -20px;
    }

    .training-set-container {
        height: 350px;
        overflow: hidden;
        overflow-y: scroll;

        .description {
            padding: 0;
        }
    }

    .set-item {
        .img-thumb {
            max-width: 100%;
            border-radius: 10px;
        }

        .label {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            line-height: 1.1em;
            font-size: 130%;
            width: 100%;
            @include media-breakpoint-down(md) {
                font-size: medium;
            }
        }
    }

    .tree-container.box {
        min-height: 350px;
        height: auto;
    }

    .robot-container {
        height: 350px;
    }

    .robot-action {
        width: 150px;
    }

    .robot {
        img {
            max-width: 100%;
            max-height: 200px;
            margin-top: 10px;
            @include media-breakpoint-down(md) {
                font-size: medium;
            }

        }
    }

    .selectionBtn {
        max-width: 180px;
        width: 100%;
        height: 100px;
        font-size: 25px;

    }

    .tree * {
        margin: 0;
        padding: 0;
    }

    .box {
        padding: 20px;
        border-radius: 10px;
        border: 3px solid #3F51B5;
        min-height: 350px;
        margin-bottom: 20px;
    }

    .selectionContainer {
        text-align: center;

        .element-container {

            .img-container {
                width: 80%;
                margin: auto;
                text-align: center;

                img {
                    max-height: 200px;
                    width: auto;
                    max-width: 100%;
                    margin: auto;
                    border-radius: 10px;
                }
            }

            .element-info-container {
                margin: 0 auto;
                padding: 20px;
            }

            .element-info {
                text-align: left;

                p {
                    margin-bottom: 0;
                }
            ;
            }

        }
    }

    .tree {
        display: inline-block;
    }

    .tree ul {
        padding-top: 20px;
        position: relative;

        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
    }

    .tree li {
        white-space: nowrap;
        float: left;
        text-align: center;
        list-style-type: none;
        position: relative;
        padding: 20px 5px 0 5px;

        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
    }

    /*We will use ::before and ::after to draw the connectors*/

    .tree li::before, .tree li::after {
        content: '';
        position: absolute;
        top: 0;
        right: 50%;
        border-top: 1px solid #3F51B5;
        width: 50%;
        height: 20px;
    }

    .tree li::after {
        right: auto;
        left: 50%;
        border-left: 1px solid #3F51B5;
    }

    /*We need to remove left-right connectors from elements without
     any siblings*/
    .tree li:only-child::after, .tree li:only-child::before {
        display: none;
    }

    /*Remove space from the top of single children*/
    .tree li:only-child {
        padding-top: 0;
    }

    /*Remove left connector from first child and
     right connector from last child*/
    .tree li:first-child::before, .tree li:last-child::after {
        border: 0 none;
    }

    /*Adding back the vertical connector to the last nodes*/
    .tree li:last-child::before {
        border-right: 1px solid #3F51B5;
        border-radius: 0 5px 0 0;
        -webkit-border-radius: 0 5px 0 0;
        -moz-border-radius: 0 5px 0 0;
    }

    .tree li:first-child::after {
        border-radius: 5px 0 0 0;
        -webkit-border-radius: 5px 0 0 0;
        -moz-border-radius: 5px 0 0 0;
    }

    /*Time to add downward connectors from parents*/
    .tree ul ul::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        border-left: 1px solid #3F51B5;
        width: 0;
        height: 20px;
    }

    .tree li a {
        border: 1px solid #9C27B0;
        padding: 5px 10px;
        text-decoration: none;
        color: #2196F3;
        display: inline-block;

        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;

        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
    }

    /*Time for some hover effects*/
    /*We will apply the hover effect the the lineage of the element also*/
    .tree li a:hover, .tree li a:hover + ul li a {
        background: #c8e4f8;
        color: #000;
        border: 1px solid #94a0b4;
    }

    /*Connector styles on hover*/
    .tree li a:hover + ul li::after,
    .tree li a:hover + ul li::before,
    .tree li a:hover + ul::before,
    .tree li a:hover + ul ul::before {
        border-color: #94a0b4;
    }

    @include media-breakpoint-down(md) {
        .btn {
            height: auto;
            font-size: medium;
        }
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
