<template>
    <div class="mt-5" id="main">
        <div class="row">
            <div class="col-md-4">
                <div class="selectionContainer" v-if="element">
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
                <div class="robot-container">
                    <robot-assistant v-bind:saying="robotText"></robot-assistant>
                    <div class="row mt-5">
                        <div class="col-md-12 text-center">
                            <button v-on:click="classify" type="button" class="btn btn-lg btn-info robot-action">
                                Δοκίμασέ με!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="training-set-container" v-if="trainingSet.length">
                    <h4>Τι έχω μάθει μέχρι τώρα:</h4>
                    <div class="set-item row mt-3" v-for="item in trainingSet" :key="item.id">
                        <div class="col-sm-3">
                            <img class="img-thumb" :src="item.img">
                        </div>
                        <div class="col-sm-9">
                            <p class="label">Αυτό είναι ένα <b>{{ item.label }}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="selectionContainer " v-if="element">
                    <div class="row element-container mt-3">
                        <div class="col-md-12">
                            Εκπαίδευσε το Θαλή! Τι αφορά η παραπάνω εικόνα;
                        </div>
                        <div class="col-md-6">
                            <button v-on:click="addElementToTrainingSet(features[0])" type="button"
                                    class="selectionBtn btn btn-lg btn-apple mt-3 mb-2">{{ features[0] }}
                            </button>
                        </div>
                        <div class="col-md-6">
                            <button v-on:click="addElementToTrainingSet(features[1])" type="button"
                                    class="selectionBtn btn btn-lg btn-orange mt-3">{{ features[1] }}
                            </button>
                        </div>
                        <div class="col-md-12">
                            <hr>
                            <button v-on:click="setRandomElementFromTrainingSet" type="button"
                                    class="btn btn-lg btn-success">Φέρε και άλλο φρούτο!
                            </button>
                            <br><br>
                            <button v-on:click="resetState" type="button" class="btn btn-lg btn-info">Πάμε από την
                                αρχή...
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-8" v-if="tree">
                <div class="mt-3 text-center tree-container">
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
</template>

<script>
    import dt from './lib/decision-tree';
    import $ from 'jquery'

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
            getTrainingSet() {
                this.trainingSet = [];
                let instance = this;
                $.getJSON("set.json", function (object) {
                    instance.allData = object.data;
                    instance.features = object.features;
                    instance.setRandomElementFromTrainingSet();
                });
            },
            setRandomElementFromTrainingSet() {

                let newElement = this.element;
                while (this.element===newElement){ //choose another one
                    let index = Math.floor(Math.random() * this.allData.length);
                    newElement = this.allData[index];
                    this.element = this.allData[index];
                }

                if (this.trainingSet.length>0)
                    this.robotText ="Ωχ...Ένα φρούτο! Νομίζω ξέρω τί ειναι!"

            },
            addElementToTrainingSet(label) {
                this.trainingSet.unshift({
                    ...this.element,
                    // setting a unique id so that we can add the element multiple times in our training set
                    // and be able to use v-for to show the training set's contents.
                    id: Math.floor((Math.random() * 1000) + 1),
                    label: label
                });
                this.train();
            },
            resetState() {
                this.getTrainingSet();
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

    #main {
        margin: 0 5%;
    }

    .speech-bubble {
        position: relative;
        background: #673AB7;
        border-radius: .4em;
        padding: 10px;
        color: #FFFFFF;
        font-size: 18px;
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

    .robot-container, .training-set-container, .tree-container {
        padding: 20px;
        border-radius: 10px;
        border: 3px solid #3F51B5;
    }
    .training-set-container{
        height:400px;
        overflow: hidden;
        overflow-y:scroll;
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
            font-size: x-large;
        }
    }

    .tree-container {
        min-height: 400px;
    }

    .robot-container {
        height: 400px;
    }

    .robot-action {
        width: 150px;
    }

    .robot {
        img {
            width: 100%;
        }
    }

    .selectionBtn {
        width: 200px;
        height: 150px;
        font-size: xx-large;
    }

    .tree * {
        margin: 0;
        padding: 0;
    }

    .selectionContainer {
        text-align: center;

        .element-container {
            padding: 10px;
            border-radius: 10px;
            border: 3px solid #3F51B5;
            height: 400px;

            .img-container {
                height: 60%;
                width: 100%;
                text-align: center;
                img {
                    max-width: 100%;
                    max-height: 100%;
                    border-radius: 10px;
                }
            }

            .element-info-container {
                margin: 0 auto;
                padding: 20px;
            }

            .element-info {
                text-align: left;
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

</style>
