function upDate(previewPic){
    const divimg = document.getElementById("image")
    divimg.innerHTML = previewPic.alt
    divimg.style.backgroundImage = 'url(' + previewPic.src + ')'
}

function unDo(){
    const divimg = document.getElementById("image")
    
}