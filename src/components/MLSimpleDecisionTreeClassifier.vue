<template>
    <div class="row">
        <div class="col-md-3 mt-5">
            <h4 v-if="prediction">My prediction : {{ prediction }}</h4>
        </div>
        <div class="col-md-12 treeContainer mt-5">
            <div class="tree" v-html="tree"></div>
        </div>

    </div>
</template>
<script>
    import dt from '../lib/decision-tree';

    export default {
        props: [
            'trainingSet',
            'element'
        ],
        components: {
        },
        data() {
            return {
                tree: null,
                prediction: null
            }
        },
        computed: {
        },
        methods: {
            classify() {
                // Configuration
                let config = {
                    trainingSet: this.trainingSet,
                    categoryAttr: 'label',
                    ignoredAttributes: ['img']
                };

                // Building Decision Tree
                let decisionTree = new dt.DecisionTree(config);

                // Testing Decision Tree and Random Forest
                let toPredict = this.element;

                this.prediction = decisionTree.predict(toPredict);
                console.log("tree", decisionTree);
                console.log("prediction", this.prediction);

                this.tree = this.treeToHtml(decisionTree.root);
            },
            treeToHtml(tree) {
                // only leafs containing category
                if (tree.category) {
                    return  ['<ul>',
                        '<li>',
                        '<a href="#">',
                        '<b>', tree.category, '</b>',
                        '</a>',
                        '</li>',
                        '</ul>'].join('');
                }

                return  ['<ul>',
                    '<li>',
                    '<a href="#">',
                    '<b>', tree.attribute, ' ', tree.predicateName, ' ', tree.pivot, ' ?</b>',
                    '</a>',
                    '<ul>',
                    '<li>',
                    '<a href="#">yes</a>',
                    this.treeToHtml(tree.match),
                    '</li>',
                    '<li>',
                    '<a href="#">no</a>',
                    this.treeToHtml(tree.notMatch),
                    '</li>',
                    '</ul>',
                    '</li>',
                    '</ul>'].join('');
            }
        },
        mounted() {
            if(this.trainingSet.length) {
                this.classify();
            }
        },
        watch: {
            // whenever the cluster prop changes, this function will run
            trainingSet: function (newTrainingSet, oldTrainingSet) {
                if(newTrainingSet.length) {
                    this.trainingSet = newTrainingSet;
                    this.classify();
                }
            }
        }
    }
</script>
<style lang="scss">

    .treeContainer {
        text-align: center;
    }
</style>