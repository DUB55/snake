## Template:
document.querySelector('your-selector-here').style.display = 'none';

(get selector by: selecting element by inspecting, right click --> select, copy - selector
## Discord:
document.querySelector('#mod-loader-title > span:nth-child(3) > a > img').style.display = 'none';



## Snake:
document.querySelector('#mod-loader-title > span:nth-child(1) > a > img').style.display = 'none';



## To change color of the h1 Snake Mod Loader:
const element = document.querySelector('#mod-loader-title > h1');

if (element) {
    element.style.color = '#ff0000';
}


