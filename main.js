 function startClassifictaion()
 {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JdLg3yiIZ/model.json',modelready);
 }

 function modelready()
 {
    classifier.classify();
 }