//Tramanh Best

var fs = require('fs');
const $ = require('jquery');



test('test selectEvent', () => {
    var spawn = require("child_process").spawn;   
    spawn("powershell.exe",["npm install -D jest-environment-jsdom"]);
    
    //Read the index.html file into a string
    var html = fs.readFileSync('public/index.html', 'utf8');
    expect(html).toEqual(expect.anything()); //any non-null value is okay
    //put the HTML into a testing DOM and do a sanity check
    document.body.innerHTML = html;
    const $ = require('jquery');
    $(function() {
        expect($('h1').html()).toBe("Cheesecake Order Form");
    });
});