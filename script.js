const button = document.querySelector('button');
const text = document.querySelector('.campo-texto');

const recognition = createSpeechRecognition();
let listening = false;

button.addEventListener('click', e => {
    if(!recognition) return;

    listening ? recognition.stop() : recognition.start();

    button.innerHTML = listening ? 'Aperte para falar' : 'Parar de escutar';
    button.classList.toggle('btn-pressed');
});

function createSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = SpeechRecognition !== undefined ? new SpeechRecognition() : null;

    if(!recognition) {
        text.innerHTML = "Sem reconhecimento de fala habilitado";
        return null
    }

    recognition.lang = "pt_BR";

    recognition.onstart = () => listening = true;
    recognition.onend = () => {
        listening = false;
        button.classList.toggle('btn-pressed');
        button.innerHTML = 'Aperte para falar';
    }
    recognition.onerror = e => console.log('error', e);
    recognition.onresult = e => text.innerHTML = e.results[0][0].transcript;

    return recognition;
}