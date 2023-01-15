var select = document.getElementsByName('cars')[0];

// select.onclick = function(event){
//     console.log(event)
// }

function ClickCallBack(event){
    console.log(event)
}

select.addEventListener('click', ClickCallBack)