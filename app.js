

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
        this.isDragStart = false, this.prevPageX, this.prevScrollLeft;
        this.firstImgWidth = this.firstImg.clientWidth + 14;
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

}

const sliderParent1 = document.getElementById("sliderParent1")
const slider1 = new Slider(sliderParent1)

slider1.arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        slider1.carousel.scrollLeft += icon.id == "left" ? -slider1.firstImgWidth : slider1.firstImgWidth;
        
    });
});


slider1.carousel.addEventListener("mousedown", slider1.dragStart);
slider1.carousel.addEventListener("touchstart", slider1.dragStart);

slider1.carousel.addEventListener("mousemove", slider1.dragging);
slider1.carousel.addEventListener("touchmove", slider1.dragging);

slider1.carousel.addEventListener("mouseup", slider1.dragStop);

slider1.carousel.addEventListener("mouseleave", slider1.dragStop);
slider1.carousel.addEventListener("touchend", slider1.dragStop);

slider1.imgELs.forEach(imgELs => {
    imgELs.addEventListener('click', () => {
        console.log("click1");
        slider1.sliderParent.querySelector('.active')?.classList.remove('active');
    imgELs.classList.add('active')   
});
}); 



const sliderParent2 = document.getElementById("sliderParent2")
const slider2 = new Slider(sliderParent2)

slider2.arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        slider2.carousel.scrollLeft += icon.id == "left" ? -slider2.firstImgWidth : slider2.firstImgWidth;
        
    });
});


slider2.carousel.addEventListener("mousedown", slider2.dragStart);
slider2.carousel.addEventListener("touchstart", slider2.dragStart);

slider2.carousel.addEventListener("mousemove", slider2.dragging);
slider2.carousel.addEventListener("touchmove", slider2.dragging);

slider2.carousel.addEventListener("mouseup", slider2.dragStop);

slider2.carousel.addEventListener("mouseleave", slider2.dragStop);
slider2.carousel.addEventListener("touchend", slider2.dragStop);

slider2.imgELs.forEach(imgELs => {
    imgELs.addEventListener('click', () => {
        console.log("click2");
        slider2.sliderParent.querySelector('.active')?.classList.remove('active');
    imgELs.classList.add('active')   
});
}); 