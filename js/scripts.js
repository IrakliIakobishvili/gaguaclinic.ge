const Slider = {
    sliderCont    : document.getElementById("sliderCont"),
    list          : document.getElementById("sliderList"),
    controlsList  : document.getElementById("controlsList"),
    bulletOne     : document.getElementById("controls_item_one"),
    bulletTwo     : document.getElementById("controls_item_two"),
    bulletThree   : document.getElementById("controls_item_three"),
    activeClass   : "mainContent__slider__controls__item--active",
    // move        : 100,
    move        : Number(document.getElementById("sliderList").style.left.substring(1,document.getElementById("sliderList").style.left.length-2)),
    // move : 0,
    autoPlay:function() {
            ((Slider.move / 100) >= Slider.list.getElementsByTagName("li").length) ? Slider.move = 0 : true; 

            for(let i = 0; i < Slider.controlsList.getElementsByTagName("li").length; i++) {
                Slider.controlsList.getElementsByTagName("li")[i].className = "";
            }

            switch(Slider.move) {
                case 100:
                    Slider.controlsList.getElementsByTagName("li")[1].className = Slider.activeClass;
                break;  
                case 200:
                    Slider.controlsList.getElementsByTagName("li")[2].className = Slider.activeClass;
                break; 
                case 300:
                    Slider.controlsList.getElementsByTagName("li")[0].className = Slider.activeClass;
                break; 
                case 400:
                    Slider.controlsList.getElementsByTagName("li")[0].className = Slider.activeClass;
                break; 
            }

            Slider.list.style.left = "-"+Slider.move+"%";
            Slider.move += 100;

            if(Slider.list.style.left === "-"+(Slider.list.getElementsByTagName("li").length-1) * 100+"%") {
                Slider.list.style.transitionDuration = "0s";
                Slider.list.style.left = "0%";
                Slider.move = 100;
            }else {
                Slider.list.style.transitionDuration = "1s";                
            }   
    },
    controls: function() {
        for(let i = 0; i < Slider.controlsList.getElementsByTagName("li").length; i++) {
            Slider.controlsList.getElementsByTagName("li")[i].addEventListener("click",function(){

                for(let i = 0; i < Slider.controlsList.getElementsByTagName("li").length; i++) {
                    Slider.controlsList.getElementsByTagName("li")[i].className = "";
                }

                switch(this.getAttribute("id")) {
                    case Slider.bulletOne.getAttribute("id"):
                    this.className = Slider.activeClass;
                     console.log(this);
                     Slider.list.style.transitionDuration = "0s";
                     Slider.list.style.left = "0%";
                     Slider.move = 0;
                    break;
                    case Slider.bulletTwo.getAttribute("id"):
                     console.log("ira11");
                     this.className = Slider.activeClass;
                     Slider.list.style.transitionDuration = "0s";
                     Slider.list.style.left = "-100%";
                     Slider.move = 100;
                    break;
                    case Slider.bulletThree.getAttribute("id"):
                     console.log("ira111");
                     this.className = Slider.activeClass;
                     Slider.list.style.transitionDuration = "0s";
                     Slider.list.style.left = "-200%";
                     Slider.move = 200;
                    break;
                }
            });
        }//for
    },
    bullets:function() {
        console.log(Slider.move+" Bullet")
        for(let i = 0; i < Slider.controlsList.getElementsByTagName("li").length; i++) {
            Slider.controlsList.getElementsByTagName("li")[i].className = "";
        }
        switch(Slider.move) {
            case 100:
                Slider.controlsList.getElementsByTagName("li")[1].className = Slider.activeClass;
            break;
            case 200:
                Slider.controlsList.getElementsByTagName("li")[2].className = Slider.activeClass;
            break;
            case 300:
                Slider.controlsList.getElementsByTagName("li")[3].className = Slider.activeClass;
            break;
            case 400:
                Slider.controlsList.getElementsByTagName("li")[0].className = Slider.activeClass;
            break;
        }
    }
}//Slider

Slider.autoPlay();
var Play;
Play = setInterval(Slider.autoPlay,2000);
Slider.sliderCont.onmouseover = function() {
    clearInterval(Play);
}
Slider.sliderCont.onmouseleave = function() {
    Play = setInterval(Slider.autoPlay,2000);
}

Slider.controls();
Slider.controlsList.getElementsByTagName("li")[0].className = Slider.activeClass;




document.getElementById("dropdown_language").addEventListener("click",function(){
    (this.children[2].style.display === "" || this.children[2].style.display === "none") ? this.children[2].style.display = "flex" : this.children[2].style.display = "none";
});
