<template>
    <div class="container mt-5" id="main">
        <div class="selectionContainer" v-if="element">
            <div class="row">
                <div class="col-md-6 img">
                    <img :src="element.img">
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-3 m-auto">
                    <button v-on:click="addElementToTrainingSet(features[0])" type="button" class="btn btn-lg btn-outline-primary float-left">{{ features[0] }}</button>
                    <button v-on:click="addElementToTrainingSet(features[1])" type="button" class="btn btn-lg btn-outline-primary float-right">{{ features[1] }}</button>
                </div>
            </div>
        </div>
        <div class="mt-5 text-center">
            <!--<ml-cart-classifier v-bind:training-set="trainingSet"></ml-cart-classifier>-->
            <ml-simple-dt-classifier v-bind:training-set="trainingSet" v-bind:element="element"></ml-simple-dt-classifier>
        </div>

    </div>
</template>

<script>
    import MLSimpleDecisionTreeClassifier from "./components/MLSimpleDecisionTreeClassifier";
    import $ from 'jquery'

    export default {
        components: {
            MLSimpleDecisionTreeClassifier
        },
        data() {
            return {
                allData: [],
                trainingSet: [],
                element: null,
                features: []
            }
        },
        computed: {},
        methods: {
            getTrainingSet() {
                let instance = this;
                $.getJSON("set.json", function (object) {
                    instance.allData = object.data;
                    instance.features = object.features;
                    instance.setRandomElementFromTrainingSet();
                    console.log(instance.element);
                });
            },
            setRandomElementFromTrainingSet() {
                let index = Math.floor(Math.random() * this.allData.length);
                this.element = this.allData[index];
            },
            addElementToTrainingSet(label) {
                this.element.label = label;
                this.trainingSet.push(this.element);
                this.setRandomElementFromTrainingSet();
                console.log(this.trainingSet);
            }
        },
        mounted() {
            this.getTrainingSet();
        }
    }
</script>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap';
    @import '~bootstrap-vue/dist/bootstrap-vue.css';

    #main {

    }

    .tree * {
        margin: 0;
        padding: 0;
    }

    .selectionContainer {

        text-align: center;

        .col-md-6 {
            margin-left: auto;
            margin-right: auto;
        }

        img {
            height: 250px;
            padding: 15px;
            border-radius: 10px;
            border: 3px solid #3F51B5;
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
        font-family: arial, verdana, tahoma;
        font-size: 12px;
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
