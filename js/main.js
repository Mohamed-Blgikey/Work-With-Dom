

let imgs = Array.from(document.querySelectorAll("#item img"));
let view = document.getElementById('view');
let content = document.getElementById('content');
let ecs = document.getElementById("close");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let currentIndex =0;
for (let index = 0; index < imgs.length; index++) {
    // console.log(imgs[index]);
    imgs[index].addEventListener('click',function(){
        // console.log(this);
        currentIndex = index;
        // console.log(currentIndex);
        let imgSrc = this.getAttribute("src");
        // console.log(imgSrc);
        view.style.display = "flex";
        content.style.backgroundImage = `url(${imgSrc})`;

    });  
}

ecs.addEventListener("click",function(){
    view.style.display = "none";
});

document.addEventListener("keydown",function(e){
    // console.log(e.key);
    if (e.key == "Escape") {
        view.style.display = "none";
    }
    else if(e.key == "ArrowRight")
    {
        nextImg();
    }
    else if(e.key == "ArrowLeft")
    {
        prevImg();
    }
});

prev.addEventListener("click",prevImg);
function prevImg(){
    if(currentIndex == 0)
    {
        currentIndex = imgs.length-1;
    }
    let imgSrc = imgs[--currentIndex].getAttribute("src");
    // console.log(imgSrc);
    content.style.backgroundImage = `url(${imgSrc})`;

}

next.addEventListener("click",nextImg);
function nextImg(){
    if (currentIndex == imgs.length-1) {
        currentIndex = 0;
    }
    let imgSrc = imgs[++currentIndex].getAttribute("src");
    // console.log(imgSrc);
    content.style.backgroundImage = `url(${imgSrc})`;
}