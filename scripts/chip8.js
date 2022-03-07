import Renderer from "./renderer.js";
import Keyboard from './keyboard.js';
import Speaker from './speaker.js';

const renderer = new Renderer(20);
const keyboard = new Keyboard();
const speaker = new Speaker();

//creating a loop which runs at 60hz, isn't CHIP-8 specific (come back to later in other projects if needed)
let loop;

let fps = 60, fpsInterval, startTime, now, then, elapsed;

function init()
{
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;

    //Testing code - remove when done
    //renderer.testRender();
    //renderer.render();
    //end test

    loop = requestAnimationFrame(step);
}

function step()
{
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval)
    {
        //Cycle CPU, will come back to it later
    }

    loop = requestAnimationFrame(step);
}

init();