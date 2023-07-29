const fill = document.querySelector('.fill');
const empties = document.querySelector('empty')


//fill listers
fill.addEventListener('dragstart', dragstart)
fill.addEventListener('dragend', dragend)

//Loop trough empty boxes and add listeners

for (const empty of empties) {
    
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

//drag Functions
function dragstart() {
    this.className += 'hold'
    setTimeout(() => {
        this.className += 'invisible'
    }, timeout);
}

function dragEnd() {
    this.className =  'fill'
}

function dragOver(e) {
    e.preventDefault() 
}
function dragEnter(e) {
    e.preventDefault() 
    this.className += 'hovered'
}
function dragLeave() {
    this.className += 'empty'
}
function dragDrop() {
    this.className += 'empty'
    this.append('fill')
}