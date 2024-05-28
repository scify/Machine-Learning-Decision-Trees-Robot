<template>
	<div class="tree mt-3" v-html="this.treeAsHtml"></div>
</template>

<script>
export default {
	props: ["decisionTree"],
	components: {},
	data() {
		return {};
	},
	computed: {
		treeAsHtml: function () {
			if (this.decisionTree == null) return [].join("");
			else return this.treeToHtml(this.decisionTree.root);
		},
	},
	methods: {
		treeToHtml(tree) {
			// only leafs containing category
			if (tree.category) {
				return ["<ul>", "<li>", '<a href="#">', "<b>", tree.category, "</b>", "</a>", "</li>", "</ul>"].join(
					"",
				);
			}

			return [
				"<ul>",
				"<li>",
				'<a href="#">',
				"<b>",
				tree.attribute,
				" ",
				tree.predicateName,
				" ",
				tree.pivot,
				" ?</b>",
				"</a>",
				"<ul>",
				"<li>",
				'<a href="#">' + this.$t("yes") + "</a>",
				this.treeToHtml(tree.match),
				"</li>",
				"<li>",
				'<a href="#">' + this.$t("no") + "</a>",
				this.treeToHtml(tree.notMatch),
				"</li>",
				"</ul>",
				"</li>",
				"</ul>",
			].join("");
		},
	},
	mounted() {},
};
</script>

<style lang="scss">
.tree-container.box {
	min-height: 350px;
	height: auto;
}

.tree * {
	margin: 0;
	padding: 0;
}

.box {
	padding: 20px;
	border-radius: 10px;
	border: 3px solid #3f51b5;
	min-height: 350px;
	margin-bottom: 20px;
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

.tree li::before,
.tree li::after {
	content: "";
	position: absolute;
	top: 0;
	right: 50%;
	border-top: 1px solid #3f51b5;
	width: 50%;
	height: 20px;
}

.tree li::after {
	right: auto;
	left: 50%;
	border-left: 1px solid #3f51b5;
}

/*We need to remove left-right connectors from elements without
     any siblings*/
.tree li:only-child::after,
.tree li:only-child::before {
	display: none;
}

/*Remove space from the top of single children*/
.tree li:only-child {
	padding-top: 0;
}

/*Remove left connector from first child and
     right connector from last child*/
.tree li:first-child::before,
.tree li:last-child::after {
	border: 0 none;
}

/*Adding back the vertical connector to the last nodes*/
.tree li:last-child::before {
	border-right: 1px solid #3f51b5;
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
	content: "";
	position: absolute;
	top: 0;
	left: 50%;
	border-left: 1px solid #3f51b5;
	width: 0;
	height: 20px;
}

.tree li a {
	border: 1px solid #9c27b0;
	padding: 5px 10px;
	text-decoration: none;
	color: #2196f3;
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
.tree li a:hover,
.tree li a:hover + ul li a {
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
