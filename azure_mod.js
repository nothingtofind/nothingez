// Suppress console output and errors
(function() {
    const originalConsole = console;
    console = {
        log: () => {},
        info: () => {},
        warn: () => {},
        error: () => {},
        debug: () => {},
        clear: () => {},
        alert: originalConsole.alert.bind(originalConsole),
    };
    const originalOnError = window.onerror;
    window.onerror = function(message, source, lineno, colno, error) {
        return true;
    };
    try {
    } catch (e) {
    } finally {
        console = originalConsole;
        window.onerror = originalOnError;
    }
})();

let isHidden = false; // it's for ingame name tag "Az", true = no nametag, false = nametag
document.getElementById('altcha').style.display = 'none';
document.getElementById('altcha_checkbox').click();
let fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap';
document.head.appendChild(fontLink);

let gameFont = document.createElement('link');
gameFont.rel = 'stylesheet';
gameFont.href = 'https://fonts.googleapis.com/css2?family=Jacquard+12+Charted&display=swap';
document.head.appendChild(gameFont);

document.head.appendChild(document.createElement("style")).textContent = `
html,body {
background-color:#000;
overflow:hidden;
position:relative;
overflow:hidden;
width:100%;
height:100%;
margin:0;
padding:0
}

::-webkit-input-placeholder {
color:#cecece
}

:-moz-placeholder {
color:#cecece;
opacity:1
}

::-moz-placeholder {
color:#cecece;
opacity:1
}

:-ms-input-placeholder {
color:#cecece
}

input[type=text] {
-webkit-touch-callout:text;
-webkit-user-select:text;
-khtml-user-select:text;
-moz-user-select:text;
-ms-user-select:text;
user-select:text
}

.menuLink {
font-size:20px
}

a {
color:#a56dc8;
text-decoration:none
}

a:active {
color:#795094
}

a:visited {
color:#a56dc8
}

a:hover {
color:#795094
}

* {
font-family: 'Orbitron', sans-serif;
font-size:12px;
font-weight: bold;
}

span {
font-size:inherit
}

#errorNotification {
position:absolute;
top:20px;
left:50%;
transform:translateX(-50%);
max-width:500px;
z-index:99999
}

#errorNotification .errorClose {
position:absolute;
top:5px;
left:5px
}

#youtuberOf {
position:absolute;
top:10px;
left:10px;
color:#fff;
font-size:24px
}

.ytLink {
color:#6eb3ef;
font-size:24px;
text-decoration:none
}

.ytLink:hover {
color:#5c96c9
}

#featuredYoutube {
margin-top:5px
}

#featuredYoutube a {
color:#6eb3ef!important
}

#featuredYoutube a:hover {
color:#5c96c9!important
}

#mainMenu {
background: linear-gradient(135deg, rgba(0, 0, 0, 0), rgba(0, 0, 200, 1));
position:absolute;
width:100%;
height:100%;
z-index:10
}

#menuContainer {
width:100%;
white-space:nowrap;
text-align:center;
position:absolute;
top:45%;
transform:translateY(-50%);
-ms-transform:translateY(-50%);
-moz-transform:translateY(-50%);
-webkit-transform:translateY(-50%);
-o-transform:translateY(-50%)
}

#partyButton {
position:absolute;
color:#fff;
top:20px;
right:20px;
font-size:24px;
text-decoration:none
}

#joinPartyButton {
position:absolute;
top:54px;
right:20px;
cursor:pointer
}

#pingDisplay {
position:absolute;
top:20px;
left:50%;
transform:translateX(-50%);
color:#fff
}

#shutdownDisplay {
position:absolute;
top:20px;
left:50%;
transform:translateX(-50%);
color:#fff;
font-size:25px;
z-index:100;
pointer-events:none
}

#settingsButton {
position:absolute;
cursor:pointer;
display:none
}

#followText {
position:absolute;
bottom:40px;
left:10px;
color:#fff;
font-size:22px
}

#twitterFollow {
position:absolute;
bottom:10px;
left:10px
}

#youtubeFollow {
position:absolute;
bottom:10px;
left:10px
}

#linksContainer1 {
border-radius:10px;
position:absolute;
bottom:0;
left:0;
background-color:#fff;
font-size:20px;
padding:8px;
}

#linksContainer2 {
border-radius:10px;
position:absolute;
bottom:0;
right:0;
background-color:#fff;
text-align:right;
font-size:20px;
padding:8px;
}

#loadingText {
font-size:45px;
color:#fff;
text-align:center
}

#loadingText a {
display:block
}

.menuCard {
vertical-align:top;
text-align:left;
white-space:normal;
word-wrap:break-word;
margin:5px;
display:inline-block;
width:300px;
padding:18px;
background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 50, 0.8));
border-radius:10px;
overflow:hidden
}

.menuHeader {
font-size:24px;
color: #00e5ff;
text-shadow: 0 0 8px #00e5ff, 0 0 16px #00e5ff, 0 0 24px #00e5ff;
margin-bottom:5px
}

.menuText {
font-size:18px;
color:#a8a8a8;
margin-bottom:10px
}

#serverBrowser select {
width:100%;
height:24px
}

#altServer {
width:100%;
text-align:center;
margin-top:10px
}

#skinColorHolder {
width:100%;
padding:0;
padding-top:5px;
padding-bottom:0
}

.activeSkin {
-webkit-border-radius:8px!important;
-moz-border-radius:8px!important;
border-radius:8px!important
}

.skinColorItem {
cursor:pointer;
display:inline-block;
margin-right:10px;
width:30px;
height:30px;
-webkit-border-radius:20px;
-moz-border-radius:20px;
border-radius:20px;
border:3px solid #525252
}

.skinColorItem:hover {
-webkit-border-radius:8px;
-moz-border-radius:8px;
border-radius:8px
}

.settingRadio {
font-size:18px;
color:#a8a8a8;
margin-bottom:10px
}

#gameName {
font-size:170px;
margin-bottom: 35px;
color: #00e5ff;
text-shadow: 0 0 8px #00e5ff, 0 0 16px #00e5ff, 0 0 24px #00e5ff;
background: rgba(0, 0, 0, 0.3);
}

#guideCard {
max-height:250px;
overflow-y:scroll;
-webkit-overflow-scrolling:touch
}

#guideCard #smallLinks {
display:none
}

#guideCard #desktopInstructions {
display:block
}

#guideCard #mobileInstructions {
display:none
}

#guideCard.touch #desktopInstructions {
display:none
}

#guideCard.touch #mobileInstructions {
display:block
}

#promoImgHolder {
text-align:center
}

#promoImg:hover {
opacity:.9
}

#rightCardHolder {
display:inline-block;
vertical-align:top
}

#downloadButtonContainer {
display:block;
text-align:center;
padding-bottom:12px;
margin-top:14px
}

#downloadButtonContainer.cordova {
display:none
}

#mobileDownloadButtonContainer {
display:none
}

#mobileDownloadButtonContainer.cordova {
display:none
}

.downloadBadge {
margin:0 6px
}

.downloadBadge img {
height:40px
}

#adCard {
text-align:center;
width:300px;
height:auto
}

#nameInput {
text-align:center;
font-size:26px;
margin-bottom:16px;
padding:6px;
border:none;
outline:none;
box-sizing:border-box;
color:#4A4A4A;
background-color:#e5e3e3;
width:100%;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px
}

.menuButton {
text-align:center;
font-size:23px;
padding:6px;
box-sizing:border-box;
color:#fff;
background-color:#7ee559;
width:100%;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px;
cursor:pointer
}

.menuButton:hover {
background-color:#6fc94e
}

#gameUI {
pointer-events:none;
position:absolute;
width:100%;
height:100%;
z-index:2
}

#chatHolder {
position:absolute;
bottom:100px;
width: auto;
left: 20px;
text-align:center
}

#chatBox {
position:relative;
padding:6px;
font-size:20px;
color: #00e5ff;
text-shadow: 0 0 8px #00e5ff;
background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 50, 0.8));
border: 2px solid #00e5ff;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
border-radius:10px;
pointer-events:all;
border:0
left: 20px;
border: 2px solid #00e5ff;
}

#chatBox:focus {
outline:none
}

#topInfoHolder {
position:absolute;
right:20px;
top:20px
}

#leaderboard {
color:#fff;
font-size:31px;
text-align:left;
padding:10px;
padding-top:7px;
padding-bottom:5px;
width:auto;
background-color:transparent;
background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 50, 0.8));
color: #00e5ff;
font-weight: bold;
transform: rotate(2deg);
border: 2px solid #00e5ff;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
font-family: 'Orbitron', sans-serif;
-webkit-border-radius:10px;
-moz-border-radius:10px;
border-radius:10px
}

.leaderHolder {
overflow:hidden;
white-space:nowrap
}

.leaderScore {
text-align:right;
float:right;
margin-left:10px;
display:inline-block;
font-size:22px
}

.leaderboardItem {
float:left;
display:inline-block;
max-width:600px;
white-space:nowrap;
text-shadow: 0 0 8px #00e5ff;

overflow:hidden;
text-overflow:ellipsis;
-o-text-overflow:ellipsis;
}

.uiElement,.resourceDisplay {
background-color:#00000040;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px;
color:#fff;
padding:10px;
padding-top:5px;
padding-bottom:5px;
font-size:28px
}

.resourceDisplay {
    position: absolute;
    right: 20px;
    height: 35px;
    text-align: right;
    line-height: 39px;
    bottom: 20px;
    padding-left: 10px;
    padding-right: 40px;
    background-size: 28px;
    background-repeat: no-repeat;
    background-position: right 6px center;
}

#scoreDisplay {
    position: absolute;
    left: 20px;
    bottom: 20px;
    text-align: left;
    padding-left: 40px;
    padding-right: 10px;
    background:
        url(data:image/png;base64,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) no-repeat,
        linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 50, 0.8));
    background-position: left 6px center;
    background-size: 28px;
    border: 2px solid #00e5ff;
    color: #00e5ff;
    text-shadow: 0 0 8px #00e5ff, 0 0 16px #00e5ff, 0 0 24px #00e5ff;
    border-radius: 10px;
    transform: rotate(2deg);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
}



#killCounter {
right:0;
margin-top:10px;
color:#fff;
font-size:28px;
background-color:#00000040;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px;
background-image:url(../img/icons/skull.png)
}

#actionBar {
bottom:17px;
width:100%;
text-align:center
}

.actionBarItem {
    width: 66px;
    height: 66px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 10px;
    display: inline-block;
    cursor: pointer;
    pointer-events: all;
    position: relative;
border: 2px solid #00e5ff;
}

.actionBarItem:hover {
background-color:#32323240
}

.itemIcon {
width:66px;
height:66px
}

#mapDisplay {
position:absolute;
bottom:20px;
left:20px;
display:none;
width:130px;
height:130px;
pointer-events:all;
background-color:#00000040;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px
}

.gameButton {
position:absolute;
top:20px;
padding:5px;
cursor:pointer;
pointer-events:all
}

.gameButton:hover {
background-color:#32323240
}

#allianceButton {
right:270px
}

#storeMenu {
display:none;
width:100%;
position:absolute;
text-align:center;
top:50%;
transform:translateY(-50%);
-ms-transform:translateY(-50%);
-moz-transform:translateY(-50%);
-webkit-transform:translateY(-50%);
-o-transform:translateY(-50%)
}

#storeHolder {
pointer-events:all;
width:400px;
display:inline-block;
background-color:#00000040;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px;
color:#fff;
padding:10px;
height:200px;
max-height:calc(100vh - 200px);
overflow-y:scroll;
-webkit-overflow-scrolling:touch
}

.storeTab {
width:183px;
font-size:26px;
display:inline-block;
background-color:#00000040;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px;
color:#fff;
padding:10px;
pointer-events:all;
cursor:pointer
}

.storeTab:hover {
background-color:#32323240
}

.storeItem {
color:#fff;
padding:5px;
font-size:24px;
text-align:left;
cursor:pointer
}

.itemPrice {
margin-top:5px;
float:right;
display:inline-block;
color:#ffffff80;
font-size:24px;
padding-right:5px
}

.hatPreview {
margin-top:-5px;
width:45px;
height:45px;
display:inline-block;
vertical-align:middle;
padding-right:10px
}

#allianceMenu {
display:none;
width:100%;
position:absolute;
text-align:center;
top:50%;
transform:translateY(-50%);
-ms-transform:translateY(-50%);
-moz-transform:translateY(-50%);
-webkit-transform:translateY(-50%);
-o-transform:translateY(-50%)
}

#allianceHolder {
pointer-events:all;
height:200px;
max-height:calc(100vh - 260px);
overflow-y:scroll;
-webkit-overflow-scrolling:touch;
width:350px;
display:inline-block;
text-align:left;
padding:10px;
background-color:#00000040;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px
}

.allianceItem {
font-size:24px;
color:#fff;
padding:5px
}

.joinAlBtn {
float:right;
font-size:24px;
text-align:right;
cursor:pointer;
color:#80eefc
}

.joinAlBtn:hover {
color:#72d3e0
}

.notificationText {
vertical-align:top;
font-size:25px;
color:#fff;
display:inline-block
}

.notifButton {
padding:5px;
margin-left:10px;
display:inline-block;
cursor:pointer;
pointer-events:all;
background-color:#00000040;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px
}

.notifButton:hover {
background-color:#32323240
}

#noticationDisplay {
vertical-align:top;
position:absolute;
right:270px;
top:80px;
text-align:right
}

.allianceButtonM {
pointer-events:all;
cursor:pointer;
margin-top:10px;
font-size:24px;
color:#fff;
padding:5px;
background-color:#00000040;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px;
padding:5px;
text-align:center;
display:inline-block
}

.allianceButtonM:hover {
background-color:#32323240
}

#allianceInput {
pointer-events:all;
font-size:24px;
color:#fff;
padding:5px;
background-color:#00000040;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px;
padding:5px;
display:inline-block;
outline:none;
border-color:none;
border:0;
-webkit-box-shadow:none;
box-shadow:none;
width:200px;
margin-right:10px
}

#itemInfoHolder {
max-width:250px;
display:none;
position:absolute;
top:20px;
left:20px
}

#itemInfoHolder.visible {
display:block
}

#itemInfoName {
font-size:30px
}

#itemInfoDesc {
font-size:22px;
color:#fff9
}

.itemInfoReq {
font-size:22px
}

.itemInfoReqVal {
font-size:22px;
color:#fff9
}

.itemInfoLmt {
font-size:22px;
position:absolute;
right:10px;
bottom:6px
}

#ageBarContainer {
width:100%;
margin-bottom: 18px;
text-align:center
}

#ageBar {
background-color: transparent;
background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 50, 0.8));
-webkit-border-radius:5px;
-moz-border-radius:5px;
border-radius:10px;
padding:5px;
width:364px;
height:30px;
display:inline-block
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
border: 2px solid #00e5ff;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
}

#ageBarBody {
background-color: transparent;
background: linear-gradient(135deg, rgba(0, 0, 255, 0.9), rgba(40, 40, 150, 0.8));
-webkit-border-radius:10px;
-moz-border-radius:10px;
border-radius:10px;
width:0;
height:100%
}

#ageText {
position: absolute;
font-family: 'Orbitron', sans-serif;
width:100%;
bottom: 29px;
color: #00e5ff;
text-shadow: 0 0 8px #00e5ff, 0 0 16px #00e5ff, 0 0 24px #00e5ff;
text-align:center;
font-size:24px
}

#upgradeHolder {
    position: absolute;
    top: 50%;
    left: 20px;
    width: 170px;
    height: auto;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 50, 0.8));
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 20px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
    border: 2px solid #00e5ff;
    transform: translateY(-50%);
}

#upgradeCounter {
  width: auto;
  position: absolute;
  top: 40%;
  left: 43px;
  transform: translateY(-40%);
  text-align: center;
  font-size: 20px;
  color: #00e5ff;
  text-shadow: 0 0 8px #00e5ff, 0 0 16px #00e5ff, 0 0 24px #00e5ff;
  font-family: 'Orbitron', sans-serif;
}

#gameCanvas {
width:100%;
height:100%;
background-color:#b6db66;
z-index:1
}

#diedText {
display:none;
font-size:150px;
color:#fff;
background-color:#00000040;
width:100%;
padding:0;
position:absolute;
text-align:center;
top:50%;
transform:translateY(-50%);
-ms-transform:translateY(-50%);
-moz-transform:translateY(-50%);
-webkit-transform:translateY(-50%);
-o-transform:translateY(-50%);
pointer-events:none
}

#pre-content-container {
position:absolute;
left:0;
right:0;
top:0;
bottom:0;
width:100%;
background:#000c;
z-index:1000
}

#pre-content-player {
position:absolute;
width:640px;
left:50%;
top:50%;
transform:translate(-50%,-50%)
}

#post-ad-join {
position:absolute;
left:50%;
top:50%;
transform:translate(-50%,-50%);
width:100px;
height:100px;
background:red
}

#force-skip-ad {
position:absolute;
top:8px;
left:8px
}


/* not moomoo visuals under */


#enemyPatternData {
position: fixed;
top: 20px;
left: 20px;
background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 50, 0.8));
color: #00e5ff;
text-shadow: 0 0 8px #00e5ff, 0 0 16px #00e5ff, 0 0 24px #00e5ff;
font-weight: bold;
transform: rotate(-2deg);
border: 2px solid #00e5ff;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
font-family: 'Orbitron', sans-serif;
line-height: 1.6em;
padding: 20px;
border-radius: 10px;
width: 28em;
z-index: 10000;
white-space: pre-line;
}

#enemyPatternData strong {
color: #55e5ff;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

#azKillsCount {
    position: absolute;
    bottom: 20px;
    right: 20px;
    text-align: right;
    line-height: 50px;
    color: #00e5ff;
    font-size: 28px;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 40px;
    height: 45px;
    background:
        url(../img/icons/skull.png) no-repeat,
        linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 50, 0.8));
    background-position: right 6px center;
    background-size: 28px;
    text-shadow: 0 0 8px #00e5ff, 0 0 16px #00e5ff, 0 0 24px #00e5ff;
border: 2px solid #00e5ff;
transform: rotate(-2deg);
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
}

`;

/*
background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 50, 0.8));
color: #00e5ff;
text-shadow: 0 0 8px #00e5ff, 0 0 16px #00e5ff, 0 0 24px #00e5ff;
font-weight: bold;
transform: rotate(-2deg);
border: 2px solid #00e5ff;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
font-family: 'Orbitron', sans-serif;
*/

function getEl(id) {
    return document.getElementById(id);
}

let min = document.createElement("script");
min.src = "https://rawgit.com/kawanet/msgpack-lite/master/dist/msgpack.min.js";
document.body.append(min);
window.oncontextmenu = function () {
    return false;
};

let config = window.config;

// CLIENT:
config.serverUpdateRate = 9;

// UI:
config.deathFadeout = 0;

config.playerCapacity = 9999;

// CHECK IN SANDBOX:
config.isSandbox = window.location.hostname == "sandbox.moomoo.io";

// CUSTOMIZATION:
config.skinColors = ["#bf8f54", "#cbb091", "#896c4b"
                     , "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3"
                     , "#8bc373", "#91b2db"
                    ];
config.weaponVariants = [{
    id: 0
    , src: ""
    , xp: 0
    , val: 1
    , }, {
        id: 1
        , src: "_g"
        , xp: 3000
        , val: 1.1
        , }, {
            id: 2
            , src: "_d"
            , xp: 7000
            , val: 1.18
            , }, {
                id: 3
                , src: "_r"
                , poison: true
                , xp: 12000
                , val: 1.18
                , }, {
                    id: 4
                    , src: "_e"
                    , poison: true
                    , heal: true
                    , xp: 24000
                    , val: 1.18
                    , }];

// VISUAL:
config.anotherVisual = true;
config.useWebGl = false;
config.resetRender = true;

function waitTime(timeout) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, timeout);
    });
}

// STORAGE:
let canStore;
if (typeof (Storage) !== "undefined") {
    canStore = true;
}

function saveVal(name, val) {
    if (canStore) {
        localStorage.setItem(name, val);
    }
}

function deleteVal(name) {
    if (canStore) {
        localStorage.removeItem(name);
    }
}

function getSavedVal(name) {
    if (canStore) {
        return localStorage.getItem(name);
    }
    return null;
}

// CONFIGS:
let gC = function (a, b) {
    let res = JSON.parse(getSavedVal(a));
    if (typeof res === "object") {
        return b;
    } else {
        return res;
    }
};

function setConfigs() {
    return {
        killChat: true
        , autoBuy: true
        , autoBuyEquip: true
        , autoPush: true
        , revTick: true
        , spikeTick: true
        , predictTick: true
        , autoPlace: true
        , autoReplace: true
        , antiTrap: true
        , slowOT: false
        , attackDir: false
        , showDir: false
        , noDir: false
        , autoRespawn: false
    };
};
let configs = setConfigs();
window.removeConfigs = function () {
    for (let cF in configs) {
        deleteVal(cF, configs[cF]);
    }
};

for (let cF in configs) {
    configs[cF] = gC(cF, configs[cF]);
}

// MENU FUNCTIONS:
window.changeMenu = function () {};
window.debug = function () {};
window.wasdMode = function () {};

// PAGE 1:
window.startGrind = function () {};

// PAGE 3:
window.resBuild = function () {};

// SOME FUNCTIONS:
window.prepareUI = function () {};
window.leave = function () {};

window.ping = window.pingTime;

function executeScript() {
    try {
        // Get the script content from the textarea
        let scriptContent = document.getElementById('scriptEditor').value;
        // Dynamically execute the script content
        eval(scriptContent);
    } catch (error) {
        alert('Error executing script:', error);
    }
}

let modMenu = `
    <div id="modMenuEz" class="modMenuEz">
        <div class="menuLeftEz">
            <div class="menuSearchEz">
                <input type="text" placeholder="Search..." class="searchBarEz" id="searchBarEz"/>
            </div>
            <div class="menuItemsEz">
                <div class="menuItemEz" dataPageEz="offensive"><i class="fas fa-crosshairs"></i><span>Offensive</span></div>
                <div class="menuItemEz" dataPageEz="defensive"><i class="fas fa-shield-alt"></i><span>Defensive</span></div>
                <div class="menuItemEz" dataPageEz="visuals"><i class="fas fa-eye"></i><span>Visuals</span></div>
                <div class="menuItemEz" dataPageEz="misc"><i class="fas fa-cogs"></i><span>Misc</span></div>
                <div class="menuItemEz" dataPageEz="configs"><i class="fas fa-save"></i><span>Configs</span></div>
                <div class="menuItemEz" dataPageEz="scriptEditor"><i class="fas fa-code"></i><span>Script Editor</span></div>
            </div>
            <div class="menuFooterEz">
                <div class="footerItemEz">Red Elite<br>Made with ❤️ by SaVeGe!</div>
            </div>
        </div>
        <div class="menuRightEz">
<div id="page-offensive" class="menuSectionEz active">
    <div class="menuSectionTitleEz">Offensive</div>
    <div class="menuGroupEz">
        <div class="groupTitleEz"><i class="fas fa-chevron-down"></i> Combat</div>
        <div class="menuControlsEz">
            <div class="controlRowEz">
                <label class="controlLabelEz">Predict Aim</label>
                <label class="switchEz">
                    <input type="checkbox" class="controlInputEz"/>
                    <span class="sliderEz"></span>
                </label>
            </div>
            <div class="controlRowEz">
                <label class="controlLabelEz">Placement Tick</label>
                <input type="text" id="autoPlaceTick" class="customText" value="1" size="2" maxlength="1"/>
            </div>
        </div>
    </div>
    <div class="menuGroupEz">
        <div class="groupTitleEz"><i class="fas fa-chevron-down"></i> Modes</div>
        <div class="menuControlsEz">
            <div class="controlRowEz">
                <label class="controlLabelEz">Wasd Mode</label>
                <label class="switchEz"">
                    <input type="checkbox" onclick="window.wasdMode()" class="controlInputEz"/>
                    <span class="sliderEz"></span>
                </label>
            </div>
        </div>
    </div>
</div>
            <div id="page-defensive" class="menuSectionEz">
                <div class="menuSectionTitleEz">Defensive</div>
                <div class="menuGroupEz">
                    <div class="groupTitleEz"><i class="fas fa-chevron-down"></i> Auto Defense Group</div>
                    <div class="menuControlsEz">
                        <div class="controlRowEz">
                            <label class="controlLabelEz">Auto Heal</label>
                            <label class="switchEz">
                                <input type="checkbox" class="controlInputEz"/>
                                <span class="sliderEz"></span>
                            </label>
                        </div>
                        <div class="controlRowEz">
                            <label class="controlLabelEz">Auto Break</label>
                            <label class="switchEz">
                                <input type="checkbox" class="controlInputEz"/>
                                <span class="sliderEz"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="menuGroupEz">
                    <div class="groupTitleEz"><i class="fas fa-chevron-down"></i> Anti-Clown</div>
                    <div class="menuControlsEz">
                        <div class="controlRowEz">
                            <label class="controlLabelEz">Anti-Clown</label>
                            <label class="switchEz">
                                <input type="checkbox" class="controlInputEz" id="healingBeta" class="checkB" checked/>
                                <span class="sliderEz"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div id="page-visuals" class="menuSectionEz">
                <div class="menuSectionTitleEz">Visuals</div>
                <div class="menuGroupEz">
                    <div class="groupTitleEz"><i class="fas fa-chevron-down"></i> In-Game Visuals</div>
                    <div class="menuControlsEz">
                        <div class="controlRowEz">
                            <label class="controlLabelEz">Enemy Tracer</label>
                            <label class="switchEz">
                                <input type="checkbox" class="controlInputEz"/>
                                <span class="sliderEz"></span>
                            </label>
                        </div>
                        <div class="controlRowEz">
                            <label class="controlLabelEz">Render Movement</label>
                            <select class="Cselect" id="predictType">
                                <option value="disableRender" selected>Disable Render</option>
                                <option value="pre2">X/Y and 2</option>
                                <option value="pre3">X/Y and 3</option>
                            </select>
                        </div>
                        <div class="controlRowEz">
                            <label class="controlLabelEz">Render Placers</label>
                            <label class="switchEz">
                                <input type="checkbox" class="controlInputEz" id="placeVis" class="checkB"/>
                                <span class="sliderEz"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="menuGroupEz">
                    <div class="groupTitleEz"><i class="fas fa-chevron-down"></i> UI Visuals</div>
                    <div class="menuControlsEz">
                        <div class="controlRowEz">
                            <label class="controlLabelEz">Show UI</label>
                            <label class="switchEz">
                                <input type="checkbox" class="controlInputEz"/>
                                <span class="sliderEz"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
<div id="page-scriptEditor" class="menuSectionEz">
    <div class="menuSectionTitleEz">Script Editor</div>
    <textarea id="scriptEditor" class="scriptEditing" name="scriptEditor"></textarea>
    <button class="menuB" onclick="executeScript()">Execute</button>
</div>
            <div id="page-misc" class="menuSectionEz">
                <div class="menuSectionTitleEz">Misc</div>
                <div class="menuGroupEz">
                    <div class="groupTitleEz"><i class="fas fa-chevron-down"></i> Fun Features</div>
                    <div class="menuControlsEz">
                        <div class="controlRowEz">
                            <label class="controlLabelEz">AE86 Spin</label>
                            <label class="switchEz">
                                <input type="checkbox" class="controlInputEz"/>
                                <span class="sliderEz"></span>
                            </label>
                        </div>
                        <div class="controlRowEz">
                            <label class="controlLabelEz">Troll Chat</label>
                            <label class="switchEz">
                                <input type="checkbox" class="controlInputEz"/>
                                <span class="sliderEz"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="menuGroupEz">
                    <div class="groupTitleEz"><i class="fas fa-chevron-down"></i> Debug</div>
                    <div class="menuControlsEz">
                        <button class="menuB" onclick="window.debug()">Debug</button>
                    </div>
                </div>
            </div>
            <div id="page-configs" class="menuSectionEz">
                <div class="menuSectionTitleEz">Configs</div>
                <div class="menuGroupEz">
                    <div class="groupTitleEz"><i class="fas fa-chevron-down"></i> Configuration</div>
                    <div class="menuControlsEz">
                        <div class="controlRowEz">
                            <label class="controlLabelEz">Save Config</label>
                            <button class="menuB" onclick="window.saveConfig()">Save</button>
                        </div>
                        <div class="controlRowEz">
                            <label class="controlLabelEz">Load Config</label>
                            <button class="menuB" onclick="window.loadConfig()">Load</button>
                        </div>
                        <div class="controlRowEz">
                            <label class="controlLabelEz">Delete Config</label>
                            <button class="menuB" onclick="window.deleteConfig()">Delete</button>
                        </div>
            <div class="controlRowEz">
                <label class="controlLabelEz">Auto Grind</label>
                <label class="switchEz">
                    <input type="checkbox" class="controlInputEz" id="weaponGrind" onclick="window.startGrind()"/>
                    <span class="sliderEz"></span>
                </label>
            </div>
<div class="controlRowEz">
    <label class="controlLabelEz">Options</label>
    <select class="Cselect" id="configsChanger">
        <option value="killChat">Kill Chat</option>
        <option value="autoBuy">Auto Buy</option>
        <option value="autoBuyEquip">Auto Buy Equip</option>
        <option value="autoPush">Auto Push</option>
        <option value="revTick">Rev Tick</option>
        <option value="spikeTick">Spike Tick</option>
        <option value="predictTick">Predict Tick</option>
        <option value="autoPlace">Auto Place</option>
        <option value="autoReplace">Auto Replace</option>
        <option value="antiTrap">Anti Trap</option>
        <option value="slowOT">Slow OT</option>
        <option value="attackDir">Attack Dir</option>
        <option value="showDir">Show Dir</option>
        <option value="noDir">No Dir</option>
        <option value="autoRespawn">Auto Respawn</option>
    </select>
<div class="controlRowEz">
    <label class="switchEz">
        <input type="checkbox" id="featureToggle" class="controlInputEz"/>
        <span class="sliderEz"></span>
    </label>
</div>
</div>

                    </div>
                </div>
            </div>
        </div>
    </div>
`;


document.body.insertAdjacentHTML('beforeend', modMenu);

document.head.appendChild(document.createElement("style")).textContent = `
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
.customText {
    padding: 5px;
    border: 1px solid #553333;
    border-radius: 4px;
    background-color: #331111;
    color: white;
    width: 2em;
    text-align: center;
    font-size: 15px;
    transition: border 0.3s ease;
}
.customText:focus {
    outline: none;
    border-color: #dd4444;
}
.modMenuEz {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 900px;
    height: 600px;
    background-color: rgba(28, 28, 28, 0.95);
    border-radius: 10px;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    z-index: 10000;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    transition: transform 0.3s ease, display 0s linear 0.3s;
    border: 3px solid #332121;
}
.menuLeftEz {
    width: 30%;
    background-color: #1c1c1c;
    border-right: 1px solid #332121;
    display: flex;
    flex-direction: column;
}
.menuSearchEz {
    padding: 10px;
}
.searchBarEz {
    width: 93%;
    padding: 8px;
    border: 1px solid #553333;
    border-radius: 4px;
    background-color: #331111;
    color: white;
    transition: border 0.3s ease;
}
.searchBarEz:focus {
    outline: none;
    border-color: #dd4444;
}
.menuItemsEz {
    flex-grow: 1;
    padding: 10px;
    overflow-y: auto;
    overflow-x: hidden;
}
.menuItemEz {
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #ccc;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}
.menuItemEz i {
    margin-right: 10px;
}
.menuItemEz span {
    width: 80%;
    text-align: left;
}
.menuItemEz:hover {
    background-color: #442222;
    color: #fff;
    transform: scale(1.05);
}
.menuItemEz.active {
    background-color: #552222;
    color: #ffcccc;
    transform: scale(1.1);
}
.menuFooterEz {
    padding: 10px;
    background-color: #1c1c1c;
    text-align: center;
    font-size: 14px;
    color: #888;
    border-top: 1px solid #332121;
}
.menuRightEz {
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
}
.menuSectionEz {
    display: none;
}
.menuSectionEz.active {
    display: block;
}
.menuSectionTitleEz {
    font-size: 24px;
    margin-bottom: 10px;
    color: #ffdddd;
}
.menuGroupEz {
    margin-bottom: 20px;
}
.groupTitleEz {
    font-size: 18px;
    margin-bottom: 5px;
    color: #ffcccc;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
}
.groupTitleEz i {
    margin-right: 10px;
    transition: transform 0.3s ease;
}
.groupTitleEz:hover {
    color: #ffbbbb;
}
.menuControlsEz {
    border: 1px solid #773333;
    border-radius: 4px;
    padding: 10px;
    background-color: rgba(51, 17, 17, 0.6);
    display: none;
    transition: all 0.3s ease;
}
.controlRowEz {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.controlLabelEz {
    font-size: 16px;
    color: #ccc;
}
.switchEz {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}
.switchEz input {
    opacity: 0;
    width: 0;
    height: 0;
}
.sliderEz {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #773333;
    transition: 0.4s;
    border-radius: 24px;
}
.sliderEz:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: #aa5555;
    transition: 0.4s;
    border-radius: 50%;
}
.switchEz input:checked + .sliderEz {
    background-color: #aa5555;
}
.switchEz input:checked + .sliderEz:before {
    transform: translateX(26px);
    background-color: #ffcccc;
}
.switchEz input:focus + .sliderEz {
    box-shadow: 0 0 5px #dd4444;
}
.controlRowEz:last-child {
    margin-bottom: 0;
}
.highlight {
    color: #dd4444;
}
.resetButtonEz {
    background-color: #552222;
    color: #ccc;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}
.resetButtonEz:hover {
    background-color: #773333;
    color: #fff;
}
.Cselect {
    width: 100%;
    padding: 5px;
    border: 1px solid #553333;
    border-radius: 4px;
    width: auto;
    background-color: #331111;
    color: white;
    transition: border 0.3s ease;
    font-size: 15px;
}
.Cselect:focus {
    outline: none;
    border-color: #dd4444;
}
    .searchBarEz:focus {
        outline: none;
    }
.menuB {
    background-color: #552222;
    color: #ccc;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}
.menuB:hover {
    background-color: #773333;
    color: #fff;
}
.scriptEditing {
width: 600px;
height: 485px;
color: #fff;
background-color: rgba(51, 17, 17, 0.6);
}
    .scriptEditing:focus {
        outline: none;
    }
`;

let menu = document.querySelector(".modMenuEz");
let menuSectionsEz = document.querySelectorAll('.menuSectionEz');

let toggled = false;
let isMenu = false;


function working(option) {
    let toggle = getEl('featureToggle');
    let label = getEl('sliderLabel');
    toggle.checked = configs[option];
    toggle.addEventListener('change', function() {
        configs[option] = toggle.checked;
        saveVal(option, configs[option]);
    });
}

document.getElementById('configsChanger').addEventListener('change', function() {
    let selectedOption = this.value;
    working(selectedOption);
});

let menuItems = document.querySelectorAll(".menuItemEz");
menuItems.forEach(item => {
    item.addEventListener("click", function() {
        let activeItem = document.querySelector(".menuItemEz.active");
        let activePage = document.querySelector(".menuSectionEz.active");
        if (activeItem) activeItem.classList.remove("active");
        if (activePage) activePage.classList.remove("active");

        this.classList.add("active");
        document.querySelector("#page-" + this.getAttribute("dataPageEz")).classList.add("active");
    });
});

document.getElementById('searchBarEz').addEventListener('input', searchFeatures);

function searchFeatures() {
    let finder = document.getElementById('searchBarEz').value.toLowerCase();
    let finderLength = finder.length;

    function textVisual(text, query) {
        if (!query) return text;
        let textIndex = text.toLowerCase().indexOf(query);
        if (textIndex === -1) return text;
        return text.substring(0, textIndex) + '<span class="highlight">' + text.substring(textIndex, textIndex + finderLength) + '</span>' + text.substring(textIndex + finderLength);
    }

    let menuItems = document.querySelectorAll(".menuItemEz");
    menuItems.forEach(item => {
        let pageId = "#page-" + item.getAttribute("dataPageEz");
        let section = document.querySelector(pageId);
        let features = section.querySelectorAll('.controlRowEz');
        let isMatching = false;

        features.forEach(control => {
            let querFind = control.querySelector('.controlLabelEz');
            if (querFind) {
                let textFind = querFind.textContent.toLowerCase();
                if (textFind.includes(finder)) {
                    control.style.display = '';
                    querFind.innerHTML = textVisual(querFind.textContent, finder);
                    isMatching = true;
                } else {
                    control.style.display = 'none';
                    querFind.innerHTML = querFind.textContent;
                }
            }
        });

        if (finder === '' || isMatching) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });

    let firstMatchingItem = Array.from(menuItems).find(item => {
        let pageId = "#page-" + item.getAttribute("dataPageEz");
        let section = document.querySelector(pageId);
        return section.style.display !== 'none';
    });

    if (firstMatchingItem) {
        let activeItem = document.querySelector(".menuItemEz.active");
        let activePage = document.querySelector(".menuSectionEz.active");
        if (activeItem) activeItem.classList.remove("active");
        if (activePage) activePage.classList.remove("active");

        firstMatchingItem.classList.add("active");
        document.querySelector("#page-" + firstMatchingItem.getAttribute("dataPageEz")).classList.add("active");
    }
}


document.querySelector(".menuItemEz").classList.add("active");
document.querySelector("#page-offensive").classList.add("active");

document.querySelectorAll('.groupTitleEz').forEach(gTitle => {
    let features = gTitle.nextElementSibling;
    let arrow = gTitle.querySelector('i');

    if (gTitle.textContent.includes('Auto Aim Group') || gTitle.textContent.includes('Auto Defense Group')) {
        features.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    }

    gTitle.addEventListener('click', function() {
        if (features.style.display === 'none' || features.style.display === '') {
            features.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
        } else {
            features.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
        }
    });
});

let WS = undefined;
let socketID = undefined;

let useWasd = false;
let secPacket = 0;
let secMax = 120;
let secTime = 1000;
let firstSend = {
    sec: false
};
let SaVeGe = {
    tick: 0,
    tickQueue: [],
    manage: [],
    tickRate: 950 / 9,
    tickSpeed: 0,
    lastTick: performance.now(),
    tickBase(set, tick) {
        const targetTick = this.tick + tick;
        this.tickQueue[targetTick] = this.tickQueue[targetTick] ?? [];
        this.tickQueue[targetTick].push(set);
    }
};

let modConsole = [];

let dontSend = false;
let fpsTimer = {
    last: 0
    , time: 0
    , ltime: 0
}
let lastMoveDir = undefined;
let lastsp = ["cc", 1, "__proto__"];

WebSocket.prototype.nsend = WebSocket.prototype.send;
WebSocket.prototype.send = function (message) {
    if (!WS) {
        WS = this;
        WS.addEventListener("message", function (msg) {
            getMessage(msg);
        });
        WS.addEventListener("close", (event) => {
            if (event.code == 4001) {
                window.location.reload();
            }
        });
    }
    if (WS == this) {
        dontSend = false;

        // EXTRACT DATA ARRAY:
        let data = new Uint8Array(message);
        let parsed = window.msgpack.decode(data);
        let type = parsed[0];
        data = parsed[1];

        // SEND MESSAGE:
        if (type == "6") {

            if (data[0]) {
                // ANTI PROFANITY:
                let profanity = ["cunt", "whore", "fuck", "shit", "faggot", "nigger", "nigga", "dick", "vagina", "minge", "cock", "rape", "cum", "sex", "tits", "penis", "clit", "pussy", "meatcurtain", "jizz", "prune", "douche", "wanker", "damn", "bitch", "dick", "fag", "bastard", ];
                let tmpString;
                profanity.forEach((profany) => {
                    if (data[0].indexOf(profany) > -1) {
                        tmpString = "";
                        for (let i = 0; i < profany.length; ++i) {
                            if (i == 1) {
                                tmpString += String.fromCharCode(0);
                            }
                            tmpString += profany[i];
                        }
                        let re = new RegExp(profany, "g");
                        data[0] = data[0].replace(re, tmpString);
                    }
                });

                // FIX CHAT:
                data[0] = data[0].slice(0, 30);
            }

        } else if (type == "L") {
            // MAKE SAME CLAN:
            data[0] = data[0] + (String.fromCharCode(0).repeat(7));
            data[0] = data[0].slice(0, 7);
        } else if (type == "M") {
            // APPLY CYAN COLOR:
            if (!isHidden) {
                data[0].name = "Az" + (data[0].name || "");
            } else {
                data[0].name = (data[0].name || "");
            }
            data[0].moofoll = true;
            data[0].skin = data[0].skin == 10 ? "__proto__" : data[0].skin;
            lastsp = [data[0].name, data[0].moofoll, data[0].skin];
        } else if (type == "D") {
            if ((my.lastDir == data[0]) || [null, undefined].includes(data[0])) {
                dontSend = true;
            } else {
                my.lastDir = data[0];
            }
        } else if (type == "F") {
            if (!data[2]) {
                dontSend = true;
            } else {
                if (![null, undefined].includes(data[1])) {
                    my.lastDir = data[1];
                }
            }
        } else if (type == "K") {
            if (!data[1]) {
                dontSend = true;
            }
        } else if (type == "S") {
            instaC.wait = !instaC.wait;
            dontSend = true;
        } else if (type == "f") {
            if (data[1]) {
                if (player.moveDir == data[0]) {
                    dontSend = true;
                }
                player.moveDir = data[0];
            } else {
                dontSend = true;
            }
        }
        if (!dontSend) {
            let binary = window.msgpack.encode([type, data]);
            this.nsend(binary);

            // START COUNT:
            if (!firstSend.sec) {
                firstSend.sec = true;
                setTimeout(() => {
                    firstSend.sec = false;
                    secPacket = 0;
                }, secTime);
            }

            secPacket++;
        }
    } else {
        this.nsend(message);
    }
}

function packet(type) {
    // EXTRACT DATA ARRAY:
    let data = Array.prototype.slice.call(arguments, 1);

    // SEND MESSAGE:
    let binary = window.msgpack.encode([type, data]);
    WS.send(binary);
}

function origPacket(type) {
    // EXTRACT DATA ARRAY:
    let data = Array.prototype.slice.call(arguments, 1);

    // SEND MESSAGE:
    let binary = window.msgpack.encode([type, data]);
    WS.nsend(binary);
}

window.leave = function () {
    origPacket("kys", {
        "frvr is so bad": true
        , "sidney is too good": true
        , "dev are too weak": true
        , });
};

//...lol
let io = {
    send: packet
};

function getMessage(message) {
    let data = new Uint8Array(message.data);
    let parsed = window.msgpack.decode(data);
    let type = parsed[0];
    data = parsed[1];
    /*
                    if (type == "H") {
                        let datafuck = data[0];
                        let gameObject = {
                            x: datafuck[1],
                            y: datafuck[2],
                            id: datafuck[0],
                            kind: datafuck[6],
                            ownerID: datafuck[7],
                            idk: datafuck[9],
                        };

                        if (gameObject.kind === 6) {
                            avoidSpike();
                        }
                    }
                    */
    let events = {
        A: setInitData, // id: setInitData,
        //B: disconnect,
        C: setupGame, // 1: setupGame,
        D: addPlayer, // 2: addPlayer,
        E: removePlayer, // 4: removePlayer,
        a: updatePlayers, // 33: updatePlayers,
        G: updateLeaderboard, // 5: updateLeaderboard,here
        H: loadGameObject, // 6: loadGameObject,
        I: loadAI, // a: loadAI,
        J: animateAI, // aa: animateAI,
        K: gatherAnimation, // 7: gatherAnimation,
        L: wiggleGameObject, // 8: wiggleGameObject,
        M: shootTurret, // sp: shootTurret,
        N: updatePlayerValue, // 9: updatePlayerValue,
        O: updateHealth, // h: updateHealth,//here
        P: killPlayer, // 11: killPlayer,
        Q: killObject, // 12: killObject,
        R: killObjects, // 13: killObjects,
        S: updateItemCounts, // 14: updateItemCounts,
        T: updateAge, // 15: updateAge,
        U: updateUpgrades, // 16: updateUpgrades,
        V: updateItems, // 17: updateItems,
        X: addProjectile, // 18: addProjectile,
        Y: remProjectile, // 19: remProjectile,
        //Z: serverShutdownNotice,
        //0: addAlliance,
        //1: deleteAlliance,
        // 2: allianceNotification, // an: allianceNotification,
        3: setPlayerTeam, // st: setPlayerTeam,
        4: setAlliancePlayers, // sa: setAlliancePlayers,
        5: updateStoreItems, // us: updateStoreItems,
        6: receiveChat, // ch: receiveChat,
        7: updateMinimap, // mm: updateMinimap,
        8: showText, // t: showText,
        9: pingMap, // p: pingMap,
        0: pingSocketResponse
        , };
    if (type == "io-init") {
        socketID = data[0];
    }
    else {
        if (events[type]) {
            events[type].apply(undefined, data);
        }
    }
}

// MATHS:
Math.lerpAngle = function (value1, value2, amount) {
    let difference = Math.abs(value2 - value1);
    if (difference > Math.PI) {
        if (value1 > value2) {
            value2 += Math.PI * 2;
        } else {
            value1 += Math.PI * 2;
        }
    }
    let value = value2 + ((value1 - value2) * amount);
    if (value >= 0 && value <= Math.PI * 2) return value;
    return value % (Math.PI * 2);
};

// REOUNDED RECTANGLE:
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    if (r < 0)
        r = 0;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
};

// GLOBAL VALUES:
function resetMoveDir() {
    keys = {};
    io.send("e");
}

let allChats = [];
let ticks = {
    tick: 0
    , delay: 0
    , time: []
    , manage: []
    , };
let ais = [];
let players = [];
let alliances = [];
let alliancePlayers = [];
let gameObjects = [];
let liztobj = [];
let projectiles = [];
let deadPlayers = [];

let breakObjects = [];

let player;
let playerSID;
let tmpObj;

let enemy = [];
let nears = [];
let near = [];

let my = {
    reloaded: false
    , waitHit: 0
    , autoAim: false
    , revAim: false
    , ageInsta: true
    , reSync: false
    , bullTick: 0
    , anti0Tick: 0
    , antiSync: false
    , safePrimary: function (tmpObj) {
        return [0, 8].includes(tmpObj.primaryIndex);
    }
    , safeSecondary: function (tmpObj) {
        return [10, 11, 14].includes(tmpObj.secondaryIndex);
    }
    , lastDir: 0
    , autoPush: false
    , pushData: {}
}

// FIND OBJECTS BY ID/SID:
function findID(tmpObj, tmp) {
    return tmpObj.find((THIS) => THIS.id == tmp);
}

function findSID(tmpObj, tmp) {
    return tmpObj.find((THIS) => THIS.sid == tmp);
}

function findPlayerByID(id) {
    return findID(players, id);
}

function findPlayerBySID(sid) {
    return findSID(players, sid);
}

function findAIBySID(sid) {
    return findSID(ais, sid);
}

function findObjectBySid(sid) {
    return findSID(gameObjects, sid);
}

function findProjectileBySid(sid) {
    return findSID(gameObjects, sid);
}

let gameName = getEl("gameName");
gameName.innerHTML = "𓂀 Azure 𓂀"
let chatButton = getEl("chatButton");
let gameCanvas = getEl("gameCanvas");
let mainContext = gameCanvas.getContext("2d");
let storeMenu = getEl("storeMenu");
let storeHolder = getEl("storeHolder");
let upgradeHolder = getEl("upgradeHolder");
let upgradeCounter = getEl("upgradeCounter");
let chatBox = getEl("chatBox");
let chatHolder = getEl("chatHolder");
let actionBar = getEl("actionBar");
let leaderboardData = getEl("leaderboardData");
let itemInfoHolder = getEl("itemInfoHolder");
let menuCardHolder = getEl("menuCardHolder");
let mainMenu = getEl("mainMenu");
let diedText = getEl("diedText");
let screenWidth;
let screenHeight;
let maxScreenWidth = config.maxScreenWidth;
let maxScreenHeight = config.maxScreenHeight;
let pixelDensity = 1;
let delta;
let now;
let lastUpdate = performance.now();
let camX;
let camY;
let tmpDir;
let mouseX = 0;
let mouseY = 0;
let allianceMenu = getEl("allianceMenu");
let waterMult = 1;
let waterPlus = 0;
document.getElementById("chatButton").remove();
document.getElementById("storeButton").remove();
document.getElementById("allianceButton").remove();
document.getElementById("foodDisplay").remove();
document.getElementById("woodDisplay").remove();
document.getElementById("stoneDisplay").remove();
document.getElementById("killCounter").remove();
document.getElementById("promoImgHolder").remove();
document.getElementById("adCard").remove();

let outlineColor = "#525252";
let darkOutlineColor = "#3d3f42";
let outlineWidth = 5.5;

let firstSetup = true;
let keys = {};
let moveKeys = {
    87: [0, -1]
    , 38: [0, -1]
    , 83: [0, 1]
    , 40: [0, 1]
    , 65: [-1, 0]
    , 37: [-1, 0]
    , 68: [1, 0]
    , 39: [1, 0]
    , };
let attackState = 0;
let inGame = false;

let macro = {};
let mills = {
    place: 0
    , placeSpawnPads: 0
    , x: 0
    , y: 0
};
let lastDir;

let lastLeaderboardData = [];

// ON LOAD:
let inWindow = true;
window.onblur = function() {
    inWindow = false;
};
window.onfocus = function() {
    inWindow = true;
    if (player && player.alive) {
        // resetMoveDir();
    }
};
let ms = {
    avg: 0,
    max: 0,
    min: 0,
    delay: 0
}
function pingSocketResponse() {
    let pingTime = window.pingTime;
    if (pingTime > ms.max || isNaN(ms.max)) {
        ms.max = pingTime;
    }
    if (pingTime < ms.min || isNaN(ms.min)) {
        ms.min = pingTime;
    }
}

let placeVisible = [];

/** CLASS CODES */


class Utils {
    constructor() {

        // MATH UTILS:
        let mathABS = Math.abs
        , mathCOS = Math.cos
        , mathSIN = Math.sin
        , mathPOW = Math.pow
        , mathSQRT = Math.sqrt
        , mathATAN2 = Math.atan2
        , mathPI = Math.PI;

        let _this = this;

        // GLOBAL UTILS:
        this.round = function (n, v) {
            return Math.round(n * v) / v;
        };
        this.toRad = function (angle) {
            return angle * (mathPI / 180);
        };
        this.toAng = function (radian) {
            return radian / (mathPI / 180);
        };
        this.randInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        this.randFloat = function (min, max) {
            return Math.random() * (max - min + 1) + min;
        };
        this.lerp = function (value1, value2, amount) {
            return value1 + (value2 - value1) * amount;
        };
        this.decel = function (val, cel) {
            if (val > 0)
                val = Math.max(0, val - cel);
            else if (val < 0)
                val = Math.min(0, val + cel);
            return val;
        };
        this.getDistance = function (x1, y1, x2, y2) {
            return mathSQRT((x2 -= x1) * x2 + (y2 -= y1) * y2);
        };
        this.getDist = function (tmp1, tmp2, type1, type2) {
            let tmpXY1 = {
                x: type1 == 0 ? tmp1.x : type1 == 1 ? tmp1.x1 : type1 == 2 ? tmp1.x2 : type1 == 3 && tmp1.x3
                , y: type1 == 0 ? tmp1.y : type1 == 1 ? tmp1.y1 : type1 == 2 ? tmp1.y2 : type1 == 3 && tmp1.y3
                , };
            let tmpXY2 = {
                x: type2 == 0 ? tmp2.x : type2 == 1 ? tmp2.x1 : type2 == 2 ? tmp2.x2 : type2 == 3 && tmp2.x3
                , y: type2 == 0 ? tmp2.y : type2 == 1 ? tmp2.y1 : type2 == 2 ? tmp2.y2 : type2 == 3 && tmp2.y3
                , };
            return mathSQRT((tmpXY2.x -= tmpXY1.x) * tmpXY2.x + (tmpXY2.y -= tmpXY1.y) * tmpXY2.y);
        };
        this.getDirection = function (x1, y1, x2, y2) {
            return mathATAN2(y1 - y2, x1 - x2);
        };
        this.getDirect = function (tmp1, tmp2, type1, type2) {
            let tmpXY1 = {
                x: type1 == 0 ? tmp1.x : type1 == 1 ? tmp1.x1 : type1 == 2 ? tmp1.x2 : type1 == 3 && tmp1.x3
                , y: type1 == 0 ? tmp1.y : type1 == 1 ? tmp1.y1 : type1 == 2 ? tmp1.y2 : type1 == 3 && tmp1.y3
                , };
            let tmpXY2 = {
                x: type2 == 0 ? tmp2.x : type2 == 1 ? tmp2.x1 : type2 == 2 ? tmp2.x2 : type2 == 3 && tmp2.x3
                , y: type2 == 0 ? tmp2.y : type2 == 1 ? tmp2.y1 : type2 == 2 ? tmp2.y2 : type2 == 3 && tmp2.y3
                , };
            return mathATAN2(tmpXY1.y - tmpXY2.y, tmpXY1.x - tmpXY2.x);
        };
        this.getAngleDist = function (a, b) {
            let p = mathABS(b - a) % (mathPI * 2);
            return (p > mathPI ? (mathPI * 2) - p : p);
        };
        this.isNumber = function (n) {
            return (typeof n == "number" && !isNaN(n) && isFinite(n));
        };
        this.isString = function (s) {
            return (s && typeof s == "string");
        };
        this.kFormat = function (num) {
            return num > 999 ? (num / 1000)
                .toFixed(1) + "k" : num;
        };
        this.sFormat = function (num) {
            let fixs = [{
                num: 1e3
                , string: "k"
            }
                        , {
                            num: 1e6
                            , string: "m"
                        }
                        , {
                            num: 1e9
                            , string: "b"
                        }
                        , {
                            num: 1e12
                            , string: "q"
                        }
                       ].reverse();
            let sp = fixs.find(v => num >= v.num);
            if (!sp) return num;
            return (num / sp.num)
                .toFixed(1) + sp.string;
        };
        this.capitalizeFirst = function (string) {
            return string.charAt(0)
                .toUpperCase() + string.slice(1);
        };
        this.fixTo = function (n, v) {
            return parseFloat(n.toFixed(v));
        };
        this.sortByPoints = function (a, b) {
            return parseFloat(b.points) - parseFloat(a.points);
        };
        this.lineInRect = function (recX, recY, recX2, recY2, x1, y1, x2, y2) {
            let minX = x1;
            let maxX = x2;
            if (x1 > x2) {
                minX = x2;
                maxX = x1;
            }
            if (maxX > recX2)
                maxX = recX2;
            if (minX < recX)
                minX = recX;
            if (minX > maxX)
                return false;
            let minY = y1;
            let maxY = y2;
            let dx = x2 - x1;
            if (Math.abs(dx) > 0.0000001) {
                let a = (y2 - y1) / dx;
                let b = y1 - a * x1;
                minY = a * minX + b;
                maxY = a * maxX + b;
            }
            if (minY > maxY) {
                let tmp = maxY;
                maxY = minY;
                minY = tmp;
            }
            if (maxY > recY2)
                maxY = recY2;
            if (minY < recY)
                minY = recY;
            if (minY > maxY)
                return false;
            return true;
        };
        this.containsPoint = function (element, x, y) {
            let bounds = element.getBoundingClientRect();
            let left = bounds.left + window.scrollX;
            let top = bounds.top + window.scrollY;
            let width = bounds.width;
            let height = bounds.height;

            let insideHorizontal = x > left && x < left + width;
            let insideVertical = y > top && y < top + height;
            return insideHorizontal && insideVertical;
        };
        this.mousifyTouchEvent = function (event) {
            let touch = event.changedTouches[0];
            event.screenX = touch.screenX;
            event.screenY = touch.screenY;
            event.clientX = touch.clientX;
            event.clientY = touch.clientY;
            event.pageX = touch.pageX;
            event.pageY = touch.pageY;
        };
        this.hookTouchEvents = function (element, skipPrevent) {
            let preventDefault = !skipPrevent;
            let isHovering = false;
            // let passive = window.Modernizr.passiveeventlisteners ? {passive: true} : false;
            let passive = false;
            element.addEventListener("touchstart", this.checkTrusted(touchStart), passive);
            element.addEventListener("touchmove", this.checkTrusted(touchMove), passive);
            element.addEventListener("touchend", this.checkTrusted(touchEnd), passive);
            element.addEventListener("touchcancel", this.checkTrusted(touchEnd), passive);
            element.addEventListener("touchleave", this.checkTrusted(touchEnd), passive);

            function touchStart(e) {
                _this.mousifyTouchEvent(e);
                window.setUsingTouch(true);
                if (preventDefault) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if (element.onmouseover)
                    element.onmouseover(e);
                isHovering = true;
            }

            function touchMove(e) {
                _this.mousifyTouchEvent(e);
                window.setUsingTouch(true);
                if (preventDefault) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if (_this.containsPoint(element, e.pageX, e.pageY)) {
                    if (!isHovering) {
                        if (element.onmouseover)
                            element.onmouseover(e);
                        isHovering = true;
                    }
                } else {
                    if (isHovering) {
                        if (element.onmouseout)
                            element.onmouseout(e);
                        isHovering = false;
                    }
                }
            }

            function touchEnd(e) {
                _this.mousifyTouchEvent(e);
                window.setUsingTouch(true);
                if (preventDefault) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if (isHovering) {
                    if (element.onclick)
                        element.onclick(e);
                    if (element.onmouseout)
                        element.onmouseout(e);
                    isHovering = false;
                }
            }
        };
        this.removeAllChildren = function (element) {
            while (element.hasChildNodes()) {
                element.removeChild(element.lastChild);
            }
        };
        this.generateElement = function (config) {
            let element = document.createElement(config.tag || "div");

            function bind(configValue, elementValue) {
                if (config[configValue])
                    element[elementValue] = config[configValue];
            }
            bind("text", "textContent");
            bind("html", "innerHTML");
            bind("class", "className");
            for (let key in config) {
                switch (key) {
                    case "tag":
                    case "text":
                    case "html":
                    case "class":
                    case "style":
                    case "hookTouch":
                    case "parent":
                    case "children":
                        continue;
                    default:
                        break;
                }
                element[key] = config[key];
            }
            if (element.onclick)
                element.onclick = this.checkTrusted(element.onclick);
            if (element.onmouseover)
                element.onmouseover = this.checkTrusted(element.onmouseover);
            if (element.onmouseout)
                element.onmouseout = this.checkTrusted(element.onmouseout);
            if (config.style) {
                element.style.cssText = config.style;
            }
            if (config.hookTouch) {
                this.hookTouchEvents(element);
            }
            if (config.parent) {
                config.parent.appendChild(element);
            }
            if (config.children) {
                for (let i = 0; i < config.children.length; i++) {
                    element.appendChild(config.children[i]);
                }
            }
            return element;
        };
        this.checkTrusted = function (callback) {
            return function (ev) {
                if (ev && ev instanceof Event && (ev && typeof ev.isTrusted == "boolean" ? ev.isTrusted : true)) {
                    callback(ev);
                } else {
                    //console.error("Event is not trusted.", ev);
                }
            };
        };
        this.randomString = function (length) {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        };
        this.countInArray = function (array, val) {
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] === val) count++;
            }
            return count;
        };
        this.hexToRgb = function (hex) {
            return hex.slice(1)
                .match(/.{1,2}/g)
                .map(g => parseInt(g, 16));
        };
        this.getRgb = function (r, g, b) {
            return [r / 255, g / 255, b / 255].join(", ");
        };
    }
};
class Animtext {
    // ANIMATED TEXT:
    constructor() {
        this.init = function (x, y, scale, speed, life, text, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.scale = scale;
            this.startScale = this.scale;
            this.maxScale = scale * 1.5;
            this.scaleSpeed = 0.7;
            this.speed = speed;
            this.life = life;
            this.text = text;
            this.acc = 1;
            this.alpha = 0;
            this.maxLife = life;
            this.ranX = UTILS.randFloat(-1, 1);
        };

        this.update = function (delta) {
            if (this.life > 0) {
                this.life -= delta;
                this.y -= this.speed * delta;
                if (this.life <= 0) {
                    this.life = 0;
                }
                this.alpha = 1;
            }
        };
        this.render = function (ctxt, xOff, yOff, value) {
            ctxt.fillStyle = this.color;
            ctxt.font = this.scale + "px Orbitron";
            ctxt.textAlign = "center";
            ctxt.textBaseline = "middle";
            ctxt.globalAlpha = this.alpha;
            ctxt.fillText(this.text, this.x - xOff, this.y - yOff);
            ctxt.globalAlpha = 1;
        };
    }
};
class Textmanager {
    // TEXT MANAGER:
    constructor() {
        this.texts = [];
        this.stack = [];

        this.update = function (delta, ctxt, xOff, yOff) {
            ctxt.textBaseline = "middle";
            ctxt.textAlign = "center";
            for (let i = 0; i < this.texts.length; ++i) {
                if (this.texts[i].life) {
                    this.texts[i].update(delta);
                    this.texts[i].render(ctxt, xOff, yOff);
                }
            }
        };

        this.showText = function (x, y, scale, speed, life, text, color) {
            let tmpText;
            for (let i = 0; i < this.texts.length; ++i) {
                if (!this.texts[i].life) {
                    tmpText = this.texts[i];
                    break;
                }
            }
            if (!tmpText) {
                tmpText = new Animtext();
                this.texts.push(tmpText);
            }
            tmpText.init(x, y, scale, speed, life, text, color);
        };
    }
}

class GameObject {
    constructor(sid) {
        this.sid = sid;

        // INIT:
        this.init = function (x, y, dir, scale, type, data, owner) {
            data = data || {};
            this.sentTo = {};
            this.gridLocations = [];
            this.active = true;
            this.render = true;
            this.doUpdate = data.doUpdate;
            this.x = x;
            this.y = y;
            this.dir = dir;
            this.lastDir = dir;
            this.xWiggle = 0;
            this.yWiggle = 0;
            this.visScale = scale;
            this.scale = scale;
            this.type = type;
            this.id = data.id;
            this.owner = owner;
            this.name = data.name;
            this.isItem = (this.id != undefined);
            this.group = data.group;
            this.maxHealth = data.health;
            this.health = this.maxHealth;
            this.layer = 2;
            if (this.group != undefined) {
                this.layer = this.group.layer;
            } else if (this.type == 0) {
                this.layer = 3;
            } else if (this.type == 2) {
                this.layer = 0;
            } else if (this.type == 4) {
                this.layer = -1;
            }
            this.colDiv = data.colDiv || 1;
            this.blocker = data.blocker;
            this.ignoreCollision = data.ignoreCollision;
            this.dontGather = data.dontGather;
            this.hideFromEnemy = data.hideFromEnemy;
            this.friction = data.friction;
            this.projDmg = data.projDmg;
            this.dmg = data.dmg;
            this.pDmg = data.pDmg;
            this.pps = data.pps;
            this.zIndex = data.zIndex || 0;
            this.turnSpeed = data.turnSpeed;
            this.req = data.req;
            this.trap = data.trap;
            this.healCol = data.healCol;
            this.teleport = data.teleport;
            this.boostSpeed = data.boostSpeed;
            this.projectile = data.projectile;
            this.shootRange = data.shootRange;
            this.shootRate = data.shootRate;
            this.shootCount = this.shootRate;
            this.spawnPoint = data.spawnPoint;
            this.onNear = 0;
            this.breakObj = false;
            this.alpha = data.alpha || 1;
            this.maxAlpha = data.alpha || 1;
            this.damaged = 0;
        };

        // GET HIT:
        this.changeHealth = function (amount, doer) {
            this.health += amount;
            return (this.health <= 0);
        };

        // GET SCALE:
        this.getScale = function (sM, ig) {
            sM = sM || 1;
            return this.scale * ((this.isItem || this.type == 2 || this.type == 3 || this.type == 4) ?
                                 1 : (0.6 * sM)) * (ig ? 1 : this.colDiv);
        };

        // VISIBLE TO PLAYER:
        this.visibleToPlayer = function (player) {
            return !(this.hideFromEnemy) || (this.owner && (this.owner == player ||
                                                            (this.owner.team && player.team == this.owner.team)));
        };

        // UPDATE:
        this.update = function (delta) {
            if (this.active) {
                if (this.xWiggle) {
                    this.xWiggle *= Math.pow(0.99, delta);
                }
                if (this.yWiggle) {
                    this.yWiggle *= Math.pow(0.99, delta);
                }
                let d2 = UTILS.getAngleDist(this.lastDir, this.dir);
                if (d2 > 0.01) {
                    this.dir += d2 / 5;
                } else {
                    this.dir = this.lastDir;
                }
            } else {
                if (this.alive) {
                    this.alpha -= delta / (200 / this.maxAlpha);
                    this.visScale += delta / (this.scale / 2.5);
                    if (this.alpha <= 0) {
                        this.alpha = 0;
                        this.alive = false;
                    }
                }
            }
        };

        // CHECK TEAM:
        this.isTeamObject = function (tmpObj) {
            return this.owner == null ? true : (this.owner && tmpObj.sid == this.owner.sid || tmpObj.findAllianceBySid(this.owner.sid));
        };
    }
}
class Items {
    constructor() {
        // ITEM GROUPS:
        this.groups = [{
            id: 0
            , name: "food"
            , layer: 0
        }, {
            id: 1
            , name: "walls"
            , place: true
            , limit: 30
            , layer: 0
        }, {
            id: 2
            , name: "spikes"
            , place: true
            , limit: 15
            , layer: 0
        }, {
            id: 3
            , name: "mill"
            , place: true
            , limit: 7
            , layer: 1
        }, {
            id: 4
            , name: "mine"
            , place: true
            , limit: 1
            , layer: 0
        }, {
            id: 5
            , name: "trap"
            , place: true
            , limit: 6
            , layer: -1
        }, {
            id: 6
            , name: "booster"
            , place: true
            , limit: 12
            , layer: -1
        }, {
            id: 7
            , name: "turret"
            , place: true
            , limit: 2
            , layer: 1
        }, {
            id: 8
            , name: "watchtower"
            , place: true
            , limit: 12
            , layer: 1
        }, {
            id: 9
            , name: "buff"
            , place: true
            , limit: 4
            , layer: -1
        }, {
            id: 10
            , name: "spawn"
            , place: true
            , limit: 1
            , layer: -1
        }, {
            id: 11
            , name: "sapling"
            , place: true
            , limit: 2
            , layer: 0
        }, {
            id: 12
            , name: "blocker"
            , place: true
            , limit: 3
            , layer: -1
        }, {
            id: 13
            , name: "teleporter"
            , place: true
            , limit: 2
            , layer: -1
        }];

        // PROJECTILES:
        this.projectiles = [{
            indx: 0
            , layer: 0
            , src: "arrow_1"
            , dmg: 25
            , speed: 1.6
            , scale: 103
            , range: 1000
        }, {
            indx: 1
            , layer: 1
            , dmg: 25
            , scale: 20
        }, {
            indx: 0
            , layer: 0
            , src: "arrow_1"
            , dmg: 35
            , speed: 2.5
            , scale: 103
            , range: 1200
        }, {
            indx: 0
            , layer: 0
            , src: "arrow_1"
            , dmg: 30
            , speed: 2
            , scale: 103
            , range: 1200
        }, {
            indx: 1
            , layer: 1
            , dmg: 16
            , scale: 20
        }, {
            indx: 0
            , layer: 0
            , src: "bullet_1"
            , dmg: 50
            , speed: 3.6
            , scale: 160
            , range: 1400
        }];

        // WEAPONS:
        this.weapons = [{
            id: 0
            , type: 0
            , name: "tool hammer"
            , desc: "tool for gathering all resources"
            , src: "hammer_1"
            , length: 140
            , width: 140
            , xOff: -3
            , yOff: 18
            , dmg: 25
            , range: 65
            , gather: 1
            , speed: 300
        }, {
            id: 1
            , type: 0
            , age: 2
            , name: "hand axe"
            , desc: "gathers resources at a higher rate"
            , src: "axe_1"
            , length: 140
            , width: 140
            , xOff: 3
            , yOff: 24
            , dmg: 30
            , spdMult: 1
            , range: 70
            , gather: 2
            , speed: 400
        }, {
            id: 2
            , type: 0
            , age: 8
            , pre: 1
            , name: "great axe"
            , desc: "deal more damage and gather more resources"
            , src: "great_axe_1"
            , length: 140
            , width: 140
            , xOff: -8
            , yOff: 25
            , dmg: 35
            , spdMult: 1
            , range: 75
            , gather: 4
            , speed: 400
        }, {
            id: 3
            , type: 0
            , age: 2
            , name: "short sword"
            , desc: "increased attack power but slower move speed"
            , src: "sword_1"
            , iPad: 1.3
            , length: 130
            , width: 210
            , xOff: -8
            , yOff: 46
            , dmg: 35
            , spdMult: 0.85
            , range: 110
            , gather: 1
            , speed: 300
        }, {
            id: 4
            , type: 0
            , age: 8
            , pre: 3
            , name: "katana"
            , desc: "greater range and damage"
            , src: "samurai_1"
            , iPad: 1.3
            , length: 130
            , width: 210
            , xOff: -8
            , yOff: 59
            , dmg: 40
            , spdMult: 0.8
            , range: 118
            , gather: 1
            , speed: 300
        }, {
            id: 5
            , type: 0
            , age: 2
            , name: "polearm"
            , desc: "long range melee weapon"
            , src: "spear_1"
            , iPad: 1.3
            , length: 130
            , width: 210
            , xOff: -8
            , yOff: 53
            , dmg: 45
            , knock: 0.2
            , spdMult: 0.82
            , range: 142
            , gather: 1
            , speed: 700
        }, {
            id: 6
            , type: 0
            , age: 2
            , name: "bat"
            , desc: "fast long range melee weapon"
            , src: "bat_1"
            , iPad: 1.3
            , length: 110
            , width: 180
            , xOff: -8
            , yOff: 53
            , dmg: 20
            , knock: 0.7
            , range: 110
            , gather: 1
            , speed: 300
        }, {
            id: 7
            , type: 0
            , age: 2
            , name: "daggers"
            , desc: "really fast short range weapon"
            , src: "dagger_1"
            , iPad: 0.8
            , length: 110
            , width: 110
            , xOff: 18
            , yOff: 0
            , dmg: 20
            , knock: 0.1
            , range: 65
            , gather: 1
            , hitSlow: 0.1
            , spdMult: 1.13
            , speed: 100
        }, {
            id: 8
            , type: 0
            , age: 2
            , name: "stick"
            , desc: "great for gathering but very weak"
            , src: "stick_1"
            , length: 140
            , width: 140
            , xOff: 3
            , yOff: 24
            , dmg: 1
            , spdMult: 1
            , range: 70
            , gather: 7
            , speed: 400
        }, {
            id: 9
            , type: 1
            , age: 6
            , name: "hunting bow"
            , desc: "bow used for ranged combat and hunting"
            , src: "bow_1"
            , req: ["wood", 4]
            , length: 120
            , width: 120
            , xOff: -6
            , yOff: 0
            , Pdmg: 25
            , projectile: 0
            , spdMult: 0.75
            , speed: 600
        }, {
            id: 10
            , type: 1
            , age: 6
            , name: "great hammer"
            , desc: "hammer used for destroying structures"
            , src: "great_hammer_1"
            , length: 140
            , width: 140
            , xOff: -9
            , yOff: 25
            , dmg: 10
            , Pdmg: 10
            , spdMult: 0.88
            , range: 75
            , sDmg: 7.5
            , gather: 1
            , speed: 400
        }, {
            id: 11
            , type: 1
            , age: 6
            , name: "wooden shield"
            , desc: "blocks projectiles and reduces melee damage"
            , src: "shield_1"
            , length: 120
            , width: 120
            , shield: 0.2
            , xOff: 6
            , yOff: 0
            , Pdmg: 0
            , spdMult: 0.7
        }, {
            id: 12
            , type: 1
            , age: 8
            , pre: 9
            , name: "crossbow"
            , desc: "deals more damage and has greater range"
            , src: "crossbow_1"
            , req: ["wood", 5]
            , aboveHand: true
            , armS: 0.75
            , length: 120
            , width: 120
            , xOff: -4
            , yOff: 0
            , Pdmg: 35
            , projectile: 2
            , spdMult: 0.7
            , speed: 700
        }, {
            id: 13
            , type: 1
            , age: 9
            , pre: 12
            , name: "repeater crossbow"
            , desc: "high firerate crossbow with reduced damage"
            , src: "crossbow_2"
            , req: ["wood", 10]
            , aboveHand: true
            , armS: 0.75
            , length: 120
            , width: 120
            , xOff: -4
            , yOff: 0
            , Pdmg: 30
            , projectile: 3
            , spdMult: 0.7
            , speed: 230
        }, {
            id: 14
            , type: 1
            , age: 6
            , name: "mc grabby"
            , desc: "steals resources from enemies"
            , src: "grab_1"
            , length: 130
            , width: 210
            , xOff: -8
            , yOff: 53
            , dmg: 0
            , Pdmg: 0
            , steal: 250
            , knock: 0.2
            , spdMult: 1.05
            , range: 125
            , gather: 0
            , speed: 700
        }, {
            id: 15
            , type: 1
            , age: 9
            , pre: 12
            , name: "musket"
            , desc: "slow firerate but high damage and range"
            , src: "musket_1"
            , req: ["stone", 10]
            , aboveHand: true
            , rec: 0.35
            , armS: 0.6
            , hndS: 0.3
            , hndD: 1.6
            , length: 205
            , width: 205
            , xOff: 25
            , yOff: 0
            , Pdmg: 50
            , projectile: 5
            , hideProjectile: true
            , spdMult: 0.6
            , speed: 1500
        }];

        // ITEMS:
        this.list = [{
            group: this.groups[0]
            , name: "apple"
            , desc: "restores 20 health when consumed"
            , req: ["food", 10]
            , consume: function (doer) {
                return doer.changeHealth(20, doer);
            }
            , scale: 22
            , holdOffset: 15
            , healing: 20
            , itemID: 0
            , itemAID: 16
            , }, {
                age: 3
                , group: this.groups[0]
                , name: "cookie"
                , desc: "restores 40 health when consumed"
                , req: ["food", 15]
                , consume: function (doer) {
                    return doer.changeHealth(40, doer);
                }
                , scale: 27
                , holdOffset: 15
                , healing: 40
                , itemID: 1
                , itemAID: 17
                , }, {
                    age: 7
                    , group: this.groups[0]
                    , name: "cheese"
                    , desc: "restores 30 health and another 50 over 5 seconds"
                    , req: ["food", 25]
                    , consume: function (doer) {
                        if (doer.changeHealth(30, doer) || doer.health < 100) {
                            doer.dmgOverTime.dmg = -10;
                            doer.dmgOverTime.doer = doer;
                            doer.dmgOverTime.time = 5;
                            return true;
                        }
                        return false;
                    }
                    , scale: 27
                    , holdOffset: 15
                    , healing: 30
                    , itemID: 2
                    , itemAID: 18
                    , }, {
                        group: this.groups[1]
                        , name: "wood wall"
                        , desc: "provides protection for your village"
                        , req: ["wood", 10]
                        , projDmg: true
                        , health: 380
                        , scale: 50
                        , holdOffset: 20
                        , placeOffset: -5
                        , itemID: 3
                        , itemAID: 19
                        , }, {
                            age: 3
                            , group: this.groups[1]
                            , name: "stone wall"
                            , desc: "provides improved protection for your village"
                            , req: ["stone", 25]
                            , health: 900
                            , scale: 50
                            , holdOffset: 20
                            , placeOffset: -5
                            , itemID: 4
                            , itemAID: 20
                            , }, {
                                age: 7
                                , group: this.groups[1]
                                , name: "castle wall"
                                , desc: "provides powerful protection for your village"
                                , req: ["stone", 35]
                                , health: 1500
                                , scale: 52
                                , holdOffset: 20
                                , placeOffset: -5
                                , itemID: 5
                                , itemAID: 21
                                , }, {
                                    group: this.groups[2]
                                    , name: "spikes"
                                    , desc: "damages enemies when they touch them"
                                    , req: ["wood", 20, "stone", 5]
                                    , health: 400
                                    , dmg: 20
                                    , scale: 49
                                    , spritePadding: -23
                                    , holdOffset: 8
                                    , placeOffset: -5
                                    , itemID: 6
                                    , itemAID: 22
                                    , }, {
                                        age: 5
                                        , group: this.groups[2]
                                        , name: "greater spikes"
                                        , desc: "damages enemies when they touch them"
                                        , req: ["wood", 30, "stone", 10]
                                        , health: 500
                                        , dmg: 35
                                        , scale: 52
                                        , spritePadding: -23
                                        , holdOffset: 8
                                        , placeOffset: -5
                                        , itemID: 7
                                        , itemAID: 23
                                        , }, {
                                            age: 9
                                            , group: this.groups[2]
                                            , name: "poison spikes"
                                            , desc: "poisons enemies when they touch them"
                                            , req: ["wood", 35, "stone", 15]
                                            , health: 600
                                            , dmg: 30
                                            , pDmg: 5
                                            , scale: 52
                                            , spritePadding: -23
                                            , holdOffset: 8
                                            , placeOffset: -5
                                            , itemID: 8
                                            , itemAID: 24
                                            , }, {
                                                age: 9
                                                , group: this.groups[2]
                                                , name: "spinning spikes"
                                                , desc: "damages enemies when they touch them"
                                                , req: ["wood", 30, "stone", 20]
                                                , health: 500
                                                , dmg: 45
                                                , turnSpeed: 0.003
                                                , scale: 52
                                                , spritePadding: -23
                                                , holdOffset: 8
                                                , placeOffset: -5
                                                , itemID: 9
                                                , itemAID: 25
                                                , }, {
                                                    group: this.groups[3]
                                                    , name: "windmill"
                                                    , desc: "generates gold over time"
                                                    , req: ["wood", 50, "stone", 10]
                                                    , health: 400
                                                    , pps: 1
                                                    , turnSpeed: 0.0016
                                                    , spritePadding: 25
                                                    , iconLineMult: 12
                                                    , scale: 45
                                                    , holdOffset: 20
                                                    , placeOffset: 5
                                                    , itemID: 10
                                                    , itemAID: 26
                                                    , }, {
                                                        age: 5
                                                        , group: this.groups[3]
                                                        , name: "faster windmill"
                                                        , desc: "generates more gold over time"
                                                        , req: ["wood", 60, "stone", 20]
                                                        , health: 500
                                                        , pps: 1.5
                                                        , turnSpeed: 0.0025
                                                        , spritePadding: 25
                                                        , iconLineMult: 12
                                                        , scale: 47
                                                        , holdOffset: 20
                                                        , placeOffset: 5
                                                        , itemID: 11
                                                        , itemAID: 27
                                                        , }, {
                                                            age: 8
                                                            , group: this.groups[3]
                                                            , name: "power mill"
                                                            , desc: "generates more gold over time"
                                                            , req: ["wood", 100, "stone", 50]
                                                            , health: 800
                                                            , pps: 2
                                                            , turnSpeed: 0.005
                                                            , spritePadding: 25
                                                            , iconLineMult: 12
                                                            , scale: 47
                                                            , holdOffset: 20
                                                            , placeOffset: 5
                                                            , itemID: 12
                                                            , itemAID: 28
                                                            , }, {
                                                                age: 5
                                                                , group: this.groups[4]
                                                                , type: 2
                                                                , name: "mine"
                                                                , desc: "allows you to mine stone"
                                                                , req: ["wood", 20, "stone", 100]
                                                                , iconLineMult: 12
                                                                , scale: 65
                                                                , holdOffset: 20
                                                                , placeOffset: 0
                                                                , itemID: 13
                                                                , itemAID: 29
                                                                , }, {
                                                                    age: 5
                                                                    , group: this.groups[11]
                                                                    , type: 0
                                                                    , name: "sapling"
                                                                    , desc: "allows you to farm wood"
                                                                    , req: ["wood", 150]
                                                                    , iconLineMult: 12
                                                                    , colDiv: 0.5
                                                                    , scale: 110
                                                                    , holdOffset: 50
                                                                    , placeOffset: -15
                                                                    , itemID: 14
                                                                    , itemAID: 30
                                                                    , }, {
                                                                        age: 4
                                                                        , group: this.groups[5]
                                                                        , name: "pit trap"
                                                                        , desc: "pit that traps enemies if they walk over it"
                                                                        , req: ["wood", 30, "stone", 30]
                                                                        , trap: true
                                                                        , ignoreCollision: true
                                                                        , hideFromEnemy: true
                                                                        , health: 500
                                                                        , colDiv: 0.2
                                                                        , scale: 50
                                                                        , holdOffset: 20
                                                                        , placeOffset: -5
                                                                        , alpha: 0.6
                                                                        , itemID: 15
                                                                        , itemAID: 31
                                                                        , }, {
                                                                            age: 4
                                                                            , group: this.groups[6]
                                                                            , name: "boost pad"
                                                                            , desc: "provides boost when stepped on"
                                                                            , req: ["stone", 20, "wood", 5]
                                                                            , ignoreCollision: true
                                                                            , boostSpeed: 1.5
                                                                            , health: 150
                                                                            , colDiv: 0.7
                                                                            , scale: 45
                                                                            , holdOffset: 20
                                                                            , placeOffset: -5
                                                                            , itemID: 16
                                                                            , itemAID: 32
                                                                            , }, {
                                                                                age: 7
                                                                                , group: this.groups[7]
                                                                                , doUpdate: true
                                                                                , name: "turret"
                                                                                , desc: "defensive structure that shoots at enemies"
                                                                                , req: ["wood", 200, "stone", 150]
                                                                                , health: 800
                                                                                , projectile: 1
                                                                                , shootRange: 700
                                                                                , shootRate: 2200
                                                                                , scale: 43
                                                                                , holdOffset: 20
                                                                                , placeOffset: -5
                                                                                , itemID: 17
                                                                                , itemAID: 33
                                                                                , }, {
                                                                                    age: 7
                                                                                    , group: this.groups[8]
                                                                                    , name: "platform"
                                                                                    , desc: "platform to shoot over walls and cross over water"
                                                                                    , req: ["wood", 20]
                                                                                    , ignoreCollision: true
                                                                                    , zIndex: 1
                                                                                    , health: 300
                                                                                    , scale: 43
                                                                                    , holdOffset: 20
                                                                                    , placeOffset: -5
                                                                                    , itemID: 18
                                                                                    , itemAID: 34
                                                                                    , }, {
                                                                                        age: 7
                                                                                        , group: this.groups[9]
                                                                                        , name: "healing pad"
                                                                                        , desc: "standing on it will slowly heal you"
                                                                                        , req: ["wood", 30, "food", 10]
                                                                                        , ignoreCollision: true
                                                                                        , healCol: 15
                                                                                        , health: 400
                                                                                        , colDiv: 0.7
                                                                                        , scale: 45
                                                                                        , holdOffset: 20
                                                                                        , placeOffset: -5
                                                                                        , itemID: 19
                                                                                        , itemAID: 35
                                                                                        , }, {
                                                                                            age: 9
                                                                                            , group: this.groups[10]
                                                                                            , name: "spawn pad"
                                                                                            , desc: "you will spawn here when you die but it will dissapear"
                                                                                            , req: ["wood", 100, "stone", 100]
                                                                                            , health: 400
                                                                                            , ignoreCollision: true
                                                                                            , spawnPoint: true
                                                                                            , scale: 45
                                                                                            , holdOffset: 20
                                                                                            , placeOffset: -5
                                                                                            , itemID: 20
                                                                                            , itemAID: 36
                                                                                            , }, {
                                                                                                age: 7
                                                                                                , group: this.groups[12]
                                                                                                , name: "blocker"
                                                                                                , desc: "blocks building in radius"
                                                                                                , req: ["wood", 30, "stone", 25]
                                                                                                , ignoreCollision: true
                                                                                                , blocker: 300
                                                                                                , health: 400
                                                                                                , colDiv: 0.7
                                                                                                , scale: 45
                                                                                                , holdOffset: 20
                                                                                                , placeOffset: -5
                                                                                                , itemID: 21
                                                                                                , itemAID: 37
                                                                                                , }, {
                                                                                                    age: 7
                                                                                                    , group: this.groups[13]
                                                                                                    , name: "teleporter"
                                                                                                    , desc: "teleports you to a random point on the map"
                                                                                                    , req: ["wood", 60, "stone", 60]
                                                                                                    , ignoreCollision: true
                                                                                                    , teleport: true
                                                                                                    , health: 200
                                                                                                    , colDiv: 0.7
                                                                                                    , scale: 45
                                                                                                    , holdOffset: 20
                                                                                                    , placeOffset: -5
                                                                                                    , itemID: 22
                                                                                                    , itemAID: 38
                                                                                                }];

        // CHECK ITEM ID:
        this.checkItem = {
            index: function (id, myItems) {
                return [0, 1, 2].includes(id) ? 0 : [3, 4, 5].includes(id) ? 1 : [6, 7, 8, 9].includes(id) ? 2 : [10, 11, 12].includes(id) ? 3 : [13, 14].includes(id) ? 5 : [15, 16].includes(id) ? 4 : [17, 18, 19, 21, 22].includes(id) ? [13, 14].includes(myItems) ? 6 :
                5 :
                id == 20 ? [13, 14].includes(myItems) ? 7 :
                6 :
                undefined;
            }
        }

        // ASSIGN IDS:
        for (let i = 0; i < this.list.length; ++i) {
            this.list[i].id = i;
            if (this.list[i].pre) this.list[i].pre = i - this.list[i].pre;
        }

        // TROLOLOLOL:
        if (typeof window !== "undefined") {
            function shuffle(a) {
                for (let i = a.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }
                return a;
            }
            //shuffle(this.list);
        }
    }
}
class Objectmanager {
    constructor(GameObject, liztobj, UTILS, config, players, server) {
        let mathFloor = Math.floor
        , mathABS = Math.abs
        , mathCOS = Math.cos
        , mathSIN = Math.sin
        , mathPOW = Math.pow
        , mathSQRT = Math.sqrt;

        this.ignoreAdd = false;
        this.hitObj = [];

        // DISABLE OBJ:
        this.disableObj = function (obj) {
            obj.active = false;
        };

        // ADD NEW:
        let tmpObj;
        this.add = function (sid, x, y, dir, s, type, data, setSID, owner) {
            tmpObj = findObjectBySid(sid);
            if (!tmpObj) {
                tmpObj = gameObjects.find((tmp) => !tmp.active);
                if (!tmpObj) {
                    tmpObj = new GameObject(sid);
                    gameObjects.push(tmpObj);
                }
            }
            if (setSID) {
                tmpObj.sid = sid;
            }
            tmpObj.init(x, y, dir, s, type, data, owner);
        };

        // DISABLE BY SID:
        this.disableBySid = function (sid) {
            let find = findObjectBySid(sid);
            if (find) {
                this.disableObj(find);
            }
        };

        // REMOVE ALL FROM PLAYER:
        this.removeAllItems = function (sid, server) {
            gameObjects.filter((tmp) => tmp.active && tmp.owner && tmp.owner.sid == sid)
                .forEach((tmp) => this.disableObj(tmp));
        };

        // CHECK IF PLACABLE:
        this.checkItemLocation = function (x, y, s, sM, indx, ignoreWater, placer) {
            let cantPlace = liztobj.find((tmp) => tmp.active && UTILS.getDistance(x, y, tmp.x, tmp.y) < s + (tmp.blocker ? tmp.blocker : tmp.getScale(sM, tmp.isItem)));
            if (cantPlace) return false;
            if (!ignoreWater && indx != 18 && y >= config.mapScale / 2 - config.riverWidth / 2 && y <= config.mapScale / 2 + config.riverWidth / 2) return false;
            return true;
        };

    }
}
class Projectile {
    constructor(players, ais, objectManager, items, config, UTILS, server) {

        // INIT:
        this.init = function (indx, x, y, dir, spd, dmg, rng, scl, owner) {
            this.active = true;
            this.tickActive = true;
            this.indx = indx;
            this.x = x;
            this.y = y;
            this.x2 = x;
            this.y2 = y;
            this.dir = dir;
            this.skipMov = true;
            this.speed = spd;
            this.dmg = dmg;
            this.scale = scl;
            this.range = rng;
            this.r2 = rng;
            this.owner = owner;
        };

        // UPDATE:
        this.update = function (delta) {
            if (this.active) {
                let tmpSpeed = this.speed * delta;
                if (!this.skipMov) {
                    this.x += tmpSpeed * Math.cos(this.dir);
                    this.y += tmpSpeed * Math.sin(this.dir);
                    this.range -= tmpSpeed;
                    if (this.range <= 0) {
                        this.x += this.range * Math.cos(this.dir);
                        this.y += this.range * Math.sin(this.dir);
                        tmpSpeed = 1;
                        this.range = 0;
                        this.active = false;
                    }
                } else {
                    this.skipMov = false;
                }
            }
        };
        this.tickUpdate = function (delta) {
            if (this.tickActive) {
                let tmpSpeed = this.speed * delta;
                if (!this.skipMov) {
                    this.x2 += tmpSpeed * Math.cos(this.dir);
                    this.y2 += tmpSpeed * Math.sin(this.dir);
                    this.r2 -= tmpSpeed;
                    if (this.r2 <= 0) {
                        this.x2 += this.r2 * Math.cos(this.dir);
                        this.y2 += this.r2 * Math.sin(this.dir);
                        tmpSpeed = 1;
                        this.r2 = 0;
                        this.tickActive = false;
                    }
                } else {
                    this.skipMov = false;
                }
            }
        };
    }
};
class Store {
    constructor() {
        // STORE HATS:
        this.hats = [{
            id: 45
            , name: "Shame!"
            , dontSell: true
            , price: 0
            , scale: 120
            , desc: "hacks are for winners"
        }, {
            id: 51
            , name: "Moo Cap"
            , price: 0
            , scale: 120
            , desc: "coolest mooer around"
        }, {
            id: 50
            , name: "Apple Cap"
            , price: 0
            , scale: 120
            , desc: "apple farms remembers"
        }, {
            id: 28
            , name: "Moo Head"
            , price: 0
            , scale: 120
            , desc: "no effect"
        }, {
            id: 29
            , name: "Pig Head"
            , price: 0
            , scale: 120
            , desc: "no effect"
        }, {
            id: 30
            , name: "Fluff Head"
            , price: 0
            , scale: 120
            , desc: "no effect"
        }, {
            id: 36
            , name: "Pandou Head"
            , price: 0
            , scale: 120
            , desc: "no effect"
        }, {
            id: 37
            , name: "Bear Head"
            , price: 0
            , scale: 120
            , desc: "no effect"
        }, {
            id: 38
            , name: "Monkey Head"
            , price: 0
            , scale: 120
            , desc: "no effect"
        }, {
            id: 44
            , name: "Polar Head"
            , price: 0
            , scale: 120
            , desc: "no effect"
        }, {
            id: 35
            , name: "Fez Hat"
            , price: 0
            , scale: 120
            , desc: "no effect"
        }, {
            id: 42
            , name: "Enigma Hat"
            , price: 0
            , scale: 120
            , desc: "join the enigma army"
        }, {
            id: 43
            , name: "Blitz Hat"
            , price: 0
            , scale: 120
            , desc: "hey everybody i'm blitz"
        }, {
            id: 49
            , name: "Bob XIII Hat"
            , price: 0
            , scale: 120
            , desc: "like and subscribe"
        }, {
            id: 57
            , name: "Pumpkin"
            , price: 50
            , scale: 120
            , desc: "Spooooky"
        }, {
            id: 8
            , name: "Bummle Hat"
            , price: 100
            , scale: 120
            , desc: "no effect"
        }, {
            id: 2
            , name: "Straw Hat"
            , price: 500
            , scale: 120
            , desc: "no effect"
        }, {
            id: 15
            , name: "Winter Cap"
            , price: 600
            , scale: 120
            , desc: "allows you to move at normal speed in snow"
            , coldM: 1
        }, {
            id: 5
            , name: "Cowboy Hat"
            , price: 1000
            , scale: 120
            , desc: "no effect"
        }, {
            id: 4
            , name: "Ranger Hat"
            , price: 2000
            , scale: 120
            , desc: "no effect"
        }, {
            id: 18
            , name: "Explorer Hat"
            , price: 2000
            , scale: 120
            , desc: "no effect"
        }, {
            id: 31
            , name: "Flipper Hat"
            , price: 2500
            , scale: 120
            , desc: "have more control while in water"
            , watrImm: true
        }, {
            id: 1
            , name: "Marksman Cap"
            , price: 3000
            , scale: 120
            , desc: "increases arrow speed and range"
            , aMlt: 1.3
        }, {
            id: 10
            , name: "Bush Gear"
            , price: 3000
            , scale: 160
            , desc: "allows you to disguise yourself as a bush"
        }, {
            id: 48
            , name: "Halo"
            , price: 3000
            , scale: 120
            , desc: "no effect"
        }, {
            id: 6
            , name: "Soldier Helmet"
            , price: 4000
            , scale: 120
            , desc: "reduces damage taken but slows movement"
            , spdMult: 0.94
            , dmgMult: 0.75
        }, {
            id: 23
            , name: "Anti Venom Gear"
            , price: 4000
            , scale: 120
            , desc: "makes you immune to poison"
            , poisonRes: 1
        }, {
            id: 13
            , name: "Medic Gear"
            , price: 5000
            , scale: 110
            , desc: "slowly regenerates health over time"
            , healthRegen: 3
        }, {
            id: 9
            , name: "Miners Helmet"
            , price: 5000
            , scale: 120
            , desc: "earn 1 extra gold per resource"
            , extraGold: 1
        }, {
            id: 32
            , name: "Musketeer Hat"
            , price: 5000
            , scale: 120
            , desc: "reduces cost of projectiles"
            , projCost: 0.5
        }, {
            id: 7
            , name: "Bull Helmet"
            , price: 6000
            , scale: 120
            , desc: "increases damage done but drains health"
            , healthRegen: -5
            , dmgMultO: 1.5
            , spdMult: 0.96
        }, {
            id: 22
            , name: "Emp Helmet"
            , price: 6000
            , scale: 120
            , desc: "turrets won't attack but you move slower"
            , antiTurret: 1
            , spdMult: 0.7
        }, {
            id: 12
            , name: "Booster Hat"
            , price: 6000
            , scale: 120
            , desc: "increases your movement speed"
            , spdMult: 1.16
        }, {
            id: 26
            , name: "Barbarian Armor"
            , price: 8000
            , scale: 120
            , desc: "knocks back enemies that attack you"
            , dmgK: 0.6
        }, {
            id: 21
            , name: "Plague Mask"
            , price: 10000
            , scale: 120
            , desc: "melee attacks deal poison damage"
            , poisonDmg: 5
            , poisonTime: 6
        }, {
            id: 46
            , name: "Bull Mask"
            , price: 10000
            , scale: 120
            , desc: "bulls won't target you unless you attack them"
            , bullRepel: 1
        }, {
            id: 14
            , name: "Windmill Hat"
            , topSprite: true
            , price: 10000
            , scale: 120
            , desc: "generates points while worn"
            , pps: 1.5
        }, {
            id: 11
            , name: "Spike Gear"
            , topSprite: true
            , price: 10000
            , scale: 120
            , desc: "deal damage to players that damage you"
            , dmg: 0.45
        }, {
            id: 53
            , name: "Turret Gear"
            , topSprite: true
            , price: 10000
            , scale: 120
            , desc: "you become a walking turret"
            , turret: {
                proj: 1
                , range: 700
                , rate: 2500
            }
            , spdMult: 0.7
        }, {
            id: 20
            , name: "Samurai Armor"
            , price: 12000
            , scale: 120
            , desc: "increased attack speed and fire rate"
            , atkSpd: 0.78
        }, {
            id: 58
            , name: "Dark Knight"
            , price: 12000
            , scale: 120
            , desc: "restores health when you deal damage"
            , healD: 0.4
        }, {
            id: 27
            , name: "Scavenger Gear"
            , price: 15000
            , scale: 120
            , desc: "earn double points for each kill"
            , kScrM: 2
        }, {
            id: 40
            , name: "Tank Gear"
            , price: 15000
            , scale: 120
            , desc: "increased damage to buildings but slower movement"
            , spdMult: 0.3
            , bDmg: 3.3
        }, {
            id: 52
            , name: "Thief Gear"
            , price: 15000
            , scale: 120
            , desc: "steal half of a players gold when you kill them"
            , goldSteal: 0.5
        }, {
            id: 55
            , name: "Bloodthirster"
            , price: 20000
            , scale: 120
            , desc: "Restore Health when dealing damage. And increased damage"
            , healD: 0.25
            , dmgMultO: 1.2
            , }, {
                id: 56
                , name: "Assassin Gear"
                , price: 20000
                , scale: 120
                , desc: "Go invisible when not moving. Can't eat. Increased speed"
                , noEat: true
                , spdMult: 1.1
                , invisTimer: 1000
            }];

        // STORE ACCESSORIES:
        this.accessories = [{
            id: 12
            , name: "Snowball"
            , price: 1000
            , scale: 105
            , xOff: 18
            , desc: "no effect"
        }, {
            id: 9
            , name: "Tree Cape"
            , price: 1000
            , scale: 90
            , desc: "no effect"
        }, {
            id: 10
            , name: "Stone Cape"
            , price: 1000
            , scale: 90
            , desc: "no effect"
        }, {
            id: 3
            , name: "Cookie Cape"
            , price: 1500
            , scale: 90
            , desc: "no effect"
        }, {
            id: 8
            , name: "Cow Cape"
            , price: 2000
            , scale: 90
            , desc: "no effect"
        }, {
            id: 11
            , name: "Monkey Tail"
            , price: 2000
            , scale: 97
            , xOff: 25
            , desc: "Super speed but reduced damage"
            , spdMult: 1.35
            , dmgMultO: 0.2
        }, {
            id: 17
            , name: "Apple Basket"
            , price: 3000
            , scale: 80
            , xOff: 12
            , desc: "slowly regenerates health over time"
            , healthRegen: 1
        }, {
            id: 6
            , name: "Winter Cape"
            , price: 3000
            , scale: 90
            , desc: "no effect"
        }, {
            id: 4
            , name: "Skull Cape"
            , price: 4000
            , scale: 90
            , desc: "no effect"
        }, {
            id: 5
            , name: "Dash Cape"
            , price: 5000
            , scale: 90
            , desc: "no effect"
        }, {
            id: 2
            , name: "Dragon Cape"
            , price: 6000
            , scale: 90
            , desc: "no effect"
        }, {
            id: 1
            , name: "Super Cape"
            , price: 8000
            , scale: 90
            , desc: "no effect"
        }, {
            id: 7
            , name: "Troll Cape"
            , price: 8000
            , scale: 90
            , desc: "no effect"
        }, {
            id: 14
            , name: "Thorns"
            , price: 10000
            , scale: 115
            , xOff: 20
            , desc: "no effect"
        }, {
            id: 15
            , name: "Blockades"
            , price: 10000
            , scale: 95
            , xOff: 15
            , desc: "no effect"
        }, {
            id: 20
            , name: "Devils Tail"
            , price: 10000
            , scale: 95
            , xOff: 20
            , desc: "no effect"
        }, {
            id: 16
            , name: "Sawblade"
            , price: 12000
            , scale: 90
            , spin: true
            , xOff: 0
            , desc: "deal damage to players that damage you"
            , dmg: 0.15
        }, {
            id: 13
            , name: "Angel Wings"
            , price: 15000
            , scale: 138
            , xOff: 22
            , desc: "slowly regenerates health over time"
            , healthRegen: 3
        }, {
            id: 19
            , name: "Shadow Wings"
            , price: 15000
            , scale: 138
            , xOff: 22
            , desc: "increased movement speed"
            , spdMult: 1.1
        }, {
            id: 18
            , name: "Blood Wings"
            , price: 20000
            , scale: 178
            , xOff: 26
            , desc: "restores health when you deal damage"
            , healD: 0.2
        }, {
            id: 21
            , name: "Corrupt X Wings"
            , price: 20000
            , scale: 178
            , xOff: 26
            , desc: "deal damage to players that damage you"
            , dmg: 0.25
        }];
    }
};
class ProjectileManager {
    constructor(Projectile, projectiles, players, ais, objectManager, items, config, UTILS, server) {
        this.addProjectile = function (x, y, dir, range, speed, indx, owner, ignoreObj, layer, inWindow) {
            let tmpData = items.projectiles[indx];
            let tmpProj;
            for (let i = 0; i < projectiles.length; ++i) {
                if (!projectiles[i].active) {
                    tmpProj = projectiles[i];
                    break;
                }
            }
            if (!tmpProj) {
                tmpProj = new Projectile(players, ais, objectManager, items, config, UTILS, server);
                tmpProj.sid = projectiles.length;
                projectiles.push(tmpProj);
            }
            tmpProj.init(indx, x, y, dir, speed, tmpData.dmg, range, tmpData.scale, owner);
            tmpProj.ignoreObj = ignoreObj;
            tmpProj.layer = layer || tmpData.layer;
            tmpProj.inWindow = inWindow;
            tmpProj.src = tmpData.src;
            return tmpProj;
        };
    }
};
class AiManager {

    // AI MANAGER:
    constructor(ais, AI, players, items, objectManager, config, UTILS, scoreCallback, server) {

        // AI TYPES:
        this.aiTypes = [{
            id: 0
            , src: "cow_1"
            , killScore: 150
            , health: 500
            , weightM: 0.8
            , speed: 0.00095
            , turnSpeed: 0.001
            , scale: 72
            , drop: ["food", 50]
        }, {
            id: 1
            , src: "pig_1"
            , killScore: 200
            , health: 800
            , weightM: 0.6
            , speed: 0.00085
            , turnSpeed: 0.001
            , scale: 72
            , drop: ["food", 80]
        }, {
            id: 2
            , name: "Bull"
            , src: "bull_2"
            , hostile: true
            , dmg: 20
            , killScore: 1000
            , health: 1800
            , weightM: 0.5
            , speed: 0.00094
            , turnSpeed: 0.00074
            , scale: 78
            , viewRange: 800
            , chargePlayer: true
            , drop: ["food", 100]
        }, {
            id: 3
            , name: "Bully"
            , src: "bull_1"
            , hostile: true
            , dmg: 20
            , killScore: 2000
            , health: 2800
            , weightM: 0.45
            , speed: 0.001
            , turnSpeed: 0.0008
            , scale: 90
            , viewRange: 900
            , chargePlayer: true
            , drop: ["food", 400]
        }, {
            id: 4
            , name: "Wolf"
            , src: "wolf_1"
            , hostile: true
            , dmg: 8
            , killScore: 500
            , health: 300
            , weightM: 0.45
            , speed: 0.001
            , turnSpeed: 0.002
            , scale: 84
            , viewRange: 800
            , chargePlayer: true
            , drop: ["food", 200]
        }, {
            id: 5
            , name: "Quack"
            , src: "chicken_1"
            , dmg: 8
            , killScore: 2000
            , noTrap: true
            , health: 300
            , weightM: 0.2
            , speed: 0.0018
            , turnSpeed: 0.006
            , scale: 70
            , drop: ["food", 100]
        }, {
            id: 6
            , name: "MOOSTAFA"
            , nameScale: 50
            , src: "enemy"
            , hostile: true
            , dontRun: true
            , fixedSpawn: true
            , spawnDelay: 60000
            , noTrap: true
            , colDmg: 100
            , dmg: 40
            , killScore: 8000
            , health: 18000
            , weightM: 0.4
            , speed: 0.0007
            , turnSpeed: 0.01
            , scale: 80
            , spriteMlt: 1.8
            , leapForce: 0.9
            , viewRange: 1000
            , hitRange: 210
            , hitDelay: 1000
            , chargePlayer: true
            , drop: ["food", 100]
        }, {
            id: 7
            , name: "Treasure"
            , hostile: true
            , nameScale: 35
            , src: "crate_1"
            , fixedSpawn: true
            , spawnDelay: 120000
            , colDmg: 200
            , killScore: 5000
            , health: 20000
            , weightM: 0.1
            , speed: 0.0
            , turnSpeed: 0.0
            , scale: 70
            , spriteMlt: 1.0
        }, {
            id: 8
            , name: "MOOFIE"
            , src: "wolf_2"
            , hostile: true
            , fixedSpawn: true
            , dontRun: true
            , hitScare: 4
            , spawnDelay: 30000
            , noTrap: true
            , nameScale: 35
            , dmg: 10
            , colDmg: 100
            , killScore: 3000
            , health: 7000
            , weightM: 0.45
            , speed: 0.0015
            , turnSpeed: 0.002
            , scale: 90
            , viewRange: 800
            , chargePlayer: true
            , drop: ["food", 1000]
        }, {
            id: 9
            , name: "💀MOOFIE"
            , src: "wolf_2"
            , hostile: !0
            , fixedSpawn: !0
            , dontRun: !0
            , hitScare: 50
            , spawnDelay: 6e4
            , noTrap: !0
            , nameScale: 35
            , dmg: 12
            , colDmg: 100
            , killScore: 3e3
            , health: 9e3
            , weightM: .45
            , speed: .0015
            , turnSpeed: .0025
            , scale: 94
            , viewRange: 1440
            , chargePlayer: !0
            , drop: ["food", 3e3]
            , minSpawnRange: .85
            , maxSpawnRange: .9
        }, {
            id: 10
            , name: "💀Wolf"
            , src: "wolf_1"
            , hostile: !0
            , fixedSpawn: !0
            , dontRun: !0
            , hitScare: 50
            , spawnDelay: 3e4
            , dmg: 10
            , killScore: 700
            , health: 500
            , weightM: .45
            , speed: .00115
            , turnSpeed: .0025
            , scale: 88
            , viewRange: 1440
            , chargePlayer: !0
            , drop: ["food", 400]
            , minSpawnRange: .85
            , maxSpawnRange: .9
        }, {
            id: 11
            , name: "💀Bully"
            , src: "bull_1"
            , hostile: !0
            , fixedSpawn: !0
            , dontRun: !0
            , hitScare: 50
            , dmg: 20
            , killScore: 5e3
            , health: 5e3
            , spawnDelay: 1e5
            , weightM: .45
            , speed: .00115
            , turnSpeed: .0025
            , scale: 94
            , viewRange: 1440
            , chargePlayer: !0
            , drop: ["food", 800]
            , minSpawnRange: .85
            , maxSpawnRange: .9
        }];

        // SPAWN AI:
        this.spawn = function (x, y, dir, index) {
            let tmpObj = ais.find((tmp) => !tmp.active);
            if (!tmpObj) {
                tmpObj = new AI(ais.length, objectManager, players, items, UTILS, config, scoreCallback, server);
                ais.push(tmpObj);
            }
            tmpObj.init(x, y, dir, index, this.aiTypes[index]);
            return tmpObj;
        };
    }

};
class AI {
    constructor(sid, objectManager, players, items, UTILS, config, scoreCallback, server) {
        this.sid = sid;
        this.isAI = true;
        this.nameIndex = UTILS.randInt(0, config.cowNames.length - 1);

        // INIT:
        this.init = function (x, y, dir, index, data) {
            this.x = x;
            this.y = y;
            this.startX = data.fixedSpawn ? x : null;
            this.startY = data.fixedSpawn ? y : null;
            this.xVel = 0;
            this.yVel = 0;
            this.zIndex = 0;
            this.dir = dir;
            this.dirPlus = 0;
            this.showName = 'aaa';
            this.index = index;
            this.src = data.src;
            if (data.name) this.name = data.name;
            (this.name || "")
                .startsWith("💀") && (this.isVolcanoAi = !0);
            this.weightM = data.weightM;
            this.speed = data.speed;
            this.killScore = data.killScore;
            this.turnSpeed = data.turnSpeed;
            this.scale = data.scale;
            this.maxHealth = data.health;
            this.leapForce = data.leapForce;
            this.health = this.maxHealth;
            this.chargePlayer = data.chargePlayer;
            this.viewRange = data.viewRange;
            this.drop = data.drop;
            this.dmg = data.dmg;
            this.hostile = data.hostile;
            this.dontRun = data.dontRun;
            this.hitRange = data.hitRange;
            this.hitDelay = data.hitDelay;
            this.hitScare = data.hitScare;
            this.spriteMlt = data.spriteMlt;
            this.nameScale = data.nameScale;
            this.colDmg = data.colDmg;
            this.noTrap = data.noTrap;
            this.spawnDelay = data.spawnDelay;
            this.hitWait = 0;
            this.waitCount = 1000;
            this.moveCount = 0;
            this.targetDir = 0;
            this.active = true;
            this.alive = true;
            this.runFrom = null;
            this.chargeTarget = null;
            this.dmgOverTime = {};
        };
        this.getVolcanoAggression = function () {
            let p = UTILS.getDistance(this.x, this.y, config.volcanoLocationX, config.volcanoLocationY)
            , h = p > config.volcanoAggressionRadius ? 0 : config.volcanoAggressionRadius - p;
            return 1 + config.volcanoAggressionPercentage * (1 - h / config.volcanoAggressionRadius)
        }
        let tmpRatio = 0;
        let animIndex = 0;
        this.animate = function (delta) {
            if (this.animTime > 0) {
                this.animTime -= delta;
                if (this.animTime <= 0) {
                    this.animTime = 0;
                    this.dirPlus = 0;
                    tmpRatio = 0;
                    animIndex = 0;
                } else {
                    if (animIndex == 0) {
                        tmpRatio += delta / (this.animSpeed * config.hitReturnRatio);
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio));
                        if (tmpRatio >= 1) {
                            tmpRatio = 1;
                            animIndex = 1;
                        }
                    } else {
                        tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio));
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio));
                    }
                }
            }
        };

        // ANIMATION:
        this.startAnim = function () {
            this.animTime = this.animSpeed = 600;
            this.targetAngle = Math.PI * 0.8;
            tmpRatio = 0;
            animIndex = 0;
        };

    };

};
class addCh {
    constructor(x, y, chat, tmpObj) {
        this.x = x;
        this.y = y;
        this.alpha = 0;
        this.active = true;
        this.alive = false;
        this.chat = chat;
        this.owner = tmpObj;
    };
};
class DeadPlayer {
    constructor(x, y, dir, buildIndex, weaponIndex, weaponVariant, skinColor, scale, name) {
        this.x = x;
        this.y = y;
        this.lastDir = dir;
        this.dir = dir + Math.PI;
        this.buildIndex = buildIndex;
        this.weaponIndex = weaponIndex;
        this.weaponVariant = weaponVariant;
        this.skinColor = skinColor;
        this.scale = scale;
        this.visScale = 0;
        this.name = name;
        this.alpha = 1;
        this.active = true;
        this.animate = function (delta) {
            let d2 = UTILS.getAngleDist(this.lastDir, this.dir);
            if (d2 > 0.01) {
                this.dir += d2 / 20;
            } else {
                this.dir = this.lastDir;
            }
            if (this.visScale < this.scale) {
                this.visScale += delta / (this.scale / 2);
                if (this.visScale >= this.scale) {
                    this.visScale = this.scale;
                }
            }
            this.alpha -= delta / 30000;
            if (this.alpha <= 0) {
                this.alpha = 0;
                this.active = false;
            }
        }
    }
};

class Player {
    constructor(id, sid, config, UTILS, projectileManager, objectManager, players, ais, items, hats, accessories, server, scoreCallback, iconCallback) {
        this.id = id;
        this.sid = sid;
        this.tmpScore = 0;
        this.team = null;
        this.latestSkin = 0;
        this.oldSkinIndex = 0;
        this.skinIndex = 0;
        this.latestTail = 0;
        this.oldTailIndex = 0;
        this.tailIndex = 0;
        this.hitTime = 0;
        this.lastHit = 0;
        this.showName = 'NOOO';
        this.tails = {};
        for (let i = 0; i < accessories.length; ++i) {
            if (accessories[i].price <= 0)
                this.tails[accessories[i].id] = 1;
        }
        this.skins = {};
        for (let i = 0; i < hats.length; ++i) {
            if (hats[i].price <= 0)
                this.skins[hats[i].id] = 1;
        }
        this.points = 0;
        this.dt = 0;
        this.hidden = false;
        this.itemCounts = {};
        this.isPlayer = true;
        this.pps = 0;
        this.moveDir = undefined;
        this.skinRot = 0;
        this.lastPing = 0;
        this.iconIndex = 0;
        this.skinColor = 0;
        this.dist2 = 0;
        this.aim2 = 0;
        this.maxSpeed = 1;
        this.chat = {
            message: null
            , count: 0
        };
        this.backupNobull = true;
        this.circle = false;
        this.circleRad = 200;
        this.circleRadSpd = 0.1;
        this.cAngle = 0;
        // SPAWN:
        this.spawn = function (moofoll) {
            this.attacked = false;
            this.timeDamaged = 0;
            this.timeHealed = 100;
            this.pinge = 0;
            this.millPlace = 'NOOO';
            this.lastshamecount = 0;
            this.death = false;
            this.spinDir = 0;
            this.sync = false;
            this.antiBull = 0;
            this.bullTimer = 0;
            this.poisonTimer = 0;
            this.active = true;
            this.alive = true;
            this.lockMove = false;
            this.lockDir = false;
            this.minimapCounter = 0;
            this.chatCountdown = 0;
            this.shameCount = 0;
            this.shameTimer = 0;
            this.sentTo = {};
            this.gathering = 0;
            this.gatherIndex = 0;
            this.shooting = {};
            this.shootIndex = 9;
            this.autoGather = 0;
            this.animTime = 0;
            this.animSpeed = 0;
            this.mouseState = 0;
            this.buildIndex = -1;
            this.weaponIndex = 0;
            this.weaponCode = 0;
            this.weaponVariant = 0;
            this.primaryIndex = undefined;
            this.secondaryIndex = undefined;
            this.dmgOverTime = {};
            this.noMovTimer = 0;
            this.maxXP = 300;
            this.XP = 0;
            this.age = 1;
            this.kills = 0;
            this.upgrAge = 2;
            this.upgradePoints = 0;
            this.x = 0;
            this.y = 0;
            this.oldXY = {
                x: 0
                , y: 0
            };
            this.zIndex = 0;
            this.xVel = 0;
            this.yVel = 0;
            this.slowMult = 1;
            this.dir = 0;
            this.dirPlus = 0;
            this.targetDir = 0;
            this.targetAngle = 0;
            this.maxHealth = 100;
            this.health = this.maxHealth;
            this.oldHealth = this.maxHealth;
            this.damaged = 0;
            this.scale = config.playerScale;
            this.speed = config.playerSpeed;
            this.resetMoveDir();
            this.resetResources(moofoll);
            this.items = [0, 3, 6, 10];
            this.weapons = [0];
            this.shootCount = 0;
            this.weaponXP = [];
            this.reloads = {
                0: 0
                , 1: 0
                , 2: 0
                , 3: 0
                , 4: 0
                , 5: 0
                , 6: 0
                , 7: 0
                , 8: 0
                , 9: 0
                , 10: 0
                , 11: 0
                , 12: 0
                , 13: 0
                , 14: 0
                , 15: 0
                , 53: 0
                , };
            this.bowThreat = {
                9: 0
                , 12: 0
                , 13: 0
                , 15: 0
                , };
            this.damageThreat = 0;
            this.inTrap = false;
            this.canEmpAnti = false;
            this.empAnti = false;
            this.soldierAnti = false;
            this.poisonTick = 0;
            this.bullTick = 0;
            this.setPoisonTick = false;
            this.antiTimer = 2;
        };

        // RESET MOVE DIR:
        this.resetMoveDir = function () {
            this.moveDir = undefined;
        };

        // RESET RESOURCES:
        this.resetResources = function (moofoll) {
            for (let i = 0; i < config.resourceTypes.length; ++i) {
                this[config.resourceTypes[i]] = moofoll ? 100 : 0;
            }
        };

        // ADD ITEM:
        this.getItemType = function (id) {
            let findindx = this.items.findIndex((ids) => ids == id);
            if (findindx != -1) {
                return findindx;
            } else {
                return items.checkItem.index(id, this.items);
            }
        };

        // SET DATA:
        this.setData = function (data) {
            this.id = data[0];
            this.sid = data[1];
            this.name = data[2];
            this.x = data[3];
            this.y = data[4];
            this.dir = data[5];
            this.health = data[6];
            this.maxHealth = data[7];
            this.scale = data[8];
            this.skinColor = data[9];
        };

        // UPDATE POISON TICK:
        this.updateTimer = function () {
            this.bullTimer -= 1;
            if (this.bullTimer <= 0) {
                this.bullTick = game.tick - 1;
                this.bullTimer = config.serverUpdateRate;
            }
            this.poisonTimer -= 1;
            if (this.poisonTimer <= 0) {
                this.setPoisonTick = false;
                this.poisonTick = game.tick - 1;
                this.poisonTimer = config.serverUpdateRate;
            }

        };
        this.update = function (delta) {
            if (this.active) {
                // MOVE:
                let gear = {
                    skin: findID(hats, this.skinIndex)
                    , tail: findID(accessories, this.tailIndex)
                }
                let spdMult = ((this.buildIndex >= 0) ? 0.5 : 1) * (items.weapons[this.weaponIndex].spdMult || 1) * (gear.skin ? (gear.skin.spdMult || 1) : 1) * (gear.tail ? (gear.tail.spdMult || 1) : 1) * (this.y <= config.snowBiomeTop ? ((gear.skin && gear.skin.coldM) ? 1 : config.snowSpeed) : 1) * this.slowMult;
                this.maxSpeed = spdMult;

            }
        };

        let tmpRatio = 0;
        let animIndex = 0;
        this.animate = function (delta) {
            if (this.animTime > 0) {
                this.animTime -= delta;
                if (this.animTime <= 0) {
                    this.animTime = 0;
                    this.dirPlus = 0;
                    tmpRatio = 0;
                    animIndex = 0;
                } else {
                    if (animIndex == 0) {
                        tmpRatio += delta / (this.animSpeed * config.hitReturnRatio);
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio));
                        if (tmpRatio >= 1) {
                            tmpRatio = 1;
                            animIndex = 1;
                        }
                    } else {
                        tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio));
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio));
                    }
                }
            }
        };

        // GATHER ANIMATION:
        this.startAnim = function (didHit, index) {
            this.animTime = this.animSpeed = items.weapons[index].speed;
            this.targetAngle = (didHit ? -config.hitAngle : -Math.PI);
            tmpRatio = 0;
            animIndex = 0;
        };

        // CAN SEE:
        this.canSee = function (other) {
            if (!other) return false;
            let dx = Math.abs(other.x - this.x) - other.scale;
            let dy = Math.abs(other.y - this.y) - other.scale;
            return dx <= (config.maxScreenWidth / 2) * 1.3 && dy <= (config.maxScreenHeight / 2) * 1.3;
        };

        // SHAME SYSTEM:
        this.judgeShame = function () {
            this.lastshamecount = this.shameCount;
            if (this.oldHealth < this.health) {
                if (this.hitTime) {
                    let timeSinceHit = game.tick - this.hitTime;
                    this.lastHit = game.tick;
                    this.hitTime = 0;
                    if (timeSinceHit < 2) {
                        this.shameCount++;
                    } else {
                        this.shameCount = Math.max(0, this.shameCount - 2);
                    }
                }
            } else if (this.oldHealth > this.health) {
                this.hitTime = game.tick;
            }
        };

        this.addShameTimer = function () {
            this.shameCount = 0;
            this.shameTimer = 30;
            let interval = setInterval(() => {
                this.shameTimer--;
                if (this.shameTimer <= 0) {
                    clearInterval(interval);
                }
            }, 1000);
        };

        // CHECK TEAM:
        this.isTeam = function (tmpObj) {
            return (this == tmpObj || (this.team && this.team == tmpObj.team));
        };

        // FOR THE PLAYER:
        this.findAllianceBySid = function (sid) {
            return this.team ? alliancePlayers.find((THIS) => THIS === sid) : null;
        };

        this.checkCanInsta = function (nobull) {
            let totally = 0;
            if (this.alive && inGame) {
                let primary = {
                    weapon: this.weapons[0]
                    , variant: this.primaryVariant
                    , dmg: this.weapons[0] == undefined ? 0 : items.weapons[this.weapons[0]].dmg
                    , };
                let secondary = {
                    weapon: this.weapons[1]
                    , variant: this.secondaryVariant
                    , dmg: this.weapons[1] == undefined ? 0 : items.weapons[this.weapons[1]].Pdmg
                    , };
                let bull = this.skins[7] && !nobull ? 1.5 : 1;
                let pV = primary.variant != undefined ? config.weaponVariants[primary.variant].val : 1;
                if (primary.weapon != undefined && this.reloads[primary.weapon] == 0) {
                    totally += primary.dmg * pV * bull;
                }
                if (secondary.weapon != undefined && this.reloads[secondary.weapon] == 0) {
                    totally += secondary.dmg;
                }
                if (this.skins[53] && this.reloads[53] <= (player.weapons[1] == 10 ? 0 : game.tickRate) && near.skinIndex != 22) {
                    totally += 25;
                }
                totally *= near.skinIndex == 6 ? 0.75 : 1;
                return totally;
            }
            return 0;
        };

        this.manageReload = function () {
            if (this.shooting[53]) {
                this.shooting[53] = 0;
                this.reloads[53] = (2500 - game.tickRate);
            } else {
                if (this.reloads[53] > 0) {
                    this.reloads[53] = Math.max(0, this.reloads[53] - game.tickRate);
                }
            }

            if (this.reloads[this.weaponIndex] <= 1000 / 9) {
                let index = this.weaponIndex;
                let nearObja = liztobj.filter((e) => (e.active || e.alive) && e.health < e.maxHealth && e.group !== undefined && UTILS.getDist(e, player, 0, 2) <= (items.weapons[player.weaponIndex].range + e.scale));
                for (let i = 0; i < nearObja.length; i++) {
                    let aaa = nearObja[i];

                    let val = items.weapons[index].dmg * (config.weaponVariants[tmpObj[(index < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[index].sDmg || 1) * 3.3;
                    let valaa = items.weapons[index].dmg * (config.weaponVariants[tmpObj[(index < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[index].sDmg || 1);
                    if (aaa.health - (valaa) <= 0 && near.length) {
                        place(near.dist2 < ((near.scale * 1.8) + 50) ? 4 : 2, caf(aaa, player) + Math.PI);
                    }
                }
            }

            if (this.gathering || this.shooting[1]) {
                if (this.gathering) {
                    this.gathering = 0;
                    this.reloads[this.gatherIndex] = (items.weapons[this.gatherIndex].speed * (this.skinIndex == 20 ? 0.78 : 1));
                    this.attacked = true;
                }
                if (this.shooting[1]) {
                    this.shooting[1] = 0;
                    this.reloads[this.shootIndex] = (items.weapons[this.shootIndex].speed * (this.skinIndex == 20 ? 0.78 : 1));
                    this.attacked = true;
                }
            } else {
                this.attacked = false;
                if (this.buildIndex < 0) {
                    if (this.reloads[this.weaponIndex] > 0) {
                        // Math.max(0, this.reloads[this.weaponIndex] - game.tickRate)
                        this.reloads[this.weaponIndex] = Math.max(0, this.reloads[this.weaponIndex] - 110);
                        if (this == player) {
                            if (getEl("weaponGrind")
                                .checked) {
                                for (let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
                                    checkPlace(player.getItemType(22), i);
                                }
                            }
                        }
                        if (this.reloads[this.primaryIndex] == 0 && this.reloads[this.weaponIndex] == 0) {
                            this.antiBull++;
                            game.tickBase(() => {
                                this.antiBull = 0;
                            }, 1);
                        }
                    }
                }
            }
        };

        this.addDamageThreat = function (tmpObj) {
            let primary = {
                weapon: this.primaryIndex
                , variant: this.primaryVariant
            };
            primary.dmg = primary.weapon == undefined ? 45 : items.weapons[primary.weapon].dmg;
            let secondary = {
                weapon: this.secondaryIndex
                , variant: this.secondaryVariant
            };
            secondary.dmg = secondary.weapon == undefined ? 35 : items.weapons[secondary.weapon].Pdmg;
            let bull = 1.5;
            let pV = primary.variant != undefined ? config.weaponVariants[primary.variant].val : 1.18;
            let sV = secondary.variant != undefined ? [9, 12, 17, 15].includes(secondary.weapon) ? 1 : config.weaponVariants[secondary.variant].val : 1.18;
            if (primary.weapon == undefined ? true : this.reloads[primary.weapon] == 0) {
                this.damageThreat += primary.dmg * pV * bull;
            }
            if (secondary.weapon == undefined ? true : this.reloads[secondary.weapon] == 0) {
                this.damageThreat += secondary.dmg * sV;
            }
            if (this.reloads[53] <= game.tickRate) {
                this.damageThreat += 25;
            }
            this.damageThreat *= tmpObj.skinIndex == 6 ? 0.75 : 1;
            if (!this.isTeam(tmpObj)) {
                if (this.dist2 <= 300) {
                    tmpObj.damageThreat += this.damageThreat;
                }
            }
        };

        this.addDamageProbability = function (tmpObj) {
            let primary = {
                weapon: this.primaryIndex
                , variant: this.primaryVariant
            };
            primary.dmg = primary.weapon == undefined ? 45 : items.weapons[primary.weapon].dmg;
            let secondary = {
                weapon: this.secondaryIndex
                , variant: this.secondaryVariant
            };
            secondary.dmg = secondary.weapon == undefined ? 50 : items.weapons[secondary.weapon].Pdmg;
            let bull = 1.5;
            let pV = primary.variant != undefined ? config.weaponVariants[primary.variant].val : 1.18;
            let sV = secondary.variant != undefined ? [9, 12, 17, 15].includes(secondary.weapon) ? 1 : config.weaponVariants[secondary.variant].val : 1.18;
            if (primary.weapon == undefined ? true : this.reloads[primary.weapon] == 0) {
                this.damageProbably += primary.dmg * pV * bull * 0.75;
            }
            if (secondary.weapon == undefined ? true : this.reloads[secondary.weapon] == 0) {
                this.damageProbably += secondary.dmg * sV;
            }
            this.damageProbably *= 0.75;
            if (!this.isTeam(tmpObj)) {
                if (this.dist2 <= 300) {
                    tmpObj.damageProbably += this.damageProbably;
                }
            }
        };
    }
};


// SOME CODES:
function sendUpgrade(index) {
    player.reloads[index] = 0;
    packet("H", index);
}

function storeEquip(id, index) {
    packet("c", 0, id, index);
}

function storeBuy(id, index) {
    packet("c", 1, id, index);
}

function buyEquip(id, index) {
    let nID = player.skins[6] ? 6 : 0;
    if (player.alive && inGame) {
        if (index == 0) {
            if (player.skins[id]) {
                if (player.latestSkin != id) {
                    packet("c", 0, id, 0);
                }
            } else {
                if (configs.autoBuyEquip) {
                    let find = findID(hats, id);
                    if (find) {
                        if (player.points >= find.price) {
                            packet("c", 1, id, 0);
                            packet("c", 0, id, 0);
                        } else {
                            if (player.latestSkin != nID) {
                                packet("c", 0, nID, 0);
                            }
                        }
                    } else {
                        if (player.latestSkin != nID) {
                            packet("c", 0, nID, 0);
                        }
                    }
                } else {
                    if (player.latestSkin != nID) {
                        packet("c", 0, nID, 0);
                    }
                }
            }
        } else if (index == 1) {
            if (useWasd && (id != 11 && id != 0)) {
                if (player.latestTail != 0) {
                    packet("c", 0, 0, 1);
                }
                return;
            }
            if (player.tails[id]) {
                if (player.latestTail != id) {
                    packet("c", 0, id, 1);
                }
            } else {
                if (configs.autoBuyEquip) {
                    let find = findID(accessories, id);
                    if (find) {
                        if (player.points >= find.price) {
                            packet("c", 1, id, 1);
                            packet("c", 0, id, 1);
                        } else {
                            if (player.latestTail != 0) {
                                packet("c", 0, 0, 1);
                            }
                        }
                    } else {
                        if (player.latestTail != 0) {
                            packet("c", 0, 0, 1);
                        }
                    }
                } else {
                    if (player.latestTail != 0) {
                        packet("c", 0, 0, 1);
                    }
                }
            }
        }
    }
}

function findAllianceBySid(sid) {
    return player.team ? alliancePlayers.find((THIS) => THIS === sid) : null;
}

function calculatePossibleTrapPositions(x, y, radius) {
    let trapPositions = [];
    let numPositions = 16;
    for (let i = 0; i < numPositions; i++) {
        let angle = (2 * Math.PI * i) / numPositions;
        let offsetX = x + radius * Math.cos(angle);
        let offsetY = y + radius * Math.sin(angle);
        let position = [offsetX, offsetY];
        if (!trapPositions.some((pos) => isPositionTooClose(position, pos))) {
            trapPositions.push(position);
        }
    }
    return trapPositions;
}

function isPositionTooClose(position1, position2, minDistance = 50) {
    let dist = Math.hypot(position1[0] - position2[0], position1[1] - position2[1]);
    return dist < minDistance;
}

function selectToBuild(index, wpn) {
    packet("z", index, wpn);
}

function selectWeapon(index, isPlace) {
    if (!isPlace) {
        player.weaponCode = index;
    }
    packet("z", index, 1);
}

function sendAutoGather() {
    packet("K", 1, 1);
}

function sendAtck(id, angle) {
    packet("F", id, angle, 1);
}

// PLACER:
function place(id, rad, rmd) {
    if (id == undefined) return;
    let item = items.list[player.items[id]];
    let tmpS = player.scale + item.scale + (item.placeOffset || 0);
    let tmpX = player.x2 + tmpS * Math.cos(rad);
    let tmpY = player.y2 + tmpS * Math.sin(rad);
    if ((player.alive && inGame && player.itemCounts[item.group.id] == undefined ? true : player.itemCounts[item.group.id] < (config.isSandbox ? id === 3 || id === 5 ? 299 : 99 : item.group.limit ? item.group.limit : 99))) {
        selectToBuild(player.items[id]);
        sendAtck(1, rad);
        selectWeapon(player.weaponCode, 1);
        if (rmd && getEl("placeVis").checked) {
            placeVisible.push({
                x: tmpX
                , y: tmpY
                , name: item.name
                , scale: item.scale
                , dir: rad
            });
            game.tickBase(() => {
                placeVisible.shift();
            }, 1)
        }
    }
}

function checkPlace(id, radian) {
    if (id == undefined) return;
    let item = items.list[player.items[id]];
    let tmpS = player.scale + item.scale + (item.placeOffset || 0);
    let tmpX = player.x2 + tmpS * Math.cos(radian);
    let tmpY = player.y2 + tmpS * Math.sin(radian);
    if (objectManager.checkItemLocation(tmpX, tmpY, item.scale, 0.6, item.id, false, player)) {
        place(id, radian, 1);
    }
}

function soldierMult() {
    return player.latestSkin == 6 ? 0.75 : 1;
}

function healthBased() {
    if (player.health == 100) {
        return 0;
    }
    if (player.skinIndex != 45) {
        return Math.ceil((100 - player.health) / items.list[player.items[0]].healing);
    }
    return 0;
}

function getAttacker(damaged) {
    let attackers = enemy.filter((tmp) => {
        let damages = new Damages(items);
        let dmg = damages.weapons[tmp.weaponIndex];
        let by = tmp.weaponIndex < 9 ? [dmg[0], dmg[1], dmg[2], dmg[3]] : [dmg[0], dmg[1]];
        let rule = {
            one: tmp.dist2 <= 300,
            two: by.includes(damaged),
            three: tmp.attacked,
        };
        return rule.one && rule.two && rule.three;
    });
    return attackers;
}

function healer() {
    for (let i = 0; i < healthBased(); i++) {
        place(0, getAttackDir());
    }
}

function healer1() {
    place(0, getAttackDir());
    return Math.ceil((100 - player.health) / items.list[player.items[0]].healing);
}

// LATER:
function predictHeal(random) {
    for (let Preidict in random) {
        place(0, getAttackDir());
    }
}

function antiSyncHealing(timearg) {
    my.antiSync = true;
    let healAnti = setInterval(() => {
        if (player.shameCount < 5) {
            place(0, getAttackDir());
        }
    }, 0);
    setTimeout(() => {
        clearInterval(healAnti);
        setTimeout(() => {
            my.antiSync = false;
        }, game.tickRate);
    }, game.tickRate);
}

// LATER:
function predictHeal1() {}
function antiSyncHealing1(timearg) {
    my.antiSync = true;
    let healAnti = setInterval(() => {
        if (player.shameCount < 0) {
            place(0, getAttackDir());
        }
    }, 75);
    setTimeout(() => {
        clearInterval(healAnti);
        setTimeout(() => {
            my.antiSync = false;
        }, game.tickRate);
    }, game.tickRate);
}
function applCxC(value) {
    if (player.health == 100) {
        return 0;
    }
    if (player.skinIndex != 45 && player.skinIndex != 56) {
        return Math.ceil(value / items.list[player.items[0]].healing);
    }
    return 0;
}
function calcDmg(value) {
    return value * player.skinIndex == 6 ? 0.75 : 1;
}

function biomeGear(mover, returns) {
    if (player.y2 >= config.mapScale / 2 - config.riverWidth / 2 && player.y2 <= config.mapScale / 2 + config.riverWidth / 2) {
        if (returns) return 31;
        buyEquip(31, 0);
    } else {
        if (player.y2 <= config.snowBiomeTop) {
            if (returns) return mover && player.moveDir == undefined ? 6 : 15;
            buyEquip(mover && player.moveDir == undefined ? 6 : 15, 0);
        } else {
            if (returns) return mover && player.moveDir == undefined ? 6 : 12;
            buyEquip(mover && player.moveDir == undefined ? 6 : 12, 0);
        }
    }
    if (returns) return 0;
}
let advHeal = [];

class Traps {
    constructor(UTILS, items) {
        this.dist = 0;
        this.aim = 0;
        this.inTrap = false;
        this.replaced = false;
        this.antiTrapped = false;
        this.info = {};
        this.notFast = function () {
            return player.weapons[1] == 10 && ((this.info.health > items.weapons[player.weapons[0]].dmg) || player.weapons[0] == 5);
        }
        this.testCanPlace = function (id, first = -(Math.PI / 2), repeat = (Math.PI / 2), plus = (Math.PI / 18), radian, replacer, yaboi) {
            let item = items.list[player.items[id]];
            let tmpS = item && item.scale !== undefined
            ? player.scale + item.scale + (item.placeOffset || 0)
            : player.scale + (item.placeOffset || 0);
            let counts = {
                attempts: 0
                , placed: 0
            };
            let tmpObjects = [];
            gameObjects.forEach((p) => {
                tmpObjects.push({
                    x: p.x
                    , y: p.y
                    , active: p.active
                    , blocker: p.blocker
                    , scale: p.scale
                    , isItem: p.isItem
                    , type: p.type
                    , colDiv: p.colDiv
                    , getScale: function (sM, ig) {
                        sM = sM || 1;
                        return this.scale * ((this.isItem || this.type == 2 || this.type == 3 || this.type == 4) ?
                                             1 : (0.6 * sM)) * (ig ? 1 : this.colDiv);
                    }
                    , });
            });
            for (let i = first; i < repeat; i += plus) {
                counts.attempts++;
                let relAim = radian + i;
                let tmpX = player.x2 + tmpS * Math.cos(relAim);
                let tmpY = player.y2 + tmpS * Math.sin(relAim);
                let cantPlace = tmpObjects.find((tmp) => tmp.active && UTILS.getDistance(tmpX, tmpY, tmp.x, tmp.y) < item.scale + (tmp.blocker ? tmp.blocker : tmp.getScale(0.6, tmp.isItem)));
                if (cantPlace) continue;
                if (item.id != 18 && tmpY >= config.mapScale / 2 - config.riverWidth / 2 && tmpY <= config.mapScale / 2 + config.riverWidth / 2) continue;
                if ((!replacer && yaboi) || useWasd) {
                    if (useWasd ? false : yaboi.inTrap) {
                        if (UTILS.getAngleDist(near.aim2 + Math.PI, relAim + Math.PI) <= Math.PI) {
                            place(2, relAim, 1);
                        } else {
                            player.items[4] == 15 && place(4, relAim, 1);
                        }
                    } else {
                        if (UTILS.getAngleDist(near.aim2, relAim) <= config.gatherAngle / 1.5) {
                            place(2, relAim, 1);
                        } else {
                            player.items[4] == 15 && place(4, relAim, 1);
                        }
                    }
                } else {
                    place(id, relAim, 1);
                }
                tmpObjects.push({
                    x: tmpX
                    , y: tmpY
                    , active: true
                    , blocker: item.blocker
                    , scale: item.scale
                    , isItem: true
                    , type: null
                    , colDiv: item.colDiv
                    , getScale: function () {
                        return this.scale;
                    }
                    , });
                if (UTILS.getAngleDist(near.aim2, relAim) <= 1) {
                    counts.placed++;
                }
            }
            if (counts.placed > 0 && replacer && item.dmg) {
                if (near.dist2 <= items.weapons[player.weapons[0]].range + (player.scale * 1.8) && configs.spikeTick) {
                    instaC.canSpikeTick = true;
                }
            }
        };
        this.checkSpikeTick = function() {
            try {
                if (![3, 4, 5].includes(near.primaryIndex)) return false;
                if ((my.autoPush) ? false : near.primaryIndex == undefined ? true : (near.reloads[near.primaryIndex] > game.tickRate)) return false;
                // more range for safe. also testing near.primaryIndex || 5
                if (near.dist2 <= items.weapons[near.primaryIndex || 5].range + (near.scale * 1.8)) {
                    let item = items.list[9];
                    let tmpS = near.scale + item.scale + (item.placeOffset || 0);
                    let danger = 0;
                    let counts = {
                        attempts: 0,
                        block: `unblocked`
                    };
                    for (let i = -1; i <= 1; i += 1 / 10) {
                        counts.attempts++;
                        let relAim = UTILS.getDirect(player, near, 2, 2) + i;
                        let tmpX = near.x2 + tmpS * Math.cos(relAim);
                        let tmpY = near.y2 + tmpS * Math.sin(relAim);
                        let cantPlace = liztobj.find((tmp) => tmp.active && UTILS.getDistance(tmpX, tmpY, tmp.x, tmp.y) < item.scale + (tmp.blocker ? tmp.blocker : tmp.getScale(0.6, tmp.isItem)));
                        if (cantPlace) continue;
                        if (tmpY >= config.mapScale / 2 - config.riverWidth / 2 && tmpY <= config.mapScale / 2 + config.riverWidth / 2) continue;
                        danger++;
                        counts.block = `blocked`;
                        break;
                    }
                    if (danger && near.dist2 <= 200 && Leuchtturm) {
                        my.anti0Tick = 1;
                        sendChat('Azure: lol');
                        healer();
                        return true;
                    }
                }
            } catch (err) {
                return null;
            }
            return false;
        }

        this.protect = function (aim) {
            if (!configs.antiTrap) return;
            if (player.items[4]) {
                this.testCanPlace(4, -(Math.PI / 2), (Math.PI / 2), (Math.PI / 18), aim + Math.PI);
                this.antiTrapped = true;
            }
        };
        this.autoPlace = function () {
            if (enemy.length && configs.autoPlace && !instaC.ticking) {
                const autoPlaceTickValue = Math.max(1, parseInt(getEl("autoPlaceTick").value) || 1);

                if (game.tick % autoPlaceTickValue === 0) {
                    if (gameObjects.length) {
                        const near2 = { inTrap: false };

                        const nearTrap = gameObjects
                        .filter(e => e.trap && e.active && e.isTeamObject(player) && UTILS.getDist(e, near, 0, 2) <= (near.scale + e.getScale() + 5))
                        .sort((a, b) => UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2))[0];

                        if (nearTrap) {
                            near2.inTrap = true;
                        }

                        const fullCircle = Math.PI * 2;
                        const closeRangeStep = fullCircle / 36;
                        const midRangeStep = fullCircle / 24;

                        if (near.dist2 <= 375) {
                            if (near.dist2 <= 200) {
                                this.testCanPlace(4, 0, fullCircle, closeRangeStep, near.aim2, 0, { inTrap: near2.inTrap });
                            } else if (player.items[4] === 15) {
                                this.testCanPlace(4, 0, fullCircle, midRangeStep, near.aim2);
                            }
                        }
                    } else if (near.dist2 <= 1000 && player.items[4] === 15) {
                        const fullCircle = Math.PI * 2;
                        const longRangeStep = fullCircle / 18;
                        this.testCanPlace(4, 0, fullCircle, longRangeStep, near.aim2);
                    }
                }
            }
        };

        this.replacer = function (findObj) {
            if (!findObj || !configs.autoReplace || !inGame || this.antiTrapped) return;
            game.tickBase(() => {
                const objAim = UTILS.getDirect(findObj, player, 0, 2);
                const objDst = UTILS.getDist(findObj, player, 0, 2);
                const weaponRange = items.weapons[player.weaponIndex].range + player.scale;
                if (getEl("weaponGrind").checked && objDst <= weaponRange) return;
                if (objDst <= 400 && near.dist2 <= 400) {
                    const isDanger = this.checkSpikeTick();
                    const fullCircle = Math.PI * 2;
                    const closeRangeStep = fullCircle / 36;
                    const midRangeStep = fullCircle / 24;
                    if (!isDanger && near.dist2 <= items.weapons[near.primaryIndex || 5].range + (near.scale * 1.8)) {
                        this.testCanPlace(2, 0, fullCircle, closeRangeStep, objAim, 1);
                    } else if (player.items[4] === 15) {
                        this.testCanPlace(4, 0, fullCircle, midRangeStep, objAim, 1);
                    }
                    this.replaced = true;
                }
            }, 1);
        };
    }
};

function calculatePerfectAngle(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}

function isObjectBroken(object) {
    let healthThreshold = 20;
    return object.health < healthThreshold;
}

function profilingInstaKill() {
    let instaKillType = 'normal';

    if (nears.length && near.profile.death.reason !== '') {
        instaKillType = near.profile.death.reason;
    } else {

        const trueNoBulls = near.profile.resistance.trueNoBulls;
        const noBullsSurvived = near.profile.resistance.noBullsSurvived;
        const failedSEs = near.profile.soldierEmpData.failedSEs;
        const trueSEs = near.profile.soldierEmpData.trueSEs;
        const bullTick = near.profile.anti.bullTick;
        const pNBsSurvived = near.profile.resistance.pNBsSurvived;


        if ((noBullsSurvived < 5 || trueNoBulls) && bullTick && near.skinIndex !== 6) {
            instaKillType = 'nobull';
        } else if ((pNBsSurvived < 3 || !pNBsSurvived) && !bullTick && near.skinIndex === 6) {
            instaKillType = 'appl';
        } else if (trueSEs > failedSEs) {
            instaKillType = 'rev';
        }

    }

    player.weapons[1] === 10 ? instaC.changeType('rev') : instaC.changeType(instaKillType);
}
let Leuchtturm = false;

class Instakill {
    constructor() {
        this.wait = false;
        this.can = false;
        this.isTrue = false;
        this.nobull = false;
        this.ticking = false;
        this.canSpikeTick = false;
        this.startTick = false;
        this.readyTick = false;
        this.canCounter = false;
        this.revTick = false;
        this.syncHit = false;
        this.lastInsta = null;
        this.changeType = function(type) {
            let tmpEnemy = near
            this.wait = false;
            this.isTrue = true;
            my.autoAim = true;
            let instaLog = [type];
            let backupNobull = near.backupNobull;
            near.backupNobull = false;
            if (type == "rev") {
                sendChat("Azure: Reverse Based Insta");
                tmpEnemy.skinIndex === 22 && tmpEnemy.profile.soldierEmpData.trueSEs++;
                selectWeapon(player.weapons[1]);
                buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                sendAutoGather();
                game.tickBase(() => {
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    this.lastInsta = type
                    game.tickBase(() => {
                        tmpEnemy.skinIndex === 22 && tmpEnemy.profile.soldierEmpData.failedSEs++;
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }, 1);
            } else if (type == "nobull") {
                sendChat("Azure: Reload Based Insta");
                selectWeapon(player.weapons[0]);
                sendAutoGather();
                game.tickBase(() => {
                    tmpEnemy.skinIndex === 22 && tmpEnemy.profile.soldierEmpData.trueSEs++;
                    selectWeapon(player.weapons[1]);
                    buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                    this.lastInsta = type
                    game.tickBase(() => {
                        tmpEnemy.skinIndex === 22 && tmpEnemy.profile.soldierEmpData.failedSEs++;
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }, 1);
            } else if (type == "appl") {
                sendChat("Azure: Reload Based Insta");

                selectWeapon(player.weapons[0]);
                sendAutoGather();
                game.tickBase(() => {
                    tmpEnemy.skinIndex === 22 && tmpEnemy.profile.soldierEmpData.trueSEs++;
                    selectWeapon(player.weapons[1]);
                    buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);

                    this.lastInsta = type
                    game.tickBase(() => {
                        tmpEnemy.skinIndex === 22 && tmpEnemy.profile.soldierEmpData.failedSEs++;
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }, 1);
            } else if (type == "normal") {
                selectWeapon(player.weapons[0]);
                buyEquip(7, 0);
                sendAutoGather();
                game.tickBase(() => {
                    tmpEnemy.skinIndex === 22 && tmpEnemy.profile.soldierEmpData.trueSEs++;
                    selectWeapon(player.weapons[1]);
                    buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                    this.lastInsta = type
                    game.tickBase(() => {
                        tmpEnemy.skinIndex === 22 && tmpEnemy.profile.soldierEmpData.failedSEs++;
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }, 1);
            } else if (type == "breakSync") {
                sendChat("Azure: Reload Based Insta");

                instaC.isTrue = true;
                my.autoAim = true;
                buyEquip(40, 0);
                selectWeapon(10);
                sendAutoGather();
                setTimeout(() => {
                    buyEquip(7, 0);
                    selectWeapon(player.weapons[0]);
                    place(2, getAttackDir);
                    game.tickBase(() => {
                        sendAutoGather();
                        instaC.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }, 120);
            } else {
                setTimeout(() => {
                    this.isTrue = false;
                    my.autoAim = false;
                }, 50);
            }
        };
        this.spikeTickType = function() {
            this.isTrue = true;
            my.autoAim = true;
            selectWeapon(player.weapons[0]);
            buyEquip(7, 0);
            sendAutoGather();
            setTimeout(() => {
                sendAutoGather();
                this.isTrue = false;
                my.autoAim = false;
            }, 120);
        };
        this.counterType = function() {
            this.isTrue = true;
            my.autoAim = true;
            selectWeapon(player.weapons[0]);
            buyEquip(7, 0);
            sendAutoGather();
            setTimeout(() => {
                sendAutoGather();
                this.isTrue = false;
                my.autoAim = false;
            }, 120);
        };
        this.rangeType = function(type) {
            this.isTrue = true;
            my.autoAim = true;
            if (type == "ageInsta") {
                my.ageInsta = false;
                if (player.items[5] == 18) {
                    place(5, near.aim2);
                }
                packet("f", undefined, 1);
                buyEquip(22, 0);
                buyEquip(21, 1);
                game.tickBase(() => {
                    selectWeapon(player.weapons[1]);
                    buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                    buyEquip(21, 1);
                    sendAutoGather();
                    game.tickBase(() => {
                        sendUpgrade(12);
                        selectWeapon(player.weapons[1]);
                        buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                        buyEquip(21, 1);
                        game.tickBase(() => {
                            sendUpgrade(15);
                            selectWeapon(player.weapons[1]);
                            buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                            buyEquip(21, 1);
                            game.tickBase(() => {
                                sendAutoGather();
                                this.isTrue = false;
                                my.autoAim = false;
                            }, 1);
                        }, 1);
                    }, 1);
                }, 1);
            } else {
                selectWeapon(player.weapons[1]);
                if (player.reloads[53] == 0 && near.dist2 <= 700 && near.skinIndex != 22) {
                    buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                } else {
                    buyEquip(20, 0);
                }
                buyEquip(11, 1);
                sendAutoGather();
                game.tickBase(() => {
                    sendAutoGather();
                    this.isTrue = false;
                    my.autoAim = false;
                }, 1);
            }
        };
        this.oneTickType = function() {
            this.isTrue = true;
            my.autoAim = true;
            selectWeapon(player.weapons[1]);
            buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
            buyEquip(11, 1);
            packet("f", near.aim2, 1);
            if (player.weapons[1] == 15) {
                my.revAim = true;
                sendAutoGather();
            }
            game.tickBase(() => {
                my.revAim = false;
                selectWeapon(player.weapons[0]);
                buyEquip(7, 0);
                buyEquip(19, 1);
                packet("f", near.aim2, 1);
                if (player.weapons[1] != 15) {
                    sendAutoGather();
                }
                game.tickBase(() => {
                    sendAutoGather();
                    this.isTrue = false;
                    my.autoAim = false;
                    packet("f", undefined, 1);
                }, 1);
            }, 1);
        };
        this.threeOneTickType = function() {
            this.isTrue = true;
            my.autoAim = true;
            selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
            biomeGear();
            buyEquip(11, 1);
            packet("f", near.aim2, 1);
            game.tickBase(() => {
                selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                buyEquip(11, 1);
                packet("f", near.aim2, 1);
                game.tickBase(() => {
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    buyEquip(19, 1);
                    sendAutoGather();
                    packet("f", near.aim2, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                        packet("f", undefined, 1);
                    }, 1);
                }, 1);
            }, 1);
        };
        this.kmTickType = function() {
            this.isTrue = true;
            my.autoAim = true;
            my.revAim = true;
            selectWeapon(player.weapons[1]);
            buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
            buyEquip(11, 1);
            sendAutoGather();
            packet("f", near.aim2, 1);
            game.tickBase(() => {
                my.revAim = false;
                selectWeapon(player.weapons[0]);
                buyEquip(7, 0);
                buyEquip(19, 1);
                packet("f", near.aim2, 1);
                game.tickBase(() => {
                    sendAutoGather();
                    this.isTrue = false;
                    my.autoAim = false;
                    packet("f", undefined, 1);
                }, 1);
            }, 1);
        };
        this.boostTickType = function() {
            this.isTrue = true;
            my.autoAim = true;
            biomeGear();
            buyEquip(11, 1);
            packet("f", near.aim2, 1);
            game.tickBase(() => {
                if (player.weapons[1] == 15) {
                    my.revAim = true;
                }
                selectWeapon(player.weapons[[9, 12, 13, 15].includes(player.weapons[1]) ? 1 : 0]);
                buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                buyEquip(11, 1);
                if ([9, 12, 13, 15].includes(player.weapons[1])) {
                    sendAutoGather();
                }
                packet("f", near.aim2, 1);
                place(4, near.aim2);
                game.tickBase(() => {
                    my.revAim = false;
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    buyEquip(19, 1);
                    if (![9, 12, 13, 15].includes(player.weapons[1])) {
                        sendAutoGather();
                    }
                    packet("f", near.aim2, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                        packet("f", undefined, 1);
                    }, 1);
                }, 1);
            }, 1);
        };
        this.gotoGoal = function(goto, OT) {
            let slowDists = (weeeee) => weeeee * config.playerScale;
            let goal = {
                a: goto - OT,
                b: goto + OT,
                c: goto - slowDists(1),
                d: goto + slowDists(1),
                e: goto - slowDists(2),
                f: goto + slowDists(2),
                g: goto - slowDists(4),
                h: goto + slowDists(4)
            };
            let bQ = function (wwww, awwww) {
                if (player.y2 >= config.mapScale / 2 - config.riverWidth / 2 && player.y2 <= config.mapScale / 2 + config.riverWidth / 2 && awwww == 0) {
                    buyEquip(31, 0);
                } else {
                    buyEquip(wwww, awwww);
                }
            }
            if (enemy.length) {
                let dst = near.dist2;
                this.ticking = true;
                if (dst >= goal.a && dst <= goal.b) {
                    bQ(22, 0);
                    bQ(11, 1);
                    if (player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0] || player.buildIndex > -1) {
                        selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                    }
                    return {
                        dir: undefined,
                        action: 1
                    };
                } else {
                    if (dst < goal.a) {
                        if (dst >= goal.g) {
                            if (dst >= goal.e) {
                                if (dst >= goal.c) {
                                    bQ(40, 0);
                                    bQ(21, 1);
                                    if (configs.slowOT) {
                                        player.buildIndex != player.items[1] && selectToBuild(player.items[1]);
                                    } else {
                                        if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                            selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                        }
                                    }
                                } else {
                                    bQ(26, 0);
                                    bQ(21, 1);
                                    if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                        selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                    }
                                }
                            } else {
                                bQ(26, 0);
                                bQ(12, 1);
                                if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                    selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                }
                            }
                        } else {
                            biomeGear();
                            bQ(11, 1);
                            if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                            }
                        }
                        return {
                            dir: near.aim2 + Math.PI,
                            action: 0
                        };
                    } else if (dst > goal.b) {
                        if (dst <= goal.h) {
                            if (dst <= goal.f) {
                                if (dst <= goal.d) {
                                    bQ(40, 0);
                                    bQ(9, 1);
                                    if (configs.slowOT) {
                                        player.buildIndex != player.items[1] && selectToBuild(player.items[1]);
                                    } else {
                                        if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                            selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                        }
                                    }
                                } else {
                                    bQ(22, 0);
                                    bQ(19, 1);
                                    if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                        selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                    }
                                }
                            } else {
                                bQ(6, 0);
                                bQ(12, 1);
                                if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                    selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                }
                            }
                        } else {
                            biomeGear();
                            bQ(11, 1);
                            if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                            }
                        }
                        return {
                            dir: near.aim2,
                            action: 0
                        };
                    }
                    return {
                        dir: undefined,
                        action: 0
                    };
                }
            } else {
                this.ticking = false;
                return {
                    dir: undefined,
                    action: 0
                };
            }
        }
        /** wait 1 tick for better quality */
        this.bowMovement = function() {
            let moveMent = this.gotoGoal(685, 3);
            if (moveMent.action) {
                if (player.reloads[53] == 0 && !this.isTrue) {
                    this.rangeType("ageInsta");
                } else {
                    packet("f", moveMent.dir, 1);
                }
            } else {
                packet("f", moveMent.dir, 1);
            }
        },
            this.tickMovement = function() {
            let moveMent = this.gotoGoal(([10, 14].includes(player.weapons[1]) && player.y2 > config.snowBiomeTop) ? 240 : player.weapons[1] == 15 ? 250 : player.y2 <= config.snowBiomeTop ? [10, 14].includes(player.weapons[1]) ? 270 : 265 : 275, 3);
            if (moveMent.action) {
                if (![6, 22].includes(near.skinIndex) && player.reloads[53] == 0 && !this.isTrue) {
                    ([10, 14].includes(player.weapons[1]) && player.y2 > config.snowBiomeTop) || (player.weapons[1] == 15) ? this.oneTickType(): this.threeOneTickType();
                } else {
                    packet("f", moveMent.dir, 1);
                }
            } else {
                packet("f", moveMent.dir, 1);
            }
        },
            this.kmTickMovement = function() {
            let moveMent = this.gotoGoal(240, 3);
            if (moveMent.action) {
                if (near.skinIndex != 22 && player.reloads[53] == 0 && !this.isTrue && ((game.tick - near.poisonTick) % config.serverUpdateRate == 8)) {
                    this.kmTickType();
                } else {
                    packet("f", moveMent.dir, 1);
                }
            } else {
                packet("f", moveMent.dir, 1);
            }
        },
            this.boostTickMovement = function() {
            let dist = player.weapons[1] == 9 ? 365 : player.weapons[1] == 12 ? 380 : player.weapons[1] == 13 ? 390 : player.weapons[1] == 15 ? 365 : 370;
            let actionDist = player.weapons[1] == 9 ? 2 : player.weapons[1] == 12 ? 1.5 : player.weapons[1] == 13 ? 1.5 : player.weapons[1] == 15 ? 2 : 3;
            let moveMent = this.gotoGoal(dist, actionDist);
            if (moveMent.action) {
                if (player.reloads[53] == 0 && !this.isTrue) {
                    this.boostTickType();
                } else {
                    packet("f", moveMent.dir, 1);
                }
            } else {
                packet("f", moveMent.dir, 1);
            }
        }
        /** wait 1 tick for better quality */
        this.perfCheck = function(pl, nr) {
            if (nr.weaponIndex == 11 && UTILS.getAngleDist(nr.aim2 + Math.PI, nr.d2) <= config.shieldAngle) return false;
            if (![9, 12, 13, 15].includes(player.weapons[1])) return true;
            let pjs = {
                x: nr.x2 + (70 * Math.cos(nr.aim2 + Math.PI)),
                y: nr.y2 + (70 * Math.sin(nr.aim2 + Math.PI))
            };
            if (UTILS.lineInRect(pl.x2 - pl.scale, pl.y2 - pl.scale, pl.x2 + pl.scale, pl.y2 + pl.scale, pjs.x, pjs.y, pjs.x, pjs.y)) {
                return true;
            }
            let finds = ais.filter(tmp => tmp.visible).find((tmp) => {
                if (UTILS.lineInRect(tmp.x2 - tmp.scale, tmp.y2 - tmp.scale, tmp.x2 + tmp.scale, tmp.y2 + tmp.scale, pjs.x, pjs.y, pjs.x, pjs.y)) {
                    return true;
                }
            });
            if (finds) return false;
            finds = liztobj.filter(tmp => tmp.active).find((tmp) => {
                let tmpScale = tmp.getScale();
                if (!tmp.ignoreCollision && UTILS.lineInRect(tmp.x - tmpScale, tmp.y - tmpScale, tmp.x + tmpScale, tmp.y + tmpScale, pjs.x, pjs.y, pjs.x, pjs.y)) {
                    return true;
                }
            });
            if (finds) return false;
            return true;
        }
    }
};

class Autobuy {
    constructor(buyHat, buyAcc) {
        this.hat = function () {
            buyHat.forEach((id) => {
                let find = findID(hats, id);
                if (find && !player.skins[id] && player.points >= find.price) packet("c", 1, id, 0);
            });
        };
        this.acc = function () {
            buyAcc.forEach((id) => {
                let find = findID(accessories, id);
                if (find && !player.tails[id] && player.points >= find.price) packet("c", 1, id, 1);
            });
        };
    }
};

class Autoupgrade {
    constructor() {
        this.sb = function (upg) {
            upg(3);
            upg(17);
            upg(31);
            upg(23);
            upg(9);
            upg(38);
        };
        this.kh = function (upg) {
            upg(3);
            upg(17);
            upg(31);
            upg(23);
            upg(10);
            upg(38);
            upg(4);
            upg(25);
        };
        this.pb = function (upg) {
            upg(5);
            upg(17);
            upg(32);
            upg(23);
            upg(9);
            upg(38);
        };
        this.ph = function (upg) {
            upg(5);
            upg(17);
            upg(32);
            upg(23);
            upg(10);
            upg(38);
            upg(28);
            upg(25);
        };
        this.db = function (upg) {
            upg(7);
            upg(17);
            upg(31);
            upg(23);
            upg(9);
            upg(34);
        };
    };
};

class Damages {
    constructor(items) {
        // 0.75 1 1.125 1.5
        this.calcDmg = function(dmg, val) {
            return dmg * val;
        };
        this.getAllDamage = function(dmg) {
            return [this.calcDmg(dmg, 0.75), dmg, this.calcDmg(dmg, 1.125), this.calcDmg(dmg, 1.5)];
        };
        this.weapons = [];
        for (let i = 0; i < items.weapons.length; i++) {
            let wp = items.weapons[i];
            let name = wp.name.split(" ").length <= 1 ? wp.name : (wp.name.split(" ")[0] + "_" + wp.name.split(" ")[1]);
            this.weapons.push(this.getAllDamage(i > 8 ? wp.Pdmg : wp.dmg));
            this[name] = this.weapons[i];
        }
    }
}

/** CLASS CODES */
// jumpscare code warn
let tmpList = [];

// LOADING:
let UTILS = new Utils();
let items = new Items();
let objectManager = new Objectmanager(GameObject, gameObjects, UTILS, config);
let store = new Store();
let hats = store.hats;
let accessories = store.accessories;
let projectileManager = new ProjectileManager(Projectile, projectiles, players, ais, objectManager, items, config, UTILS);
let aiManager = new AiManager(ais, AI, players, items, null, config, UTILS);
let textManager = new Textmanager();

let traps = new Traps(UTILS, items);
let instaC = new Instakill();
let autoBuy = new Autobuy([6, 7, 22, 12, 53, 40], [11, 21, 18]);
let autoUpgrade = new Autoupgrade();

let lastDeath;
let minimapData;
let mapMarker = {};
let mapPings = [];
let tmpPing;

let breakTrackers = [];
let lastTicks = ticks;
let processedObjects = [];
let timeSinceTick = 0;
let pathFindTest = 0;
let grid = [];
let pathFind = {
    active: false
    , grid: 40
    , scale: 1440
    , x: 14400
    , y: 14400
    , chaseNear: false
    , array: []
    , lastX: this.grid / 2
    , lastY: this.grid / 2
};

function sendChat(message) {
    let formattedMessage = formatChatMessage(message);
    packet("6", formattedMessage);
}

function formatChatMessage(message) {
    let trimmedMessage = message.slice(0, 28);
    return `<${trimmedMessage}/>`;
}

function preplace(fps) {
    if (!player || !player.alive || !nears.length || near.dist2 >= 300) return;

    const lastTime = Date.now() - timeSinceTick;
    //if ((lastTime + (1000 / fps) >= 1e3/9) || ticks - lastTicks < 1) return;

    const buildingDamage = new Map();
    const playerScale = player.scale;
    const potentialBuilding = liztobj.filter(obj => obj.active && Math.getDist(player, obj) <= obj.scale + playerScale * 2 /*&& !closestEnemy[0].renderedTraps.includes(obj)*/);

    if (potentialBuilding.length) {
        for (const building of potentialBuilding) {
            buildingDamage.set(building, 0);
        }

        for (const tmpPlayer of players) {
            const weaponIndex = tmpPlayer.weaponIndex;
            const skinMultiplier = tmpPlayer.skinIndex === 40 ? 3.3 : 1;
            const variant = config.weaponVariants[tmpPlayer.weaponVariant || 0];
            const distCheck = (building) => Math.getDist(tmpPlayer, building) <= building.scale + playerScale + items.weapons[weaponIndex].range;

            if (weaponIndex === 10 && tmpPlayer.reloads[tmpPlayer.weapons[1]] === 0) {
                for (const building of potentialBuilding) {
                    if (distCheck(building)) {
                        buildingDamage.set(building, buildingDamage.get(building) + variant.val * items.weapons[weaponIndex].dmg * skinMultiplier * items.weapons[weaponIndex].sDmg);
                    }
                }
            } else if (tmpPlayer.reloads[tmpPlayer.weapons[0]] === 0 && weaponIndex < 9) {
                for (const building of potentialBuilding) {
                    if (distCheck(building)) {
                        buildingDamage.set(building, buildingDamage.get(building) + variant.val * items.weapons[weaponIndex].dmg * skinMultiplier);
                    }
                }
            }
        }
    }

    const enemyTrapped = liztobj
    .filter(obj => obj.trap && obj.active)
    .sort((a, b) => Math.getDist(near, a) - Math.getDist(near, b))
    .find(trap => (player.sid === trap.owner.sid || trap.isTeamObject(player)) && Math.getDist(near, trap) <= 50);

    for (const obj of potentialBuilding) {
        const damage = buildingDamage.get(obj) || 0;

        if (damage >= obj.health) {
            const distToObj = Math.getDist(player, obj);
            const spikeSyncDmg = items.weapons[player.weapons[0]].dmg * config.weaponVariants[player.weaponVariant || 0].val * 1.5 + items.list[player.items[2]].dmg;
            const dir = Math.getDir(player, obj);

            let canBreakSync = false;
            let placementType;

            if (player.weapons[1] === 10 && damage <= items.weapons[10].dmg * items.weapons[10].sDmg * config.weaponVariants[player.weaponVariant || 0].val) {
                const spikeSyncDmg = items.weapons[player.weapons[0]].dmg * config.weaponVariants[player.weaponVariant || 0].val * 1.5 + items.list[player.items[2]].dmg;
                if (player.reloads[player.weapons[1]] === 0 && player.reloads[player.weapons[0]] === 0 && enemyTrapped && enemyTrapped === obj && spikeSyncDmg >= 100) {
                    canBreakSync = true;
                }
            }

            if (enemyTrapped && enemyTrapped === obj) {
                placementType = (player.weapons[0] > 1 && player.weapons[0] < 7 && spikeSyncDmg >= 100)
                && near.profile.autoBreakData.postBreakBullTicks > 0
                && near.profile.anti.bullTick ? 2 : near.profile.autoBreakData.postBreakHat != 6 ? 2 : canBreakSync ? 2 : 4;
            } else {
                let retrapPotential = liztobj.find(spike => obj.active && obj.dmg && Math.getDist(near, spike) <= 90 && Math.getDist(near, obj) <= 80 && Math.getDist(obj, spike) <= 90);
                placementType = retrapPotential ? 4 : 2;
            }

            if (distToObj <= player.scale + obj.scale + 65 && Math.getDist(near, obj) <= 80) {
                lastTicks = ticks;

                let danger = traps.checkSpikeTick();
                if (canBreakSync && !instaC.isTrue && !danger) {
                    instaC.changeType('breakSync');
                }

                place(placementType, dir);
                processedObjects.push(obj);
                placedTrapPositions.add(JSON.stringify([obj.x, obj.y]));
                placedSpikePositions.add(JSON.stringify([obj.x, obj.y]));
            }
        }
    }
}

let runAtNextTick = [];

function checkProjectileHolder(x, y, dir, range, speed, indx, layer, sid) {
    let weaponIndx = indx == 0 ? 9 : indx == 2 ? 12 : indx == 3 ? 13 : indx == 5 && 15;
    let projOffset = config.playerScale * 2;
    let projXY = {
        x: indx == 1 ? x : x - projOffset * Math.cos(dir)
        , y: indx == 1 ? y : y - projOffset * Math.sin(dir)
        , };
    let nearPlayer = players.filter((e) => e.visible && UTILS.getDist(projXY, e, 0, 2) <= e.scale)
    .sort(function (a, b) {
        return UTILS.getDist(projXY, a, 0, 2) - UTILS.getDist(projXY, b, 0, 2);
    })[0];
    if (nearPlayer) {
        if (indx == 1) {
            nearPlayer.shooting[53] = 1;
        } else {
            nearPlayer.shootIndex = weaponIndx;
            nearPlayer.shooting[1] = 1;
            antiProj(nearPlayer, dir, range, speed, indx, weaponIndx);
        }
    }
}
let projectileCount = 0;

function antiProj(tmpObj, dir, range, speed, index, weaponIndex) {
    if (!tmpObj.isTeam(player)) {
        tmpDir = UTILS.getDirect(player, tmpObj, 2, 2);
        if (UTILS.getAngleDist(tmpDir, dir) <= 0.2) {
            tmpObj.bowThreat[weaponIndex]++;
            if (index == 5) {
                projectileCount++;
            }
            setTimeout(() => {
                tmpObj.bowThreat[weaponIndex]--;
                if (index == 5) {
                    projectileCount--;
                }
            }, range / speed);
            if (tmpObj.bowThreat[9] >= 1 && (tmpObj.bowThreat[12] >= 1 || tmpObj.bowThreat[15] >= 1)) {
                place(1, tmpObj.aim2);
                my.anti0Tick = 4;
                if (!my.antiSync) {
                    antiSyncHealing(4);
                }
            } else {
                if (projectileCount >= 2) {
                    place(1, tmpObj.aim2);
                    healer();
                    buyEquip(22, 0);
                    buyEquip(21, 1);
                    my.anti0Tick = 4;
                    if (!my.antiSync) {
                        antiSyncHealing(4);
                    }
                } else {
                    if (projectileCount === 1) {
                        buyEquip(6, 0);
                        buyEquip(21, 1);
                    } else {
                        if (projectileCount >= 2) {
                            return Math.ceil((100 - player.health) / items.list[player.items[0]].healing);
                            healer();
                            buyEquip(6, 0);
                        }
                    }
                }
            }
        }
    }
}

// SHOW ITEM INFO:
function showItemInfo(item, isWeapon, isStoreItem) {
    if (player && item) {
        UTILS.removeAllChildren(itemInfoHolder);
        itemInfoHolder.classList.add("visible");
        UTILS.generateElement({
            id: "itemInfoName"
            , text: UTILS.capitalizeFirst(item.name)
            , parent: itemInfoHolder
        });
        UTILS.generateElement({
            id: "itemInfoDesc"
            , text: item.desc
            , parent: itemInfoHolder
        });
        if (isStoreItem) {

        } else if (isWeapon) {
            UTILS.generateElement({
                class: "itemInfoReq"
                , text: !item.type ? "primary" : "secondary"
                , parent: itemInfoHolder
            });
        } else {
            for (let i = 0; i < item.req.length; i += 2) {
                UTILS.generateElement({
                    class: "itemInfoReq"
                    , html: item.req[i] + "<span class='itemInfoReqVal'> x" + item.req[i + 1] + "</span>"
                    , parent: itemInfoHolder
                });
            }
            if (item.group.limit) {
                UTILS.generateElement({
                    class: "itemInfoLmt"
                    , text: (player.itemCounts[item.group.id] || 0) + "/" + (config.isSandbox ? 99 : item.group.limit)
                    , parent: itemInfoHolder
                });
            }
        }
    } else {
        itemInfoHolder.classList.remove("visible");
    }
}


// RESIZE:
window.addEventListener("resize", UTILS.checkTrusted(resize));
let renderDistanceX;
let renderDistanceY;

let lowRes = false;
function resize() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    if (lowRes == true) {
        let pixelDensity = 0.30;

        let scaleFillNative = Math.max(screenWidth / maxScreenWidth, screenHeight / maxScreenHeight) * pixelDensity;
        gameCanvas.width = screenWidth * pixelDensity;
        gameCanvas.height = screenHeight * pixelDensity;
        gameCanvas.style.width = screenWidth + "px";
        gameCanvas.style.height = screenHeight + "px";
        mainContext.setTransform(
            scaleFillNative, 0,
            0, scaleFillNative,
            (screenWidth * pixelDensity - (maxScreenWidth * scaleFillNative)) / 2,
            (screenHeight * pixelDensity - (maxScreenHeight * scaleFillNative)) / 2
        );
    }
}
resize();

// MOUSE INPUT:
let usingTouch;
let mals = document.getElementById('touch-controls-fullscreen');
mals.style.display = 'block';
mals.addEventListener("mousemove", gameInput, false);

function gameInput(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}
let clicks = {
    left: false
    , middle: false
    , right: false
    , };
let clicked = {
    g: false
}
mals.addEventListener("mousedown", mouseDown, false);
mals.addEventListener("mouseup", UTILS.checkTrusted(mouseUp));

function mouseDown(e) {
    if (attackState != 1) {
        attackState = 1;
        if (e.button == 0) {
            clicks.left = true;
        } else if (e.button == 2) {
            clicks.right = true;
        }
    }
}

function mouseUp(e) {
    if (attackState != 0) {
        attackState = 0;
        if (e.button == 0) {
            clicks.left = false;
        } else if (e.button == 1) {
            clicks.middle = false;
        } else if (e.button == 2) {
            clicks.right = false;
        }
    }
}

// INPUT UTILS:
function getMoveDir() {
    let dx = 0;
    let dy = 0;
    for (let key in moveKeys) {
        let tmpDir = moveKeys[key];
        dx += !!keys[key] * tmpDir[0];
        dy += !!keys[key] * tmpDir[1];
    }
    return dx == 0 && dy == 0 ? undefined : Math.atan2(dy, dx);
}

function getSafeDir() {
    if (!player)
        return 0;
    if (!player.lockDir) {
        lastDir = Math.atan2(mouseY - (screenHeight / 2), mouseX - (screenWidth / 2));
    }
    return lastDir || 0;
}

let plusDir = 0;
let lastSpin = Date.now();
let azureDir = true;

function getAttackDir(debug) {
    if (debug) {
        if (!player)
            return "0";
        if (my.autoAim || ((clicks.left || (useWasd && near.dist2 <= 320 && !traps.inTrap)) && near && near.dist2 <= 320 && player.reloads[player.weapons[0]] == 0))
            lastDir = getEl("weaponGrind")
                .checked ? "getSafeDir()" : enemy.length ? my.revAim ? "(near.aim2 + Math.PI)" : "near.aim2" : "getSafeDir()";
        else
            if (clicks.right && player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0)
                lastDir = "getSafeDir()";
        else
            if (traps.inTrap && player.reloads[traps.notFast() ? player.weapons[1] : player.weapons[0]] == 0)
                lastDir = "traps.aim";
        else
            if (!player.lockDir) {
                if (configs.noDir) return "undefined";
                lastDir = "getSafeDir()";
            }
        return lastDir;
    } else {
        if (!player)
            return 0;
        if (my.autoAim || ((clicks.left || (useWasd && near.dist2 <= 320 && !traps.inTrap)) && near && near.dist2 <= 320 && player.reloads[player.weapons[0]] == 0))
            lastDir = getEl("weaponGrind")
                .checked ? getSafeDir() : enemy.length ? my.revAim ? (near.aim2 + Math.PI) : near.aim2 : getSafeDir();
        else
            if (clicks.right && player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0)
                lastDir = getSafeDir();
        else
            if (traps.inTrap && player.reloads[traps.notFast() ? player.weapons[1] : player.weapons[0]] == 0)
                lastDir = traps.aim;
        else
            if (!player.lockDir) {
                if (configs.noDir) return undefined;
                if (azureDir) {
                    lastDir = getMoveDir();
                } else {
                    lastDir = getSafeDir();
                }
            }
        return lastDir || 0;
    }
}

function getVisualDir() {
    if (!player) {
        return 0;
    }
    lastDir = getSafeDir();
    return lastDir || 0;
}

// KEYS:
function keysActive() {
    return (allianceMenu.style.display != "block" && chatHolder.style.display != "block" && !isMenu);
}

function keyDown(event) {
    let keyNum = event.which || event.keyCode || 0;
    if (player && player.alive && keysActive()) {
        if (!keys[keyNum]) {
            keys[keyNum] = 1;
            macro[event.key] = 1;
            if (keyNum == 69) {
                sendAutoGather();
            } else if (keyNum == 13) {
                toggleChat();
            } else if (keyNum == 67) {
                updateMapMarker();
            } else if (keyNum == 71) {
                clicked.g = !clicked.g
            } else if (player.weapons[keyNum - 49] != undefined) {
                player.weaponCode = player.weapons[keyNum - 49];
            } else if (moveKeys[keyNum]) {
                sendMoveDir();
            } else if (event.key == "m") {
                mills.placeSpawnPads = !mills.placeSpawnPads;
            } else if (event.key == "z") {
                mills.place = !mills.place;
            } else if (event.key == "Z") {
                typeof window.debug == "function" && window.debug();
            } else if (keyNum == 32) {
                packet("F", 1, getSafeDir(), 1);
                packet("F", 0, getSafeDir(), 1);
            }
        }
    }
}
addEventListener("keydown", UTILS.checkTrusted(keyDown));

function keyUp(event) {
    if (player && player.alive) {
        let keyNum = event.which || event.keyCode || 0;
        if (keysActive()) {
            if (keys[keyNum]) {
                keys[keyNum] = 0;
                macro[event.key] = 0;
                if (moveKeys[keyNum]) {
                    sendMoveDir();
                }
            }
        }
    }
}

window.addEventListener("keyup", UTILS.checkTrusted(keyUp));

function sendMoveDir() {
    let newMoveDir = getMoveDir();
    if (lastMoveDir == undefined || newMoveDir == undefined || Math.abs(newMoveDir - lastMoveDir) > 0.3) {
        if (!my.autoPush) {
            packet("f", newMoveDir, 1);
        }
        lastMoveDir = newMoveDir;
    }
}

// BUTTON EVENTS:
function bindEvents() {}
bindEvents();

/** PATHFIND TEST */
function chechPathColl(tmp) {
    return ((player.scale + tmp.getScale()) / (player.maxSpeed * items.weapons[player.weaponIndex].spdMult)) + (tmp.dmg && !tmp.isTeamObject(player) ? 35 : 0);
    return tmp.colDiv == 0.5 ? (tmp.scale * tmp.colDiv) :
        !tmp.isTeamObject(player) && tmp.dmg ? (tmp.scale + player.scale) :
    tmp.isTeamObject(player) && tmp.trap ? 0 : tmp.scale;
}

function checkObject() {
    let checkColl = gameObjects.filter(tmp => player.canSee(tmp) && tmp.active);
    for (let y = 0; y < pathFind.grid; y++) {
        grid[y] = [];
        for (let x = 0; x < pathFind.grid; x++) {
            let tmpXY = {
                x: (player.x2 - (pathFind.scale / 2)) + ((pathFind.scale / pathFind.grid) * x)
                , y: (player.y2 - (pathFind.scale / 2)) + ((pathFind.scale / pathFind.grid) * y)
            }
            if (UTILS.getDist(pathFind.chaseNear ? near : pathFind, tmpXY, pathFind.chaseNear ? 2 : 0, 0) <= (pathFind.chaseNear ? 35 : 60)) {
                pathFind.lastX = x;
                pathFind.lastY = y;
                grid[y][x] = 0;
                continue;
            }
            let find = checkColl.find(tmp => UTILS.getDist(tmp, tmpXY, 0, 0) <= chechPathColl(tmp));
            if (find) {
                if (find.trap) {
                    grid[y][x] = 0;
                    continue;
                }
                grid[y][x] = 1;
            } else {
                grid[y][x] = 0;
            }
        }
    }
}

// AUTOPUSH:
function autoPush() {
    let nearTrap = gameObjects.filter(tmp => tmp.trap && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, near, 0, 2) <= near.scale + tmp.getScale() + 5)
    .sort(function (a, b) {
        return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
    })[0];
    if (nearTrap) {
        let spike = gameObjects.filter(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, nearTrap, 0, 0) <= near.scale + nearTrap.scale + tmp.scale).sort(function (a, b) {
            return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
        })[0];
        if (spike) {
            let pos = {
                x: spike.x + Math.cos(UTILS.getDirect(near, spike, 2, 0)) * 250
                , y: spike.y + Math.sin(UTILS.getDirect(near, spike, 2, 0)) * 250
                , x2: spike.x + (UTILS.getDist(near, spike, 2, 0) + player.scale) * Math.cos(UTILS.getDirect(near, spike, 2, 0))
                , y2: spike.y + (UTILS.getDist(near, spike, 2, 0) + player.scale) * Math.sin(UTILS.getDirect(near, spike, 2, 0))
            };
            let finds = gameObjects.filter(tmp => tmp.active)
            .find(tmp => {
                let tmpScale = tmp.getScale();
                if (!tmp.ignoreCollision && UTILS.lineInRect(tmp.x - tmpScale, tmp.y - tmpScale, tmp.x + tmpScale, tmp.y + tmpScale, player.x2, player.y2, pos.x2, pos.y2)) {
                    return true;
                }
            });
            if (finds) {
                if (my.autoPush) {
                    my.autoPush = false;
                    packet("f", lastMoveDir || undefined, 1);
                }
            } else {
                my.autoPush = true;
                my.pushData = {
                    x: spike.x
                    , y: spike.y
                    , x2: pos.x2
                    , y2: pos.y2
                };
                let scale = player.scale / 10;
                if (UTILS.lineInRect(player.x2 - scale, player.y2 - scale, player.x2 + scale, player.y2 + scale, near.x2, near.y2, pos.x, pos.y)) {
                    packet("f", near.aim2, 1);
                } else {
                    packet("f", UTILS.getDirect(pos, player, 2, 2), 1);
                }
            }
        } else if (my.autoPush) {
            my.autoPush = false;
            packet("f", lastMoveDir || undefined, 1);
        }
    } else if (my.autoPush) {
        my.autoPush = false;
        packet("f", lastMoveDir || undefined, 1);
    }
}

// ADD DEAD PLAYER:
function addDeadPlayer(tmpObj) {
    deadPlayers.push(new DeadPlayer(tmpObj.x, tmpObj.y, tmpObj.dir, tmpObj.buildIndex, tmpObj.weaponIndex, tmpObj.weaponVariant, tmpObj.skinColor, tmpObj.scale, tmpObj.name));
}

/** APPLY SOCKET CODES */

// SET INIT DATA:
function setInitData(data) {
    alliances = data.teams;
}

// SETUP GAME:
function setupGame(yourSID) {
    keys = {};
    macro = {};
    playerSID = yourSID;
    attackState = 0;
    inGame = true;
    packet("F", 0, getAttackDir(), 1);
    my.ageInsta = true;
    if (firstSetup) {
        firstSetup = false;
        gameObjects.length = 0;
        liztobj.length = 0;
    }
    enemyBox.style.display = "block";
    azKills.style.display = "block";
}

let messageElement = document.createElement('div');
messageElement.id = 'playerMessage';
document.body.appendChild(messageElement);

function showMessage(text) {
    messageElement.textContent = text;
    messageElement.style.display = 'block';
}

// ADD NEW PLAYER:
function addPlayer(data, isYou) {
    let tmpPlayer = findPlayerByID(data[0]);
    if (!tmpPlayer) {
        tmpPlayer = new Player(data[0], data[1], config, UTILS, projectileManager
                               , objectManager, players, ais, items, hats, accessories);
        players.push(tmpPlayer);
    }
    tmpPlayer.spawn(isYou ? true : null);
    tmpPlayer.visible = false;
    tmpPlayer.oldPos = {
        x2: undefined
        , y2: undefined
    };
    tmpPlayer.x2 = undefined;
    tmpPlayer.y2 = undefined;
    tmpPlayer.x3 = undefined;
    tmpPlayer.y3 = undefined;
    tmpPlayer.setData(data);
    if (isYou) {
        if (!player) {
            window.prepareUI(tmpPlayer);
        }
        player = tmpPlayer;
        camX = player.x;
        camY = player.y;
        my.lastDir = 0;
        updateItems();
        updateAge();
        if (player.skins[7]) {
            my.reSync = true;
        }
    }
}

// REMOVE PLAYER:
function removePlayer(id) {
    for (let i = 0; i < players.length; i++) {
        if (players[i].id == id) {
            showMessage(`${players[i].name} left the game.`);
            players.splice(i, 1);
            break;
        }
    }
}

let enemyBox = document.getElementById('enemyPatternData') || document.createElement('div');
if (!enemyBox.id) {
    enemyBox.id = 'enemyPatternData';
    enemyBox.textContent = `Azure's advanced enemy data.`;
    document.body.appendChild(enemyBox);
}

enemyBox.style.display = "none";

let enemyData = {};

function detectDaggerUser(enemy) {
    let data = enemyData[enemy.sid];
    return data && (data.primaryIndex === 7);
}

function detectClown(enemy) {
    let data = enemyData[enemy.sid];
    return data && (data.skinIndex === 45);
}

function detectAgeOne(enemy) {
    let data = enemyData[enemy.sid];
    return data && (data.primaryIndex === 0);
}

function isEnemyMoving(enemy) {
    if (enemy.oldPos && enemy.oldPos.x2 !== undefined && enemy.oldPos.y2 !== undefined) {
        return enemy.x2 !== enemy.oldPos.x2 || enemy.y2 !== enemy.oldPos.y2;
    }
    return true;
}

function detectInstaKiller(enemy) {
    let data = enemyData[enemy.sid];
    return data && (data.primaryIndex === 5 || data.primaryIndex === 3) && (data.secondaryIndex === 5 || data.secondaryIndex === 15);
}

function detectOneTicker(enemy) {
    let data = enemyData[enemy.sid];
    return data && (data.primaryIndex === 5 || data.primaryIndex === 4) && (data.secondaryIndex === 13 || data.secondaryIndex === 12 || data.secondaryIndex === 10);
}

function detectDaggerInstaKiller(enemy) {
    let data = enemyData[enemy.sid];
    return data && (data.primaryIndex === 7) && (data.secondaryIndex === 15 || data.secondaryIndex === 9 || data.secondaryIndex === 13);
}

function updateEnemyData(enemy) {
    let tempEnemy = enemy;
    updateEnemyThreatLevel(tempEnemy);
    tempEnemy.isMoving = isEnemyMoving(tempEnemy);
    tempEnemy.isInstaKiller = detectInstaKiller(tempEnemy);
    tempEnemy.isOneTicker = detectOneTicker(tempEnemy);
    tempEnemy.isDaggerEnthusiast = detectDaggerUser(tempEnemy);
    tempEnemy.isDaggerInstaKiller = detectDaggerInstaKiller(tempEnemy);
    tempEnemy.isClown = detectClown(tempEnemy);
    tempEnemy.isAgeOne = detectAgeOne(tempEnemy);
    tempEnemy.oldPos = {
        x2: tempEnemy.x2,
        y2: tempEnemy.y2
    };
    enemyData[enemy.sid] = {
        primaryIndex: tempEnemy.primaryIndex,
        secondaryIndex: tempEnemy.secondaryIndex,
        isInstaKiller: tempEnemy.isInstaKiller,
        isOneTicker: tempEnemy.isOneTicker,
        isDaggerEnthusiast: tempEnemy.isDaggerEnthusiast,
        isDaggerInstaKiller: tempEnemy.isDaggerInstaKiller,
        isClown: tempEnemy.isClown,
        isAgeOne: tempEnemy.isAgeOne,
        isMoving: tempEnemy.isMoving,
        name: tempEnemy.name
    };
    updateDisplayBox(tempEnemy);
}

function updateDisplayBox(enemy) {
    let data = enemyData[enemy.sid];
    if (data) {
        enemyBox.innerHTML = `<strong>Player Name:</strong> ${data.name}
                <strong>Player SID:</strong> ${enemy.sid}
                <strong>Primary Weapon:</strong> ${data.primaryIndex}
                <strong>Secondary Weapon:</strong> ${data.secondaryIndex}
                <strong>Insta-Killer:</strong> ${data.isInstaKiller}
                <strong>One-Ticker:</strong> ${data.isOneTicker}
                <strong>Dagger Enthusiast:</strong> ${data.isDaggerEnthusiast}
                <strong>Dagger Insta-Killer:</strong> ${data.isDaggerInstaKiller}
                <strong>Clown:</strong> ${data.isClown}
                <strong>Age One:</strong> ${data.isAgeOne}
                <strong>Moving:</strong> ${data.isMoving}
        `;
    }
}

let isDebug = false;

function adjustForPing(baseTime) {
    let ping = window.pingTime;
    let targetPing = 60;
    let pingDifference = ping - targetPing;

    return baseTime - pingDifference * 0.1;
}

let didBullTick = false;
let enemyThreatLevel = 0;

/*
function updateHealth(sid, value) {
    let tmpObj = findPlayerBySID(sid);
    if (tmpObj) {
        tmpObj.oldHealth = tmpObj.health;
        tmpObj.health = value;
        tmpObj.judgeShame();

        updateEnemyThreatLevel(tmpObj);
        let damaged = player.oldHealth - player.health;

        if (tmpObj === player) {
            if (player.maxHealth > player.health) {
                player.damaged = player.oldHealth - player.health;

                let ht;

                // Enhanced Healing Logic
                let gearDmgs = [0.25, 0.45].map(val => val * items.weapons[player.weapons[0]].dmg * soldierMult());
                let includeSpikeDmgs = enemy.length && gearDmgs.includes(damaged) && near.skinIndex == 11;
                let dmg = 100 - player.health;

                if (near.dist2 <= 300) {
                    if (damaged >= 50) {
                        ht = adjustForPing(50 / player.healSpeedMultiplier);
                    } else if (tmpObj.isInstaKiller && damaged >= 35) {
                        ht = adjustForPing(70 / player.healSpeedMultiplier);
                    } else if (tmpObj.isOneTicker && damaged >= 35) {
                        ht = adjustForPing(30 / player.healSpeedMultiplier);
                    } else if (tmpObj.isDaggerEnthusiast && damaged <= 35) {
                        ht = adjustForPing(100 / player.healSpeedMultiplier);
                    } else if (tmpObj.isDaggerInstaKiller && damaged >= 25) {
                        ht = adjustForPing(80 / player.healSpeedMultiplier);
                    } else if (tmpObj.isAgeOne && damaged <= 30) {
                        ht = adjustForPing(130 / player.healSpeedMultiplier);
                    } else {
                        ht = adjustForPing(140 / player.healSpeedMultiplier);
                    }
                } else {
                    if (tmpObj.isEnemy && tmpObj.skinIndex == 11 && (tmpObj.isOneTicker || tmpObj.isInstaKiller)) {
                        ht = adjustForPing(60 / player.healSpeedMultiplier);
                    } else if (tmpObj.isEnemy && tmpObj.weaponVariant >= 2) {
                        ht = adjustForPing(90 / player.healSpeedMultiplier);
                    } else {
                        ht = adjustForPing(140 / player.healSpeedMultiplier);
                    }
                }

                setTimeout(() => {
                    healer();
                    resetAutoHeal();
                }, ht);
            }
        }
    }
}
*/
let enemyKb = {
    x: 0,
    y: 0,
}

function canSyncHit() {

    const playerDist = near.dist2;

    if (!near || instaC.isTrue) return;
    if (player.reloads[player.weapons[0]] === 1) return;

    const enemyTrapped = liztobj
    .filter(obj => obj.trap && obj.active)
    .sort((a, b) => Math.getDist(near, a) - Math.getDist(near, b))
    .find(trap => (player.sid === trap.ownerSID || trap.isTeamObject(player)) && Math.getDist(near, trap) <= 50);

    if (enemyTrapped) return;

    const straightAngle = Math.getDir(player, near);
    const damageReduction = near.skinIndex === 6 ? 0.75 : 1;
    const outputDamage = items.weapons[player.weapons[0]].dmg * (config.weaponVariants[player.primaryVariant].val ? config.weaponVariants[player.primaryVariant].val : 1) * damageReduction * 1.5 + (player.weapons[1] === 15 && !instaC.isTrue && player.reloads[player.weapons[1]] === 0 ? 50 : 0);
    const outputKnockbackStrength = 0.3 + (items.weapons[player.weapons[0]].knock ? items.weapons[player.weapons[0]].knock : 0);

    const outputKnockback = {
        x: Math.cos(straightAngle) * outputKnockbackStrength,
        y: Math.sin(straightAngle) * outputKnockbackStrength
    };

    const position = {
        x: near.xVel + outputKnockback.x * 205,
        y: near.yVel + outputKnockback.y * 205,
    };

    enemyKb = {
        x: position.x,
        y: position.y,
    };

    const radius = player.scale + outputKnockbackStrength
    const buildings = liztobj.filter(obj => Math.getDist(position, obj) <= radius + obj.scale && obj.dmg && obj.active && (obj.ownerSID === player.sid || obj.isTeamObject(player)));
    let buildingDamage = 0;

    for (let i = 0; i < buildings.length; i++) {

        const building = buildings[i];
        const objectDist = Math.getDist(building, position);

        if (playerDist <= items.weapons[player.weapons[0]].range + 35 * 2 && objectDist <= player.scale + building.scale) {
            buildingDamage += building.dmg * damageReduction;
            if (outputDamage + buildingDamage >= 100) {
                return true;
            }
        }

    }
    return false;
}
let potSpikeReplace = 0;
Math.getDist = function (e, t) {
    try {
        let x1 = (t.x2 || t.x);
        let y1 = (t.y2 || t.y);

        let x2 = (e.x2 || e.x);
        let y2 = (e.y2 || e.y);
        return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
    } catch (e) {
        return Infinity;
    }
};
Math.getDir = function (e, t) {
    try {
        return Math.atan2(
            (t.y2 || t.y) - (e.y2 || e.y),
            (t.x2 || t.x) - (e.x2 || e.x)
        );
    } catch (e) {
        return 0;
    }
};
function dmgPot() {
    let potDmg = 0;
    if (nears.length && player) {
        nears.forEach((e) => {
            if (Math.getDist(player, e) <= 300) {
                if (e.primaryIndex && Math.getDist(player, e) <= items.weapons[e.primaryIndex].range + player.scale * 2) {
                    if (e.reloads[e.primaryIndex] <= 0.2) {
                        potDmg += items.weapons[e.primaryIndex].dmg * config.weaponVariants[e.primaryVariant].val * 1.5;
                        if (config.weaponVariants[e.primaryVariant].src === '_r') {
                            potDmg += 5;
                        }
                    } else if (!e.primaryIndex) {
                        potDmg += 60; // safetyy measurements!
                    }
                }

                if (e.secondaryIndex && e.reloads[e.secondaryIndex] <= 0.2) {
                    const secondaryDmg = e.secondaryIndex === 10 ? items.weapons[e.secondaryIndex].dmg : items.weapons[e.secondaryIndex].Pdmg;
                    potDmg += secondaryDmg;
                } else if (!e.secondaryIndex) {
                    potDmg += 50; // safetyy measurements!
                }


                if (e.reloads[53] <= 0.2 || (e.reloads[53] >= 0.8 && Math.getDist(player, e) >= 160)) {
                    potDmg += 25;
                } else if (!e.reloads[53]) {
                    potDmg += 25 // safetyy measurements!
                }

            }
        })

        liztobj.forEach((obj) => {
            if (obj.dmg && obj.active && obj.ownerSID != player.sid && !obj.isTeamObject(player)) {
                if (Math.getDist(obj, player) <= obj.scale + player.scale + 20) {
                    potDmg += obj.dmg;
                }
            }
        })

        if (Leuchtturm) {
            potSpikeReplace = near && near.primaryIndex === 0 ? 25 : near && near.secondaryIndex === 15 ? 35 : 45;
            potDmg += potSpikeReplace;
        }

        if (player.skinIndex === 7) {
            potDmg += 5;
        } else if (player.skinIndex === 6) {
            potDmg = potDmg * 0.75;
        } else if (player.skinIndex === 13) {
            potDmg = potDmg - 3;
        } else if (player.skinIndex === 55) {
            if (player.currentReloads.primary === 1) {
                potDmg = potDmg - items.weapons[player.weapons[0]].dmg * 0.25;
            }
        } else if (player.skinIndex === 58) {
            if (player.currentReloads.primary === 1) {
                potDmg = potDmg - items.weapons[player.weapons[0]].dmg * 0.4;
            }
        }

        if (player.tailIndex === 13) {
            potDmg = potDmg - 3;
        } else if (player.tailIndex === 18) {
            if (player.currentReloads.primary === 1) {
                potDmg = potDmg - items.weapons[player.weapons[0]].dmg * 0.2;
            }
        }

    }

    return potDmg;

}

let prevTrap = false;
let prevEnemyBullTick = 0;
let enemyBullTick = 0;
let lastTickDamage = 0;
let skippedTicks = 0, countBTicks = 0, prevBullTick = 0, lastBullTick = 0;
let antiinsta = true;
let antiinsta1 = false;

/*
let lockers = { tauntSent: false, weaponSwitched: false };
let delayedActionScheduled = false;
let previousHealth = typeof player !== "undefined" ? player.health : 100;
let damageTimer = null;

// New flags for health handling actions
let isHandlingLowHealth = false;
let isHandlingFullHealth = false;

function handleLowHealth() {
    let damaged = 100 - player.health;
    if (damaged >= 35 && !instaC.isTrue && !lockers.tauntSent) {
        isHandlingLowHealth = true; // Set flag when handling low health
        my.autoAim = true;
        selectWeapon(player.weapons[1]);
        sendRandomTaunt();
        lockers.tauntSent = true;
        lockers.weaponSwitched = false;
        delayedActionScheduled = false;
        clearTimeout(damageTimer);
        isHandlingLowHealth = false; // Reset flag after handling
    }
}

function handleFullHealth() {
    if (player.health === 100 && !instaC.isTrue && !lockers.weaponSwitched && !delayedActionScheduled) {
        isHandlingFullHealth = true; // Set flag when handling full health
        delayedActionScheduled = true;
        setTimeout(() => {
            my.autoAim = false;
            selectWeapon(player.weapons[0]);
            lockers.weaponSwitched = true;
            lockers.tauntSent = false;
            delayedActionScheduled = false;
            isHandlingFullHealth = false; // Reset flag after handling
        }, 300);
    }
}

function gameTickHandler() {
    if (!inGame || !player) return;

    if (player.health < previousHealth) {
        clearTimeout(damageTimer);
        handleLowHealth();
    }

    if (player.health === 100 && previousHealth < 100) {
        clearTimeout(damageTimer);
        damageTimer = game.tickBase(() => {
            handleFullHealth();
        }, 4);
    }

    previousHealth = player.health;
}

setInterval(gameTickHandler, game.tick);*/

// UPDATE HEALTH:
function updateHealth(sid, value) {
    tmpObj = findPlayerBySID(sid);
    if (tmpObj) {
        tmpObj.oldHealth = tmpObj.health;
        tmpObj.health = value;
        tmpObj.judgeShame();
        if (tmpObj.oldHealth > tmpObj.health) {
            tmpObj.damaged = tmpObj.oldHealth - tmpObj.health;
            let damaged = tmpObj.damaged;
            tmpObj = findPlayerBySID(sid);
            if (tmpObj && tmpObj.health <= 0) {
                if (!tmpObj.death) {
                    tmpObj.death = true;
                    addDeadPlayer(tmpObj);
                }
            }
            if (tmpObj == player) {
                if (inGame) {
                    let attackers = getAttacker(damaged);
                    let gearDmgs = [0.25, 0.45].map((val) => val * items.weapons[player.weapons[0]].dmg * soldierMult());
                    let includeSpikeDmgs = gearDmgs.includes(damaged);
                    let healTimeout = (950/9);
                    let slowHeal = function(timer) {
                        setTimeout(() => {
                            healer();
                        }, timer);
                    }
                    if(antiSync || my.antiSync || autoQ) {
                        tmpObj.canEmpAnti = false;
                    }
                    let d = tmpObj.damaged;
                    let AD;
                    let AC;
                    let AKH;
                    AKH = near.weaponIndex == 5 || player.skinIndex != 6 ? 8 : 20;
                    AD = near.weaponIndex == 7 ? 36 : AKH;
                    AC = near.weaponIndex == 7 ? 36 : 20;
                    if (damaged >= (includeSpikeDmgs ? AC : AD) && tmpObj.damageThreat >= 25 && (game.tick - tmpObj.antiTimer) > 1 && player.shameCount < 5) {
                        tmpObj.antiTimer = game.tick;
                        if ((d == 26 || d == 23 || d == 27 || d == 22) || (player.skinIndex != 6 && (d == 35 || d == 45) || (player.skinIndex == 6 && (d == 26 || d == 34 || d == 33)))) {
                            healer();
                        } else if(!instaC.isTrue && (player.shameCount > 3) && (player.reloads[player.weapons[1]] != 0 || (player.skinIndex === 6 && player.shameCount >= 3)) && ((!traps.inTrap && !clicks.left && !clicks.right && !my.TrapAim && !my.SpikeAim) || (player.skinIndex === 6 && player.shameCount >= 3)) && player.shameCount != 0 && window.pingTime <= 90 && (d < 37 || d > 38) && d > 25 && d < 50) {
                            tmpObj.canEmpAnti = true;
                            slowHeal(healTimeout);
                        } else {
                            healer();
                        }
                    } else {
                        if (player.shameCount >= 5) {
                            if (damaged > 25) tmpObj.canEmpAnti = true;
                        }
                        slowHeal(healTimeout);
                    }
                }
            } else {
                if (!tmpObj.setPoisonTick && ((tmpObj.damaged == 5 && tmpObj.skinIndex != 6) || (tmpObj.damaged == 4 && tmpObj.skinIndex == 6) || (tmpObj.latestTail == 13 && tmpObj.damaged == 2))) {
                    tmpObj.setPoisonTick = true;
                }
            }
        } else {
            if(tmpObj != player) {
                if(tmpObj.maxShameCount < tmpObj.shameCount) {
                    tmpObj.maxShameCount = tmpObj.shameCount;
                }
            }
        }
    }
}

function updateEnemyThreatLevel(enemy) {
    let threatLevel = 0;
    if (detectInstaKiller(enemy)) {
        threatLevel += 2;
    }
    if (detectOneTicker(enemy)) {
        threatLevel += 3;
    }
    enemyThreatLevel = Math.max(enemyThreatLevel, threatLevel);
    prepareAutoHeal();
}

function prepareAutoHeal() {
    if (enemyThreatLevel >= 3) {
        player.healSpeedMultiplier = 1.8;
    } else if (enemyThreatLevel >= 2) {
        player.healSpeedMultiplier = 1.2;
    } else {
        player.healSpeedMultiplier = 1.0;
    }
}

function resetAutoHeal() {
    player.healSpeedMultiplier = 1.0;
    enemyThreatLevel = 0;
}

function detectIncomingProjectiles(player) {
    return projectiles.filter(proj => {
        if (!proj.active) return false;
        let distance = UTILS.getDistance(player.x, player.y, proj.x, proj.y);
        let angleToPlayer = UTILS.getAngleDist(proj, player);
        return distance < (proj.range + 10) && Math.abs(UTILS.angleDiff(proj.dir, angleToPlayer)) < Math.PI / 4;
    });
}

function dmgSource(player) {
    let dmgSrc = "unknown";
    let projNear = detectIncomingProjectiles(player);

    if (projNear.length >= 3) {
        dmgSrc = "projectiless";
    } else if (projNear.length === 2) {
        dmgSrc = "projectiles";
    } else if (projNear.length === 1) {
        dmgSrc = "projectile";
    } else {
        let spike = gameObjects.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player))
        .sort((a, b) => UTILS.getDist(a, player, 0, 3) - UTILS.getDist(b, player, 0, 3))[0];
        if (spike) {
            let dstSpike = UTILS.getDist(spike, player, 0, 3);
            if (dstSpike < (player.scale + spike.scale + 20)) {
                dmgSrc = "spike";
            }
        }
    }
    return dmgSrc;
}

function potDmg() {
    if (!player || !gameObjects) return 0;
    let [playerSpeed, playerXVel, playerYVel, playerDir] = getVelocity(player);
    let spike = gameObjects.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player)).sort((a, b) => UTILS.getDist(a, player, 0, 3) - UTILS.getDist(b, player, 0, 3))[0];
    let ptDmg = 0;

    if (spike && isEnemyMoving(player)) {
        let dstSpike = UTILS.getDist(spike, player, 0, 3);
        if (dstSpike < (player.scale + spike.scale + 50) && myPlayerVelTwr(playerDir, spike, player)) {
            ptDmg += spike.dmg;
        }
    }

    if (player.skinIndex == 7 && my.reSync) {
        ptDmg += 5
    } else if (player.skinIndex == 6) {
        ptDmg = ptDmg * 0.75
    }

    return ptDmg;
}

function myPlayerVelTwr(playerDir, ent, player) {
    let aTEntity = Math.atan2(ent.y - player.y, ent.x - player.x);
    let aDiff = Math.abs(aTEntity - playerDir) % (2 * Math.PI);
    let fThs = Math.PI / 4;

    return aDiff <= fThs || aDiff >= (2 * Math.PI - fThs);
}

// KILL PLAYER:
function killPlayer() {
    inGame = false;
    lastDeath = {
        x: player.x
        , y: player.y
        , };
    if (configs.autoRespawn) {
        getEl("diedText")
            .style.display = "none";
        packet("M", {
            name: lastsp[0]
            , moofoll: lastsp[1]
            , skin: lastsp[2]
        });
    }
    enemyBox.style.display = "none";
    azKills.style.display = "none";
}

// UPDATE PLAYER ITEM VALUES:
function updateItemCounts(index, value) {
    if (player) {
        player.itemCounts[index] = value;
    }
}

// UPDATE AGE:
function updateAge(xp, mxp, age) {
    if (xp != undefined) {
        player.XP = xp;
    }
    if (mxp != undefined) {
        player.maxXP = mxp;
    }
    if (age != undefined) {
        player.age = age;
    }
}

// UPDATE UPGRADES:
function updateUpgrades(points, age) {
    player.upgradePoints = points;
    player.upgrAge = age;
    if (points > 0) {
        tmpList.length = 0;
        UTILS.removeAllChildren(upgradeHolder);
        for (let i = 0; i < items.weapons.length; ++i) {
            if (items.weapons[i].age == age && (items.weapons[i].pre == undefined || player.weapons.indexOf(items.weapons[i].pre) >= 0)) {
                let e = UTILS.generateElement({
                    id: "upgradeItem" + i
                    , class: "actionBarItem"
                    , onmouseout: function () {
                        showItemInfo();
                    }
                    , parent: upgradeHolder
                });
                e.style.backgroundImage = getEl("actionBarItem" + i)
                    .style.backgroundImage;
                tmpList.push(i);
            }
        }
        for (let i = 0; i < items.list.length; ++i) {
            if (items.list[i].age == age && (items.list[i].pre == undefined || player.items.indexOf(items.list[i].pre) >= 0)) {
                let tmpI = (items.weapons.length + i);
                let e = UTILS.generateElement({
                    id: "upgradeItem" + tmpI
                    , class: "actionBarItem"
                    , onmouseout: function () {
                        showItemInfo();
                    }
                    , parent: upgradeHolder
                });
                e.style.backgroundImage = getEl("actionBarItem" + tmpI)
                    .style.backgroundImage;
                tmpList.push(tmpI);
            }
        }
        for (let i = 0; i < tmpList.length; i++) {
            (function (i) {
                let tmpItem = getEl('upgradeItem' + i);
                tmpItem.onclick = UTILS.checkTrusted(function () {
                    packet("H", i);
                });
                UTILS.hookTouchEvents(tmpItem);
            })(tmpList[i]);
        }
        if (tmpList.length) {
            upgradeHolder.style.display = "block";
            upgradeCounter.style.display = "none";
        } else {
            upgradeHolder.style.display = "none";
            upgradeCounter.style.display = "none";
            showItemInfo();
        }
    } else {
        upgradeHolder.style.display = "none";
        upgradeCounter.style.display = "none";
        showItemInfo();
    }
}

let placedSpikePositions = new Set();
let placedTrapPositions = new Set();

function toR(e) {
    let n = ((e * Math.PI) / 180) % (2 * Math.PI);
    return n > Math.PI ? Math.PI - n : n;
}

function toD(e) {
    let n = ((e / Math.PI) * 360) % 360;
    return n >= 360 ? n - 360 : n;
}

// KILL OBJECT:
function killObject(sid) {
    let findObj = findObjectBySid(sid);
    objectManager.disableBySid(sid);
    if (findObj && cdf(player, findObj) < 200 && nears.length > 0 && configs.autoReplace) {
        let enemy = near;
        let A = player;
        let dist = cdf(A, enemy);
        let dir = caf(A, enemy);
        let dir2 = caf(player, dir + 180);
        let ignore = [0, 0];
        let objAim = Math.atan2(findObj.y - player.y2, findObj.x - player.x2);
        let objDist = Math.hypot(findObj.y - player.y2, findObj.x - player.x2);
        let nearTrap = liztobj.filter(tmp => tmp.trap && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, near, 0, 2) <= near.scale + tmp.getScale() + 5);
        let spike = liztobj.find(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, near, 0, 2) < 87 && !nearTrap);
        let placeObj = spike ? 4 : 2;
        if (objDist <= 200 && near.dist2 <= 168 && placeObj != 4 && !traps.checkSpikeTick()) {
            instaC.canSpikeTick = true;
            instaC.syncHit = true;
        }
        if (dist < 200) {
            for (let i = 0; i < Math.PI; i += placeObj === 4 || (placeObj === 2 && !traps.checkSpikeTick()) ? toR(items.list[A.items[2]].scale) + 0.6 : Math.PI) {
                let placed = false;
                if (!ignore[0]) {
                    for (let j = 0; j < 0.7 * Math.PI; j += placeObj === 4 || (placeObj === 2 && !traps.checkSpikeTick()) ? 0.9274 : 0.7 * Math.PI) {
                        place(placeObj, (0.5 * dir || 0.5 * dir2) + i / Math.PI + j);
                    }
                    ignore[0] = Math.ceil(items.list[A.items[2]].scale / toD(Math.PI / 12));
                }
                placed && (ignore[1] = Math.ceil(items.list[A.items[2]].scale / toD(Math.PI / 12)));
            }
            for (let position of placedSpikePositions) {
                let storedPosition = JSON.parse(position);
                let distToStoredPosition = Math.hypot(storedPosition[0] - findObj.x, storedPosition[1] - findObj.y);
                if (distToStoredPosition <= 80) {
                    placedSpikePositions.delete(position);
                    break;
                }
            }
        }
    }
}

// KILL ALL OBJECTS BY A PLAYER:
function killObjects(sid) {
    if (player) objectManager.removeAllItems(sid);
}

function setTickout(doo, timeout) {
    if (!ticks.manage[ticks.tick + timeout]) {
        ticks.manage[ticks.tick + timeout] = [doo];
    } else {
        ticks.manage[ticks.tick + timeout].push(doo);
    }
}

function caf(e, t) {
    return Math.atan2((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
}

let found = false;
let autoQ = false;

let autos = {
    insta: {
        todo: false
        , wait: false
        , count: 4
        , shame: 5
    }
    , bull: false
    , antibull: 0
    , reloaded: false
    , stopspin: true
}

function getVelocity(user) {
    let movementDir = caf({
        x: user.veryOldX
        , y: user.veryOldY
    }, user);
    let speed = cdf({
        x: user.veryOldX
        , y: user.veryOldY
    }, user);
    let xvel = user.x + (4 * Math.cos(movementDir) * window.pingTime) / 111.1111;
    let yvel = user.y + (4 * Math.sin(movementDir) * window.pingTime) / 111.1111;
    return [speed, xvel, yvel, movementDir];
}

// UPDATE PLAYER DATA:
let getDistance = (x1, y1, x2, y2) => {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
};

let getPotentialDamage = (build, user) => {
    let weapIndex = user.weapons[1] === 10 && !player.reloads[user.weapons[1]] ? 1 : 0;
    let weap = user.weapons[weapIndex];
    if (player.reloads[weap]) return 0;
    let weapon = items.weapons[weap];
    let inDist = getDistance(build.x, build.y, user.x2, user.y2) <= build.getScale() + weapon.range;
    return (user.visible && inDist) ? weapon.dmg * (weapon.sDmg || 1) * 3.3 : 0;
};

let findPlacementAngle = (player, itemId, build) => {
    if (!build) return null;
    let MAX_ANGLE = 2 * Math.PI;
    let ANGLE_STEP = Math.PI / 360;
    let item = items.list[player.items[itemId]];
    let buildingAngle = Math.atan2(build.y - player.y, build.x - player.x);
    let tmpS = player.scale + (item.scale || 1) + (item.placeOffset || 0);

    for (let offset = 0; offset < MAX_ANGLE; offset += ANGLE_STEP) {
        let angles = [(buildingAngle + offset) % MAX_ANGLE, (buildingAngle - offset + MAX_ANGLE) % MAX_ANGLE];
        for (let angle of angles) {
            let tmpX = player.x + tmpS * Math.cos(angle);
            let tmpY = player.y + tmpS * Math.sin(angle);
            if (objectManager.customCheckItemLocation(tmpX, tmpY, item.scale, 0.6, item.id, false, player, build, liztobj, UTILS, config)) {
                return angle;
            }
        }
    }
    return null;
};

function calculateDistance(pointA, pointB) {
    return Math.sqrt(Math.pow((pointA.y - pointB.y), 2) + Math.pow((pointA.x - pointB.x), 2));
}

let spikes = {
    dist: 0
    , aim: 0
    , inSpike: false
    , info: {}
};

let dkl = false;
let itb = false;

function avoidSpike() {
    let spike = gameObjects.filter(obj => obj.dmg && obj.active && !obj.isTeamObject(player)).reduce((dObj, obj) => {
        let dist = UTILS.getDist(obj, player, 0, 2);
        return dist < (dObj.dist || Infinity) ? {
            obj,
            dist
        } : dObj;
    }, {}).obj;

    if (!spike) return;

    let dstSpike = UTILS.getDist(spike, player, 0, 2);
    let avSpike = spike.scale + player.scale + 40;

    if (!traps.inTrap) {
        if (dstSpike <= avSpike && near.dist2 < 250) {
            if (!itb) {
                itb = true;
            }
            packet("f", Math.atan2(player.y - spike.y, player.x - spike.x), 1);
            dkl = false;
        } else {
            if (!dkl) {
                packet("f", lastMoveDir || undefined, 1);
                dkl = true;
                itb = false;
            }
        }
    }
}

function isEnemy(tmpObj) {
    return tmpObj.team != undefined ? tmpObj.team != player.team : tmpObj != player;
}

function fgdo(t, n, i) {
    return t == player ?
        Math.sqrt(Math.pow(n.y - t.y2, 2) + Math.pow(n.x - t.x2, 2)) :
    n == player ?
        Math.sqrt(Math.pow(n.y2 - t.y, 2) + Math.pow(n.x2 - t.x, 2)) :
    i ?
        Math.sqrt(Math.pow(n.y3 - t.y, 2) + Math.pow(n.x3 - t.x, 2)) :
    Math.sqrt(Math.pow(n.y - t.y, 2) + Math.pow(n.x - t.x, 2));
}

let forceZolder = !1;
let sa = []
let nearestEnemy = null;
let prKills = 0;
let game = {
    tick: 0,
    tickQueue: [],
    tickBase: function (set, tick) {
        if (this.tickQueue[this.tick + tick]) {
            this.tickQueue[this.tick + tick].push(set);
        } else {
            this.tickQueue[this.tick + tick] = [set];
        }
    },
    tickRate: 950 / config.serverUpdateRate,
    tickSpeed: 0,
    lastTick: performance.now()
};
let azKills = document.createElement("div");
azKills.id = "azKillsCount";
azKills.innerHTML = + "0";
document.body.appendChild(azKills);

let doBullTick = false;

azKills.style.display = "none";

var didMiss = false;
const tauntCooldown = 2000;

const chatMessages = [
    "heh, better luck next time.",
    "you missed, pal.",
    "whoops, close one!",
    "try again, won't ya?",
    "is that it? really?",
    "you can't hit me, bud.",
    "swing and... miss.",
    "nice try, i guess.",
    "too slow, buddy.",
    "almost, but nope.",
    "you need better aim.",
    "heh, that tickled.",
    "missed by a mile, dude.",
    "not even close, friend.",
    "you call that a hit?",
    "is that all you got?",
    "just warming up, huh?",
    "heh, maybe next time.",
    "you serious, bud?",
    "that was kinda funny.",
    "looks like you’re off today.",
    "heh, gonna need more luck.",
    "did you even try, bud?",
    "that was pretty weak.",
    "nice try... but no.",
    "cute, but nope.",
    "close, but still no.",
    "you call that strategy?",
    "nice shot! just kidding.",
    "gotta try harder than that.",
    "really? that’s your move?",
    "heh, you're way off.",
    "better bring your A-game.",
    "did you even aim, bud?",
    "heh, that all ya got?",
    "i've seen better, pal.",
    "too easy, try again.",
    "yikes, that was weak.",
    "seriously? that was it?",
    "that the best you got?",
    "you’re slipping, bud.",
    "whoa, that was sad.",
    "keep practicing, pal.",
    "heh, not even a scratch.",
    "was that supposed to hit?",
    "wow, real impressive... not.",
    "heh, you missed again.",
    "guess you're off today.",
    "you sure you’re trying?",
    "try harder next time, pal.",
    "heh, not even close.",
    "nope, still didn't get me.",
    "heh, was that an attack?",
    "heh, still standing, bud.",
    "missed your big shot, pal.",
    "too slow, still here.",
    "dodged that one, bud.",
    "almost got me... almost.",
    "missed your chance, bud.",
    "i’m still here, buddy.",
    "you’re gonna need more.",
    "heh, still kickin’, bud.",
    "that all ya got, pal?",
    "i’m still breathin’, pal.",
    "guess i’m still here.",
    "you really thought so?",
    "heh, didn’t get me.",
    "not today, friend.",
    "missed me, nice try.",
    "still here, try again.",
    "that all you got?",
    "heh, i’m still alive.",
    "nice try, still here.",
    "still here, not bad tho.",
    "heh, you’re too slow.",
    "missed me, better aim.",
    "guess i’m still alive.",
    "you missed, still here.",
    "dodged that, easy peasy.",
    "heh, that all ya got?",
    "nice shot... not really.",
    "you gotta do better.",
    "still standing, try harder.",
    "almost, but i’m still here.",
    "too bad, missed again.",
    "heh, didn’t feel a thing.",
    "still kickin’, not bad.",
    "that all? still breathin’.",
    "missed again, too slow.",
    "you gotta be quicker.",
    "heh, i’m still dodgin’.",
    "close one, but nope.",
    "missed your shot again.",
    "still here, try again, bud.",
    "missed? that's rough, pal.",
    "heh, you call that close?",
    "you missed, that’s too bad.",
    "better luck next time, bud.",
    "whoops, didn’t get me.",
    "heh, still outta reach.",
    "dodged that like a pro.",
    "close call, but not today.",
    "that the best you can do?",
    "barely felt that, buddy.",
    "still alive, gotta try.",
    "missed me, still smilin'.",
    "you gotta step it up.",
    "heh, almost caught me.",
    "you’re off your game.",
    "keep missing, huh?",
    "heh, too slow again.",
    "that tickled, not enough.",
    "you won’t get me that easy.",
    "heh, still missed me, bud.",
    "too slow, still dodgin'.",
    "you missed, keep tryin'.",
    "that tickled, try again.",
    "still here, missed again.",
    "heh, didn’t get me, pal.",
    "missed me, gotta be quicker.",
    "nice try, still standin'.",
    "heh, dodged it, easy peasy.",
    "you missed... again, bud.",
    "still kickin’, not impressed.",
    "better step up your game.",
    "whoops, way off target.",
    "that all ya got, bud?",
    "guess you missed again.",
    "too bad, missed again.",
    "heh, you gotta do better.",
    "nice swing, big miss.",
    "still here, keep tryin’.",
    "you missed, not even close.",
    "almost got me... almost.",
    "missed again, too slow.",
    "heh, you gotta focus more.",
    "that the best you got?",
    "missed me, maybe next time.",
    "still standin', nice try.",
    "you call that a hit?",
    "heh, still here, try harder.",
    "close one, but i’m fine.",
    "guess i’m too quick, huh?",
];

function sendRandomTaunt() {
    const randomMessage = chatMessages[Math.floor(Math.random() * chatMessages.length)];
    sendChat(randomMessage);
}

// UPDATE PLAYER DATA:
function updatePlayers(data) {
    // showMessage("dmg: " + potDmg());
    timeSinceTick = Date.now();
    preplace();
    avoidSpike();
    function getAngleDifference(angle1, angle2) {
        angle1 = angle1 % (2 * Math.PI);
        angle2 = angle2 % (2 * Math.PI);
        let diff = Math.abs(angle1 - angle2);
        if (diff > Math.PI) {
            diff = (2 * Math.PI) - diff;
        }
        return diff;
    }

    game.tick++;
    enemy = [];
    nears = [];
    near = [];
    game.tickSpeed = performance.now() - game.lastTick;
    game.lastTick = performance.now();
    players.forEach((tmp) => {
        tmp.forcePos = !tmp.visible;
        tmp.visible = false;
        if ((tmp.timeHealed - tmp.timeDamaged) > 0 && tmp.lastshamecount < tmp.shameCount) {
            tmp.pinge = (tmp.timeHealed - tmp.timeDamaged);
        }
    });
    let minDistance = Infinity;

    for (let i = 0; i < data.length;) {
        tmpObj = findPlayerBySID(data[i]);
        if (tmpObj) {
            tmpObj.t1 = (tmpObj.t2 === undefined) ? game.lastTick : tmpObj.t2;
            tmpObj.t2 = game.lastTick;
            tmpObj.oldPos.x2 = tmpObj.x2;
            tmpObj.oldPos.y2 = tmpObj.y2;
            tmpObj.x1 = tmpObj.x;
            tmpObj.y1 = tmpObj.y;
            tmpObj.x2 = data[i + 1];
            tmpObj.y2 = data[i + 2];
            tmpObj.x3 = tmpObj.x2 + (tmpObj.x2 - tmpObj.oldPos.x2);
            tmpObj.y3 = tmpObj.y2 + (tmpObj.y2 - tmpObj.oldPos.y2);
            tmpObj.d1 = (tmpObj.d2 === undefined) ? data[i + 3] : tmpObj.d2;
            tmpObj.d2 = data[i + 3];
            tmpObj.anim = Number(tmpObj.health > data[i + 5] ? (tmpObj.health - data[i + 5]) : 0);
            tmpObj.dt = 0;
            tmpObj.veryOldX = tmpObj.x;
            tmpObj.veryOldY = tmpObj.y;
            tmpObj.buildIndex = data[i + 4];
            tmpObj.weaponIndex = data[i + 5];
            tmpObj.weaponVariant = data[i + 6];
            tmpObj.team = data[i + 7];
            tmpObj.isLeader = data[i + 8];
            tmpObj.oldSkinIndex = tmpObj.skinIndex;
            tmpObj.oldTailIndex = tmpObj.tailIndex;
            tmpObj.skinIndex = data[i + 9];
            tmpObj.tailIndex = data[i + 10];
            tmpObj.iconIndex = data[i + 11];
            tmpObj.zIndex = data[i + 12];
            tmpObj.visible = true;
            tmpObj.update(game.tickSpeed);
            tmpObj.dist2 = UTILS.getDist(tmpObj, player, 2, 2);
            tmpObj.aim2 = UTILS.getDirect(tmpObj, player, 2, 2);
            tmpObj.dist3 = UTILS.getDist(tmpObj, player, 3, 3);
            tmpObj.aim3 = UTILS.getDirect(tmpObj, player, 3, 3);
            // ENEMY PROFILING
            tmpObj.profile = {
                anti: {
                    shameLeak: 5, //.profile.anti.shameLeak
                    bullTickCount: 0, //.profile.anti.bullTickCount
                    bullTick: false, //.profile.anti.bullTickPredicted
                    minimumShameDamage: 0 //.profile.anti.minimumShameDamage
                },
                soldierEmpData: {
                    trueSEs: 0, //.profile.soldierEmpData.trueSEs
                    failedSEs: 0 //.profile.soldierEmpData.failedSEs
                },
                autoBreakData: {
                    tickTankShots: 0, //.profile.autoBreakData.tickTankShots
                    imperfectTickTankShots: 0, //.profile.autoBreakData.imperfectTickTankShots
                    postBreakHat: 0, //.profile.autoBreakData.postBreakHat
                    postBreakBullTicks: 0 //.profile.autoBreakData.postBreakBullTicks
                },
                resistance: {
                    noBullsSurvived: 0, //.profile.resistance.noBullsSurvived
                    trueNoBulls: 0,
                    pNBsSurvived: 0 //.profile.resistance.pNBsSurvived
                },
                death: {
                    reason: '', //.profile.death.reason
                    lastShame: 0, //.profile.death.lastShame
                }
            }
            tmpObj.damageThreat = 0;
            tmpObj.xVel = tmpObj.x2 * 2 - tmpObj.oldPos.x2
            tmpObj.yVel = tmpObj.y2 * 2 - tmpObj.oldPos.y2
            if (isEnemy(tmpObj)) {
                let distance = UTILS.getDist(tmpObj, player, 1, 1);
                if (distance < minDistance) {
                    minDistance = distance;
                    nearestEnemy = tmpObj;
                }
            }

            sa.forEach(fn => setTimeout(fn, 0, true))
            sa = [];
            if (tmpObj == player) {
                if (liztobj.length) {
                    liztobj.forEach((tmp) => {
                        tmp.onNear = false;
                        if (tmp.active) {
                            if (!tmp.onNear &&
                                UTILS.getDist(tmp, tmpObj, 0, 2) <=
                                tmp.scale + items.weapons[tmpObj.weapons[0]].range
                               ) {
                                tmp.onNear = true;
                            }
                            if (tmp.isItem && tmp.owner) {
                                if (!tmp.pps &&
                                    tmpObj.sid == tmp.owner.sid &&
                                    !tmp.breakObj &&
                                    ![17, 14, 20].includes(tmp.id)
                                   ) {
                                    tmp.breakObj = true;
                                    breakObjects.push({
                                        x: tmp.x,
                                        y: tmp.y,
                                        sid: tmp.sid,
                                    });
                                }
                            }
                        }
                    });
                    let spike = gameObjects.filter(tmp => {
                        let eqWeapon = player.weapons[1] ? items.weapons[player.weapons[1]].range : items.weapons[player.weapons[0]].range;
                        return tmp.dmg && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (tmp.scale + eqWeapon);
                    }).sort(function(a, b) {
                        return UTILS.getDist(a, player, 0, 5) - UTILS.getDist(b, player, 0, 5);
                    })[0];

                    let nearTrap = liztobj.filter(tmp => tmp.trap && tmp.active && UTILS.getDist(tmp, tmpObj, 0, 2) <= (tmpObj.scale + tmp.getScale() + 25) && !tmp.isTeamObject(tmpObj)).sort(function(a, b) {
                        return UTILS.getDist(a, tmpObj, 0, 2) - UTILS.getDist(b, tmpObj, 0, 2);
                    })[0];

                    if (spike && nearTrap) {
                        traps.dist = UTILS.getDist(spike, tmpObj, 0, 2);
                        traps.aim = UTILS.getDirect(spike, tmpObj, 0, 2);
                        traps.info = spike;
                    } else if (nearTrap) {
                        traps.dist = UTILS.getDist(nearTrap, tmpObj, 0, 2);
                        traps.aim = UTILS.getDirect(nearTrap, tmpObj, 0, 2);
                        traps.protect(caf(nearTrap, tmpObj) - Math.PI);
                        traps.inTrap = true;
                        traps.info = nearTrap;
                    } else {
                        if (traps.inTrap) {
                            Leuchtturm = true;
                            game.tickBase(() => {
                                Leuchtturm = false;
                            }, 2);
                        } else {
                            Leuchtturm = false;
                        }
                        traps.inTrap = false;
                        traps.info = {};
                    }
                }

            }
            if (tmpObj.weaponIndex < 9) {
                tmpObj.primaryIndex = tmpObj.weaponIndex;
                tmpObj.primaryVariant = tmpObj.weaponVariant;
            } else if (tmpObj.weaponIndex > 8) {
                tmpObj.secondaryIndex = tmpObj.weaponIndex;
                tmpObj.secondaryVariant = tmpObj.weaponVariant;
            }
        }
        i += 13;
    }

    let damaged = player.oldHealth - player.health;

    if (game.tick % 23 == 0 && player.shameCount > 0) {
        doBullTick = true;
    } else {
        doBullTick = false;
    }

    if (doBullTick && (damaged == 5 || (damaged == 2 && player.skinIndex == 7))) {
        didBullTick = true;
    } else if (game.tick) {
        didBullTick = false
    }

    let azureKills = player.kills;

    if (player) {
        if (azureKills !== prKills) {
            azKills.innerHTML = azureKills;
            prKills = azureKills;
        }
    }

    function runTHar() {
        if (!nearestEnemy || !nearestEnemy.sid) {
            return;
        }

        updateEnemyData(nearestEnemy);
    }

    runTHar();

    if (textManager.stack.length) {
        let stacks = [];
        let notstacks = [];
        let num = 0;
        let num2 = 0;
        let pos = {
            x: null
            , y: null
        };
        let pos2 = {
            x: null
            , y: null
        }
        textManager.stack.forEach((text) => {
            if (text.value >= 0) {
                if (num == 0) pos = {
                    x: text.x
                    , y: text.y
                };
                num += Math.abs(text.value);
            } else {
                if (num2 == 0) pos2 = {
                    x: text.x
                    , y: text.y
                };
                num2 += Math.abs(text.value);
            }
        });
        if (num2 > 0) {
            textManager.showText(pos2.x, pos2.y, Math.max(45, Math.min(50, num2)), 0.18, 500, num2, "#FF0000");
        }
        if (num > 0) {
            textManager.showText(pos.x, pos.y, Math.max(45, Math.min(50, num)), 0.18, 500, num, "#fff");
        }
        textManager.stack = [];
    }
    if (runAtNextTick.length) {
        runAtNextTick.forEach((tmp) => {
            checkProjectileHolder(...tmp);
        });
        runAtNextTick = [];
    }
    for (let i = 0; i < data.length;) {
        tmpObj = findPlayerBySID(data[i]);
        if (tmpObj) {
            if (!tmpObj.isTeam(player)) {
                enemy.push(tmpObj);
                if (tmpObj.dist2 <= items.weapons[tmpObj.primaryIndex == undefined ? 5 : tmpObj.primaryIndex].range + (player.scale * 2)) {
                    nears.push(tmpObj);
                }
            }
            tmpObj.manageReload();
            if (tmpObj != player) {
                tmpObj.addDamageThreat(player);
            }
        }
        i += 13;
    }
    if (player && player.alive) {
        if (enemy.length) {
            near = enemy.sort(function(tmp1, tmp2) {
                return tmp1.dist2 - tmp2.dist2;
            })[0];
        }
        if (game.tickQueue[game.tick]) {
            game.tickQueue[game.tick].forEach((action) => {
                action();
            });
            game.tickQueue[game.tick] = null;
        }
        if (advHeal.length) {
            advHeal.forEach((updHealth) => {
                if (window.pingTime < 150) {
                    let sid = updHealth[0];
                    let value = updHealth[1];
                    let totalDamage = 100 - value
                    let damaged = updHealth[2];
                    tmpObj = findPlayerBySID(sid);
                    let bullTicked = false;
                    if (tmpObj == player) {
                        if (tmpObj.skinIndex == 7 && (damaged == 5 || (tmpObj.latestTail == 13 && damaged == 2))) {
                            if (my.reSync) {
                                my.reSync = false;
                                tmpObj.setBullTick = true;
                            }
                            bullTicked = true;
                        }
                        if (inGame) {
                            let attackers = getAttacker(damaged);
                            let gearDmgs = [0.25, 0.45].map((val) => val * items.weapons[player.weapons[0]].dmg * soldierMult());
                            let includeSpikeDmgs = enemy.length ? !bullTicked && (gearDmgs.includes(damaged) && near.skinIndex == 11) : false;
                            let healTimeout = 130 - window.pingTime;
                            let dmg = 100 - player.health;
                            let slowHeal = function (timer, tickBase) {
                                if (!tickBase) {
                                    setTimeout(() => {
                                        healer();
                                    }, timer);
                                } else {
                                    game.tickBase(() => {
                                        healer()
                                    }, 2)
                                }
                            }
                            if (getEl("healingBeta").checked) {
                                if (enemy.length) {
                                    if ([0, 7, 8].includes(near.primaryIndex)) {
                                        if (damaged < 75) {
                                            slowHeal(healTimeout)
                                        } else {
                                            healer()
                                        }
                                    }
                                    if ([1, 2, 6].includes(near.primaryIndex)) {
                                        if (damaged >= 25 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 5) {
                                            healer()
                                        } else {
                                            slowHeal(healTimeout)
                                        }
                                    }
                                    if (near.primaryIndex == 3) {
                                        if (near.secondaryIndex == 15) {
                                            if (near.primaryVariant < 2) {
                                                if (damaged >= 35 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 5 && game.tick - player.antiTimer > 1) {
                                                    tmpObj.canEmpAnti = true
                                                    tmpObj.antiTimer = game.tick
                                                    healer()
                                                } else {
                                                    slowHeal(healTimeout)
                                                }
                                            } else {
                                                if (damaged > 35 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 5 && game.tick - player.antiTimer > 1) {
                                                    tmpObj.canEmpAnti = true
                                                    tmpObj.antiTimer = game.tick
                                                    healer()
                                                } else {
                                                    slowHeal(healTimeout)
                                                }
                                            }
                                        } else {
                                            if (damaged >= 25 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 4) {
                                                healer()
                                            } else {
                                                slowHeal(healTimeout)
                                            }
                                        }
                                    }
                                    if (near.primaryIndex == 4) {
                                        if (near.primaryVariant >= 1) {
                                            if (damaged >= 10 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 4) {
                                                healer()
                                            } else {
                                                slowHeal(healTimeout)
                                            }
                                        } else {
                                            if (damaged >= 35 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 3) {
                                                healer()
                                            } else {
                                                slowHeal(healTimeout)
                                            }
                                        }
                                    }
                                    if ([undefined, 5].includes(near.primaryIndex)) {
                                        if (near.secondaryIndex == 10) {
                                            if (dmg >= (includeSpikeDmgs ? 10 : 20) && tmpObj.damageThreat + dmg >= 80 && tmpObj.shameCount < 6) {
                                                healer()
                                            } else {
                                                slowHeal(healTimeout)
                                            }
                                        } else
                                            if (near.primaryVariant >= 2 || near.primaryVariant == undefined) {
                                                if (dmg >= (includeSpikeDmgs ? 15 : 20) && tmpObj.damageThreat + dmg >= 50 && tmpObj.shameCount < 6) {
                                                    healer()
                                                } else {
                                                    slowHeal(healTimeout)
                                                }
                                            } else
                                                if ([undefined || 15].includes(near.secondaryIndex)) {
                                                    if (damaged > (includeSpikeDmgs ? 8 : 20) && player.damageThreat >= 25 && (game.tick - player.antiTimer) > 1) {
                                                        if (tmpObj.shameCount < 5) {
                                                            healer()
                                                        } else {
                                                            slowHeal(healTimeout)
                                                        }
                                                    } else {
                                                        slowHeal(healTimeout)
                                                    }
                                                } else
                                                    if ([9, 12, 13].includes(near.secondaryIndex)) {
                                                        if (dmg >= 25 && player.damageThreat + dmg >= 70 && tmpObj.shameCount < 6) {
                                                            healer()
                                                        } else {
                                                            slowHeal(healTimeout)
                                                        }
                                                    } else {
                                                        if (damaged > 25 && player.damageThreat + dmg >= 95) {
                                                            healer()
                                                        } else {
                                                            slowHeal(healTimeout)
                                                        }
                                                    }
                                    }
                                    if (near.primaryIndex == 6) {
                                        if (near.secondaryIndex == 15) {
                                            if (damaged >= 25 && tmpObj.damageThreat + dmg >= 95 && tmpObj.shameCount < 4) {
                                                healer()
                                            } else {
                                                slowHeal(healTimeout)
                                            }
                                        } else {
                                            if (damaged >= 70 && tmpObj.shameCount < 4) {
                                                healer()
                                            } else {
                                                slowHeal(healTimeout)
                                            }
                                        }
                                    }
                                    if (damaged >= 30 && near.reloads[near.secondaryIndex] == 0 && near.dist2 <= 150 && player.skinIndex == 11 && player.tailIndex == 21) instaC.canCounter = true
                                } else {
                                    if (damaged >= 70) {
                                        healer()
                                    } else {
                                        slowHeal(healTimeout)
                                    }
                                }
                            } else {
                                if (damaged >= (includeSpikeDmgs ? 8 : 25) && dmg + player.damageThreat >= 80 && (game.tick - player.antiTimer) > 1) {
                                    if (tmpObj.reloads[53] == 0 && tmpObj.reloads[tmpObj.weapons[1]] == 0) {
                                        tmpObj.canEmpAnti = true;
                                    } else {
                                        player.soldierAnti = true;
                                    }
                                    tmpObj.antiTimer = game.tick;
                                    let shame = [0, 4, 6, 7, 8].includes(near.primaryIndex) ? 2 : 5;
                                    if (tmpObj.shameCount < shame) {
                                        healer();
                                    } else {
                                        if (near.primaryIndex == 7 || (player.weapons[0] == 7 && (near.skinIndex == 11 || near.tailIndex == 21))) {
                                            slowHeal(healTimeout)
                                        } else {
                                            slowHeal(healTimeout, 1)
                                        }
                                    }
                                } else {
                                    if (near.primaryIndex == 7 || (player.weapons[0] == 7 && (near.skinIndex == 11 || near.tailIndex == 21))) {
                                        slowHeal(healTimeout)
                                    } else {
                                        slowHeal(healTimeout, 1)
                                    }
                                }
                                if (damaged >= 25 && near.dist2 <= 140 && player.skinIndex == 11 && player.tailIndex == 21) instaC.canCounter = true
                            }
                        } else {
                            if (!tmpObj.setPoisonTick && (tmpObj.damaged == 5 || (tmpObj.latestTail == 13 && tmpObj.damaged == 2))) {
                                tmpObj.setPoisonTick = true;
                            }
                        }
                    }
                } else {
                    let [sid, value, damaged] = updHealth;
                    let totalDamage = 100 - value;
                    let tmpObj = findPlayerBySID(sid);
                    let bullTicked = false;

                    if (tmpObj == player) {
                        if (tmpObj.skinIndex == 7 && (damaged == 5 || (tmpObj.latestTail == 13 && damaged == 2))) {
                            if (my.reSync) {
                                my.reSync = false;
                                tmpObj.setBullTick = true;
                                bullTicked = true;
                            }
                        }
                        if (inGame) {
                            let attackers = getAttacker(damaged);
                            let gearDmgs = [0.25, 0.45].map((val) => val * items.weapons[player.weapons[0]].dmg * soldierMult());
                            let includeSpikeDmgs = enemy.length ? !bullTicked && (gearDmgs.includes(damaged) && near.skinIndex == 11) : false;
                            let healTimeout = 60;
                            let dmg = 100 - player.health;
                            let shameCountThreshold = [2, 5][[0, 4, 6, 7, 8].includes(near.primaryIndex) ? 0 : 1];

                            let slowHeal = function (timer, tickBase) {
                                if (!tickBase) setTimeout(() => healer(), timer);
                                else game.tickBase(() => healer(), 2);
                            };

                            if (getEl("healingBeta").checked) {
                                let canHealFast = [0, 7, 8].includes(near.primaryIndex) ? damaged < 75 :
                                [1, 2, 6].includes(near.primaryIndex) ? damaged >= 25 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 5 :
                                [undefined, 5].includes(near.primaryIndex) ? dmg >= (includeSpikeDmgs ? 15 : 20) && tmpObj.damageThreat + dmg >= 50 && tmpObj.shameCount < 6 :
                                near.primaryIndex == 3 && near.secondaryIndex == 15 ? damaged >= 35 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 5 && game.tick - player.antiTimer > 1 :
                                near.primaryIndex == 4 ? near.primaryVariant >= 1 ? damaged >= 10 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 4 :
                                damaged >= 35 && player.damageThreat + dmg >= 95 && tmpObj.shameCount < 3 :
                                near.primaryIndex == 6 && near.secondaryIndex == 15 ? damaged >= 25 && tmpObj.damageThreat + dmg >= 95 && tmpObj.shameCount < 4 :
                                damaged >= 25 && player.damageThreat + dmg >= 95;

                                canHealFast ? healer() : slowHeal(healTimeout);
                            } else {
                                let canHealFast = damaged >= (includeSpikeDmgs ? 8 : 25) && dmg + player.damageThreat >= 80 && (game.tick - player.antiTimer) > 1;

                                if (canHealFast) {
                                    if (tmpObj.reloads[53] == 0 && tmpObj.reloads[tmpObj.weapons[1]] == 0) tmpObj.canEmpAnti = true;
                                    else player.soldierAnti = true;
                                    tmpObj.antiTimer = game.tick;
                                    if (tmpObj.shameCount < shameCountThreshold) healer();
                                    else slowHeal(healTimeout, near.primaryIndex == 7 || (player.weapons[0] == 7 && (near.skinIndex == 11 || near.tailIndex == 21)) ? 0 : 1);
                                } else {
                                    slowHeal(healTimeout, near.primaryIndex == 7 || (player.weapons[0] == 7 && (near.skinIndex == 11 || near.tailIndex == 21)) ? 0 : 1);
                                }
                            }
                        } else {
                            if (!tmpObj.setPoisonTick && (tmpObj.damaged == 5 || (tmpObj.latestTail == 13 && tmpObj.damaged == 2))) {
                                tmpObj.setPoisonTick = true;
                            }
                        }
                    }
                }
            });
            advHeal = [];
        }
        players.forEach((tmp) => {
            if (!tmp.visible && player != tmp) {
                tmp.reloads = {
                    0: 0
                    , 1: 0
                    , 2: 0
                    , 3: 0
                    , 4: 0
                    , 5: 0
                    , 6: 0
                    , 7: 0
                    , 8: 0
                    , 9: 0
                    , 10: 0
                    , 11: 0
                    , 12: 0
                    , 13: 0
                    , 14: 0
                    , 15: 0
                    , 53: 0
                    , };
            }
            if (tmp.setPoisonTick) {
                tmp.poisonTimer = 0;
            }
            tmp.updateTimer();
        });
        if (inGame) {
            if (enemy.length) {
                if (player.canEmpAnti) {
                    player.canEmpAnti = false;
                    if (near.dist2 <= 300 && !my.safePrimary(near) && !my.safeSecondary(near)) {
                        if (near.reloads[53] == 0) {
                            player.empAnti = true;
                            player.soldierAnti = true;
                        } else {
                            player.empAnti = true;
                            player.soldierAnti = true;
                        }
                    }
                }
                let prehit = gameObjects.filter(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, near, 0, 3) <= (tmp.scale + near.scale))
                .sort(function (a, b) {
                    return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                })[0];
                if (prehit) {
                    if (near.dist2 <= items.weapons[player.weapons[0]].range + player.scale * 1.8 && configs.predictTick) {
                        instaC.canSpikeTick = true;
                        instaC.syncHit = true;
                        if (configs.revTick && player.weapons[1] == 15 && player.reloads[53] == 0 && instaC.perfCheck(player, near)) {
                            instaC.revTick = true;
                        }
                    }
                }
                let antiSpikeTick = gameObjects.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (tmp.scale + player.scale))
                .sort(function (a, b) {
                    return UTILS.getDist(a, player, 0, 2) - UTILS.getDist(b, player, 0, 2);
                })[0];
                if (antiSpikeTick && !traps.inTrap) {
                    if (near.dist2 <= items.weapons[5].range + near.scale * 1.8) {
                        my.anti0Tick = 1;
                    }
                }
            }
            if ((useWasd ? true : ((player.checkCanInsta(true) >= 220 ? player.checkCanInsta(true) : player.checkCanInsta(false)) >= (player.weapons[1] == 10 ? 95 : 100))) && near.dist2 <= items.weapons[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]].range + near.scale * 1.8 && (instaC.wait || (useWasd && Math.floor(Math.random() * 5) == 0)) && !instaC.isTrue && !my.waitHit && player.reloads[player.weapons[0]] == 0 && player.reloads[player.weapons[1]] == 0 && (useWasd ? true : (player.reloads[53] <= (player.weapons[1] == 10 ? 0 : game.tickRate))) && instaC.perfCheck(player, near)) {
                if (player.checkCanInsta(true) >= 220) {
                    instaC.nobull = useWasd ? false : instaC.canSpikeTick ? false : true;
                } else {
                    instaC.nobull = false;
                }
                instaC.can = true;
            } else {
                instaC.can = false;
            }
            macro.q && place(0, getAttackDir());
            macro.f && place(4, getSafeDir());
            macro.v && place(2, getSafeDir());
            macro.y && place(5, getSafeDir());
            macro.h && place(player.getItemType(22), getSafeDir());
            macro.n && place(3, getSafeDir());
            if (mills.place && calculateDistance(player, mills) > 95) {
                let direction = caf({
                    x: player.veryOldX
                    , y: player.veryOldY
                }, player) + Math.PI;

                let angleOffset = 65 * Math.PI / 180;
                checkPlace(3, direction - angleOffset);
                checkPlace(3, direction);
                checkPlace(3, direction + angleOffset);

                mills.x = player.x;
                mills.y = player.y;
            }

            if (instaC.can) {
                profilingInstaKill();
            }
            if (instaC.canCounter && !Leuchtturm) {
                instaC.canCounter = false;
                if (player.reloads[player.weapons[0]] == 0 && !instaC.isTrue) {
                    instaC.counterType();
                    io.send('6', 'pAb');
                }
            }
            if (instaC.canSpikeTick || canSyncHit()) {
                instaC.canSpikeTick = false;
                if ([1, 2, 3, 4, 5, 6].includes(player.weapons[0]) && player.reloads[player.weapons[0]] == 0 && !instaC.isTrue) {
                    if (canSyncHit() && player.weapons[1] === 15) {
                        profilingInstaKill()
                    } else instaC.spikeTickType();
                }
            }
            if (!clicks.middle && (clicks.left || clicks.right) && !instaC.isTrue) {
                if ((player.weaponIndex != (clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0])) || player.buildIndex > -1) {
                    selectWeapon(clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]);
                }
                if (player.reloads[clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0 && !my.waitHit) {
                    sendAutoGather();
                    my.waitHit = 1;
                    game.tickBase(() => {
                        sendAutoGather();
                        my.waitHit = 0;
                    }, 1);
                }
            }
            if (useWasd && !clicks.left && !clicks.right && !instaC.isTrue && near.dist2 <= (items.weapons[player.weapons[0]].range + near.scale * 1.8) && !traps.inTrap) {
                if ((player.weaponIndex != player.weapons[0]) || player.buildIndex > -1) {
                    selectWeapon(player.weapons[0]);
                }
                if (player.reloads[player.weapons[0]] == 0 && !my.waitHit) {
                    sendAutoGather();
                    my.waitHit = 1;
                    game.tickBase(() => {
                        sendAutoGather();
                        my.waitHit = 0;
                    }, 1);
                }
            }
            if (traps.inTrap) {
                if (!clicks.left && !clicks.right && !instaC.isTrue) {
                    if (player.weaponIndex != (traps.notFast() ? player.weapons[1] : player.weapons[0]) || player.buildIndex > -1) {
                        selectWeapon(traps.notFast() ? player.weapons[1] : player.weapons[0]);
                    }
                    if (player.reloads[traps.notFast() ? player.weapons[1] : player.weapons[0]] == 0 && !my.waitHit) {
                        sendAutoGather();
                        my.waitHit = 1;
                        game.tickBase(() => {
                            sendAutoGather();
                            my.waitHit = 0;
                        }, 1);
                    }
                }
            }
            if (clicked.g && !traps.inTrap) {
                if (!instaC.isTrue && player.reloads[player.weapons[1]] == 0) {
                    if (my.ageInsta && player.weapons[0] != 4 && player.weapons[1] == 9 && player.age >= 9 && enemy.length) {
                        instaC.bowMovement();
                    } else {
                        instaC.rangeType();
                    }
                }
            }
            if (macro.t && !traps.inTrap) {
                if (!instaC.isTrue && player.reloads[player.weapons[0]] == 0 && (player.weapons[1] == 15 ? (player.reloads[player.weapons[1]] == 0) : true) && (player.weapons[0] == 5 || (player.weapons[0] == 4 && player.weapons[1] == 15))) {
                    instaC[(player.weapons[0] == 4 && player.weapons[1] == 15) ? "kmTickMovement" : "tickMovement"]();
                }
            }
            if (macro["."] && !traps.inTrap) {
                if (!instaC.isTrue && player.reloads[player.weapons[0]] == 0 && ([9, 12, 13, 15].includes(player.weapons[1]) ? (player.reloads[player.weapons[1]] == 0) : true)) {
                    instaC.boostTickMovement();
                }
            }
            if (player.weapons[1] && !clicks.left && !clicks.right && !traps.inTrap && !instaC.isTrue && !(useWasd && near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8)) {
                if (player.reloads[player.weapons[0]] == 0 && player.reloads[player.weapons[1]] == 0) {
                    if (!my.reloaded) {
                        my.reloaded = true;
                        let fastSpeed = items.weapons[player.weapons[0]].spdMult < items.weapons[player.weapons[1]].spdMult ? 1 : 0;
                        if (player.weaponIndex != player.weapons[fastSpeed] || player.buildIndex > -1) {
                            selectWeapon(player.weapons[fastSpeed]);
                        }
                    }
                } else {
                    my.reloaded = false;
                    autos.stopspin = false;
                    if (player.reloads[player.weapons[0]] > 0) {
                        if (player.weaponIndex != player.weapons[0] || player.buildIndex > -1) {
                            selectWeapon(player.weapons[0]);
                        }
                    } else if (player.reloads[player.weapons[0]] == 0 && player.reloads[player.weapons[1]] > 0) {
                        if (player.weaponIndex != player.weapons[1] || player.buildIndex > -1) {
                            selectWeapon(player.weapons[1]);
                        }
                        if (!autos.stopspin) {
                            setTimeout(() => {
                                autos.stopspin = true;
                            }, 750);
                        }
                    }
                }
            }

            if (!instaC.isTrue && !traps.inTrap && !traps.replaced) {
                traps.autoPlace();
            }

            if (!macro.q && !macro.f && !macro.v && !macro.h && !macro.n) {
                packet("D", getAttackDir());
            }

            let hatChanger = function () {
                if (my.anti0Tick > 0 || Leuchtturm) {
                    buyEquip(6, 0);
                } else if (clicks.left || clicks.right) {
                    if (player.shameCount > 0 && !didBullTick && player.skinIndex != 45) {
                        buyEquip(7, 0);
                    } else if (player.shameCount > 0 && didBullTick && player.skinIndex != 45) {
                        buyEquip(6, 0);
                    } else if (clicks.left) {
                        buyEquip(player.reloads[player.weapons[0]] == 0 ? getEl("weaponGrind").checked ? 40 : 7 : player.empAnti ? 6 : player.soldierAnti ? 6 : false && near.antiBull > 0 ? 11 : near.dist2 <= 300 ? false && near.reloads[near.primaryIndex] == 0 ? 6 : 6 : biomeGear(1, 1), 0);
                    } else if (clicks.right) {
                        buyEquip(player.reloads[clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0 ? 40 : player.empAnti ? 6 : player.soldierAnti ? 6 : false && near.antiBull > 0 ? 6 : near.dist2 <= 300 ? false && near.reloads[near.primaryIndex] == 0 ? 6 : 6 : biomeGear(1, 1), 0);
                    }
                } else if (traps.inTrap) {
                    if (traps.info.health <= items.weapons[player.weaponIndex].dmg ? false : player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0) {
                        if (my.anti0Tick > 0) {
                            buyEquip(6, 0);
                        } else {
                            buyEquip(40, 0);
                        }
                    } else if (player.shameCount > 0 && !didBullTick && player.skinIndex != 45) {
                        buyEquip(7, 0);
                    } else if (player.shameCount > 0 && didBullTick && player.skinIndex != 45) {
                        buyEquip(6, 0);
                    } else {
                        buyEquip(player.empAnti || near.dist2 > 300 || !game.length ? 6 : 6, 0);
                    }
                } else if (player.empAnti || player.soldierAnti) {
                    buyEquip(player.empAnti ? 6 : 6, 0);
                } else if (player.shameCount > 0 && !didBullTick && player.skinIndex != 45) {
                    buyEquip(7, 0);
                } else if (player.shameCount > 0 && didBullTick && player.skinIndex != 45) {
                    buyEquip(6, 0);
                } else if (near.dist2 <= 300) {
                    buyEquip(false && near.antiBull > 0 ? 11 : false && near.reloads[near.primaryIndex] == 0 ? 6 : 6, 0);
                } else {
                    biomeGear(1);
                }
            };


            let accChanger = function () {
                if (!traps.inTrap) {
                    if (near.dist2 <= 300) {
                        buyEquip(21, 1);
                    } else if (clicks.left || clicks.right) {
                        buyEquip(clicks.right ? 11 : player.reloads[player.weapons[0]] == 0 ? 21 : 21, 1);
                    } else if (traps.inTrap) {
                        buyEquip(near.dist3 <= items.weapons[player.weaponIndex].range + player.scale * 1.8 && player.reloads[player.weaponIndex] == 0 ? 21 : 21, 1);
                    } else {
                        buyEquip(11, 1);
                    }
                } else if (traps.inTrap) {
                    if (near.antiBull > 0) {
                        buyEquip(21, 1);
                    } else {
                        if (near.dist2 <= items.weapons[near.primaryIndex ? near.primaryIndex : 5].range + player.scale * 3) {
                            if (instaC.wait) {
                                buyEquip(18, 1);
                            }
                        } else {
                            buyEquip(21, 1);
                        }
                    }
                }
            }
            if (
                storeMenu.style.display != "block" &&
                !instaC.isTrue &&
                !instaC.ticking
            ) {
                hatChanger();
                accChanger();
            }

            let wasdGears = function () {
                if (my.anti0Tick > 0) {
                    buyEquip(6, 0);
                } else {
                    if (clicks.left || clicks.right) {
                        if ((player.shameCount > 2 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                            buyEquip(7, 0);
                        } else {
                            if (clicks.left) {
                                buyEquip(player.reloads[player.weapons[0]] == 0 ? getEl("weaponGrind").checked ? 40 : 7 : 11);
                            } else if (clicks.right) {
                                buyEquip(player.reloads[clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0 ? 40 : player.empAnti ? 22 : 6, 0);
                            }
                        }
                    } else if (near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8 && !traps.inTrap) {
                        if ((player.shameCount > 2 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                            buyEquip(7, 0);
                        } else {
                            buyEquip(player.reloads[player.weapons[0]] == 0 ? 7 : player.empAnti ? 22 : 6, 0);
                        }
                    } else if (traps.inTrap) {
                        if (traps.info.health <= items.weapons[player.weaponIndex].dmg ? false : (player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0)) {
                            buyEquip(40, 0);
                        } else {
                            if ((player.shameCount > 2 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                                buyEquip(7, 0);
                            } else {
                                buyEquip(player.empAnti ? 22 : 6, 0);
                            }
                        }
                    } else {
                        if (player.empAnti) {
                            buyEquip(22, 0);
                        } else {
                            if ((player.shameCount > 2 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                                buyEquip(7, 0);
                            } else {
                                buyEquip(6, 0);
                            }
                        }
                    }
                }
                if (clicks.left || clicks.right) {
                    if (clicks.left) {
                        buyEquip(0, 1);
                    } else if (clicks.right) {
                        buyEquip(11, 1);
                    }
                } else if (near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8 && !traps.inTrap) {
                    buyEquip(0, 1);
                } else if (traps.inTrap) {
                    buyEquip(0, 1);
                } else {
                    buyEquip(11, 1);
                }
            }
            if (storeMenu.style.display != "block" && !instaC.isTrue && !instaC.ticking) {
                hatChanger();
                accChanger();
            }
            if (configs.autoPush && enemy.length && !traps.inTrap && !instaC.ticking) {
                autoPush();
            } else {
                if (my.autoPush) {
                    my.autoPush = false;
                    packet("f", lastMoveDir || undefined, 1);
                }
            }

            if (instaC.ticking) {
                instaC.ticking = false;
            }
            if (instaC.syncHit) {
                instaC.syncHit = false;
            }
            if (player.empAnti) {
                player.empAnti = false;
            }
            if (player.soldierAnti) {
                player.soldierAnti = false;
            }
            if (my.anti0Tick > 0) {
                my.anti0Tick--;
            }
            if (traps.replaced) {
                traps.replaced = false;
            }
            if (traps.antiTrapped) {
                traps.antiTrapped = false;
            }

            let AutoReplace = () => {
                let replaceable = [];
                let playerX = player.x;
                let playerY = player.y;
                let gameObjectCount = gameObjects.length;

                for (let i = 0; i < gameObjectCount; i++) {
                    let build = gameObjects[i];
                    if (build.isItem && build.active && build.health > 0) {
                        let item = items.list[build.id];
                        let posDist = 35 + item.scale + (item.placeOffset || 0);
                        let inDistance = cdf(build, player) <= posDist * 2;
                        if (inDistance) {
                            let canDeal = 0;
                            let playersCount = players.length;
                            for (let j = 0; j < playersCount; j++) {
                                canDeal += getPotentialDamage(build, players[j]);
                            }
                            if (build.health <= canDeal) {
                                replaceable.push(build);
                            }
                        }
                    }
                }

                let findPlacementAngle = (player, itemId, build) => {
                    if (!build) return null;
                    let MAX_ANGLE = 2 * Math.PI;
                    let ANGLE_STEP = Math.PI / 360;
                    let item = items.list[player.items[itemId]];
                    let buildingAngle = Math.atan2(build.y - player.y, build.x - player.x);
                    let tmpS = player.scale + (item.scale || 1) + (item.placeOffset || 0);

                    for (let offset = 0; offset < MAX_ANGLE; offset += ANGLE_STEP) {
                        let angles = [(buildingAngle + offset) % MAX_ANGLE, (buildingAngle - offset + MAX_ANGLE) % MAX_ANGLE];
                        for (let angle of angles) {
                            return angle;
                        }
                    }
                    return null;
                };

                let replace = (() => {
                    let nearTrap = liztobj.filter(tmp => tmp.trap && tmp.active && tmp.isTeamObject(player) && cdf(tmp, player) <= tmp.getScale() + 5);
                    let spike = gameObjects.find(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && cdf(tmp, player) < 87 && !nearTrap.length);
                    let buildId = spike ? 4 : 2;

                    replaceable.forEach(build => {
                        let angle = findPlacementAngle(player, buildId, build);
                        if (angle !== null) {
                            place(buildId, angle);
                            textManager.showText(build.x, build.y, 20, 0.15, 1850, '⭐', '#fff', 2);
                        }
                    });
                });

                if (near && near.dist3 <= 360) {
                    replace();
                }
                replace;
            }
            }
    }
}
for (var i1 = 0; i1 < liztobj.length; i1++) {
    if (liztobj[i1].active && liztobj[i1].health > 0 && UTILS.getDist(liztobj[i1], player, 0, 2) < 150 && getEl("antipush").checked) {
        if (liztobj[i1].name.includes("spike") && liztobj[i1]) {
            if (liztobj[i1].owner.sid != player.sid && clicks.left == false && tmpObj.reloads[tmpObj.secondaryIndex] == 0) {
                selectWeapon(player.weapons[1]);
                buyEquip(40, 0);
                packet("D", UTILS.getDirect(liztobj[i1], player, 0, 2));
                setTickout(() => {
                    buyEquip(6, 0);
                }, 1);
            }
        }
    }
}

function ez(context, x, y) {
    context.fillStyle = "rgba(0, 255, 255, 0.2)";
    context.beginPath();
    context.fill();
    context.closePath();
    context.globalAlpha = 1;
}
// UPDATE LEADERBOARD:
function updateLeaderboard(data) {
    lastLeaderboardData = data;
    return;
    UTILS.removeAllChildren(leaderboardData);
    let tmpC = 1;
    for (let i = 0; i < data.length; i += 3) {
        (function (i) {
            UTILS.generateElement({
                class: "leaderHolder"
                , parent: leaderboardData
                , children: [
                    UTILS.generateElement({
                        class: "leaderboardItem"
                        , style: "color:" + ((data[i] == playerSID) ? "#fff" : "rgba(255,255,255,0.6)")
                        , text: tmpC + ". " + (data[i + 1] != "" ? data[i + 1] : "unknown")
                    })
                    , UTILS.generateElement({
                        class: "leaderScore"
                        , text: UTILS.sFormat(data[i + 2]) || "0"
                    })
                ]
            });
        })(i);
        tmpC++;
    }
}

// LOAD GAME OBJECT:
function loadGameObject(data) {
    for (let i = 0; i < data.length;) {
        objectManager.add(data[i], data[i + 1], data[i + 2], data[i + 3], data[i + 4]
                          , data[i + 5], items.list[data[i + 6]], true, (data[i + 7] >= 0 ? {
            sid: data[i + 7]
        } : null));
        i += 8;
    }
}

// ADD AI:
function loadAI(data) {
    for (let i = 0; i < ais.length; ++i) {
        ais[i].forcePos = !ais[i].visible;
        ais[i].visible = false;
    }
    if (data) {
        let tmpTime = performance.now();
        for (let i = 0; i < data.length;) {
            tmpObj = findAIBySID(data[i]);
            if (tmpObj) {
                tmpObj.index = data[i + 1];
                tmpObj.t1 = (tmpObj.t2 === undefined) ? tmpTime : tmpObj.t2;
                tmpObj.t2 = tmpTime;
                tmpObj.x1 = tmpObj.x;
                tmpObj.y1 = tmpObj.y;
                tmpObj.x2 = data[i + 2];
                tmpObj.y2 = data[i + 3];
                tmpObj.d1 = (tmpObj.d2 === undefined) ? data[i + 4] : tmpObj.d2;
                tmpObj.d2 = data[i + 4];
                tmpObj.health = data[i + 5];
                tmpObj.dt = 0;
                tmpObj.visible = true;
            } else {
                tmpObj = aiManager.spawn(data[i + 2], data[i + 3], data[i + 4], data[i + 1]);
                tmpObj.x2 = tmpObj.x;
                tmpObj.y2 = tmpObj.y;
                tmpObj.d2 = tmpObj.dir;
                tmpObj.health = data[i + 5];
                if (!aiManager.aiTypes[data[i + 1]].name)
                    tmpObj.name = config.cowNames[data[i + 6]];
                tmpObj.forcePos = true;
                tmpObj.sid = data[i];
                tmpObj.visible = true;
            }
            i += 7;
        }
    }
}

// ANIMATE AI:
function animateAI(sid) {
    tmpObj = findAIBySID(sid);
    if (tmpObj) tmpObj.startAnim();
}
let antiSync = false;
let canShowAntiSync = true;
function gatherAnimation(sid, didHit, index) {
    tmpObj = findPlayerBySID(sid);
    if (tmpObj) {
        tmpObj.startAnim(didHit, index);
        tmpObj.gatherIndex = index;
        tmpObj.gathering = 1;
        if(nears.filter(near => near.gathering).length>=2) {
            antiSync = true;
            if (canShowAntiSync) {
                canShowAntiSync = false;
            }
            setTimeout(() => {
                canShowAntiSync = true;
                antiSync = false;
            }, 2500);
        }
        if (didHit) {
            let tmpObjects = objectManager.hitObj;
            objectManager.hitObj = [];
            game.tickBase(() => {
                tmpObj = findPlayerBySID(sid);
                let val = items.weapons[index].dmg * (config.weaponVariants[tmpObj[(index < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[index].sDmg || 1) * (tmpObj.skinIndex == 40 ? 3.3 : 1);
                tmpObjects.forEach((healthy) => {
                    healthy.healthMov = healthy.health;
                    healthy.health -= val;
                });
            }, 1);
        }
    }
}

// WIGGLE GAME OBJECT:
function wiggleGameObject(dir, sid) {
    tmpObj = findObjectBySid(sid);
    if (tmpObj) {
        tmpObj.xWiggle += config.gatherWiggle * Math.cos(dir);
        tmpObj.yWiggle += config.gatherWiggle * Math.sin(dir);
        if (tmpObj.health) {
            objectManager.hitObj.push(tmpObj);
        }
    }
}

// SHOOT TURRET:
function shootTurret(sid, dir) {
    tmpObj = findObjectBySid(sid);
    if (tmpObj) {
        if (config.anotherVisual) {
            tmpObj.lastDir = dir;
        } else {
            tmpObj.dir = dir;
        }
        tmpObj.xWiggle += config.gatherWiggle * Math.cos(dir + Math.PI);
        tmpObj.yWiggle += config.gatherWiggle * Math.sin(dir + Math.PI);
    }
}

let hahaKills;

function updatePlayerValue(index, value) {
    if (player) {
        player[index] = value;
        if (index === "points") {
            if (configs.autoBuy) {
                autoBuy.hat();
                autoBuy.acc();
            }
        } else if (index === "kills") {
            hahaKills++;
        }
    }
}

// ACTION BAR:
let vAc = [16, 19, 22, 26];
let hAcI = [17, 18, 20, 21, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];

function updatePlayerItemsAndWeapons(data, wpn) {
    if (data) {
        if (wpn) {
            player.weapons = data;
            player.primaryIndex = player.weapons[0];
            player.secondaryIndex = player.weapons[1];
            if (!instaC.isTrue) {
                selectWeapon(player.weapons[0]);
            }
        } else {
            player.items = data;
        }
    }
}

function updateActionBarDisplay() {
    items.weapons.forEach((weapon, index) => {
        let actionBarItem = getEl(`actionBarItem${index}`);
        actionBarItem.style.display = player.weapons[weapon.type] === weapon.id ? 'none' : 'none';
    });

    vAc.forEach(id => {
        getEl(`actionBarItem${id}`)
            .style.display = 'none';
    });

    hAcI.forEach(id => {
        getEl(`actionBarItem${id}`)
            .style.display = 'none';
    });
}

function updateItems(data, wpn) {
    updatePlayerItemsAndWeapons(data, wpn);
    updateActionBarDisplay();
}


// ADD PROJECTILE:
function addProjectile(x, y, dir, range, speed, indx, layer, sid) {
    projectileManager.addProjectile(x, y, dir, range, speed, indx, null, null, layer, inWindow)
        .sid = sid;
    runAtNextTick.push(Array.prototype.slice.call(arguments));
}

// REMOVE PROJECTILE:
function remProjectile(sid, range) {
    for (let i = 0; i < projectiles.length; ++i) {
        if (projectiles[i].sid == sid) {
            projectiles[i].range = range;
            let tmpObjects = objectManager.hitObj;
            objectManager.hitObj = [];
            game.tickBase(() => {
                let val = projectiles[i].dmg;
                tmpObjects.forEach((healthy) => {
                    if (healthy.projDmg) {
                        healthy.health -= val;
                    }
                });
            }, 1);
        }
    }
}

function setPlayerTeam(team, isOwner) {
    if (player) {
        player.team = team;
        player.isOwner = isOwner;
        if (team == null) {
            alliancePlayers = [];
        }
    }
}

function setAlliancePlayers(data) {
    alliancePlayers = data;
}

// STORE MENU:
function updateStoreItems(type, id, index) {
    if (index) {
        if (!type) {
            player.tails[id] = 1;
        } else {
            player.latestTail = id;
        }
    } else {
        if (!type) {
            player.skins[id] = 1;
            id == 7 && (my.reSync = true);
        } else {
            player.latestSkin = id;
        }
    }
}


// SEND MESSAGE:
function receiveChat(sid, message) {
    let tmpPlayer = findPlayerBySID(sid);
    tmpPlayer.chatMessage = message;
    tmpPlayer.chatCountdown = config.chatCountdown;
}

// MINIMAP:
function updateMinimap(data) {
    minimapData = data;
}

// SHOW ANIM TEXT:
function showText(x, y, value, type) {
    textManager.showText(x, y, 50, 0.18, 500, Math.abs(value), value >= 0 ? "#fff" : "#8ecc51")
}

// RENDER LEAF:
function renderLeaf(x, y, l, r, ctxt) {
    let endX = x + (l * Math.cos(r));
    let endY = y + (l * Math.sin(r));
    let width = l * 0.4;
    ctxt.moveTo(x, y);
    ctxt.beginPath();
    ctxt.quadraticCurveTo(((x + endX) / 2) + (width * Math.cos(r + Math.PI / 2))
                          , ((y + endY) / 2) + (width * Math.sin(r + Math.PI / 2)), endX, endY);
    ctxt.quadraticCurveTo(((x + endX) / 2) - (width * Math.cos(r + Math.PI / 2))
                          , ((y + endY) / 2) - (width * Math.sin(r + Math.PI / 2)), x, y);
    ctxt.closePath();
    ctxt.fill();
    ctxt.stroke();
}

// RENDER CIRCLE:
function renderCircle(x, y, scale, tmpContext, dontStroke, dontFill) {
    tmpContext = tmpContext || mainContext;
    tmpContext.beginPath();
    tmpContext.arc(x, y, scale, 0, 2 * Math.PI);
    if (!dontFill) tmpContext.fill();
    if (!dontStroke) tmpContext.stroke();
}

function renderHealthCircle(x, y, scale, tmpContext, dontStroke, dontFill) {
    tmpContext = tmpContext || mainContext;
    tmpContext.beginPath();
    tmpContext.arc(x, y, scale, 0, 2 * Math.PI);
    if (!dontFill) tmpContext.fill();
    if (!dontStroke) tmpContext.stroke();
}

// RENDER STAR SHAPE:
function renderStar(ctxt, spikes, outer, inner) {
    let rot = Math.PI / 2 * 3;
    let x, y;
    let step = Math.PI / spikes;
    ctxt.beginPath();
    ctxt.moveTo(0, -outer);
    for (let i = 0; i < spikes; i++) {
        x = Math.cos(rot) * outer;
        y = Math.sin(rot) * outer;
        ctxt.lineTo(x, y);
        rot += step;
        x = Math.cos(rot) * inner;
        y = Math.sin(rot) * inner;
        ctxt.lineTo(x, y);
        rot += step;
    }
    ctxt.lineTo(0, -outer);
    ctxt.closePath();
}

function renderHealthStar(ctxt, spikes, outer, inner) {
    let rot = Math.PI / 2 * 3;
    let x, y;
    let step = Math.PI / spikes;
    ctxt.beginPath();
    ctxt.moveTo(0, -outer);
    for (let i = 0; i < spikes; i++) {
        x = Math.cos(rot) * outer;
        y = Math.sin(rot) * outer;
        ctxt.lineTo(x, y);
        rot += step;
        x = Math.cos(rot) * inner;
        y = Math.sin(rot) * inner;
        ctxt.lineTo(x, y);
        rot += step;
    }
    ctxt.lineTo(0, -outer);
    ctxt.closePath();
}

// RENDER RECTANGLE:
function renderRect(x, y, w, h, ctxt, dontStroke, dontFill) {
    if (!dontFill) ctxt.fillRect(x - (w / 2), y - (h / 2), w, h);
    if (!dontStroke) ctxt.strokeRect(x - (w / 2), y - (h / 2), w, h);
}

function renderHealthRect(x, y, w, h, ctxt, dontStroke, dontFill) {
    if (!dontFill) ctxt.fillRect(x - (w / 2), y - (h / 2), w, h);
    if (!dontStroke) ctxt.strokeRect(x - (w / 2), y - (h / 2), w, h);
}

// RENDER RECTCIRCLE:
function renderRectCircle(x, y, s, sw, seg, ctxt, dontStroke, dontFill) {
    ctxt.save();
    ctxt.translate(x, y);
    seg = Math.ceil(seg / 2);
    for (let i = 0; i < seg; i++) {
        renderRect(0, 0, s * 2, sw, ctxt, dontStroke, dontFill);
        ctxt.rotate(Math.PI / seg);
    }
    ctxt.restore();
}

// RENDER BLOB:
function renderBlob(ctxt, spikes, outer, inner) {
    let rot = Math.PI / 2 * 3;
    let x, y;
    let step = Math.PI / spikes;
    let tmpOuter;
    ctxt.beginPath();
    ctxt.moveTo(0, -inner);
    for (let i = 0; i < spikes; i++) {
        tmpOuter = UTILS.randInt(outer + 0.9, outer * 1.2);
        ctxt.quadraticCurveTo(Math.cos(rot + step) * tmpOuter, Math.sin(rot + step) * tmpOuter
                              , Math.cos(rot + (step * 2)) * inner, Math.sin(rot + (step * 2)) * inner);
        rot += step * 2;
    }
    ctxt.lineTo(0, -inner);
    ctxt.closePath();
}

// RENDER TRIANGLE:
function renderTriangle(s, ctx) {
    ctx = ctx || mainContext;
    let h = s * (Math.sqrt(3) / 2);
    ctx.beginPath();
    ctx.moveTo(0, -h / 2);
    ctx.lineTo(-s / 2, h / 2);
    ctx.lineTo(s / 2, h / 2);
    ctx.lineTo(0, -h / 2);
    ctx.fill();
    ctx.closePath();
}

// PREPARE MENU BACKGROUND:
function prepareMenuBackground() {
    let tmpMid = config.mapScale / 2;
    let attempts = 0;
    for (let i = 0; i < items.list.length * 3;) {
        if (attempts >= 1000) break;
        attempts++;
        let type = items.list[UTILS.randInt(0, items.list.length - 1)];
        let data = {
            x: tmpMid + UTILS.randFloat(-1000, 1000)
            , y: tmpMid + UTILS.randFloat(-600, 600)
            , dir: UTILS.fixTo(Math.random() * (Math.PI * 2), 2)
        };
        if (objectManager.checkItemLocation(data.x, data.y, type.scale, 0.6, type.id, true)) {
            objectManager.add(i, data.x, data.y, data.dir, type.scale, type.id, type);
        } else {
            continue;
        }
        i++;
    }
}
let speed = 35;
// RENDER PLAYERS:
function renderDeadPlayers(xOffset, yOffset) {
    mainContext.fillStyle = "#91b2db";
    let currentTime = Date.now();
    deadPlayers.filter(dead => dead.active)
        .forEach((dead) => {
        if (!dead.startTime) {
            dead.startTime = currentTime;
            dead.angle = 0;
            dead.radius = 0.1;
        }
        let timeElapsed = currentTime - dead.startTime;
        let maxAlpha = 1;
        dead.alpha = Math.max(0, maxAlpha - (timeElapsed / 3000));
        dead.animate(delta);
        mainContext.globalAlpha = dead.alpha;
        mainContext.strokeStyle = outlineColor;
        mainContext.save();
        mainContext.translate(dead.x - xOffset, dead.y - yOffset);
        dead.radius -= 0.001;
        dead.angle += 0.0174533;
        let moveSpeed = 1;
        let x = dead.radius * Math.cos(dead.angle);
        let y = dead.radius * Math.sin(dead.angle);
        dead.x += x * moveSpeed;
        dead.y += y * moveSpeed;
        mainContext.rotate(dead.angle);
        renderDeadPlayer(dead, mainContext);
        mainContext.restore();
        mainContext.fillStyle = "#91b2db";
        if (timeElapsed >= 3000) {
            dead.active = false;
            dead.startTime = null;
        }
    });
}
// RENDER PLAYERS:
function renderPlayers(xOffset, yOffset, zIndex) {
    mainContext.globalAlpha = 1;
    mainContext.fillStyle = "#91b2db";
    for (let i = 0; i < players.length; ++i) {
        tmpObj = players[i];
        if (tmpObj.zIndex == zIndex) {
            tmpObj.animate(delta);
            if (tmpObj.visible) {
                tmpObj.skinRot += (0.002 * delta);
                tmpDir = (!configs.showDir && !useWasd && tmpObj == player) ? configs.attackDir ? getVisualDir() : getAttackDir() : (tmpObj.dir || 0);
                mainContext.save();
                mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
                // RENDER PLAYER:
                mainContext.rotate(tmpDir + tmpObj.dirPlus);
                renderPlayer(tmpObj, mainContext);
                mainContext.restore();

            }
        }
    }
}
// RENDER DEAD PLAYER:
function renderDeadPlayer(obj, ctxt) {
    ctxt = ctxt || mainContext;
    ctxt.lineWidth = outlineWidth;
    ctxt.lineJoin = "miter";
    let handAngle = (Math.PI / 4) * (items.weapons[obj.weaponIndex].armS || 1);
    let oHandAngle = (obj.buildIndex < 0) ? (items.weapons[obj.weaponIndex].hndS || 1) : 1;
    let oHandDist = (obj.buildIndex < 0) ? (items.weapons[obj.weaponIndex].hndD || 1) : 1;
    // TAIL/CAPE:
    renderTail2(13, ctxt, obj);
    // WEAPON BELLOW HANDS:
    if (obj.buildIndex < 0 && !items.weapons[obj.weaponIndex].aboveHand) {
        renderTool(items.weapons[obj.weaponIndex], config.weaponVariants[obj.weaponVariant || 0].src || "", obj.scale, 0, ctxt);
        if (items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
            renderProjectile(obj.scale, 0
                             , items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
        }
    }
    // HANDS:
    ctxt.fillStyle = "#ececec";
    renderCircle(obj.scale * Math.cos(handAngle), (obj.scale * Math.sin(handAngle)), 14);
    renderCircle((obj.scale * oHandDist) * Math.cos(-handAngle * oHandAngle)
                 , (obj.scale * oHandDist) * Math.sin(-handAngle * oHandAngle), 14);
    // WEAPON ABOVE HANDS:
    if (obj.buildIndex < 0 && items.weapons[obj.weaponIndex].aboveHand) {
        renderTool(items.weapons[obj.weaponIndex], config.weaponVariants[obj.weaponVariant || 0].src || "", obj.scale, 0, ctxt);
        if (items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
            renderProjectile(obj.scale, 0
                             , items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
        }
    }
    // BUILD ITEM:
    if (obj.buildIndex >= 0) {
        let tmpSprite = getItemSprite(items.list[obj.buildIndex]);
        ctxt.drawImage(tmpSprite, obj.scale - items.list[obj.buildIndex].holdOffset, -tmpSprite.width / 2);
    }
    // BODY:
    renderCircle(0, 0, obj.scale, ctxt);
    // SKIN
    renderSkin2(48, ctxt, null, obj)
}

// RENDER PLAYER:
function renderPlayer(obj, ctxt) {
    ctxt = ctxt || mainContext;
    ctxt.lineWidth = outlineWidth;
    ctxt.lineJoin = "miter";
    let handAngle = (Math.PI / 4) * (items.weapons[obj.weaponIndex].armS || 1);
    let oHandAngle = (obj.buildIndex < 0) ? (items.weapons[obj.weaponIndex].hndS || 1) : 1;
    let oHandDist = (obj.buildIndex < 0) ? (items.weapons[obj.weaponIndex].hndD || 1) : 1;

    // TAIL/CAPE:
    if (obj.tailIndex > 0) {
        renderTailTextureImage(obj.tailIndex, ctxt, obj);
    }

    // WEAPON BELLOW HANDS:
    if (obj.buildIndex < 0 && !items.weapons[obj.weaponIndex].aboveHand) {
        renderTool(items.weapons[obj.weaponIndex], config.weaponVariants[obj.weaponVariant].src, obj.scale, 0, ctxt);
        if (items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
            renderProjectile(obj.scale, 0
                             , items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
        }
    }

    // HANDS:
    ctxt.fillStyle = config.skinColors[obj.skinColor];
    renderCircle(obj.scale * Math.cos(handAngle), (obj.scale * Math.sin(handAngle)), 14);
    renderCircle((obj.scale * oHandDist) * Math.cos(-handAngle * oHandAngle)
                 , (obj.scale * oHandDist) * Math.sin(-handAngle * oHandAngle), 14);

    // WEAPON ABOVE HANDS:
    if (obj.buildIndex < 0 && items.weapons[obj.weaponIndex].aboveHand) {
        renderTool(items.weapons[obj.weaponIndex], config.weaponVariants[obj.weaponVariant].src, obj.scale, 0, ctxt);
        if (items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
            renderProjectile(obj.scale, 0
                             , items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
        }
    }

    // BUILD ITEM:
    if (obj.buildIndex >= 0) {
        let tmpSprite = getItemSprite(items.list[obj.buildIndex]);
        ctxt.drawImage(tmpSprite, obj.scale - items.list[obj.buildIndex].holdOffset, -tmpSprite.width / 2);
    }

    // BODY:
    renderCircle(0, 0, obj.scale, ctxt);

    // SKIN:
    if (obj.skinIndex > 0) {
        ctxt.rotate(Math.PI / 2);
        renderTextureSkin(obj.skinIndex, ctxt, null, obj);
    }
}

// RENDER NORMAL SKIN
let skinSprites2 = {};
let skinPointers2 = {};

function renderSkin2(index, ctxt, parentSkin, owner) {
    tmpSkin = skinSprites2[index];
    if (!tmpSkin) {
        let tmpImage = new Image();
        tmpImage.onload = function () {
            this.isLoaded = true;
            this.onload = null;
        };
        tmpImage.src = "https://moomoo.io/img/hats/hat_" + index + ".png";
        skinSprites2[index] = tmpImage;
        tmpSkin = tmpImage;
    }
    let tmpObj = parentSkin || skinPointers2[index];
    if (!tmpObj) {
        for (let i = 0; i < hats.length; ++i) {
            if (hats[i].id == index) {
                tmpObj = hats[i];
                break;
            }
        }
        skinPointers2[index] = tmpObj;
    }
    if (tmpSkin.isLoaded)
        ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale);
    if (!parentSkin && tmpObj.topSprite) {
        ctxt.save();
        ctxt.rotate(owner.skinRot);
        renderSkin2(index + "_top", ctxt, tmpObj, owner);
        ctxt.restore();
    }
}

// RENDER SKIN:
function renderTextureSkin(index, ctxt, parentSkin, owner) {
    if (!(tmpSkin = skinSprites[index + (txt ? "lol" : 0)])) {
        let tmpImage = new Image();
        tmpImage.onload = function () {
            this.isLoaded = true
                , this.onload = null
        }
            , tmpImage.src = setSkinTextureImage(index, "hat", index)
            , skinSprites[index + (txt ? "lol" : 0)] = tmpImage
            , tmpSkin = tmpImage
    }
    let tmpObj = parentSkin || skinPointers[index];
    if (!tmpObj) {
        for (let i = 0; i < hats.length; ++i) {
            if (hats[i].id == index) {
                tmpObj = hats[i];
                break;
            }
        }
        skinPointers[index] = tmpObj;
    }
    if (tmpSkin.isLoaded)
        ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale);
    if (!parentSkin && tmpObj.topSprite) {
        ctxt.save();
        ctxt.rotate(owner.skinRot);
        renderSkin(index + "_top", ctxt, tmpObj, owner);
        ctxt.restore();
    }
}

function setSkinTextureImage(id, type, id2) {
    if (true) {
        if (type == "acc") {
            return ".././img/accessories/access_" + id + ".png";
        } else if (type == "hat") {
            return ".././img/hats/hat_" + id + ".png";
        } else {
            return ".././img/weapons/" + id + ".png";
        }
    } else {
        if (type == "acc") {
            return ".././img/accessories/access_" + id + ".png";
        } else if (type == "hat") {
            return ".././img/hats/hat_" + id + ".png";
        } else {
            return ".././img/weapons/" + id + ".png";
        }
    }
}
// RENDER SKINS:
let skinSprites = {};
let skinPointers = {};
let tmpSkin;

function renderSkin(index, ctxt, parentSkin, owner) {
    tmpSkin = skinSprites[index];
    if (!tmpSkin) {
        let tmpImage = new Image();
        tmpImage.onload = function () {
            this.isLoaded = true;
            this.onload = null;
        };
        tmpImage.src = "https://moomoo.io/img/hats/hat_" + index + ".png";
        skinSprites[index] = tmpImage;
        tmpSkin = tmpImage;
    }
    let tmpObj = parentSkin || skinPointers[index];
    if (!tmpObj) {
        for (let i = 0; i < hats.length; ++i) {
            if (hats[i].id == index) {
                tmpObj = hats[i];
                break;
            }
        }
        skinPointers[index] = tmpObj;
    }
    if (tmpSkin.isLoaded)
        ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale);
    if (!parentSkin && tmpObj.topSprite) {
        ctxt.save();
        ctxt.rotate(owner.skinRot);
        renderSkin(index + "_top", ctxt, tmpObj, owner);
        ctxt.restore();
    }
}

function setTailTextureImage(id, type, id2) {
    if (true) {
        if (type == "acc") {
            return ".././img/accessories/access_" + id + ".png";
        } else if (type == "hat") {
            return ".././img/hats/hat_" + id + ".png";
        } else {
            return ".././img/weapons/" + id + ".png";
        }
    } else {
        if (type == "acc") {
            return ".././img/accessories/access_" + id + ".png";
        } else if (type == "hat") {
            return ".././img/hats/hat_" + id + ".png";
        } else {
            return ".././img/weapons/" + id + ".png";
        }
    }
}

function renderTailTextureImage(index, ctxt, owner) {
    if (!(tmpSkin = accessSprites[index + (txt ? "lol" : 0)])) {
        let tmpImage = new Image();
        tmpImage.onload = function () {
            this.isLoaded = true
                , this.onload = null
        }
            , tmpImage.src = setTailTextureImage(index, "acc"), //".././img/accessories/access_" + index + ".png";
            accessSprites[index + (txt ? "lol" : 0)] = tmpImage
            , tmpSkin = tmpImage;
    }
    let tmpObj = accessPointers[index];
    if (!tmpObj) {
        for (let i = 0; i < accessories.length; ++i) {
            if (accessories[i].id == index) {
                tmpObj = accessories[i];
                break;
            }
        }
        accessPointers[index] = tmpObj;
    }
    if (tmpSkin.isLoaded) {
        ctxt.save();
        ctxt.translate(-20 - (tmpObj.xOff || 0), 0);
        if (tmpObj.spin)
            ctxt.rotate(owner.skinRot);
        ctxt.drawImage(tmpSkin, -(tmpObj.scale / 2), -(tmpObj.scale / 2), tmpObj.scale, tmpObj.scale);
        ctxt.restore();
    }
}

let accessSprites = {};
let accessPointers = {};
let txt = true;

function renderTail(index, ctxt, owner) {
    tmpSkin = accessSprites[index];
    if (!tmpSkin) {
        let tmpImage = new Image();
        tmpImage.onload = function () {
            this.isLoaded = true;
            this.onload = null;
        };
        tmpImage.src = "https://moomoo.io/img/accessories/access_" + index + ".png";
        accessSprites[index] = tmpImage;
        tmpSkin = tmpImage;
    }
    let tmpObj = accessPointers[index];
    if (!tmpObj) {
        for (let i = 0; i < accessories.length; ++i) {
            if (accessories[i].id == index) {
                tmpObj = accessories[i];
                break;
            }
        }
        accessPointers[index] = tmpObj;
    }
    if (tmpSkin.isLoaded) {
        ctxt.save();
        ctxt.translate(-20 - (tmpObj.xOff || 0), 0);
        if (tmpObj.spin)
            ctxt.rotate(owner.skinRot);
        ctxt.drawImage(tmpSkin, -(tmpObj.scale / 2), -(tmpObj.scale / 2), tmpObj.scale, tmpObj.scale);
        ctxt.restore();
    }
}

let accessSprites2 = {};
let accessPointers2 = {};

function renderTail2(index, ctxt, owner) {
    tmpSkin = accessSprites2[index];
    if (!tmpSkin) {
        let tmpImage = new Image();
        tmpImage.onload = function () {
            this.isLoaded = true;
            this.onload = null;
        };
        tmpImage.src = "https://moomoo.io/img/accessories/access_" + index + ".png";
        accessSprites2[index] = tmpImage;
        tmpSkin = tmpImage;
    }
    let tmpObj = accessPointers2[index];
    if (!tmpObj) {
        for (let i = 0; i < accessories.length; ++i) {
            if (accessories[i].id == index) {
                tmpObj = accessories[i];
                break;
            }
        }
        accessPointers2[index] = tmpObj;
    }
    if (tmpSkin.isLoaded) {
        ctxt.save();
        ctxt.translate(-20 - (tmpObj.xOff || 0), 0);
        if (tmpObj.spin)
            ctxt.rotate(owner.skinRot);
        ctxt.drawImage(tmpSkin, -(tmpObj.scale / 2), -(tmpObj.scale / 2), tmpObj.scale, tmpObj.scale);
        ctxt.restore();
    }
}

// RENDER TOOL:
let toolSprites = {};

function renderTool(obj, variant, x, y, ctxt) {
    let tmpSrc = obj.src + (variant || "");
    let tmpSprite = toolSprites[tmpSrc];

    if (!tmpSprite) {
        tmpSprite = new Image();
        tmpSprite.onload = function () {
            this.isLoaded = true;
        }
        tmpSprite.src = "https://moomoo.io/img/weapons/" + tmpSrc + ".png";
        toolSprites[tmpSrc] = tmpSprite;
    }

    if (tmpSprite.isLoaded) {
        if (tmpObj != player) {
            ctxt.drawImage(tmpSprite, x + obj.xOff - (obj.length / 2), y + obj.yOff - (obj.width / 2), obj.length, obj.width);
        } else if (tmpObj == player) {
            ctxt.shadowColor = '#00e5ff';
            ctxt.shadowBlur = 10;
            ctxt.shadowOffsetX = 0;
            ctxt.shadowOffsetY = 0;
            ctxt.drawImage(tmpSprite, x + obj.xOff - (obj.length / 2), y + obj.yOff - (obj.width / 2), obj.length, obj.width);
            ctxt.shadowColor = 'transparent';
            ctxt.shadowBlur = 0;
            ctxt.shadowOffsetX = 0;
            ctxt.shadowOffsetY = 0;
        }
    }
}

// RENDER PROJECTILES:
function renderProjectiles(layer, xOffset, yOffset) {
    for (let i = 0; i < projectiles.length; i++) {
        tmpObj = projectiles[i];
        if (tmpObj.active && tmpObj.layer == layer && tmpObj.inWindow) {
            tmpObj.update(delta);
            if (tmpObj.active && isOnScreen(tmpObj.x - xOffset, tmpObj.y - yOffset, tmpObj.scale)) {
                mainContext.save();
                mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
                mainContext.rotate(tmpObj.dir);
                renderProjectile(0, 0, tmpObj, mainContext, 1);
                mainContext.restore();
            }
        }
    };
}

// RENDER PROJECTILE:
let projectileSprites = {}; //fz iz zexy

function renderProjectile(x, y, obj, ctxt, debug) {
    if (obj.src) {
        let tmpSrc = items.projectiles[obj.indx].src;
        let tmpSprite = projectileSprites[tmpSrc];
        if (!tmpSprite) {
            tmpSprite = new Image();
            tmpSprite.onload = function () {
                this.isLoaded = true;
            }
            tmpSprite.src = "https://moomoo.io/img/weapons/" + tmpSrc + ".png";
            projectileSprites[tmpSrc] = tmpSprite;
        }
        if (tmpSprite.isLoaded)
            ctxt.drawImage(tmpSprite, x - (obj.scale / 2), y - (obj.scale / 2), obj.scale, obj.scale);
    } else if (obj.indx == 1) {
        ctxt.fillStyle = "#939393";
        renderCircle(x, y, obj.scale, ctxt);
    }
}

// RENDER AI:
let aiSprites = {};

function renderAI(obj, ctxt) {
    let tmpIndx = obj.index;
    let tmpSprite = aiSprites[tmpIndx];
    if (!tmpSprite) {
        let tmpImg = new Image();
        tmpImg.onload = function () {
            this.isLoaded = true;
            this.onload = null;
        };
        tmpImg.src = "https://moomoo.io/img/animals/" + obj.src + ".png";
        tmpSprite = tmpImg;
        aiSprites[tmpIndx] = tmpSprite;
    }
    if (tmpSprite.isLoaded) {
        let tmpScale = obj.scale * 1.2 * (obj.spriteMlt || 1);
        ctxt.drawImage(tmpSprite, -tmpScale, -tmpScale, tmpScale * 2, tmpScale * 2);
    }
}

// RENDER WATER BODIES:
function renderWaterBodies(xOffset, yOffset, ctxt, padding) {

    // MIDDLE RIVER:
    let tmpW = config.riverWidth + padding;
    let tmpY = (config.mapScale / 2) - yOffset - (tmpW / 2);
    if (tmpY < maxScreenHeight && tmpY + tmpW > 0) {
        ctxt.fillRect(0, tmpY, maxScreenWidth, tmpW);
    }
}

// RENDER GAME OBJECTS:
let gameObjectSprites = {};

function getResSprite(obj) {
    let biomeID = (obj.y >= config.mapScale - config.snowBiomeTop) ? 2 : ((obj.y <= config.snowBiomeTop) ? 1 : 0);
    let tmpIndex = (obj.type + "_" + obj.scale + "_" + biomeID);
    let tmpSprite = gameObjectSprites[tmpIndex];
    if (!tmpSprite) {
        let blurScale = 6;
        let tmpCanvas = document.createElement("canvas");
        tmpCanvas.width = tmpCanvas.height = (obj.scale * 2.1) + outlineWidth;
        let tmpContext = tmpCanvas.getContext('2d');
        tmpContext.translate((tmpCanvas.width / 2), (tmpCanvas.height / 2));
        tmpContext.rotate(UTILS.randFloat(0, Math.PI));
        tmpContext.strokeStyle = outlineColor;
        tmpContext.lineWidth = outlineWidth;
        if (obj.type == 0) {
            let tmpScale;
            let tmpCount = 8;
            tmpContext.globalAlpha = 1;
            for (let i = 0; i < 2; ++i) {
                tmpScale = tmpObj.scale * (!i ? 1 : 0.5);
                renderStar(tmpContext, tmpCount, tmpScale, tmpScale * 0.7);
                tmpContext.fillStyle = !biomeID ? (!i ? "#9ebf57" : "#b4db62") : (!i ? "#e3f1f4" : "#fff");
                tmpContext.fill();
                if (!i) {
                    tmpContext.stroke();
                    tmpContext.globalAlpha = 1;
                }
            }
        } else if (obj.type == 1) {
            if (biomeID == 2) {
                tmpContext.fillStyle = "#606060";
                renderStar(tmpContext, 6, obj.scale * 0.3, obj.scale * 0.71);
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.fillStyle = "#89a54c";
                renderCircle(0, 0, obj.scale * 0.55, tmpContext);
                tmpContext.fillStyle = "#a5c65b";
                renderCircle(0, 0, obj.scale * 0.3, tmpContext, true);
            } else {
                renderBlob(tmpContext, 6, tmpObj.scale, tmpObj.scale * 0.7);
                tmpContext.fillStyle = biomeID ? "#e3f1f4" : "#89a54c";
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.fillStyle = biomeID ? "#6a64af" : "#c15555";
                let tmpRange;
                let berries = 4;
                let rotVal = (Math.PI * 2) / berries;
                for (let i = 0; i < berries; ++i) {
                    tmpRange = UTILS.randInt(tmpObj.scale / 3.5, tmpObj.scale / 2.3);
                    renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i)
                                 , UTILS.randInt(10, 12), tmpContext);
                }
            }
        } else if (obj.type == 2 || obj.type == 3) {
            tmpContext.fillStyle = (obj.type == 2) ? (biomeID == 2 ? "#938d77" : "#939393") : "#e0c655";
            renderStar(tmpContext, 3, obj.scale, obj.scale);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = (obj.type == 2) ? (biomeID == 2 ? "#b2ab90" : "#bcbcbc") : "#ebdca3";
            renderStar(tmpContext, 3, obj.scale * 0.55, obj.scale * 0.65);
            tmpContext.fill();
        }
        tmpSprite = tmpCanvas;
        gameObjectSprites[tmpIndex] = tmpSprite;
    }
    return tmpSprite;
}

// GET ITEM SPRITE:
let itemSprites = [];

function getItemSprite(obj, asIcon) {
    let tmpSprite = itemSprites[obj.id];
    if (!tmpSprite || asIcon) {
        let tmpCanvas = document.createElement("canvas");
        let reScale = ((!asIcon && obj.name == "windmill") ? items.list[4].scale : obj.scale);
        tmpCanvas.width = tmpCanvas.height = (reScale * 2.5) + outlineWidth + (items.list[obj.id].spritePadding || 0);

        let tmpContext = tmpCanvas.getContext("2d");
        tmpContext.translate((tmpCanvas.width / 2), (tmpCanvas.height / 2));
        tmpContext.rotate(asIcon ? 0 : (Math.PI / 2));
        tmpContext.strokeStyle = outlineColor;
        tmpContext.lineWidth = outlineWidth * (asIcon ? (tmpCanvas.width / 81) : 1);

        if (obj.name == "apple") {
            tmpContext.fillStyle = "#c15555";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#89a54c";
            let leafDir = -(Math.PI / 2);
            renderLeaf(obj.scale * Math.cos(leafDir), obj.scale * Math.sin(leafDir)
                       , 25, leafDir + Math.PI / 2, tmpContext);
        } else if (obj.name == "cookie") {
            tmpContext.fillStyle = "#cca861";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#937c4b";
            let chips = 4;
            let rotVal = (Math.PI * 2) / chips;
            let tmpRange;
            for (let i = 0; i < chips; ++i) {
                tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
                renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i)
                             , UTILS.randInt(4, 5), tmpContext, true);
            }
        } else if (obj.name == "cheese") {
            tmpContext.fillStyle = "#f4f3ac";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#c3c28b";
            let chips = 4;
            let rotVal = (Math.PI * 2) / chips;
            let tmpRange;
            for (let i = 0; i < chips; ++i) {
                tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
                renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i)
                             , UTILS.randInt(4, 5), tmpContext, true);
            }
        } else if (obj.name == "wood wall" || obj.name == "stone wall" || obj.name == "castle wall") {
            tmpContext.fillStyle = (obj.name == "castle wall") ? "#83898e" : (obj.name == "wood wall") ?
                "#a5974c" : "#939393";
            let sides = (obj.name == "castle wall") ? 4 : 3;
            renderStar(tmpContext, sides, obj.scale * 1.1, obj.scale * 1.1);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = (obj.name == "castle wall") ? "#9da4aa" : (obj.name == "wood wall") ?
                "#c9b758" : "#bcbcbc";
            renderStar(tmpContext, sides, obj.scale * 0.65, obj.scale * 0.65);
            tmpContext.fill();
        } else if (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" ||
                   obj.name == "spinning spikes") {
            tmpContext.fillStyle = (obj.name == "poison spikes") ? "#7b935d" : "#939393";
            let tmpScale = (obj.scale * 0.6);
            renderStar(tmpContext, (obj.name == "spikes") ? 5 : 6, obj.scale, tmpScale);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, tmpScale, tmpContext);
            tmpContext.fillStyle = "#c9b758";
            renderCircle(0, 0, tmpScale / 2, tmpContext, true);
        } else if (obj.name == "windmill" || obj.name == "faster windmill" || obj.name == "power mill") {
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, reScale, tmpContext);
            tmpContext.fillStyle = "#c9b758";
            renderRectCircle(0, 0, reScale * 1.5, 29, 4, tmpContext);
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, reScale * 0.5, tmpContext);
        } else if (obj.name == "mine") {
            tmpContext.fillStyle = "#939393";
            renderStar(tmpContext, 3, obj.scale, obj.scale);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#bcbcbc";
            renderStar(tmpContext, 3, obj.scale * 0.55, obj.scale * 0.65);
            tmpContext.fill();
        } else if (obj.name == "sapling") {
            for (let i = 0; i < 2; ++i) {
                let tmpScale = obj.scale * (!i ? 1 : 0.5);
                renderStar(tmpContext, 7, tmpScale, tmpScale * 0.7);
                tmpContext.fillStyle = (!i ? "#9ebf57" : "#b4db62");
                tmpContext.fill();
                if (!i) tmpContext.stroke();
            }
        } else if (obj.name == "pit trap") {
            tmpContext.fillStyle = "#a5974c";
            renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = outlineColor;
            renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
            tmpContext.fill();
        } else if (obj.name == "boost pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#dbd97d";
            renderTriangle(obj.scale * 1, tmpContext);
        } else if (obj.name == "turret") {
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#939393";
            let tmpLen = 50;
            renderRect(0, -tmpLen / 2, obj.scale * 0.9, tmpLen, tmpContext);
            renderCircle(0, 0, obj.scale * 0.6, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
        } else if (obj.name == "platform") {
            tmpContext.fillStyle = "#cebd5f";
            let tmpCount = 4;
            let tmpS = obj.scale * 2;
            let tmpW = tmpS / tmpCount;
            let tmpX = -(obj.scale / 2);
            for (let i = 0; i < tmpCount; ++i) {
                renderRect(tmpX - (tmpW / 2), 0, tmpW, obj.scale * 2, tmpContext);
                tmpContext.fill();
                tmpContext.stroke();
                tmpX += tmpS / tmpCount;
            }
        } else if (obj.name == "healing pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#db6e6e";
            renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
        } else if (obj.name == "spawn pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#71aad6";
            renderCircle(0, 0, obj.scale * 0.6, tmpContext);
        } else if (obj.name == "blocker") {
            tmpContext.fillStyle = "#7e7f82";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.rotate(Math.PI / 4);
            tmpContext.fillStyle = "#db6e6e";
            renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
        } else if (obj.name == "teleporter") {
            tmpContext.fillStyle = "#7e7f82";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.rotate(Math.PI / 4);
            tmpContext.fillStyle = "#d76edb";
            renderCircle(0, 0, obj.scale * 0.5, tmpContext, true);
        }
        tmpSprite = tmpCanvas;
        if (!asIcon) {
            itemSprites[obj.id] = tmpSprite;
        }
    }
    return tmpSprite;
}

function getItemSprite2(obj, tmpX, tmpY) {
    let tmpContext = mainContext;
    let reScale = (obj.name == "windmill" ? items.list[4].scale : obj.scale);
    tmpContext.save();
    tmpContext.translate(tmpX, tmpY);
    tmpContext.rotate(obj.dir);
    tmpContext.strokeStyle = outlineColor;
    tmpContext.lineWidth = outlineWidth;
    if (obj.name == "apple") {
        tmpContext.fillStyle = "#c15555";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fillStyle = "#89a54c";
        let leafDir = -(Math.PI / 2);
        renderLeaf(obj.scale * Math.cos(leafDir), obj.scale * Math.sin(leafDir)
                   , 25, leafDir + Math.PI / 2, tmpContext);
    } else if (obj.name == "cookie") {
        tmpContext.fillStyle = "#cca861";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fillStyle = "#937c4b";
        let chips = 4;
        let rotVal = (Math.PI * 2) / chips;
        let tmpRange;
        for (let i = 0; i < chips; ++i) {
            tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
            renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i)
                         , UTILS.randInt(4, 5), tmpContext, true);
        }
    } else if (obj.name == "cheese") {
        tmpContext.fillStyle = "#f4f3ac";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fillStyle = "#c3c28b";
        let chips = 4;
        let rotVal = (Math.PI * 2) / chips;
        let tmpRange;
        for (let i = 0; i < chips; ++i) {
            tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
            renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i)
                         , UTILS.randInt(4, 5), tmpContext, true);
        }
    } else if (obj.name == "wood wall" || obj.name == "stone wall" || obj.name == "castle wall") {
        tmpContext.fillStyle = (obj.name == "castle wall") ? "#83898e" : (obj.name == "wood wall") ?
            "#a5974c" : "#939393";
        let sides = (obj.name == "castle wall") ? 4 : 3;
        renderStar(tmpContext, sides, obj.scale * 1.1, obj.scale * 1.1);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = (obj.name == "castle wall") ? "#9da4aa" : (obj.name == "wood wall") ?
            "#c9b758" : "#bcbcbc";
        renderStar(tmpContext, sides, obj.scale * 0.65, obj.scale * 0.65);
        tmpContext.fill();
    } else if (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" ||
               obj.name == "spinning spikes") {
        tmpContext.fillStyle = (obj.name == "poison spikes") ? "#7b935d" : "#939393";
        let tmpScale = (obj.scale * 0.6);
        renderStar(tmpContext, (obj.name == "spikes") ? 5 : 6, obj.scale, tmpScale);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, tmpScale, tmpContext);
        tmpContext.fillStyle = "#c9b758";
        renderCircle(0, 0, tmpScale / 2, tmpContext, true);
    } else if (obj.name == "windmill" || obj.name == "faster windmill" || obj.name == "power mill") {
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, reScale, tmpContext);
        tmpContext.fillStyle = "#c9b758";
        renderRectCircle(0, 0, reScale * 1.5, 29, 4, tmpContext);
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, reScale * 0.5, tmpContext);
    } else if (obj.name == "mine") {
        tmpContext.fillStyle = "#939393";
        renderStar(tmpContext, 3, obj.scale, obj.scale);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#bcbcbc";
        renderStar(tmpContext, 3, obj.scale * 0.55, obj.scale * 0.65);
        tmpContext.fill();
    } else if (obj.name == "sapling") {
        for (let i = 0; i < 2; ++i) {
            let tmpScale = obj.scale * (!i ? 1 : 0.5);
            renderStar(tmpContext, 7, tmpScale, tmpScale * 0.7);
            tmpContext.fillStyle = (!i ? "#9ebf57" : "#b4db62");
            tmpContext.fill();
            if (!i) tmpContext.stroke();
        }
    } else if (obj.name == "pit trap") {
        tmpContext.fillStyle = "#a5974c";
        renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = outlineColor;
        renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
        tmpContext.fill();
    } else if (obj.name == "boost pad") {
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#dbd97d";
        renderTriangle(obj.scale * 1, tmpContext);
    } else if (obj.name == "turret") {
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#939393";
        let tmpLen = 50;
        renderRect(0, -tmpLen / 2, obj.scale * 0.9, tmpLen, tmpContext);
        renderCircle(0, 0, obj.scale * 0.6, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
    } else if (obj.name == "platform") {
        tmpContext.fillStyle = "#cebd5f";
        let tmpCount = 4;
        let tmpS = obj.scale * 2;
        let tmpW = tmpS / tmpCount;
        let tmpX = -(obj.scale / 2);
        for (let i = 0; i < tmpCount; ++i) {
            renderRect(tmpX - (tmpW / 2), 0, tmpW, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpX += tmpS / tmpCount;
        }
    } else if (obj.name == "healing pad") {
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#db6e6e";
        renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
    } else if (obj.name == "spawn pad") {
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#71aad6";
        renderCircle(0, 0, obj.scale * 0.6, tmpContext);
    } else if (obj.name == "blocker") {
        tmpContext.fillStyle = "#7e7f82";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.rotate(Math.PI / 4);
        tmpContext.fillStyle = "#db6e6e";
        renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
    } else if (obj.name == "teleporter") {
        tmpContext.fillStyle = "#7e7f82";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.rotate(Math.PI / 4);
        tmpContext.fillStyle = "#d76edb";
        renderCircle(0, 0, obj.scale * 0.5, tmpContext, true);
    }
    tmpContext.restore();
}

let objSprites = [];

function getObjSprite(obj) {
    let tmpSprite = objSprites[obj.id];
    if (!tmpSprite) {
        let tmpCanvas = document.createElement("canvas");
        tmpCanvas.width = tmpCanvas.height = obj.scale * 2.5 + outlineWidth + (items.list[obj.id].spritePadding || 0) + 0;
        let tmpContext = tmpCanvas.getContext("2d");
        tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2);
        tmpContext.rotate(Math.PI / 2);
        tmpContext.strokeStyle = outlineColor;
        tmpContext.lineWidth = outlineWidth;
        if (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" || obj.name == "spinning spikes") {
            tmpContext.fillStyle = obj.name == "poison spikes" ? "#7b935d" : "#939393";
            let tmpScale = obj.scale * 0.6;
            renderStar(tmpContext, obj.name == "spikes" ? 5 : 6, obj.scale, tmpScale);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, tmpScale, tmpContext);
            tmpContext.fillStyle = "#c9b758";
            renderCircle(0, 0, tmpScale / 2, tmpContext, true);
        } else if (obj.name == "pit trap") {
            tmpContext.fillStyle = "#a5974c";
            renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = outlineColor;
            renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
            tmpContext.fill();
        }
        tmpSprite = tmpCanvas;
        objSprites[obj.id] = tmpSprite;
    }
    return tmpSprite;
}

// GET MARK SPRITE:
function getMarkSprite(obj, tmpContext, tmpX, tmpY) {
    let center = {
        x: screenWidth / 2
        , y: screenHeight / 2
        , };
    tmpContext.lineWidth = outlineWidth;
    mainContext.globalAlpha = 0.2;
    tmpContext.strokeStyle = outlineColor;
    tmpContext.save();
    tmpContext.translate(tmpX, tmpY);
    tmpContext.rotate(90 ** 10);
    if (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" || obj.name == "spinning spikes") {
        tmpContext.fillStyle = (obj.name == "poison spikes") ? "#7b935d" : "#939393";
        let tmpScale = (obj.scale);
        renderStar(tmpContext, (obj.name == "spikes") ? 5 : 6, obj.scale, tmpScale);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, tmpScale, tmpContext);
        if (player && obj.owner && player.sid != obj.owner.sid && !tmpObj.findAllianceBySid(obj.owner.sid)) {
            tmpContext.fillStyle = "#a34040";
        } else {
            tmpContext.fillStyle = "#c9b758";
        }
        renderCircle(0, 0, tmpScale / 2, tmpContext, true);
    } else if (obj.name == "turret") {
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#939393";
        let tmpLen = 50;
        renderRect(0, -tmpLen / 2, obj.scale * 0.9, tmpLen, tmpContext);
        renderCircle(0, 0, obj.scale * 0.6, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
    } else if (obj.name == "teleporter") {
        tmpContext.fillStyle = "#7e7f82";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.rotate(Math.PI / 4);
        tmpContext.fillStyle = "#d76edb";
        renderCircle(0, 0, obj.scale * 0.5, tmpContext, true);
    } else if (obj.name == "platform") {
        tmpContext.fillStyle = "#cebd5f";
        let tmpCount = 4;
        let tmpS = obj.scale * 2;
        let tmpW = tmpS / tmpCount;
        let tmpX = -(obj.scale / 2);
        for (let i = 0; i < tmpCount; ++i) {
            renderRect(tmpX - (tmpW / 2), 0, tmpW, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpX += tmpS / tmpCount;
        }
    } else if (obj.name == "healing pad") {
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#db6e6e";
        renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
    } else if (obj.name == "spawn pad") {
        tmpContext.fillStyle = "#7e7f82";
        renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.fillStyle = "#71aad6";
        renderCircle(0, 0, obj.scale * 0.6, tmpContext);
    } else if (obj.name == "blocker") {
        tmpContext.fillStyle = "#7e7f82";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fill();
        tmpContext.stroke();
        tmpContext.rotate(Math.PI / 4);
        tmpContext.fillStyle = "#db6e6e";
        renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
    } else if (obj.name == "windmill" || obj.name == "faster windmill" || obj.name == "power mill") {
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, obj.scale, tmpContext);
        tmpContext.fillStyle = "#c9b758";
        renderRectCircle(0, 0, obj.scale * 1.5, 29, 4, tmpContext);
        tmpContext.fillStyle = "#a5974c";
        renderCircle(0, 0, obj.scale * 0.5, tmpContext);

    } else if (obj.name == "pit trap") {
        tmpContext.fillStyle = "#a5974c";
        renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
        tmpContext.fill();
        tmpContext.stroke();
        if (player && obj.owner && player.sid != obj.owner.sid && !tmpObj.findAllianceBySid(obj.owner.sid)) {
            tmpContext.fillStyle = "#a34040";
        } else {
            tmpContext.fillStyle = outlineColor;
        }
        renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
        tmpContext.fill();
    }
    tmpContext.restore();
}

function isOnScreen(x, y) {
    if (x < 0 || x > maxScreenWidth) {
        return false;
    }
    if (y < 0 || y > maxScreenHeight) {
        return false;
    }
    return true;
}

// RENDER GAME OBJECTS:
function renderGameObjects(layer, xOffset, yOffset) {
    let tmpSprite;
    let tmpX;
    let tmpY;
    liztobj.forEach((tmp) => {
        tmpObj = tmp;
        if (tmpObj.active && liztobj.includes(tmp) && tmpObj.render) {
            tmpX = tmpObj.x + tmpObj.xWiggle - xOffset;
            tmpY = tmpObj.y + tmpObj.yWiggle - yOffset;
            if (layer == 0) {
                tmpObj.update(delta);
            }
            mainContext.globalAlpha = tmpObj.alpha;
            if (tmpObj.layer == layer && isOnScreen(tmpX, tmpY, tmpObj.scale + (tmpObj.blocker || 0))) {
                if (tmpObj.isItem) {
                    if ((tmpObj.dmg || tmpObj.trap) && !tmpObj.isTeamObject(player)) {
                        tmpSprite = getObjSprite(tmpObj);
                    } else {
                        tmpSprite = getItemSprite(tmpObj);
                    }

                    mainContext.save();
                    mainContext.translate(tmpX, tmpY);
                    mainContext.rotate(tmpObj.dir);
                    if (!tmpObj.active) {
                        mainContext.scale(tmpObj.visScale / tmpObj.scale, tmpObj.visScale / tmpObj.scale);
                    }
                    mainContext.drawImage(tmpSprite, -(tmpSprite.width / 2), -(tmpSprite.height / 2));

                    if (tmpObj.blocker) {
                        mainContext.strokeStyle = "#db6e6e";
                        mainContext.globalAlpha = 0.3;
                        mainContext.lineWidth = 6;
                        renderCircle(0, 0, tmpObj.blocker, mainContext, false, true);
                    }
                    mainContext.restore();
                } else {
                    tmpSprite = getResSprite(tmpObj);
                    mainContext.drawImage(tmpSprite, tmpX - (tmpSprite.width / 2), tmpY - (tmpSprite.height / 2));
                }
            }
        }
    });

    // PLACE VISIBLE:
    if (layer == 0) {
        if (placeVisible.length) {
            placeVisible.forEach((places) => {
                tmpX = places.x - xOffset;
                tmpY = places.y - yOffset;
                markObject(places, tmpX, tmpY);
            });
        }
    }
}

function markObject(tmpObj, tmpX, tmpY) {
    getMarkSprite(tmpObj, mainContext, tmpX, tmpY);
}

// RENDER MINIMAP:
class MapPing {
    constructor(color, scale) {
        this.init = function (x, y) {
            this.scale = 0;
            this.x = x;
            this.y = y;
            this.active = true;
        };
        this.update = function (ctxt, delta) {
            if (this.active) {
                this.scale += 0.05 * delta;
                if (this.scale >= scale) {
                    this.active = false;
                } else {
                    ctxt.globalAlpha = (1 - Math.max(0, this.scale / scale));
                    ctxt.beginPath();
                    ctxt.arc((this.x / config.mapScale) * mapDisplay.width, (this.y / config.mapScale) *
                             mapDisplay.width, this.scale, 0, 2 * Math.PI);
                    ctxt.stroke();
                }
            }
        };
        this.color = color;
    }
}

function pingMap(x, y) {
    tmpPing = mapPings.find(pings => !pings.active);
    if (!tmpPing) {
        tmpPing = new MapPing("#fff", config.mapPingScale);
        mapPings.push(tmpPing);
    }
    tmpPing.init(x, y);
}

function updateMapMarker() {
    mapMarker.x = player.x;
    mapMarker.y = player.y;
}


let mapDisplay = document.getElementById("mapDisplay");
let mapContext = mapDisplay.getContext("2d");
let mapContainer = document.getElementById("mapContainer");

function renderCirclez(x, y, radius, context, fill = false, glowColor = null) { // made that for map circle drawing xd
    if (!context) return;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    if (glowColor) {
        context.shadowBlur = 15;
        context.shadowColor = glowColor;
    }
    if (fill) {
        context.fill();
    } else {
        context.stroke();
    }
    context.shadowBlur = 0;
}

// SOON (RENDERING EVERY MOD USER ON THE MAP!

/*
        let wsz = new WebSocket('wss://familiar-free-pancake.glitch.me');

        let eliteID = Math.random().toString(36).substr(2, 9);

        wsz.onmessage = function(event) {
            let data = JSON.parse(event.data);
            if (data.type === 'players') {
                players = data.players;
            }
        };

        function updateMapPlayer(x, y) {
            wsz.send(JSON.stringify({ type: 'update', id: eliteID, x, y }));
        }

// this will be placed in updateplayers.
            if (player && player.alive) {
                updateMapPlayer(player.x, player.y);
            }

*/

function renderMinimap(delta) {
    if (player && player.alive) {
        mapContext.clearRect(0, 0, mapDisplay.width, mapDisplay.height);

        mapContext.strokeStyle = "#444";
        mapContext.lineWidth = 1;
        for (let i = 0; i <= mapDisplay.width; i += 30) {
            mapContext.moveTo(i, 0);
            mapContext.lineTo(i, mapDisplay.height);
        }
        for (let i = 0; i <= mapDisplay.height; i += 30) {
            mapContext.moveTo(0, i);
            mapContext.lineTo(mapDisplay.width, i);
        }
        mapContext.stroke();

        mapContext.lineWidth = 4;
        for (let i = 0; i < mapPings.length; ++i) {
            let tmpPing = mapPings[i];
            mapContext.strokeStyle = tmpPing.color;
            mapContext.shadowBlur = 10;
            mapContext.shadowColor = tmpPing.color;
            tmpPing.update(mapContext, delta);
            let pulseRadius = Math.abs(Math.sin(delta / 500) * 10) + 5;
            renderCirclez(tmpPing.x, tmpPing.y, pulseRadius, mapContext, false, tmpPing.color);
        }

        mapContext.globalAlpha = 1;
        mapContext.fillStyle = "#00FF00";
        renderCirclez((player.x / config.mapScale) * mapDisplay.width
                      , (player.y / config.mapScale) * mapDisplay.height, 7, mapContext, true, "#00FF00");

        mapContext.fillStyle = "rgba(0, 255, 0, 0.35)";
        if (player.team && minimapData) {
            for (let i = 0; i < minimapData.length;) {
                renderCirclez((minimapData[i] / config.mapScale) * mapDisplay.width
                              , (minimapData[i + 1] / config.mapScale) * mapDisplay.height, 7, mapContext, true, "rgba(0, 255, 0, 0.35)");
                i += 2;
            }
        }

        if (mapMarker) {
            mapContext.fillStyle = "#fff";
            mapContext.font = "34px Orbitron";
            mapContext.textBaseline = "middle";
            mapContext.textAlign = "center";
            mapContext.shadowBlur = 10;
            mapContext.shadowColor = "#fff";
            mapContext.fillText("x", (mapMarker.x / config.mapScale) * mapDisplay.width
                                , (mapMarker.y / config.mapScale) * mapDisplay.height);
            mapContext.shadowBlur = 0;
        }
    }
}

let gradient = mapContext.createLinearGradient(0, 0, mapDisplay.width, mapDisplay.height);
gradient.addColorStop(0, "#1e1e1e");
gradient.addColorStop(1, "#fff");

window.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
        event.preventDefault();
        mapDisplay.style.display = `block`;
        mapDisplay.style.width = `1000px`;
        mapDisplay.style.height = `1000px`;
        mapDisplay.style.top = '50%';
        mapDisplay.style.left = '50%';
        mapDisplay.style.transform = 'translate(-50%, -50%)';
        mapDisplay.width = 1000;
        mapDisplay.height = 1000;
        renderMinimap(0);
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'Tab') {
        event.preventDefault();
        mapDisplay.style.display = `none`;
        mapDisplay.style.width = `130px`;
        mapDisplay.style.height = `130px`;
        mapDisplay.style.top = 'auto';
        mapDisplay.style.left = '20px';
        mapDisplay.style.bottom = '20px';
        mapDisplay.style.transform = 'none';
        mapDisplay.width = 300;
        mapDisplay.height = 300;
        renderMinimap(0);
    }
});

// ICONS:
let iconSprites = {};
let icons = ["crown", "skull"];

function loadIcons() {
    for (let i = 0; i < icons.length; ++i) {
        let tmpSprite = new Image();
        tmpSprite.onload = function () {
            this.isLoaded = true;
        };
        tmpSprite.src = "./../img/icons/" + icons[i] + ".png";
        iconSprites[icons[i]] = tmpSprite;
    }
}
loadIcons();

function cdf(e, t) {
    return Math.hypot((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
}
// UPDATE GAME:
function updateGame() {
    if (gameObjects.length && inGame) {
        gameObjects.forEach((tmp) => {
            if (UTILS.getDistance(tmp.x, tmp.y, player.x, player.y) <= 1200) {
                if (!liztobj.includes(tmp)) {
                    liztobj.push(tmp);
                    tmp.render = true;
                }
            } else {
                if (liztobj.includes(tmp)) {
                    if (UTILS.getDistance(tmp.x, tmp.y, player.x, player.y) >= 1200) {
                        tmp.render = false;
                        let index = liztobj.indexOf(tmp);
                        if (index > -1) { // only splice array when item is found
                            liztobj.splice(index, 1); // 2nd parameter means remove one item only
                        }
                    }
                } else if (UTILS.getDistance(tmp.x, tmp.y, player.x, player.y) >= 1200) {
                    tmp.render = false;
                    let index = liztobj.indexOf(tmp);
                    if (index > -1) { // only splice array when item is found
                        liztobj.splice(index, 1); // 2nd parameter means remove one item only
                    }
                } else {
                    tmp.render = false;
                    let index = liztobj.indexOf(tmp);
                    if (index > -1) { // only splice array when item is found
                        liztobj.splice(index, 1); // 2nd parameter means remove one item only
                    }
                }
            }
        })
        // gameObjects = gameObjects.filter(e => UTILS.getDistance(e.x, e.y, player.x, player.y) <= 1000)
    }

    mainContext.beginPath();
    mainContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    mainContext.globalAlpha = 1;

    // MOVE CAMERA:
    if (player) {
        if (false) {
            camX = player.x;
            camY = player.y;
        } else {
            let tmpDist = UTILS.getDistance(camX, camY, player.x, player.y);
            let tmpDir = UTILS.getDirection(player.x, player.y, camX, camY);
            let camSpd = Math.min(tmpDist * 0.0045 * delta, tmpDist);
            if (tmpDist > 0.05) {
                camX += camSpd * Math.cos(tmpDir);
                camY += camSpd * Math.sin(tmpDir);
            } else {
                camX = player.x;
                camY = player.y;
            }
        }
    } else {
        camX = config.mapScale / 2 + config.riverWidth;
        camY = config.mapScale / 2;
    }
    // PATHFINDER LINE
    if (pathFind.active) {
        if (pathFind.array && (pathFind.chaseNear ? enemy.length : true)) {
            mainContext.lineWidth = player.scale / 5;
            mainContext.globalAlpha = 1;
            mainContext.strokeStyle = "red";
            mainContext.beginPath();
            pathFind.array.forEach((path, i) => {
                let pathXY = {
                    x: (pathFind.scale / pathFind.grid) * path.x
                    , y: (pathFind.scale / pathFind.grid) * path.y
                }
                let render = {
                    x: ((player.x2 - (pathFind.scale / 2)) + pathXY.x) - xOffset
                    , y: ((player.y2 - (pathFind.scale / 2)) + pathXY.y) - yOffset
                }
                if (i == 0) {
                    mainContext.moveTo(render.x, render.y);
                } else {
                    mainContext.lineTo(render.x, render.y);
                }
            });
            mainContext.stroke();
        }
    }
    // INTERPOLATE PLAYERS AND AI:
    let lastTime = now - (950 / config.serverUpdateRate);
    let tmpDiff;
    for (let i = 0; i < players.length + ais.length; ++i) {
        tmpObj = players[i] || ais[i - players.length];
        if (tmpObj && tmpObj.visible) {
            if (tmpObj.forcePos) {
                tmpObj.x = tmpObj.x2;
                tmpObj.y = tmpObj.y2;
                tmpObj.dir = tmpObj.d2;
            } else {
                let total = tmpObj.t2 - tmpObj.t1;
                let fraction = lastTime - tmpObj.t1;
                let ratio = (fraction / total);
                let rate = 170;
                tmpObj.dt += delta;
                let tmpRate = Math.min(1.7, tmpObj.dt / rate);
                tmpDiff = (tmpObj.x2 - tmpObj.x1);
                tmpObj.x = tmpObj.x1 + (tmpDiff * tmpRate);
                tmpDiff = (tmpObj.y2 - tmpObj.y1);
                tmpObj.y = tmpObj.y1 + (tmpDiff * tmpRate);
                if (config.anotherVisual) {
                    tmpObj.dir = Math.lerpAngle(tmpObj.d2, tmpObj.d1, Math.min(1.2, ratio));
                } else {
                    tmpObj.dir = Math.lerpAngle(tmpObj.d2, tmpObj.d1, Math.min(1.2, ratio));
                }
            }
        }
    }

    // RENDER CORDS:
    let xOffset = camX - (maxScreenWidth / 2);
    let yOffset = camY - (maxScreenHeight / 2);

    // RENDER BACKGROUND:
    if (config.snowBiomeTop - yOffset <= 0 && config.mapScale - config.snowBiomeTop - yOffset >= maxScreenHeight) {
        mainContext.fillStyle = "#b6db66";
        mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);
    } else if (config.mapScale - config.snowBiomeTop - yOffset <= 0) {
        mainContext.fillStyle = "#dbc666";
        mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);
    } else if (config.snowBiomeTop - yOffset >= maxScreenHeight) {
        mainContext.fillStyle = "#fff";
        mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);
    } else if (config.snowBiomeTop - yOffset >= 0) {
        mainContext.fillStyle = "#fff";
        mainContext.fillRect(0, 0, maxScreenWidth, config.snowBiomeTop - yOffset);
        mainContext.fillStyle = "#b6db66";
        mainContext.fillRect(0, config.snowBiomeTop - yOffset, maxScreenWidth
                             , maxScreenHeight - (config.snowBiomeTop - yOffset));
    } else {
        mainContext.fillStyle = "#b6db66";
        mainContext.fillRect(0, 0, maxScreenWidth
                             , (config.mapScale - config.snowBiomeTop - yOffset));
        mainContext.fillStyle = "#dbc666";
        mainContext.fillRect(0, (config.mapScale - config.snowBiomeTop - yOffset), maxScreenWidth
                             , maxScreenHeight - (config.mapScale - config.snowBiomeTop - yOffset));
    }

    // RENDER WATER AREAS:
    if (!firstSetup) {
        waterMult += waterPlus * config.waveSpeed * delta;
        if (waterMult >= config.waveMax) {
            waterMult = config.waveMax;
            waterPlus = -1;
        } else if (waterMult <= 1) {
            waterMult = waterPlus = 1;
        }
        mainContext.globalAlpha = 1;
        mainContext.fillStyle = "#dbc666";
        renderWaterBodies(xOffset, yOffset, mainContext, config.riverPadding);
        mainContext.fillStyle = "#91b2db";
        renderWaterBodies(xOffset, yOffset, mainContext, (waterMult - 1) * 250);
    }

    // RENDER GRID:
    mainContext.lineWidth = 4;
    mainContext.strokeStyle = "#000";
    mainContext.globalAlpha = 0.06;
    mainContext.beginPath();

    for (let x = -camX; x < maxScreenWidth; x += 60) {
        if (x > 0 && isOnScreen(x, maxScreenHeight / 2)) {
            mainContext.moveTo(x, 0);
            mainContext.lineTo(x, maxScreenHeight);
        }
    }

    for (let y = -camY; y < maxScreenHeight; y += 60) {
        if (y > 0 && isOnScreen(maxScreenWidth / 2, y)) {
            mainContext.moveTo(0, y);
            mainContext.lineTo(maxScreenWidth, y);
        }
    }

    mainContext.stroke();

    // RENDER DEAD PLAYERS:
    mainContext.globalAlpha = 1;
    mainContext.strokeStyle = outlineColor;
    renderDeadPlayers(xOffset, yOffset);

    // RENDER BOTTOM LAYER:
    mainContext.globalAlpha = 1;
    mainContext.strokeStyle = outlineColor;
    renderGameObjects(-1, xOffset, yOffset);

    // RENDER PROJECTILES:
    mainContext.globalAlpha = 1;
    mainContext.lineWidth = outlineWidth;
    renderProjectiles(0, xOffset, yOffset);

    // RENDER PLAYERS:
    renderPlayers(xOffset, yOffset, 0);

    // RENDER AI:
    mainContext.globalAlpha = 1;
    for (let i = 0; i < ais.length; ++i) {
        tmpObj = ais[i];
        if (tmpObj.active && tmpObj.visible) {
            tmpObj.animate(delta);
            mainContext.save();
            mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
            mainContext.rotate(tmpObj.dir + tmpObj.dirPlus - (Math.PI / 2));
            renderAI(tmpObj, mainContext);
            mainContext.restore();
        }
    }

    // RENDER GAME OBJECTS (LAYERED):
    renderGameObjects(0, xOffset, yOffset);
    renderProjectiles(1, xOffset, yOffset);
    renderGameObjects(1, xOffset, yOffset);
    renderPlayers(xOffset, yOffset, 1);
    renderGameObjects(2, xOffset, yOffset);
    renderGameObjects(3, xOffset, yOffset);

    // MAP BOUNDARIES:
    mainContext.fillStyle = "#000";
    mainContext.globalAlpha = 0.09;
    if (xOffset <= 0) {
        mainContext.fillRect(0, 0, -xOffset, maxScreenHeight);
    }
    if (config.mapScale - xOffset <= maxScreenWidth) {
        let tmpY = Math.max(0, -yOffset);
        mainContext.fillRect(config.mapScale - xOffset, tmpY, maxScreenWidth - (config.mapScale - xOffset), maxScreenHeight - tmpY);
    }
    if (yOffset <= 0) {
        mainContext.fillRect(-xOffset, 0, maxScreenWidth + xOffset, -yOffset);
    }
    if (config.mapScale - yOffset <= maxScreenHeight) {
        let tmpX = Math.max(0, -xOffset);
        let tmpMin = 0;
        if (config.mapScale - xOffset <= maxScreenWidth)
            tmpMin = maxScreenWidth - (config.mapScale - xOffset);
        mainContext.fillRect(tmpX, config.mapScale - yOffset, (maxScreenWidth - tmpX) - tmpMin, maxScreenHeight - (config.mapScale - yOffset));
    }

    // RENDER DAY/NIGHT TIME:
    mainContext.globalAlpha = 1;
    mainContext.fillStyle = "rgba(0, 0, 70, 0.35)";
    mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);

    // RENDER PLAYER AND AI UI:
    mainContext.strokeStyle = darkOutlineColor;
    mainContext.globalAlpha = 1;

    for (let i = 0; i < players.length + ais.length; ++i) {
        tmpObj = players[i] || ais[i - players.length];
        if (tmpObj.visible) {
            mainContext.strokeStyle = darkOutlineColor;

            let tmpText = "<< " + (tmpObj.team ? tmpObj.team + " | " : "") + (tmpObj.name || "") + " >>";
            if (tmpText != "") {

                mainContext.font = (tmpObj.nameScale || 25) + "px Orbitron";
                mainContext.textBaseline = "middle";
                mainContext.textAlign = "center";
                mainContext.lineWidth = (tmpObj.nameScale ? 11 : 8);
                mainContext.lineJoin = "round";

                if (tmpObj != player) {
                    mainContext.fillStyle = "#fff";
                    mainContext.strokeText(tmpText, tmpObj.x - xOffset, (tmpObj.y - yOffset - tmpObj.scale) - config.nameY);
                    mainContext.fillText(tmpText, tmpObj.x - xOffset, (tmpObj.y - yOffset - tmpObj.scale) - config.nameY);
                }

                if (tmpObj == player) {
                    mainContext.save();
                    mainContext.shadowColor = '#00e5ff';
                    mainContext.shadowBlur = 10;
                    mainContext.fillStyle = "#00e5ff";
                    mainContext.strokeText(tmpText, player.x - xOffset, (player.y - yOffset - player.scale) - config.nameY);
                    mainContext.fillText(tmpText, player.x - xOffset, (player.y - yOffset - player.scale) - config.nameY);
                    mainContext.restore();
                }

                let attributes = [];
                if (tmpObj.isInstaKiller) attributes.push("Insta-Killer");
                if (tmpObj.isOneTicker) attributes.push("One-Ticker");
                if (tmpObj.isDaggerEnthusiast) attributes.push("Dagger-Enthusiast");

                if (attributes.length > 0) {
                    let attrText = attributes.join(", ");
                    mainContext.save();
                    mainContext.shadowColor = '#ff4d4d';
                    mainContext.fillStyle = "#ff4d4d";
                    mainContext.shadowBlur = 10;
                    mainContext.font = (tmpObj.nameScale || 16) + "px Orbitron";
                    mainContext.strokeText(attrText, tmpObj.x - xOffset, (tmpObj.y - yOffset - tmpObj.scale) - config.nameY + 20);
                    mainContext.fillText(attrText, tmpObj.x - xOffset, (tmpObj.y - yOffset - tmpObj.scale) - config.nameY + 20);
                    mainContext.restore();
                }

                if (tmpObj.isPlayer) {
                    let shText = tmpObj.shameCount;
                    mainContext.save();
                    mainContext.shadowColor = '#ff4d4d';
                    mainContext.fillStyle = "#ff4d4d";
                    mainContext.shadowBlur = 10;
                    mainContext.font = (tmpObj.nameScale || 16) + "px Orbitron";
                    mainContext.strokeText(shText, tmpObj.x - xOffset, (tmpObj.y - yOffset));
                    mainContext.fillText(shText, tmpObj.x - xOffset, (tmpObj.y - yOffset));
                    mainContext.restore();
                }

                if (tmpObj.isLeader && iconSprites.crown.isLoaded) {
                    let tmpS = config.crownIconScale;
                    let tmpX = tmpObj.x - xOffset - (tmpS / 2) - (mainContext.measureText(tmpText)
                                                                  .width / 2) - config.crownPad;
                    mainContext.drawImage(iconSprites.crown, tmpX, (tmpObj.y - yOffset - tmpObj.scale) -
                                          config.nameY - (tmpS / 2) - 5, tmpS, tmpS);
                }
                if (tmpObj.iconIndex == 1 && iconSprites.skull.isLoaded) {
                    let tmpS = config.crownIconScale;
                    let tmpX = tmpObj.x - xOffset - (tmpS / 2) + (mainContext.measureText(tmpText)
                                                                  .width / 2) + config.crownPad;
                    mainContext.drawImage(iconSprites.skull, tmpX, (tmpObj.y - yOffset - tmpObj.scale) -
                                          config.nameY - (tmpS / 2) - 5, tmpS, tmpS);
                }
            }
            if (tmpObj.health > 0) {


                // HEALTH HOLDER:
                mainContext.fillStyle = darkOutlineColor;
                mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth - config.healthBarPad
                                      , (tmpObj.y - yOffset + tmpObj.scale) + config.nameY, (config.healthBarWidth * 2) +
                                      (config.healthBarPad * 2), 17, 8);
                mainContext.fill();

                // HEALTH BAR:
                mainContext.fillStyle = (tmpObj == player || (tmpObj.team && tmpObj.team == player.team)) ? "#8ecc51" : "#cc5151";
                mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth
                                      , (tmpObj.y - yOffset + tmpObj.scale) + config.nameY + config.healthBarPad
                                      , ((config.healthBarWidth * 2) * (tmpObj.health / tmpObj.maxHealth)), 17 - config.healthBarPad * 2, 7);
                mainContext.fill();

                if (tmpObj.isPlayer) {
                    mainContext.globalAlpha = 1;
                    let targetReloads = {
                        primary: (tmpObj.primaryIndex == undefined ? 1 : ((items.weapons[tmpObj.primaryIndex].speed - tmpObj.reloads[tmpObj.primaryIndex]) / items.weapons[tmpObj.primaryIndex].speed))
                        , secondary: (tmpObj.secondaryIndex == undefined ? 1 : ((items.weapons[tmpObj.secondaryIndex].speed - tmpObj.reloads[tmpObj.secondaryIndex]) / items.weapons[tmpObj.secondaryIndex].speed))
                        , turret: (2500 - tmpObj.reloads[53]) / 2500
                    };
                    if (!tmpObj.currentReloads) {
                        tmpObj.currentReloads = {
                            primary: targetReloads.primary
                            , secondary: targetReloads.secondary
                            , turret: targetReloads.turret
                        };
                    }

                    if (getEl("predictType")
                        .value == "pre2") {
                        mainContext.lineWidth = 3;
                        mainContext.strokeStyle = "#fff";
                        mainContext.globalAlpha = 1;
                        mainContext.beginPath();
                        let render = {
                            x: tmpObj.x2 - xOffset
                            , y: tmpObj.y2 - yOffset
                        };
                        mainContext.moveTo(tmpObj.x - xOffset, tmpObj.y - yOffset);
                        mainContext.lineTo(render.x, render.y);
                        mainContext.stroke();
                    } else if (getEl("predictType")
                               .value == "pre3") {
                        mainContext.lineWidth = 3;
                        mainContext.strokeStyle = "#cc5151";
                        mainContext.globalAlpha = 1;
                        mainContext.beginPath();
                        let render = {
                            x: tmpObj.x3 - xOffset
                            , y: tmpObj.y3 - yOffset
                        };
                        mainContext.moveTo(tmpObj.x - xOffset, tmpObj.y - yOffset);
                        mainContext.lineTo(render.x, render.y);
                        mainContext.stroke();
                    }

                }
            }
        }
    }

    if (player) {

        // AUTOPUSH LINE:
        if (my.autoPush) {
            mainContext.lineWidth = 5;
            mainContext.globalAlpha = 1;
            mainContext.beginPath();

            mainContext.strokeStyle = "#ff0000"; // Set line color to red
            mainContext.shadowBlur = 10; // Add blur to create glow effect
            mainContext.shadowColor = "#ff0000"; // Set shadow color to red

            mainContext.moveTo(player.x - xOffset, player.y - yOffset);
            mainContext.lineTo(my.pushData.x2 - xOffset, my.pushData.y2 - yOffset);
            mainContext.lineTo(my.pushData.x - xOffset, my.pushData.y - yOffset);
            mainContext.stroke();

            // Reset shadow settings to default for other drawings
            mainContext.shadowBlur = 0;
            mainContext.shadowColor = "transparent";
        }

        mainContext.globalAlpha = 1;
    }
    // RENDER ANIM TEXTS:
    textManager.update(delta, mainContext, xOffset, yOffset);

    // RENDER CHAT MESSAGES:
    for (let i = 0; i < players.length; ++i) {
        tmpObj = players[i];
        if (tmpObj.visible) {
            if (tmpObj.chatCountdown > 0) {
                tmpObj.chatCountdown -= delta;
                if (tmpObj.chatCountdown <= 0)
                    tmpObj.chatCountdown = 0;
                mainContext.font = "32px Orbitron";
                let tmpSize = mainContext.measureText(tmpObj.chatMessage);
                mainContext.textBaseline = "middle";
                mainContext.textAlign = "center";
                let tmpX = tmpObj.x - xOffset;
                let tmpY = tmpObj.y - tmpObj.scale - yOffset - 90;
                let tmpH = 47;
                let tmpW = tmpSize.width + 17;
                mainContext.fillStyle = "rgba(0,0,0,0.2)";
                mainContext.roundRect(tmpX - tmpW / 2, tmpY - tmpH / 2, tmpW, tmpH, 6);
                mainContext.fill();
                mainContext.fillStyle = "#fff";
                mainContext.fillText(tmpObj.chatMessage, tmpX, tmpY);
            }
            if (tmpObj.chat.count > 0) {
                if (!useWasd) {
                    tmpObj.chat.count -= delta;
                    if (tmpObj.chat.count <= 0)
                        tmpObj.chat.count = 0;
                    mainContext.font = "32px Orbitron";
                    let tmpSize = mainContext.measureText(tmpObj.chat.message);
                    mainContext.textBaseline = "middle";
                    mainContext.textAlign = "center";
                    let tmpX = tmpObj.x - xOffset;
                    let tmpY = tmpObj.y - tmpObj.scale - yOffset + (90 * 2);
                    let tmpH = 47;
                    let tmpW = tmpSize.width + 17;
                    mainContext.fillStyle = "rgba(0,0,0,0.2)";
                    mainContext.roundRect(tmpX - tmpW / 2, tmpY - tmpH / 2, tmpW, tmpH, 6);
                    mainContext.fill();
                    mainContext.fillStyle = "#ffffff99";
                    mainContext.fillText(tmpObj.chat.message, tmpX, tmpY);
                } else {
                    tmpObj.chat.count = 0;
                }
            }
        }
    }

    if (allChats.length) {
        allChats.filter(ch => ch.active)
            .forEach((ch) => {
            if (!ch.alive) {
                if (ch.alpha <= 1) {
                    ch.alpha += delta / 250;
                    if (ch.alpha >= 1) {
                        ch.alpha = 1;
                        ch.alive = true;
                    }
                }
            } else {
                ch.alpha -= delta / 5000;
                if (ch.alpha <= 0) {
                    ch.alpha = 0;
                    ch.active = false;
                }
            }
            if (ch.active) {
                mainContext.font = "20px Ubuntu";
                let tmpSize = mainContext.measureText(ch.chat);
                mainContext.textBaseline = "middle";
                mainContext.textAlign = "center";
                let tmpX = ch.x - xOffset;
                let tmpY = ch.y - yOffset - 90;
                let tmpH = 40;
                let tmpW = tmpSize.width + 15;

                mainContext.globalAlpha = ch.alpha;

                mainContext.fillStyle = ch.owner.isTeam(player) ? "#8ecc51" : "#cc5151";
                mainContext.strokeStyle = "rgb(25, 25, 25)";
                mainContext.strokeText(ch.owner.name, tmpX, tmpY - 45);
                mainContext.fillText(ch.owner.name, tmpX, tmpY - 45);

                mainContext.lineWidth = 5;
                mainContext.fillStyle = "#ccc";
                mainContext.strokeStyle = "rgb(25, 25, 25)";

                mainContext.roundRect(tmpX - tmpW / 2, tmpY - tmpH / 2, tmpW, tmpH, 6);
                mainContext.stroke();
                mainContext.fill();

                mainContext.fillStyle = "#fff";
                mainContext.strokeStyle = "#000";
                mainContext.strokeText(ch.chat, tmpX, tmpY);
                mainContext.fillText(ch.chat, tmpX, tmpY);
                ch.y -= delta / 100;
            }
        });
    }

    mainContext.globalAlpha = 1;

    // RENDER MINIMAP:
    renderMinimap(delta);
}

// UPDATE & ANIMATE:
window.requestAnimFrame = function () {
    return null;
}
window.rAF = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
        window.setTimeout(callback, 1000 / 9);
    };
})();

function doUpdate() {
    //rape modulus
    now = performance.now();
    delta = now - lastUpdate;
    lastUpdate = now;
    let timer = performance.now();
    let diff = timer - fpsTimer.last;
    if (diff >= 1000) {

        fpsTimer.ltime = fpsTimer.time * (950 / diff);

        fpsTimer.last = timer;
        fpsTimer.time = 0;
    }
    fpsTimer.time++;

    updateGame();
    rAF(doUpdate);
    ms.avg = Math.round((ms.min + ms.max) / 2);
}

prepareMenuBackground();
doUpdate();

let changeDays = {};

window.debug = function () {
    my.waitHit = 0;
    my.autoAim = false;
    instaC.isTrue = false;
    traps.inTrap = false;
    itemSprites = [];
    objSprites = [];
    gameObjectSprites = [];
};

window.wasdMode = function () {
    useWasd = !useWasd;
};

window.startGrind = function () {
    if (getEl("weaponGrind")
        .checked) {
        for (let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
            checkPlace(player.getItemType(22), i);
        }
    }
};

window.resBuild = function () {
    if (gameObjects.length) {
        gameObjects.forEach((tmp) => {
            tmp.breakObj = false;
        });
        breakObjects = [];
    }
};
let prevChats = [];
let prevChatsIndex = 0;
let MAX_CHAT_LENGTH = 30;

function toggleChat() {
    if (!usingTouch) {
        if (chatHolder.style.display == "block") {
            if (chatBox.value) {
                alert(chatBox.value);
            }
            closeChat();
        } else {
            storeMenu.style.display = "none";
            allianceMenu.style.display = "none";
            chatHolder.style.display = "block";
            chatBox.focus();
            resetMoveDir();
        }
    } else {
        setTimeout(function () {
            let chatMessage = prompt("chat message");
            if (chatMessage) {
                alert(chatMessage);
            }
        }, 1);
    }
    chatBox.value = "";
    (() => {
        prevChatsIndex = 0;
    })();
}

function closeChat() {
    chatBox.value = "";
    chatHolder.style.display = "none";
}
window.prepareUI = function (tmpObj) {
    resize();
    // ACTION BAR:
    UTILS.removeAllChildren(actionBar);

    for (let i = 0; i < (items.weapons.length + items.list.length); ++i) {
        (function (i) {
            UTILS.generateElement({
                id: "actionBarItem" + i
                , class: "actionBarItem"
                , style: "display:none;"
                , onmouseout: function () {
                    showItemInfo();
                }
                , parent: actionBar
            });
        })(i);
    }

    for (let i = 0; i < (items.list.length + items.weapons.length); ++i) {
        (function (i) {
            let tmpCanvas = document.createElement("canvas");
            tmpCanvas.width = tmpCanvas.height = 66;
            let tmpContext = tmpCanvas.getContext("2d");
            tmpContext.translate((tmpCanvas.width / 2), (tmpCanvas.height / 2));
            tmpContext.imageSmoothingEnabled = false;
            tmpContext.webkitImageSmoothingEnabled = false;
            tmpContext.mozImageSmoothingEnabled = false;

            if (items.weapons[i]) {
                tmpContext.rotate((Math.PI / 4) + Math.PI);
                let tmpSprite = new Image();
                toolSprites[items.weapons[i].src] = tmpSprite;
                tmpSprite.onload = function () {
                    this.isLoaded = true;
                    let tmpPad = 1 / (this.height / this.width);
                    let tmpMlt = (items.weapons[i].iPad || 1);
                    tmpContext.drawImage(this, -(tmpCanvas.width * tmpMlt * config.iconPad * tmpPad) / 2, -(tmpCanvas.height * tmpMlt * config.iconPad) / 2
                                         , tmpCanvas.width * tmpMlt * tmpPad * config.iconPad, tmpCanvas.height * tmpMlt * config.iconPad);
                    tmpContext.fillStyle = "rgba(0, 0, 70, 0.1)";
                    tmpContext.globalCompositeOperation = "source-atop";
                    tmpContext.fillRect(-tmpCanvas.width / 2, -tmpCanvas.height / 2, tmpCanvas.width, tmpCanvas.height);
                    getEl('actionBarItem' + i)
                        .style.backgroundImage = "url(" + tmpCanvas.toDataURL() + ")";
                };
                tmpSprite.src = "./../img/weapons/" + items.weapons[i].src + ".png";
                let tmpUnit = getEl('actionBarItem' + i);
                tmpUnit.onmouseover = UTILS.checkTrusted(function () {
                    showItemInfo(items.weapons[i], true);
                });
                tmpUnit.onclick = UTILS.checkTrusted(function () {
                    selectWeapon(tmpObj.weapons[items.weapons[i].type]);
                });
                UTILS.hookTouchEvents(tmpUnit);
            } else {
                let tmpSprite = getItemSprite(items.list[i - items.weapons.length], true);
                let tmpScale = Math.min(tmpCanvas.width - config.iconPadding, tmpSprite.width);
                tmpContext.globalAlpha = 1;
                tmpContext.drawImage(tmpSprite, -tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale);
                tmpContext.fillStyle = "rgba(0, 0, 70, 0.1)";
                tmpContext.globalCompositeOperation = "source-atop";
                tmpContext.fillRect(-tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale);
                getEl('actionBarItem' + i)
                    .style.backgroundImage = "url(" + tmpCanvas.toDataURL() + ")";
                let tmpUnit = getEl('actionBarItem' + i);
                tmpUnit.onmouseover = UTILS.checkTrusted(function () {
                    showItemInfo(items.list[i - items.weapons.length]);
                });
                tmpUnit.onclick = UTILS.checkTrusted(function () {
                    selectToBuild(tmpObj.items[tmpObj.getItemType(i - items.weapons.length)]);
                });
                UTILS.hookTouchEvents(tmpUnit);
            }
        })(i);
    }
};
