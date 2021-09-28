let img = document.querySelector('img');
const containerIcon = document.querySelector('.circle');

let c = 0;
let images = ['https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80s', 'https://images.unsplash.com/photo-1532032494808-2d255d4122ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', 'https://images.unsplash.com/photo-1531870517049-f0c546fa559e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80', 'https://images.unsplash.com/photo-1438786657495-640937046d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1515019915774-f4887104b715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'];
let n = images.length-1;
let reverse = images.length - 1;
const circleDraw = { width: '15px', height: '15px', borderRadius: '50%'};
const fill=[]

for (let i = 0; i < images.length; i++){
    let cir = document.createElement('span');
    cir.style.display = 'inline-block';
    cir.style.width = circleDraw.width;
    cir.style.height = circleDraw.height;
    cir.style.borderRadius = circleDraw.borderRadius;
    cir.style.border = '1px solid #343436';
    containerIcon.append(cir);
    fill.push(cir);
}


fill[0].style.backgroundColor = 'white';
setInterval(() => {
    fill[c].style.backgroundColor = '';
    if (c < images.length - 1) {
        reverse = images.length - 1;
        c = c + 1;
        img.src = images[c];
        img.style.animation = 'fade 3s ease infinite'
        fill[c].style.backgroundColor = 'white';
        fill[c].style.transition = '1s background-color ease-in-out';
    }
    
    else {
        if (reverse === 0) {
            c = 0
        }
        else {
            fill[reverse].style.backgroundColor=''
            img.style.animation = 'fade 3s ease infinite'
            reverse -= 1
            img.src = images[reverse]
            fill[reverse].style.backgroundColor = 'white';
            fill[reverse].style.transition = '1s background-color ease-in-out';

        }
    }
    img.style.animation=animation.fade;

}, 3000)