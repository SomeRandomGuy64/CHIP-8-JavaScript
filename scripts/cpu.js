class CPU
{
    constructor(renderer, keyboard, speaker)
    {
        this.renderer = renderer;
        this.keyboard = keyboard;
        this.speaker = speaker;

        //4KB of memory
        this.memory = new Uint8Array(4096);

        //16 8-bit registers
        this.v = new Uint8Array(16);

        //stores memory addresses. Set this to 0 since we aren't storing anything at intialization
        this.i = 0;

        //Timers
        this.delayTime = 0;
        this.soundTimer = 0;

        //Program counter. Stores the currently executing address
        this.pc = 0x200;

        //an array to represent the stack, don't intialize with a size in order to avoid empty results
        this.stack = new Array();

        //some instructions require pausing such as Fx0A
        this.paused = false;

        this.speed = 10;
    }
}

export default CPU;