class Keyboard
{
    constructor()
    {
        this.KEYMAP = 
        {   
            //converting the CHIP-8 Number pad to ASCII keys to be able to control it using a modern keyboard
            49: 0x1, //1
            50: 0x2, //2
            51: 0x3, //3
            52: 0xC, //4
            81: 0x4, //Q
            87: 0x5, //W
            69: 0x6, //E
            82: 0xD, //R
            65: 0x7, //A
            83: 0x8, //S
            68: 0x9, //D
            70: 0xE, //F
            90: 0xA, //Z
            88: 0x0, //X
            67: 0xB, //C
            86: 0xF, //V
        }
        //array to keep track of pressed keys
        this.keysPressed = [];

        //Some Chip-8 instructions require waiting for the next keypress. We initialize this function elswhere when needed.
        this.onNextKeyPress = null;

        window.addEventListener('keydown', this.onKeyDown.bind(this), false);
        window.addEventListener('keyup', this.onKeyUp.bind(this), false);
    }

    isKeyPressed(keyCode)
    {   
        //Will check the keysPressed array for a specified CHIP-8 keyCode
        return this.keysPressed[keyCode];
    }

    //go back to this, don't fully understand yet, same with onKeyUp()
    onKeyDown(event)
    {
        let key = this.KEYMAP[event.which];
        this.keysPressed[key] = true;

        if(this.onNextKeyPress !== null & key)
        {
            this.onNextKeyPress(parseInt(key));
            this.onNextKeyPress = null;
        }
    }

    onKeyUp(event)
    {
        let key = this.KEYMAP[event.which];
        this.keysPressed[key] = false;
    }

}

export default Keyboard;