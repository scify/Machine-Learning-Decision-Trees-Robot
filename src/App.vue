<template>
    <div id="allPages" class="big-box">
        <div id="intro" class="border border-dark" style="display: block; height: 675px; width: 1200px"
             :style="{ backgroundImage: `url(intro/bg.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}">
            <div class="start-button-intro">
                <img src="intro/button-go.png" class="img-fluid" v-on:click="goToFrame1">
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
            <div class="container h-100 ">
                <div class="row h-100">
                    <div class="col-3 h-100"></div>
                    <div class="col-6 h-100">
                        <div class="container h-100">
                            <div class="row h-25 d-flex justify-content-center">
                                <div :style="{backgroundImage: `url(text-bubble.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}"
                                     class="h-100 w-100 bubble-position">
                                    <div class="text-box-frame1 d-flex justify-content-start align-content-center">
                                        <div class="align-self-center">
                                            <span class="yellowText">Γειά! Είμαι ο Θαλής!</span>
                                            <br>
                                            <span class="whiteText">Αυτή τη στιγμή δε γνωρίζω τίποτα,<br>αλλά έχω την ικανότητα να μαθαίνω!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row h-75">
                                <div class="container h-100">
                                    <div class="row h-100">
                                        <div class="h-100 col-6">
                                            <img src="frame1/robot-hi.png" class="robot-hi-frame1">
                                        </div>
                                        <div class="h-100 col-6 d-flex justify-content-center">
                                            <div class="align-self-center">
                                                <img src="frame1/buttonIcon.png" class="button-frame1 img-fluid"
                                                     v-on:click="goToFrame2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 h-100"></div>
                </div>
            </div>
        </div>
        <div id="frame2" class="border border-dark" style="display: none; height: 675px; width: 1200px"
             :style="{ backgroundImage: `url(bg.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
            <div class="container h-100 ">
                <div class="row h-100">
                    <div class="col-5 h-100">
                        <div class="container h-100 col-12 no-gutters p-0">
                            <div class="row h-25 p-0 col-12  no-gutters p-0">
                                <div class="h-100 col-12 p-0">
                                    <div :style="{backgroundImage: `url(text-bubble.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}"
                                         class="h-100 w-100 bubble-position">
                                        <div class="text-box d-flex justify-content-center align-content-center">
                                            <div class="align-self-center">
                                                <span class="yellowText">Γειά! Είμαι ο Θαλής!</span>
                                                <br>
                                                <span class="whiteText">Αυτή τη στιγμή δε γνωρίζω τίποτα,<br>αλλά έχω την ικανότητα να μαθαίνω!</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row h-75">
                                <div class="container h-100">
                                    <div class="row h-100 d-flex justify-content-center">
                                        <div class="h-100 col-11"
                                             :style="{backgroundImage: `url(frame2/robot-hi.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-7 h-100 container d-flex justify-content-center flex-column element-container">
                        <div class="row d-flex justify-content-center align-content-center align-self-center box-grey"
                             v-if="element">
                            <div class="h-100 col-6 no-gutters pl-0 border-grey-box d-flex justify-content-center">
                                <div class="pl-3 align-self-center"><img :src="element.img" class="img-fluid"></div>
                            </div>
                            <div class="h-100 col-6 no-gutters pl-0 d-flex justify-content-center align-content-center">
                                <div class="element-info-container align-self-center">
                                    <div class="element-info">
                                        <p>Χρώμα: <b>{{ element.χρώμα }}</b></p>
                                        <br>
                                        <p>Βάρος: <b>{{ element.βάρος }} γρ.</b></p>
                                        <br>
                                        <p>Κοτσάνι: <b>{{ element.κοτσάνι ? 'Ναι' : 'Όχι' }}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center align-content-center" style="height: 10%">
                            <div class="col-4 h-100 align-self-center pt-4">
                                <button class="btn orange-btn" v-on:click="goToFrame3"><i>Θαλή; Τι είναι αυτό;</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="frame3" class="border border-dark" style="display: none; height: 675px; width: 1200px"
             :style="{ backgroundImage: `url(bg.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
            <div class="container h-100 ">
                <div class="row h-100">
                    <div class="col-5 h-100">
                        <div class="container h-100 col-12 no-gutters p-0">
                            <div class="row h-25 p-0 col-12  no-gutters p-0">
                                <div class="h-100 col-12 p-0">
                                    <div :style="{backgroundImage: `url(text-bubble.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}"
                                         class="h-100 w-100 bubble-position">
                                        <div class="text-box d-flex justify-content-center align-content-center">
                                            <div class="align-self-center">
                                                <span class="whiteText">Πρώτη φορά βλέπω κάτι τέτοιο!</span>
                                                <br>
                                                <span class="yellowText">Βοήθησέ με να μάθω!</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row h-75">
                                <div class="container h-100">
                                    <div class="row h-100 d-flex justify-content-center">
                                        <div class="h-100 col-11"
                                             :style="{backgroundImage: `url(robotWithBoard.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                            <div class="board-div d-flex justify-content-center">
                                                <div class="align-self-center board-text">?</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-7 h-100 container d-flex justify-content-center flex-column element-container">
                        <div class="row d-flex justify-content-center align-content-center align-self-center"
                             style="width: 100%; height: 10%">
                        </div>
                        <div class="row d-flex justify-content-center align-content-center align-self-center box-grey"
                             v-if="element">
                            <div class="h-100 col-6 no-gutters pl-0 border-grey-box d-flex justify-content-center">
                                <div class="pl-3 align-self-center col-11"><img :src="element.img" class="img-fluid">
                                </div>
                            </div>
                            <div class="h-100 col-6 no-gutters pl-0 d-flex justify-content-center align-content-center">
                                <div class="element-info-container align-self-center">
                                    <div class="element-info">
                                        <p>Χρώμα: <b>{{ element.χρώμα }}</b></p>
                                        <br>
                                        <p>Βάρος: <b>{{ element.βάρος }} γρ.</b></p>
                                        <br>
                                        <p>Κοτσάνι: <b>{{ element.κοτσάνι ? 'Ναι' : 'Όχι' }}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="height: 1%"></div>
                        <div class="row d-flex justify-content-center align-content-center align-self-center box-bottom"
                             v-if="element">
                            <div class="col-8 h-100 d-flex justify-content-start flex-column">
                                <div class="row text-frame3-1 align-self-center"><b>Εκπαίδευσε το Θαλή!</b></div>
                                <div class="row text-frame3-2 align-self-center"><b>Τι αφορά η παραπάνω εικόνα;</b>
                                </div>
                                <div class="row element-container">
                                    <div class="row align-self-center col-12 no-gutters">
                                        <div class="col-6" style="padding-left: 0; padding-right: 4px">
                                            <button v-on:click="addElementToTrainingSet(features[0])" type="button"
                                                    class="selectionBtn btn btn-apple mt-1 mb-1">{{ features[0] }}
                                            </button>
                                        </div>
                                        <div class="col-6" style="padding-right: 0; padding-left: 4px">
                                            <button v-on:click="addElementToTrainingSet(features[1])" type="button"
                                                    class="selectionBtn btn btn-orange mt-1">{{ features[1] }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-end align-content-center"
                             style="width: 100%; height: 10%">
                            <div class="finish-btn align-self-center" v-on:click="finishButton">ΤΕΛΟΣ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="frame4" class="border border-dark" style="display: none; height: 675px; width: 1200px"
             :style="{ backgroundImage: `url(bg.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
            <div class="container h-100 ">
                <div class="row h-100">
                    <div class="col-5 h-100">
                        <div class="container h-100 col-12 no-gutters p-0">
                            <div class="row h-25 p-0 col-12  no-gutters p-0">
                                <div class="h-100 col-12 p-0">
                                    <div :style="{backgroundImage: `url(text-bubble.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}"
                                         class="h-100 w-100 bubble-position">
                                        <div class="text-box d-flex justify-content-center align-content-center">
                                            <div class="align-self-center" v-if="lastTrainingInput">
                                                <span class="whiteText">Ώστε είναι ένα </span>
                                                <span class="yellowText">{{ lastTrainingInput }} </span>
                                                <span class="whiteText">!</span>
                                            </div>
                                            <div class="align-self-center" v-else>
                                                <span class="whiteText">Νομίζω ότι ξέρω τι είναι!</span>
                                                <br>
                                                <span class="yellowText">Να σου πω;</span>
                                                <span class="predict-btn" v-on:click="goToFrame5">ΝΑΙ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row h-75">
                                <div class="container h-100">
                                    <div class="row h-100 d-flex justify-content-center">
                                        <div class="h-100 col-11"
                                             :style="{backgroundImage: `url(frame4/robot.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                            <div class="think" v-on:click="goToFrame6"><img src="think.png"
                                                                                            class="img-fluid"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-7 h-100 container d-flex justify-content-center flex-column element-container">
                        <div class="row d-flex justify-content-center align-content-center align-self-center"
                             style="width: 100%; height: 10%">
                            <div class="next-btn align-self-center" v-on:click="nextButton">Φέρε και άλλο φρούτο!
                                >>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center align-content-center align-self-center box-grey"
                             v-if="element">
                            <div class="h-100 col-6 no-gutters pl-0 border-grey-box d-flex justify-content-center">
                                <div class="pl-3 align-self-center col-11"><img :src="element.img" class="img-fluid">
                                </div>
                            </div>
                            <div class="h-100 col-6 no-gutters pl-0 d-flex justify-content-center align-content-center">
                                <div class="element-info-container align-self-center">
                                    <div class="element-info">
                                        <p>Χρώμα: <b>{{ element.χρώμα }}</b></p>
                                        <br>
                                        <p>Βάρος: <b>{{ element.βάρος }} γρ.</b></p>
                                        <br>
                                        <p>Κοτσάνι: <b>{{ element.κοτσάνι ? 'Ναι' : 'Όχι' }}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="height: 1%"></div>
                        <div class="row d-flex justify-content-center align-content-center align-self-center box-bottom"
                             v-if="element">
                            <div class="col-8 h-100 d-flex justify-content-start flex-column">
                                <div class="row text-frame3-1 align-self-center"><b>Εκπαίδευσε το Θαλή!</b></div>
                                <div class="row text-frame3-2 align-self-center"><b>Τι αφορά η παραπάνω εικόνα;</b>
                                </div>
                                <div class="row element-container">
                                    <div class="row align-self-center col-12 no-gutters">
                                        <div class="col-6" style="padding-left: 0; padding-right: 4px">
                                            <button v-on:click="addElementToTrainingSet(features[0])" type="button"
                                                    class="selectionBtn btn btn-apple mt-1 mb-1">{{ features[0] }}
                                            </button>
                                        </div>
                                        <div class="col-6" style="padding-right: 0; padding-left: 4px">
                                            <button v-on:click="addElementToTrainingSet(features[1])" type="button"
                                                    class="selectionBtn btn btn-orange mt-1">{{ features[1] }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-end align-content-center"
                             style="width: 100%; height: 10%">
                            <div class="finish-btn align-self-center" v-on:click="finishButton">ΤΕΛΟΣ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="frame5" class="border border-dark" style="display: none; height: 675px; width: 1200px"
             :style="{ backgroundImage: `url(bg.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
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
                                             :style="{backgroundImage: `url(robotWithBoard.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                            <div class="think" v-on:click="goToFrame6"><img src="think.png"
                                                                                            class="img-fluid"></div>
                                            <div class="board-div d-flex justify-content-center">
                                                <div class="align-self-center board-text">
                                                    <robot-assistant v-bind:saying="robotText"></robot-assistant>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-7 h-100 container d-flex justify-content-center flex-column element-container">
                        <div class="row d-flex justify-content-center align-content-center align-self-center"
                             style="width: 100%; height: 10%">
                            <div class="next-btn align-self-center" v-on:click="nextButton">Φέρε και άλλο φρούτο!
                                >>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center align-content-center align-self-center box-grey"
                             v-if="element">
                            <div class="h-100 col-6 no-gutters pl-0 border-grey-box d-flex justify-content-center">
                                <div class="pl-3 align-self-center col-11"><img :src="element.img" class="img-fluid">
                                </div>
                            </div>
                            <div class="h-100 col-6 no-gutters pl-0 d-flex justify-content-center align-content-center">
                                <div class="element-info-container align-self-center">
                                    <div class="element-info">
                                        <p>Χρώμα: <b>{{ element.χρώμα }}</b></p>
                                        <br>
                                        <p>Βάρος: <b>{{ element.βάρος }} γρ.</b></p>
                                        <br>
                                        <p>Κοτσάνι: <b>{{ element.κοτσάνι ? 'Ναι' : 'Όχι' }}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="height: 1%"></div>
                        <div class="row d-flex justify-content-center align-content-center align-self-center box-bottom"
                             v-if="element">
                            <div class="col-8 h-100 d-flex justify-content-start flex-column">
                                <div class="row text-frame3-1 align-self-center"><b>Εκπαίδευσε το Θαλή!</b></div>
                                <div class="row text-frame3-2 align-self-center"><b>Τι αφορά η παραπάνω εικόνα;</b>
                                </div>
                                <div class="row element-container">
                                    <div class="row align-self-center col-12 no-gutters">
                                        <div class="col-6" style="padding-left: 0; padding-right: 4px">
                                            <button v-on:click="addElementToTrainingSet(features[0])" type="button"
                                                    class="selectionBtn btn btn-apple mt-1 mb-1">{{ features[0] }}
                                            </button>
                                        </div>
                                        <div class="col-6" style="padding-right: 0; padding-left: 4px">
                                            <button v-on:click="addElementToTrainingSet(features[1])" type="button"
                                                    class="selectionBtn btn btn-orange mt-1">{{ features[1] }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-end align-content-center"
                             style="width: 100%; height: 10%">
                            <div class="finish-btn align-self-center" v-on:click="finishButton">ΤΕΛΟΣ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="frame6" class="border border-dark" style="display: none; height: 675px; width: 1200px"
             :style="{ backgroundImage: `url(bg.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
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
                                             :style="{backgroundImage: `url(robotWithBoard.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                            <div class="board-div d-flex justify-content-center">
                                                <div class="align-self-center board-text">
                                                    <div class="w-100 text-center">ΠΩΣ</div>
                                                    <div class="w-100 text-center">ΣΚΕΦΤΟΜΑΙ</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-7 h-100 container d-flex justify-content-center flex-column element-container">
                        <div class="row d-flex justify-content-center align-content-center model-box">
                            <div class="row col-12 h-25 justify-content-center p-3">
                                <div class="col-12 h-75 container">
                                    <div class="col-12 row h-100 justify-content-center align-content-center"
                                         v-if="decisionTree">
                                        <div class="col-4 h-100 d-flex justify-content-center align-content-center">
                                            <img :src="element.img" style="height: 100%;width: auto">
                                        </div>
                                        <div class="col-6 h-100 d-flex justify-content-center align-content-center">
                                            <div class="text-frame6 text-center align-self-center">
                                                Αυτό είναι ένα: <b>
                                                <robot-assistant v-bind:saying="robotText"></robot-assistant>
                                            </b>
                                            </div>
                                        </div>
                                        <div class="col-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row col-12 h-75 justify-content-center">
                                <div class="tree mt-3" v-html="tree"></div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-between align-content-center"
                             style="width: 100%; height: 10%">
                            <div class="back-btn align-self-center" v-on:click="backButton">ΕΠΙΣΤΡΟΦΗ</div>
                            <div class="forget-btn align-self-center" v-on:click="resetState">ΞΕΧΑΣΕ</div>
                            <div class="finish-btn align-self-center" v-on:click="finishButton">ΤΕΛΟΣ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="outro" class="border border-dark" style="display: none; height: 675px; width: 1200px"
             :style="{ backgroundImage: `url(bg.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
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
                                             :style="{backgroundImage: `url(outro/robot.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-7 h-100 container d-flex justify-content-center flex-column element-container">
                        <div class="row d-flex justify-content-center align-content-center model-box">
                            <div class="row col-12 h-25 justify-content-center p-3">
                                <div class="outro-text-1 col-10 align-self-center h-100 d-flex justify-content-center align-content-center">
                                    <div class="align-self-center"><b>Τί να θυμάστε από αυτή την άσκηση</b></div>
                                </div>
                            </div>
                            <div class="row col-12 h-75 justify-content-center">
                                <div class="col-12 h-75 d-flex justify-content-center align-content-center">
                                    <div class="align-self-center col-12 outro-text-2">
                                        <ol type="1">
                                            <li>Just</li>
                                            <li>Play</li>
                                            <li>Games!!!</li>
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
                                                    <div class="align-self-center h-75">
                                                        <img src="intro/demokritos.jpg"
                                                             style="height: 100%; max-width: 100%">
                                                    </div>
                                                </div>
                                                <div class="col-2"></div>
                                                <div class="col-4  d-flex h-100">
                                                    <div class="align-self-center h-75">
                                                        <img src="intro/SciFY.png"
                                                             style="height: 100%; max-width: 100%">
                                                    </div>
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
                            <div class="forget-btn align-self-center" v-on:click="resetState">ΞΕΚΙΝΑ ΞΑΝΑ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--<h4>Τι έχω μάθει μέχρι τώρα:</h4>
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
                tree: null,
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
                        instance.goToFrame3();
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
                /*if (this.trainingSet.length > 0)
                    this.robotText = "Ωχ...Ένα φρούτο! Νομίζω ξέρω τί ειναι!"*/

            },
            nextButton() {
                this.lastTrainingInput = null;
                this.fetchNextInstance();
                this.goToFrame4();
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
                this.goToFrame4();
            },
            resetState() {
                //this.robotText = 'Γεία! Είμαι ο Θαλής! Εκπαίδευσέ με για να γίνω σοφότερος!';
                this.prediction = null;
                this.robotText = null;
                this.tree = null;
                this.reload();
            },
            train() {
                if (!this.trainingSet.length)
                    this.robotText = null;//this.robotText = 'Δεν έχω αρκετά δεδομένα για να μάθω...';
                else {
                    let config = {
                        trainingSet: this.trainingSet,
                        categoryAttr: 'label',
                        ignoredAttributes: ['img', 'id']
                    };
                    // Building Decision Tree
                    this.decisionTree = new dt.DecisionTree(config);
                    this.tree = this.treeToHtml(this.decisionTree.root);
                    //this.robotText = 'Γιαμ γιαμ! Νόστιμα τα δεδομένα!'
                }
            },
            leaveAllFrames() {
                $("#intro").css("display", "none");
                $("#frame1").css("display", "none");
                $("#frame2").css("display", "none");
                $("#frame3").css("display", "none");
                $("#frame4").css("display", "none");
                $("#frame5").css("display", "none");
                $("#frame6").css("display", "none");
                $("#outro").css("display", "none");
            }, goToFrame1() {
                this.leaveAllFrames();
                this.currentFrame = 1;
                $("#frame1").css("display", "block");
            },
            goToFrame2() {
                this.leaveAllFrames();
                this.currentFrame = 2;
                $("#frame2").css("display", "block");
            },
            goToFrame3() {
                this.leaveAllFrames();
                this.currentFrame = 3;
                $("#frame3").css("display", "block");
            },
            goToFrame4() {
                this.leaveAllFrames();
                this.currentFrame = 4;
                $("#frame4").css("display", "block");
            },
            goToFrame5() {
                this.classify();
                this.leaveAllFrames();
                this.currentFrame = 5;
                $("#frame5").css("display", "block");
            },
            goToFrame6() {
                this.classify();
                this.leaveAllFrames();
                this.currentFrame = 6;
                $("#frame6").css("display", "block");
            },
            backButton() {
                if (this.decisionTree)
                    this.goToFrame4();
                else
                    this.goToFrame3();
            },
            finishButton() {
                this.leaveAllFrames();
                this.currentFrame = 10;
                $("#outro").css("display", "block");
            },
            classify() {
                if (!this.decisionTree)
                    this.robotText = null;//this.robotText = 'Δεν έχω αρκετά δεδομένα για να κάνω πρόβλεψη.';
                else {
                    this.prediction = this.decisionTree.predict(this.element);
                    //this.robotText = this.prediction ? 'Χμ... μήπως είναι ένα <b>' + this.prediction + '</b>?' : 'Πραγματικά δεν ξέρω τι είναι αυτό...'
                    this.robotText = this.prediction + " !";
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

    .think {
        position: absolute;
        width: 5em;
        height: 5em;
        left: 10%;
        -webkit-animation: fadeinout 3s infinite;
        animation: fadeinout 3s infinite;
    }

    @-webkit-keyframes fadeinout {
        0% {
            opacity: 0.3;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.3;
        }
    }

    @keyframes fadeinout {
        0% {
            opacity: 0.3;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.3;
        }
    }

    .big-box {
        display: flex;
        flex-flow: column;
        height: 100%;
        align-items: center;
        justify-content: center;
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


    .bubble-frame1 {
        opacity: 0;
        padding-top: 10%;
        height: auto;
        width: 80%;
        position: relative;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
        animation-fill-mode: forwards;
        animation-delay: 1s;
    }

    .robot-hi-frame1 {
        height: 100%;
        width: auto;
        position: relative;
        -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 3s; /* Firefox < 16 */
        -ms-animation: fadein 3s; /* Internet Explorer */
        -o-animation: fadein 3s; /* Opera < 12.1 */
        animation: fadein 3s;
    }

    .button-frame1 {
        border-style: solid;
        border-width: thin;
        border-color: #464d5f;
        position: relative;
        opacity: 0;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
        animation-fill-mode: forwards;
        animation-delay: 1.5s;
    }

    .text-frame3-1 {
        font-size: 2.4em;
        font-family: "Roboto";
        color: #606060;
    }

    .text-frame3-2 {
        font-family: "Roboto";
        font-size: 1.7em;
        color: #606060;
    }

    .text-frame6 {
        font-family: "Roboto";
        font-size: x-large;
        color: black;
    }

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
        font-size: xx-large;
        color: #606060;
        text-align: left;
    }

    .yellowText {
        font-family: "Roboto";
        font-size: x-large;
        color: #fddd02;
    }

    .whiteText {
        font-family: "Roboto";
        font-size: large;
        color: #ffffff;
    }

    .orange-btn {
        font-family: "Roboto";
        font-size: large;
        background-color: #fd7202;
        border-style: solid;
        border-width: thin;
        border-color: #464d5f;
        color: white;
        width: 100%;
        height: auto;
    }

    .bubble-position {
        position: relative;
        left: 10%;
        top: 30%;
    }

    .bubble-frame-basic {
        height: auto;
        width: 80%;
        position: relative;
    }

    .text-box-frame1 {
        width: 80%;
        height: 60%;
        position: relative;
        top: 5%;
        left: 5%;
    }

    .text-box {
        width: 80%;
        height: 60%;
        position: relative;
        top: 10%;
        left: 5%;
    }

    .board-div {
        position: relative;
        top: 31%;
        left: 14%;
        width: 49%;
        height: 27%;
    }

    .board-text {
        font-family: "Roboto";
        font-size: x-large;
        color: #606060;
    }

    .predict-btn {
        font-family: "Roboto";
        color: white;
        border-style: dashed;
        border-color: white;
        background-color: #52a948;
        font-size: x-large;
        text-align: center;
        width: 30%;
        border-width: thin;
        padding-left: 0.5em;
        padding-right: 0.5em;
        margin-left: 1em;
    }

    .next-btn {
        font-family: "Roboto";
        font-size: x-large;
        background-color: #52a948;
        border-style: solid;
        border-width: thin;
        border-color: #464d5f;
        color: white;
        width: 80%;
        height: auto;
        text-align: center;
    }

    .back-btn {
        font-family: "Roboto";
        font-size: medium;
        background-color: #52a948;
        border-style: solid;
        border-width: thin;
        border-color: #464d5f;
        color: white;
        width: 25%;
        height: auto;
        text-align: center;
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

    .box-bottom {
        height: 30%;
        width: 100%;
        border-bottom-style: solid;
        border-bottom-width: thin;
        border-color: #949494;
        background-color: transparent;
    }

    .model-box {
        height: 90%;
        width: 100%;
        border-bottom-style: solid;
        border-bottom-width: thin;
        border-color: #949494;
        background-color: transparent;
    }

    .box-grey {
        height: 33%;
        width: 90%;
        border-style: dotted;
        border-width: medium;
        border-color: #949494;
        background-color: #ebebeb;
    }

    .border-grey-box {
        border-right-style: dotted;
        border-right-width: medium;
        border-right-color: #949494;
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
        width: 100%;
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
