<template>
    <div class="container">
        <div class="tree" v-html="tree"></div>
    </div>
</template>
<script>
    import Matrix from 'ml-matrix';
    import {DecisionTreeClassifier as DTClassifier} from 'ml-cart';

    export default {
        props: [
            'trainingSet'
        ],
        components: {
        },
        data() {
            return {
                tree: null
            }
        },
        computed: {

        },
        methods: {
            transformToMatrix(listOfFeatureMaps, classFieldName, ignoreFields = []) {
                let instance = this;
                let listOfVectors = listOfFeatureMaps.map((elem) => instance.transformFeatureMapToVector(elem, classFieldName, ignoreFields));

                //console.log("List of vectors:", listOfVectors);
                // Add everything except for class
                return new Matrix(listOfVectors);
            },
            transformFeatureMapToVector(featureMap, classFieldName, ignoreFields) {
                // console.log("ignoreFields", ignoreFields);
                let returnVal = [];
                // For every field, if it is not the class field, and it is not in the ignore list
                // and it is a number
                // add its value to the result list
                Object.keys(featureMap).map((key, index) => {
                    let val = featureMap[key];
                    //console.log("Type of " + key + " field (" + val + "):", typeof(val));

                    if ((key !== classFieldName) && (ignoreFields.indexOf(key) < 0) && (typeof(val) === "number"))
                    {
                        //console.log("Pushing " + key + " with value ", val);
                        returnVal.push(val);
                    }

                    // Throw warning for non-numbers
                    if (typeof(val) !== "number" && (key !== classFieldName) && (ignoreFields.indexOf(key) < 0)) {
                        console.log("Ignoring field " + key + " due to non numeric value: ", val );
                    }
                });

                return returnVal;
            },
            getUniqueClasses(listOfFeatureMaps, classFieldName) {
                // Keep a list of all the UNIQUE classes
                let classEntries = [];
                // For each item
                listOfFeatureMaps.map((elem) => {
                    // If it its class is NOT contained in the entries, add it to the class entries list
                    if (classEntries.indexOf(elem[classFieldName]) < 0)
                        classEntries.push(elem[classFieldName]);
                });

                return classEntries;
            },
            getClassVectorFromFeatureMap(listOfFeatureMaps, classFieldName) {

                let classEntries = this.getUniqueClasses(listOfFeatureMaps, classFieldName);
                // For each feature maps
                // Get the index of the feature class in the classEntries array
                return listOfFeatureMaps.map((elem) => classEntries.indexOf(elem[classFieldName]));
            },
            getClassesFromVector(listOfFeatureMaps, classFieldName, predictionsVector) {
                let classEntries  = this.getUniqueClasses(listOfFeatureMaps, classFieldName);
                return predictionsVector.map((classNum) => classEntries[classNum]);
            },
            getFieldNameForIndex(idx, listOfFeatureMaps, classFieldName, ignoreFields = []) {
                // Get first instance (since fields are the same everywhere)
                let featureMap = listOfFeatureMaps[0];
                let returnKey;
                Object.keys(featureMap).map((key, index) => {
                    let val = featureMap[key];
                    if ((key !== classFieldName) && (ignoreFields.indexOf(key) < 0) && (typeof(val) === "number")
                        && (idx === index)) {
                        returnKey = key;
                    }
                });

                return returnKey;

            },
            getLeafLabel(probs, labels) {
                let htmlText = "";
                let iCnt = 0;
                // For each probability
                for (let p in probs) {
                    // Get corresponding class
                    let sClass = labels[iCnt];
                    htmlText += "- " + sClass + ":" + p + " -";

                    iCnt++;
                }
                return htmlText;
            },
            treeToHtml(treeNode, listOfFeatureMaps, classFieldName, ignoreFields = []) {
                if(treeNode === undefined)
                    return 'none';
                // only leafs containing category
                if ((treeNode.left === undefined) && (treeNode.right === undefined)) {
                    console.log("calc prediction", this.getLeafLabel(treeNode.distribution.getRow(0), this.getUniqueClasses(listOfFeatureMaps, classFieldName)));

                    return  ['<ul>',
                        '<li>',
                        '<a href="#">',
                        '<b>', this.getLeafLabel(treeNode.distribution.getRow(0), this.getUniqueClasses(listOfFeatureMaps, classFieldName)), '</b>',
                        '</a>',
                        '</li>',
                        '</ul>'].join('');
                }

                return  ['<ul>',
                    '<li>',
                    '<a href="#">',
                    '<b>', this.getFieldNameForIndex(treeNode.splitColumn, listOfFeatureMaps, classFieldName, ignoreFields), ' ', "<", ' ', treeNode.splitValue, ' ?</b>',
                    '</a>',
                    '<ul>',
                    '<li>',
                    '<a href="#">yes</a>',
                    this.treeToHtml(treeNode.left, listOfFeatureMaps, classFieldName, ignoreFields),
                    '</li>',
                    '<li>',
                    '<a href="#">no</a>',
                    this.treeToHtml(treeNode.right, listOfFeatureMaps, classFieldName, ignoreFields),
                    '</li>',
                    '</ul>',
                    '</li>',
                    '</ul>'].join('');
            },
            classify() {
                console.log("training set ", this.trainingSet);
                let trainingMatrix = this.transformToMatrix(this.trainingSet, 'sex');
                let classVector = this.getClassVectorFromFeatureMap(this.trainingSet, 'sex');

                console.log("Training matrix:", trainingMatrix);
                console.log("Class vector:", classVector);

                let options = {
                    gainFunction: 'gini',
                    maxDepth: 2,
                    minNumSamples: 10
                };

                let predictions = classVector;
                console.log(predictions);
                let classifier = new DTClassifier(options);
                classifier.train(trainingMatrix, predictions);
                console.log("JSON", classifier.toJSON());
                let result = classifier.predict(trainingMatrix);
                console.log("result", result);
                this.tree = this.treeToHtml(classifier.root, this.trainingSet, 'sex');
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
</style>