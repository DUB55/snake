# Here are all notes:

## Templates:

### To hide a element:
        document.querySelector('your-selector-here').style.display = 'none';
### To make text white:
        const changeTextColorToWhite = selector => { const element = document.querySelector(selector); if (element) element.style.color = 'white'; }; changeTextColorToWhite('selector-here');
### To edit a color of a element:
        const changeTextColor = (selector, color) => { const element = document.querySelector(selector); if (element) element.style.color = color; };
        changeTextColor('your-selector-here', '#ff0000');

## Javascript to make text white:
        
        function changeTextColorToWhite(selector) {
        const element = document.querySelector(selector);
        if (element) {
        element.style.color = 'white';
        }
        }

    	changeTextColorToWhite('selector-here');


## Javascript to edit the color of the menu (to a color gradient):

    function applyGradient(selector, gradient) {
    const element = document.querySelector(selector);  
    if (element) {
    element.style.background = gradient;
    console.log(`Gradient applied to ${selector}`);
    } else {
  
    console.log(`Element with selector ${selector} not found`);
    }
    }

    applyGradient('#mod-selector-dialogue', 'linear-gradient(to top, #000033, #00008B)');


## Template:
document.querySelector('your-selector-here').style.display = 'none';

(get selector by: selecting element by inspecting, right click --> select, copy - selector

## To hide authors for every mode : 
### More Menu Mod:
document.querySelector('#mod-descriptions > div:nth-child(1) > span:nth-child(3)').style.display = 'none';

### Level Editor Mode :
document.querySelector('your-selector-here').style.display = 'none';

### Mouse Mode:
document.querySelector('your-selector-here').style.display = 'none';

### Pudding Mod:
document.querySelector('your-selector-here').style.display = 'none';

### More Pudding Mod:
document.querySelector('your-selector-here').style.display = 'none';

### Visibility Mod:
document.querySelector('your-selector-here').style.display = 'none';

### Chess Mod:
document.querySelector('your-selector-here').style.display = 'none';

### Chimera Mod:
document.querySelector('your-selector-here').style.display = 'none';

### Conway Mod:
document.querySelector('your-selector-here').style.display = 'none';

### Candy Mod:
document.querySelector('your-selector-here').style.display = 'none';

## Template:
document.querySelector('your-selector-here').style.display = 'none';

(get selector by: selecting element by inspecting, right click --> select, copy - selector

## To hide descriptions for various modes : 
### More Menu Mod:
document.querySelector('#mod-descriptions > div:nth-child(1) > span:nth-child(5)').style.display = 'none';

### Level Editor Mode :
document.querySelector('#mod-descriptions > div:nth-child(2) > span:nth-child(5)').style.display = 'none';

### Mouse Mode:
document.querySelector('#mod-descriptions > div:nth-child(3) > span:nth-child(5)').style.display = 'none';

### Pudding Mod:
document.querySelector('#mod-descriptions > div:nth-child(4) > span:nth-child(5)').style.display = 'none';

### More Pudding Mod:
document.querySelector('#mod-descriptions > div:nth-child(5) > span:nth-child(5)').style.display = 'none';

### Visibility Mod:
document.querySelector('#mod-descriptions > div:nth-child(6) > span:nth-child(5)').style.display = 'none';

### Chess Mod:
document.querySelector('#mod-descriptions > div:nth-child(7) > span:nth-child(5)').style.display = 'none';

### Chimera Mod:
document.querySelector('#mod-descriptions > div:nth-child(8) > span:nth-child(5)').style.display = 'none';

### Conway Mod:
document.querySelector('#mod-descriptions > div:nth-child(9) > span:nth-child(5)').style.display = 'none';

### Candy Mod:
document.querySelector('#mod-descriptions > div:nth-child(10) > span:nth-child(5)').style.display = 'none';

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
