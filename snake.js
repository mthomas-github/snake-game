var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');

const colorArray = [ "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8" ,"#0d5ac1" ,
    "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
    "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
    "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
    "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
    "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" ,
    "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
    "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
    "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
    "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
    "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
    "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
    "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647",
    "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
    "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
    "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647",
    "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
    "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
    "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7",
    "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8",
    "#73872a", "#520d3a", "#a5b3d9", "#7d1d85", "#c4fd57",
    "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce",
    "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997",
    "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be",
    "#32d5d6", "#17232", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba",
    "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043",
    "#b47162", "#1ec227", "#07d7f6", "#1d1d58", "#947002", "#bde052", "#e08c56",
    "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
    "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
    "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
    "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4",
    "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06",
    "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a",
    "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065",
    "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35",
    "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44",
    "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67",
    "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff",
    "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6",
    "#dba2e6", "#20f6ba",  "#dce77a"];

const gom = ["Are you playing with your toes?","Are you even trying?","My gran gran has better reflexes","Try playing with your eyes open",
"Thats known as a rookie score","Are you pressing on the arrows?","You do know you have to avoid your bod, right?",
"Wut a fail, try again!"];
//initialize variables
let gsp = 10;
let headx = 10;
let heady = 10;
let pres = 20;
let pden = canv.width / pres;
let movex = 0;
let movey = 0;
let paus = true;
let foodx = 5;
let foody = 5;
let tail = [];
let cc = 0;
let hc = 0;
let col = false;
let foodColor = '#608572';
let cSpeed = 1500
let cGem = '#154360'
let go = false;
let msg = 0;

//main function
function snek() {
    if (paus == true) {
        sgem();
        dsnek();
        dfood();
        smove();
        efood();
        colide();
    }
    setTimeout(snek, cSpeed / gsp);
    if(go == true){
        if(tail.length < 1){
            fail();
        }
        else {go = false;}
    }
}
function colide() {
    for (var i = 1; i < tail.length; i++) {
        if (tail[i].x == headx + movex && tail[i].y == heady + movey) {
            tail = [];
            col = true;
            cSpeed = 1500
            cGem = '#154360'
            go = true;
            msg = Math.floor(Math.random() * gom.length);
        }
    }
    if (col == true && cc > hc) {
        hc = cc;
        if(hc > localStorage.getItem('hc')){
            localStorage.setItem('hc',hc);
        }
        cc = 0;
        col = false;
    }
    else if(col == true){cc = 0;col = false;}
}

//failed message
function fail(){
            ctx.fillStyle = 'white';
            ctx.fillText(gom[msg],100,200,1000);
}

//set gem backgroud
function sgem() {
    ctx.fillStyle = cGem;
    ctx.fillRect(0, 0, canv.width, canv.height);
}

//draw snek
function dsnek() {
    ctx.font = '15px san-serif';
    ctx.fillStyle = 'white';
    ctx.fillRect(headx * pres - pden / 2, heady * pres - pden / 2, pden, pden);
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + cc, 190, 15, 100);
    const hs = localStorage.getItem('hc') == null ? 0 : localStorage.getItem('hc');
    ctx.fillText('High Score: ' + hs, 180, 390, 100);
}

//draw food
function dfood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodx * pres - pden / 2, foody * pres - pden / 2, pden, pden);

    if (tail.length > 0) {
        for (i = 0; i < tail.length; i++) {
            ctx.fillStyle = tail[i].c;
            ctx.fillRect(tail[i].x * pres - pden / 2, tail[i].y * pres - pden / 2, pden, pden);
        }

        switch (tail.length) {
            case 10:
                cSpeed = 1200;
                cGem = "#4f0f6f";
                break;
            case 20:
                cSpeed = 1000
                cGem = "#608fa4"
                break;
            case 30:
                cSpeed = 980
                cGem = "#77ecca"
                break;    
            case 40:
                cSpeed = 960
                cGem = "#648177"
                break;
            case 50:
                cSpeed = 940
                cGem = "#76fc1b"
                break;
            case 60:
                cSpeed = 920
                cGem = "#cefcb8"
                break;
            case 70:
                cSpeed = 900
                cGem = "#f1ae16"
                break
            default:
                cSpeed = cSpeed
                cGem = cGem
                break;
        }
    }
}
//move the snek
function smove() {
    if (tail.length > 0) {
        for (t = tail.length - 1; t > 0; t--) {
            tail[t].x = tail[t - 1].x;
            tail[t].y = tail[t - 1].y;
        }
        tail[0].x = headx;
        tail[0].y = heady;
    }
    if (headx < 0) {
        headx = 20;
        heady = heady + movey;
    } else if (headx > 20) {
        headx = 0;
        heady = heady + movey;
    } else if (heady > 20) {
        headx = headx + movex;
        heady = 0;
    } else if (heady < 0) {
        headx = headx + movex;
        heady = 20;
    } else {
        headx = headx + movex;
        heady = heady + movey;
    }
}
//food is eaten
function efood() {
    if (headx == foodx && heady == foody) {
        cc++;
        foodx = Math.floor(Math.random() * pres);
        foody = Math.floor(Math.random() * pres);
        tail.push({ x: headx, y: heady, c: foodColor });
        foodColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    }
}


//set an event to listen for key input
document.body.addEventListener('keydown', kin);

//key input arrows are 37  left to 40 down
function kin(event) {
    switch (event.keyCode) {
        case 32:
            paus = !paus;
            break;
        case 37:
            if (movex == 1) {
                return;
            }
            movex = -1;
            movey = 0;
            break;
        case 38:
            if (movey == 1) {
                return;
            }
            movex = 0;
            movey = -1;
            break;
        case 39:
            if (movex == -1) {
                return;
            }
            movex = 1;
            movey = 0;
            break;
        case 40:
            if (movey == -1) {
                return;
            }
            movex = 0;
            movey = 1;
            break
        default:
            break;
    }
  
}

//call main function
snek();