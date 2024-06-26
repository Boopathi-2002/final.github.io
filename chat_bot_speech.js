// Text to Speech

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "en-GB";
  voice.volume = 2;
  voice.rate = 1;
  voice.pitch = 1; // Can be 0, 1, or 2
  synth.speak(voice);
}