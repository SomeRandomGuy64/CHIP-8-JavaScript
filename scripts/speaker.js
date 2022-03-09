class Speaker
{
    constructor()
    {
        const AudioContext = window.AudioContext || window.webkitAudioContext;

        this.audioCtx = new AudioContext();

        //create a gain, which will allow us to control the volume
        this.gain = this.audioCtx.createGain();
        this.finish = this.audioCtx.destination;

        //connect the gain to the audio context
        this.gain.connect(this.finish);
    }

    //mute the audio
    muteAudio()
    {
        this.gain.setValueAtTime(0, this.audioCtx.currentTime);
    }

    //unmute the audio
    unmuteAudio()
    {
        this.gain.setValueAtTime(1, this.audioCtx.currentTime);
    }

    //method to play a sound at a desired frequency
    play(frequency)
    {
        if (this.audioCtx && !this.oscillator)
        {
            //create an oscillator which will be playing the sound
            this.oscillator = this.audioCtx.createOscillator();

            //set the frequency
            this.oscillator.frequency.setValueAtTime(frequency || 440, this.audioCtx.currentTime);

            //type of wave
            //square wave
            this.oscillator.type = 'square';

            //connect the gain and start the sound
            this.oscillator.connect(this.gain);
            this.oscillator.start();
        }
    }

    //stop sound
    stop()
    {
        if (this.oscillator)
        {   
            //stop sound
            this.oscillator.stop();
            //disconnect sound
            this.oscillator.disconnect();
            //sets sound to null in order for play() to reinitialize it
            this.oscillator = null;
        }
    }
}

export default Speaker;