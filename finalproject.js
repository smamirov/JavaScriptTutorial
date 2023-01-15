let elements = document.getElementsByName('cssProperty');
let div = document.getElementById('modify')

function set(){
    for (let i=0; i < elements.length; i++){
        let cssProperty = elements[i].getAttribute('id') // Background/Width/Height
        let cssValue = elements[i].value // Green/Blue/Yello, 100/200/300, 100/200/300

        div.style[cssProperty] = cssValue;
    }
}

document.getElementById('set').addEventListener('click', set);
