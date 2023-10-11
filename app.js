

class Slider{
    constructor(slider){
        this.sliderParent = slider
        this.carousel = this.sliderParent.querySelector(".carousel"),
        this.firstImg = this.carousel.querySelectorAll("img")[0];
        this.arrowIcons = this.sliderParent.querySelectorAll(".wrapper .controls");
        this.imgELs = this.sliderParent.querySelectorAll('.none-active');
        this.changeImg = this.sliderParent.querySelectorAll('.controls');

        this.prevPageX
        this.prevScrollLeft  
        this.checkend = false 
        this.isDragStart = false, this.prevPageX, this.prevScrollLeft;
        this.firstImgWidth = this.firstImg.clientWidth + 18;
    }


    dragStart = (e) => {
        this.isDragStart = true;
        this.prevPageX = e.pageX || e.touches[0].pageX;
        this.prevScrollLeft = this.carousel.scrollLeft;
    }

    dragging = (e) => {
        if(!this.isDragStart) return;
        e.preventDefault();
        this.carousel.classList.add("dragging"); 
        let positionDiff = (e.pageX || e.touches[0].pageX) - this.prevPageX; 
        this.carousel.scrollLeft = this.prevScrollLeft - positionDiff;
    }

    dragStop = () => {
        this.isDragStart = false;
        this.carousel.classList.remove("dragging");
    }

    changeActive = () => {
        let full = window.screen.width
        this.imgELs.forEach((imgEl,index) =>{
            let rectangle = imgEl.getBoundingClientRect();
            let boxposition = rectangle.x / full
            if (0.25< boxposition && boxposition < 0.75){
                this.sliderParent.querySelector('.active')?.classList.remove('active');
                imgEl.classList.add('active')
            }

        })

    }

    changeActiveRight = () => {
        let full = window.screen.width
        this.imgELs.forEach((imgEl,index) =>{
            let rectangle = imgEl.getBoundingClientRect();
            let boxposition = rectangle.x / full
            if (0< boxposition && boxposition < 0.60){
                this.sliderParent.querySelector('.active')?.classList.remove('active');
                imgEl.classList.add('active')
            }

        })

    }
    
    changeActiveLeft = () => {
        let full = window.screen.width
        this.imgELs.forEach((imgEl,index) =>{

            let rectangle = imgEl.getBoundingClientRect();
            let boxposition = rectangle.x / full
            if (0< boxposition && boxposition < 0.25){
                this.sliderParent.querySelector('.active')?.classList.remove('active');
                imgEl.classList.add('active')
            }

        })

    }


    changeActiveEnd = () => {
        if(this.checkend == true) return false
        let length = this.imgELs.length
        let full = window.screen.width
        let rectanglestart = this.imgELs[0].getBoundingClientRect();
        let boxpositionstart = rectanglestart.x / full
        if(0.003 < boxpositionstart && boxpositionstart < 0.1){
            this.sliderParent.querySelector('.active')?.classList.remove('active');
            this.imgELs[0].classList.add('active')
            return true
        } 

        let rectangleend = this.imgELs[length-1].getBoundingClientRect();
        let boxpositionend = rectangleend.x / full
        if(0.64< boxpositionend && boxpositionend < 0.7){
            this.sliderParent.querySelector('.active')?.classList.remove('active');
            this.imgELs[length-1].classList.add('active')
            return true
        } 
        return false
    }

    

}

const sliderParent1 = document.getElementById("sliderParent1")
const slider1 = new Slider(sliderParent1)

slider1.arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        slider1.carousel.scrollLeft += icon.id == "left" ? -slider1.firstImgWidth : slider1.firstImgWidth;
        slider1.checkend = slider1.changeActiveEnd()
        if ( slider1.checkend == false) {
             icon.id == "left" ? slider1.changeActiveLeft() : slider1.changeActiveRight()
        }
        
        
    });
});


slider1.carousel.addEventListener("mousedown", slider1.dragStart);
slider1.carousel.addEventListener("touchstart", slider1.dragStart);

slider1.carousel.addEventListener("mousemove", slider1.dragging);
slider1.carousel.addEventListener("touchmove", slider1.dragging);

slider1.carousel.addEventListener("mouseup", slider1.dragStop);

slider1.carousel.addEventListener("mouseleave", slider1.dragStop);
slider1.carousel.addEventListener("touchend", slider1.dragStop);


slider1.carousel.addEventListener("mousemove", slider1.changeActive);
slider1.carousel.addEventListener("touchmove", slider1.changeActive);
slider1.carousel.addEventListener("mouseleave", slider1.changeActiveEnd);
slider1.carousel.addEventListener("touchend", slider1.changeActiveEnd);


