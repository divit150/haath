prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';

    });

}
console.log("version of ml5", ml5.version);
classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/LoGw4xgt6/model.json", modelLoaded);

function modelLoaded() {
    console.log("modelLoading");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "the face expresson is" + prediction_1;
    speak_data_2 = "the face second expresson is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById("capture_image");
    classifier.classify(img, got_result);
}
