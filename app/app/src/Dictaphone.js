import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = (props) => {
    const { finalTranscript, transcript, resetTranscript } = useSpeechRecognition()

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    if (finalTranscript || finalTranscript !== "") {
        var message = finalTranscript + "";

        props.onAddClientMessage(message);

        resetTranscript();
    }
    
    const initVoiceTranscription = () => {
        SpeechRecognition.startListening({
            continuous: true,
            language: 'en-US'
        })
    }

    initVoiceTranscription();

    props.onClientTalking(Boolean(transcript));

    return null;
}

export default Dictaphone;