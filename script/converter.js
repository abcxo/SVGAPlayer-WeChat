var fs = require('fs');
var files = fs.readdirSync('../res/');
for (var index = 0; index < files.length; index++) {
    var element = files[index];
    if (element.endsWith('.svga') && !element.endsWith('.wx.svga')) {
        var base64 = fs.readFileSync('../res/' + element, 'base64');
        fs.writeFileSync('../res/' + element.replace('.svga', '.wx.svga'), base64);
        fs.unlinkSync('../res/' + element);
    }
}
console.log('done');