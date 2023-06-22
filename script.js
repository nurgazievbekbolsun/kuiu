const box = document.querySelectorAll('.box')
const colors = ["red","yellow","blue","black"]

box.forEach((el,idx)=>{
    el.addEventListener('click',()=>{
        box.forEach((el,idx)=>{
            el.style.background = 'none'
        })
        if (idx === box.length -1){
            return idx = -1
        }
        box[idx + 1].style.background = bac()
    })
})
function bac(){
    let idx = Math.round(Math.random() * colors.length)
    return colors[idx]
}