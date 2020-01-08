<template>
    <div id="allPages" class="big-box">
        <div class="border border-dark" style="height: 675px; width: 1200px">
            <transition name="fade" mode="out-in">
                <intro v-if="this.currentFrame == 0" v-on:complete="currentFrame = 1">
                </intro>
                <try-me v-if="this.currentFrame == 1" v-on:complete="currentFrame = 2">
                </try-me>
                <what-is-this v-bind:element="this.element" v-if="this.currentFrame == 2"
                              v-on:complete="currentFrame = 3">
                </what-is-this>
                <restart-frame v-bind:element="this.element" v-bind:features="this.features"
                               v-bind:add-element-to-training-set="this.addElementToTrainingSet"
                               v-if="this.currentFrame == 3"
                               v-on:finish="currentFrame = 10">
                </restart-frame>
                <basic-frame v-bind:last-training-input="this.lastTrainingInput" v-bind:element="this.element"
                             v-bind:features="this.features"
                             v-bind:add-element-to-training-set="this.addElementToTrainingSet"
                             v-bind:next-button="this.nextButton"
                             v-bind:robot-text="this.robotText"
                             v-bind:classify="this.classify"
                             v-if="this.currentFrame == 4"
                             v-on:finish="currentFrame = 10"
                             v-on:how-it-works="goToModelFrame">
                </basic-frame>
                <model-frame v-bind:element="this.element"
                             v-bind:robot-text="this.robotText"
                             v-bind:decision-tree="this.decisionTree"
                             v-if="this.currentFrame == 5"
                             v-on:finish="currentFrame = 10"
                             v-on:reset="resetState"
                             v-on:back="backButton">
                </model-frame>
                <outro v-if="this.currentFrame == 10" v-on:reload="reload">
                </outro>
            </transition>
        </div>
        <!--
        <h4>Τι έχω μάθει μέχρι τώρα:</h4>
        <div class="set-item row mt-3" v-for="item in trainingSet" :key="item.id">
            <div class="col-sm-3">
                <img class="img-thumb" :src="item.img">
            </div>
            <div class="col-sm-9 description">
                <p class="label">Αυτό είναι ένα <b>{{ item.label }}</b></p>
            </div>
        </div>-->
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
                decisionTree: null,
                currentFrame: 0,
                lastTrainingInput: null
            }
        },
        computed: {},
        methods: {
            reload() {
                this.trainingSet = [];
                this.decisionTree = null;
                this.element = null;
                this.lastTrainingInput = null;
                let instance = this;
                $.getJSON("set.json", function (object) {
                    instance.allData = object.data;
                    instance.features = object.features;
                    instance.fetchNextInstance();
                    if (instance.currentFrame == 10) {
                        instance.currentFrame = 3;
                    }
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
            },
            nextButton() {
                this.robotText = null;
                this.lastTrainingInput = null;
                this.fetchNextInstance();
                this.currentFrame = 4;
            },
            addElementToTrainingSet(label) {
                let found = false;
                let ts = this.trainingSet;
                for (let i = 0; i < ts.length; i++) {
                    if (this.element.id === ts[i].id) {
                        found = true;
                        ts[i].label = label;
                    }
                }
                if (!found) {
                    this.trainingSet.unshift({
                        ...this.element,
                        label: label
                    });
                }
                this.lastTrainingInput = label;
                this.train();
                this.currentFrame = 4;
            },
            resetState() {
                this.prediction = null;
                this.robotText = null;
                this.reload();
            },
            goToModelFrame() {
              this.classify();
              this.currentFrame = 5;
            },
            backButton() {
                if (this.decisionTree)
                    this.currentFrame = 4;
                else
                    this.currentFrame = 3;
            },
            train() {
                let config = {
                    trainingSet: this.trainingSet,
                    categoryAttr: 'label',
                    ignoredAttributes: ['img', 'id']
                };
                // Building Decision Tree
                this.decisionTree = new dt.DecisionTree(config);
                //this.tree = this.treeToHtml(this.decisionTree.root);
                this.robotText = null;
            },
            classify() {
                this.prediction = this.decisionTree.predict(this.element);
                this.robotText = this.prediction + " !";
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

    .cursor-pointer {
        cursor: pointer;
    }

    .big-box {
        display: flex;
        flex-flow: column;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    .board-div {
        position: relative;
        top: 31%;
        left: 14%;
        width: 49%;
        height: 27%;
    }

    .finish-btn {
        font-family: "Roboto";
        font-size: medium;
        background-color: #cc4549;
        border-style: solid;
        border-width: thin;
        border-color: #464d5f;
        color: white;
        width: 25%;
        height: auto;
        text-align: center;
    }

    .training-set-container {
        height: 350px;
        overflow: hidden;
        overflow-y: scroll;

        .description {
            padding: 0;
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
