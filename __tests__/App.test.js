import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueI18n from "vue-i18n";
import App from "@/App.vue";
import { languages } from "@/i18n";
const messages = Object.assign(languages);

describe("App.vue", () => {
	let wrapper;
	let localVue;

	beforeEach(() => {
		localVue = createLocalVue();
		localVue.use(VueI18n);
		const i18n = new VueI18n({
			locale: "en", // set locale
			fallbackLocale: "el",
			messages, // set locale messages
		});

		wrapper = shallowMount(App, {
			localVue,
			i18n,
		});
	});

	it("initializes with correct elements", () => {
		expect(wrapper.vm.currentFrame).toBe(0);
		expect(wrapper.vm.images).toEqual({
			demokritos: "demokritos.jpg",
			introBackground: "introFrame/bg.jpg",
			introButton: "en/introFrame/button-go.png",
			introRobot: "introFrame/robot.png",
			introText1: "en/introFrame/text1.png",
			introText2: "en/introFrame/text2.png",
			introText3: "en/introFrame/text3.png",
			"robot-hi": "robot-hi.png",
			scify: "SciFY.png",
			"text-bubble": "text-bubble.png",
			tryMeBackground: "tryMeFrame/bg.jpg",
			tryMeButton: "en/tryMeFrame/buttonIcon.png",
		});
		expect(wrapper.vm.jsonData).toEqual({
			data: [
				{
					color: "red",
					id: 1,
					img: "instances/apple_red_50_yes.jpg",
					stem: true,
					weight: 50,
				},
				{
					color: "green",
					id: 2,
					img: "instances/orange_green_35_yes.jpg",
					stem: true,
					weight: 35,
				},
				{
					color: "golden",
					id: 3,
					img: "instances/apple_gold_150_no.jpg",
					stem: false,
					weight: 150,
				},
				{
					color: "orange",
					id: 4,
					img: "instances/orange_orange_56_yes.jpg",
					stem: true,
					weight: 56,
				},
				{
					color: "orange",
					id: 5,
					img: "instances/orange_orange_80_no.jpg",
					stem: false,
					weight: 80,
				},
				{
					color: "red",
					id: 6,
					img: "instances/apple_red_45_yes.jpg",
					stem: true,
					weight: 45,
				},
				{
					color: "red",
					id: 7,
					img: "instances/apple_red_65_yes.jpg",
					stem: true,
					weight: 65,
				},
				{
					color: "orange",
					id: 8,
					img: "instances/orange_orange_37_no.jpg",
					stem: false,
					weight: 37,
				},
				{
					color: "green",
					id: 9,
					img: "instances/apple_green_50_yes.jpg",
					stem: true,
					weight: 50,
				},
				{
					color: "orange",
					id: 10,
					img: "instances/orange_orange_62_no.jpg",
					stem: false,
					weight: 62,
				},
			],
			default: {
				data: [
					{
						color: "red",
						id: 1,
						img: "instances/apple_red_50_yes.jpg",
						stem: true,
						weight: 50,
					},
					{
						color: "green",
						id: 2,
						img: "instances/orange_green_35_yes.jpg",
						stem: true,
						weight: 35,
					},
					{
						color: "golden",
						id: 3,
						img: "instances/apple_gold_150_no.jpg",
						stem: false,
						weight: 150,
					},
					{
						color: "orange",
						id: 4,
						img: "instances/orange_orange_56_yes.jpg",
						stem: true,
						weight: 56,
					},
					{
						color: "orange",
						id: 5,
						img: "instances/orange_orange_80_no.jpg",
						stem: false,
						weight: 80,
					},
					{
						color: "red",
						id: 6,
						img: "instances/apple_red_45_yes.jpg",
						stem: true,
						weight: 45,
					},
					{
						color: "red",
						id: 7,
						img: "instances/apple_red_65_yes.jpg",
						stem: true,
						weight: 65,
					},
					{
						color: "orange",
						id: 8,
						img: "instances/orange_orange_37_no.jpg",
						stem: false,
						weight: 37,
					},
					{
						color: "green",
						id: 9,
						img: "instances/apple_green_50_yes.jpg",
						stem: true,
						weight: 50,
					},
					{
						color: "orange",
						id: 10,
						img: "instances/orange_orange_62_no.jpg",
						stem: false,
						weight: 62,
					},
				],
				features: ["Apple", "Orange"],
			},
			features: ["Apple", "Orange"],
		});
		expect(wrapper.vm.allData).toEqual([
			{
				color: "red",
				id: 1,
				img: "instances/apple_red_50_yes.jpg",
				stem: true,
				weight: 50,
			},
			{
				color: "green",
				id: 2,
				img: "instances/orange_green_35_yes.jpg",
				stem: true,
				weight: 35,
			},
			{
				color: "golden",
				id: 3,
				img: "instances/apple_gold_150_no.jpg",
				stem: false,
				weight: 150,
			},
			{
				color: "orange",
				id: 4,
				img: "instances/orange_orange_56_yes.jpg",
				stem: true,
				weight: 56,
			},
			{
				color: "orange",
				id: 5,
				img: "instances/orange_orange_80_no.jpg",
				stem: false,
				weight: 80,
			},
			{
				color: "red",
				id: 6,
				img: "instances/apple_red_45_yes.jpg",
				stem: true,
				weight: 45,
			},
			{
				color: "red",
				id: 7,
				img: "instances/apple_red_65_yes.jpg",
				stem: true,
				weight: 65,
			},
			{
				color: "orange",
				id: 8,
				img: "instances/orange_orange_37_no.jpg",
				stem: false,
				weight: 37,
			},
			{
				color: "green",
				id: 9,
				img: "instances/apple_green_50_yes.jpg",
				stem: true,
				weight: 50,
			},
			{
				color: "orange",
				id: 10,
				img: "instances/orange_orange_62_no.jpg",
				stem: false,
				weight: 62,
			},
		]);
		expect(wrapper.vm.trainingSet).toEqual([]);
		expect(wrapper.vm.element).toEqual({
			color: "red",
			id: 1,
			img: "instances/apple_red_50_yes.jpg",
			stem: true,
			weight: 50,
		});
		expect(wrapper.vm.prediction).toBeNull();
		expect(wrapper.vm.features).toEqual(["Apple", "Orange"]);
		expect(wrapper.vm.robotText).toBeNull();
		expect(wrapper.vm.decisionTree).toBeNull();
		expect(wrapper.vm.lastTrainingInput).toBeNull();
	});

	it("changes frame on introExit", () => {
		wrapper.vm.introExit();
		expect(wrapper.vm.currentFrame).toBe(1);
	});

	it("changes frame on tryMeExit", () => {
		wrapper.vm.tryMeExit();
		expect(wrapper.vm.currentFrame).toBe(2);
	});

	it("changes frame on nextButton", () => {
		wrapper.vm.nextButton();
		expect(wrapper.vm.currentFrame).toBe(3);
	});

	it("changes frame on backButton", () => {
		wrapper.vm.backButton();
		expect(wrapper.vm.currentFrame).toBe(3);
	});

	it("resets state on resetState", async () => {
		await wrapper.vm.resetState();
		expect(wrapper.vm.currentFrame).toBe(0);
		expect(wrapper.vm.prediction).toBeNull();
		expect(wrapper.vm.robotText).toBeNull();
	});
});
