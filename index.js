window.addEventListener("load", function() {
    navbar_load()
    update()
    update_size()
})

window.addEventListener("scroll", update);

function update_size(){
    console.log(document.querySelector("#home h1").clientHeight/2)
    document.querySelector("#home img").style.transform = `translate(-50%, calc(50% - ${document.querySelector("#home h1").clientHeight}px))`
    document.querySelector("#sep-1").style.height = `${document.querySelector("#home img").clientHeight/2 - document.querySelector("#home h1").clientHeight}px`
    document.querySelector(".spacer").style.height = `${document.querySelector("#listen img").clientHeight/2}px`
}


img = document.querySelector("#listen img");
section = document.querySelector("#listen");

listen_section = document.querySelector("#listen");



function update(){
    const parentElement = document.querySelector('#listen');
    const childElement = document.querySelector('#listen img');
    
    const parentBox = parentElement.getBoundingClientRect();
    const childBox = childElement.getBoundingClientRect();

    const way = (childBox.top - parentBox.top)/(parentBox.height - childBox.height*(3/2))
    
    childElement.style.opacity = 1-way

}

window.addEventListener('resize', update_size);