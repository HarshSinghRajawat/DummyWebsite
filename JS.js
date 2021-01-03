function testPage(){
    console.log('Hello From Javascript');
    var heading=document.getElementById('content-heading');
    heading.innerHTML='Hello from JavaScript';
    var text=document.createTextNode(heading+'\n'+'Upadted');
    document.getElementById('content-text').innerText='ABC\nUpdated';
}