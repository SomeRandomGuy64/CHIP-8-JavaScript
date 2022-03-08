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

    loadSpritesIntoMemory()
    {
        //Array of hex values for each sprite, each sprite is five bytes
        //you can find these values in the technical reference for CHIP-8
        const sprites = 
        [
            0xF0, 0x90, 0x90, 0x90, 0xF0, //0
            0x20, 0x60, 0x20, 0x20, 0x70, //1
            0xF0, 0x10, 0xF0, 0x80, 0xF0, //2
            0xF0, 0x10, 0xF0, 0x10, 0xF0, //3
            0x90, 0x90, 0xF0, 0x10, 0x10, //4
            0xF0, 0x80, 0xF0, 0x10, 0xF0, //5
            0xF0, 0x80, 0xF0, 0x90, 0xF0, //6
            0xF0, 0x10, 0x20, 0x40, 0x40, //7
            0xF0, 0x90, 0xF0, 0x90, 0xF0, //8
            0xF0, 0x90, 0xF0, 0x10, 0xF0, //9
            0xF0, 0x90, 0xF0, 0x90, 0x90, //A
            0xE0, 0x90, 0xE0, 0x90, 0xE0, //B
            0xF0, 0x80, 0x80, 0x80, 0xF0, //C
            0xE0, 0x90, 0x90, 0x90, 0xE0, //D
            0xF0, 0x80, 0xF0, 0x80, 0xF0, //E
            0xF0, 0x80, 0xF0, 0x80, 0x80, //F
        ];

        //According to the technical reference sprites are stored in the interpreter section staring at hex 0x000
        for (let i = 0; i < sprites.length; i++)
        {
            this.memory[i] = sprites[i];
        }
    }
}

export default CPU;