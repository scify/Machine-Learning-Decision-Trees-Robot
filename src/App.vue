<template>
    <div id="allPages" class="big-box">
        <div class="border border-dark" style="height: 825px; width: 1350px">
            <transition name="fade" mode="out-in">
                <Intro v-if="this.currentFrame == 0"
                       v-bind:images="this.images"
                       v-on:complete="introExit" />
                <TryMe v-if="this.currentFrame == 1"
                       v-bind:images="this.images"
                       v-on:complete="tryMeExit" />
                <WhatIsThis v-if="this.currentFrame == 2"
                            v-bind:images="this.images"
                            v-bind:element="this.element"
                            v-on:complete="currentFrame = 3" />
                <BasicFrame v-if="this.currentFrame == 3"
                            v-bind:images="this.images"
                            v-bind:decisionTree="this.decisionTree"
                            v-bind:last-training-input="this.lastTrainingInput"
                            v-bind:element="this.element"
                            v-bind:features="this.features"
                            v-bind:add-element-to-training-set="this.addElementToTrainingSet"
                            v-bind:next-button="this.nextButton"
                            v-bind:robot-text="this.robotText"
                            v-bind:classify="this.classify"
                            v-on:finish="currentFrame = 10"
                            v-on:how-it-works="goToModel" />
                <Model v-if="this.currentFrame == 4"
                       v-bind:images="this.images"
                       v-bind:element="this.element"
                       v-bind:robot-text="this.robotText"
                       v-bind:decision-tree="this.decisionTree"
                       v-on:finish="currentFrame = 10"
                       v-on:reset="resetState"
                       v-on:back="backButton" />
                <Outro v-if="this.currentFrame == 10"
                       v-bind:images="this.images"
                       v-on:reload="reload" />
            </transition>
        </div>
        <div class="container mt-3 mb-2">
            <div class="row">
                <div class="col small p-0">
                    Created by <a href="https://www.scify.gr/site/en"
                                  target="_blank">SciFY</a> and
                    <a href="http://www.demokritos.gr/" target="_blank">NCSR Demokritos</a>
                </div>
            </div>
        </div>
        <cookies-consent></cookies-consent>
    </div>
</template>

<script>
import dt from "./lib/decision-tree";
import _ from "lodash";

export default {
    components: {
        Intro: () => import("./components/Intro"),
        TryMe: () => import("./components/TryMe"),
        WhatIsThis: () => import("./components/WhatIsThis"),
        BasicFrame: () => import("./components/BasicFrame"),
        Model: () => import("./components/Model"),
        Outro: () => import("./components/Outro"),
    },
    data() {
        return {
            images: {},
            jsonData: {},
            allData: [],
            trainingSet: [],
            element: null,
            prediction: null,
            features: [],
            robotText: null,
            decisionTree: null,
            currentFrame: 0,
            lastTrainingInput: null,
        };
    },
    watch: {
        "$i18n.locale": function() {
            this.reload();
        },
    },
    computed: {},
    methods: {
        preLoadImage(key, url) {
            if (!(key in this.images)) {
                this.images[key] = url;
                let img = new Image();
                img.src = url;
                img.onload = () => {
                };
            }
        },
        loadInitialImages() {
            this.preLoadImage("introBackground", "introFrame/bg.jpg");
            this.preLoadImage("introButton", this.$i18n.locale + "/introFrame/button-go.png");
            this.preLoadImage("introRobot", "introFrame/robot.png");
            this.preLoadImage("introText1", this.$i18n.locale + "/introFrame/text1.png");
            this.preLoadImage("introText2", this.$i18n.locale + "/introFrame/text2.png");
            this.preLoadImage("introText3", this.$i18n.locale + "/introFrame/text3.png");
            this.preLoadImage("demokritos", "demokritos.jpg");
            this.preLoadImage("scify", "SciFY.png");
            this.preLoadImage("tryMeBackground", "tryMeFrame/bg.jpg");
            this.preLoadImage("tryMeButton", this.$i18n.locale + "/tryMeFrame/buttonIcon.png");
            this.preLoadImage("robot-hi", "robot-hi.png");
            this.preLoadImage("text-bubble", "text-bubble.png");
        },
        introExit() {
            this.currentFrame = 1;
            this.preLoadImage("defaultBackground", "bg.jpg");
        },
        tryMeExit() {
            this.currentFrame = 2;
            this.preLoadImage("robotWithBoard", "robotWithBoard.png");
            this.preLoadImage("basicFrameRobot", "basicFrame/robot.png");
            this.preLoadImage("think", "think.png");
            this.preLoadImage("outroRobot", "outroFrame/robot.png");
        },
        async reload() {
            this.jsonData = await import("../public/" + this.$i18n.locale + "/set.json");
            this.trainingSet = [];
            this.decisionTree = null;
            this.element = null;
            this.lastTrainingInput = null;
            this.allData = this.jsonData.data ? this.jsonData.data : [];
            this.features = this.jsonData.features ? this.jsonData.features : [];
            this.fetchNextInstance();
            if (this.currentFrame === 10) {
                this.currentFrame = 0;
            }
            document.title = this.$t("page_title").toString();
        },
        fetchNextInstance() {

            if (this.allData.length > 0) {
                let currentElement = this.element;
                let newElementIndex = 0;
                if (currentElement !== null) {
                    let indexOfCurrentElement = _.findIndex(this.allData, function(o) {
                        return o.id === currentElement.id;
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
            this.currentFrame = 3;
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
                    label: label,
                });
            }
            this.lastTrainingInput = label;
            this.train();
            this.currentFrame = 3;
        },
        resetState() {
            this.prediction = null;
            this.robotText = null;
            this.reload();
        },
        goToModel() {
            this.classify();
            this.currentFrame = 4;
        },
        backButton() {
            this.currentFrame = 3;
        },
        train() {
            let config = {
                trainingSet: this.trainingSet,
                categoryAttr: "label",
                ignoredAttributes: ["img", "id"],
            };
            // Building Decision Tree
            this.decisionTree = new dt.DecisionTree(config);
            //this.tree = this.treeToHtml(this.decisionTree.root);
            this.robotText = null;
        },
        classify() {
            this.prediction = this.decisionTree.predict(this.element);
            this.robotText = this.prediction + " !";
        },
    },
    async mounted() {
        this.resetState();
        let urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("lang")) {
            const lang = urlParams.get("lang");
            if (lang === "el" || lang === "en") {
                this.$i18n.locale = lang;
            }
        }
        this.loadInitialImages();
        await this.reload();
    },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import "assets/custom";

html,
body {
    height: 100%;
    margin: 0;
}

.container {
    width: 1140px;
}

.cursor-pointer {
    cursor: pointer;
}

.big-box {
    display: flex;
    flex-flow: column;
    height: 90%;
    align-items: center;
    justify-content: center;
}

.board-div {
    position: relative;
    top: 31%;
    left: 14%;
    width: 68%;
    height: 27%;
}

.finish-btn {
    font-family: "Roboto", sans-serif;
    font-size: medium;
    background-color: #cc4549;
    border-style: solid;
    border-width: thin;
    border-color: #464d5f;
    color: white;
    width: 25%;
    height: auto;
    text-align: center;

    &:hover {
        cursor: pointer;
    }
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
