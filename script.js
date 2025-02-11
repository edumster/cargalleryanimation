
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.textAnimate("h1" /* Element to target.*/, {
    //Parameters are optional.
    debug:true,
    style: 1,
    //y:1,
    //delay: 0.1,
    duration: 0.7,
    //ease: "cubic-bezier(0.2, 1, 0.6, 1)",
   
  });
   Shery.imageEffect("#back", {style:5,config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.066153846153846},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.5,"range":[0,0.5]},"shapeRadius":{"value":0.11,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":15,"range":[1,15]},"durationOut":{"value":1.45,"range":[0.1,5]},"durationIn":{"value":0.92,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.73,"range":[0,1]},"antialias_threshold":{"value":0.1,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":11.45,"range":[0,100]},"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":7},"mousemove":{"value":3},"modeA":{"value":0},"modeN":{"value":0},"speed":{"value":1.49,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":37.84,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":1.68,"range":[0,3.141592653589793]},"waveFactor":{"value":-1.34,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":10,"range":[0,10]},"contrast":{"value":1.01,"range":[-25,25]},"brightness":{"value":0.76,"range":[-1,25]},"colorExposer":{"value":0.34,"range":[-5,5]},"strength":{"value":-0.07,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":0,"range":[-100,100]}},gooey:true, preset: "./presets/wigglewobble.json",});



var elems = document.querySelectorAll(".elem");

elems.forEach(function(elem){
    var h1s = elem.querySelectorAll("h1");
    var index  = 0; 
   document.querySelector("#main").addEventListener("click",function (){
   gsap.to(h1s[index],{
       top:'-=100%',
       ease:Expo.easeInOut,
       duration:1,
       onComplete: function(){
           gsap.set(this._targets[0],{ top:"100%"});
       },
   
   });
   index === h1s.length - 1 ? (index = 0) : index++;
   gsap.to(h1s[index],{
       top:'-=100%',
       ease:Expo.easeInOut,
       duration:1
   })
   
   })
})






  