slider1.imgELs.forEach(imgELs => {
    imgELs.addEventListener('click', () => {
        slider1.sliderParent.querySelector('.active')?.classList.remove('active');
    imgELs.classList.add('active')   
});
}); 



const sliderParent2 = document.getElementById("sliderParent2")
const slider2 = new Slider(sliderParent2)

slider2.arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        slider2.carousel.scrollLeft += icon.id == "left" ? -slider2.firstImgWidth : slider2.firstImgWidth;
        slider2.checkend = slider2.changeActiveEnd()
        if ( slider2.checkend == false) {
             icon.id == "left" ? slider2.changeActiveLeft() : slider2.changeActiveRight()
        }
        
        
    });
});


slider2.carousel.addEventListener("mousedown", slider2.dragStart);
slider2.carousel.addEventListener("touchstart", slider2.dragStart);

slider2.carousel.addEventListener("mousemove", slider2.dragging);
slider2.carousel.addEventListener("touchmove", slider2.dragging);

slider2.carousel.addEventListener("mouseup", slider2.dragStop);

slider2.carousel.addEventListener("mouseleave", slider2.dragStop);
slider2.carousel.addEventListener("touchend", slider2.dragStop);

slider2.carousel.addEventListener("mousemove", slider2.changeActive);
slider2.carousel.addEventListener("touchmove", slider2.changeActive);
slider2.carousel.addEventListener("mouseleave", slider2.changeActiveEnd);
slider2.carousel.addEventListener("touchend", slider2.changeActiveEnd);

slider2.imgELs.forEach(imgELs => {
    imgELs.addEventListener('click', () => {
        console.log("click2");
        slider2.sliderParent.querySelector('.active')?.classList.remove('active');
    imgELs.classList.add('active')   
});
}); 
const sliderParent3 = document.getElementById("sliderParent3")
const slider3 = new Slider(sliderParent3)

slider3.arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        slider3.carousel.scrollLeft += icon.id == "left" ? -slider3.firstImgWidth : slider3.firstImgWidth;
        slider3.checkend = slider3.changeActiveEnd()
        if ( slider3.checkend == false) {
             icon.id == "left" ? slider3.changeActiveLeft() : slider3.changeActiveRight()
        }
        
        
    });
});

slider3.carousel.addEventListener("mousedown", slider3.dragStart);
slider3.carousel.addEventListener("touchstart", slider3.dragStart);

slider3.carousel.addEventListener("mousemove", slider3.dragging);
slider3.carousel.addEventListener("touchmove", slider3.dragging);

slider3.carousel.addEventListener("mouseup", slider3.dragStop);

slider3.carousel.addEventListener("mouseleave", slider3.dragStop);
slider3.carousel.addEventListener("touchend", slider3.dragStop);

slider3.carousel.addEventListener("mousemove", slider3.changeActive);
slider3.carousel.addEventListener("touchmove", slider3.changeActive);
slider3.carousel.addEventListener("mouseleave", slider3.changeActiveEnd);
slider3.carousel.addEventListener("touchend", slider3.changeActiveEnd);

slider3.imgELs.forEach(imgELs => {
    imgELs.addEventListener('click', () => {
        console.log("click2");
        slider3.sliderParent.querySelector('.active')?.classList.remove('active');
    imgELs.classList.add('active')   
});
}); 

const sliderParent4 = document.getElementById("sliderParent4")
const slider4 = new Slider(sliderParent4)

slider4.arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        slider4.carousel.scrollLeft += icon.id == "left" ? -slider4.firstImgWidth : slider4.firstImgWidth;
        slider4.checkend = slider4.changeActiveEnd()
        if ( slider4.checkend == false) {
             icon.id == "left" ? slider4.changeActiveLeft() : slider4.changeActiveRight()
        }
        
        
    });
});


slider4.carousel.addEventListener("mousedown", slider4.dragStart);
slider4.carousel.addEventListener("touchstart", slider4.dragStart);

slider4.carousel.addEventListener("mousemove", slider4.dragging);
slider4.carousel.addEventListener("touchmove", slider4.dragging);

slider4.carousel.addEventListener("mouseup", slider4.dragStop);

slider4.carousel.addEventListener("mouseleave", slider4.dragStop);
slider4.carousel.addEventListener("touchend", slider4.dragStop);

slider4.carousel.addEventListener("mousemove", slider4.changeActive);
slider4.carousel.addEventListener("touchmove", slider4.changeActive);
slider4.carousel.addEventListener("mouseleave", slider4.changeActiveEnd);
slider4.carousel.addEventListener("touchend", slider4.changeActiveEnd);

slider4.imgELs.forEach(imgELs => {
    imgELs.addEventListener('click', () => {
        slider4.sliderParent.querySelector('.active')?.classList.remove('active');
    imgELs.classList.add('active')   
});
}); 
