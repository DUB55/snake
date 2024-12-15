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

