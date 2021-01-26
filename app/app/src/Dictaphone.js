import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Dictaphone = (props) => {
    
    const { finalTranscript, resetTranscript } = useSpeechRecognition()

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    if (finalTranscript || finalTranscript !== "") {
        props.onAddClientMessage(finalTranscript);
        resetTranscript();
    }
    
    const initVoiceTranscription = () => {
        SpeechRecognition.startListening({
            continuous: true,
            language: 'en-US'
        })
    }

    initVoiceTranscription();

    return null;
}

export default Dictaphone;