window.addEventListener("load", function() {
    navbar_load()
})

window.addEventListener("scroll", update);

function update_size(){
    console.log(document.querySelector("#home h1").clientHeight/2)
    document.querySelector("#home img").style.transform = `translate(-50%, calc(50% - ${document.querySelector("#home h1").clientHeight}px))`
    document.querySelector("#sep-1").style.height = `${document.querySelector("#home img").clientHeight/2 - document.querySelector("#home h1").clientHeight}px`
}


sola_img = document.querySelector("#sola img");
sola_section = document.querySelector("#sola");

listen_section = document.querySelector("#listen");


fixed = false
function update(){
    update_size()
    const rect_sola     = sola_section.getBoundingClientRect();
    const rect_sola_img = sola_img.getBoundingClientRect();
    const rect_listen   = listen_section.getBoundingClientRect();
    
    const dist = Math.max(0,Math.min((rect_listen.bottom - rect_sola_img.bottom)/(rect_listen.bottom - rect_sola.bottom),1));
    console.log(dist);
    sola_img.style.opacity = dist;


    const distance_to_middle = rect_sola.top + (rect_sola.height / 2);

    if (distance_to_middle < window.innerHeight/2){
        sola_img.style.position = "fixed";
    }

    if (distance_to_middle > window.innerHeight/2){
        sola_img.style.position = "absolute";
    }
}

window.addEventListener('resize', update_size);