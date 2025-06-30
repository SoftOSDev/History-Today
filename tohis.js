var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://v2.xxapi.cn/api/history', false); 
xhr.send();

    var aa = xhr.responseText;
    var result = JSON.parse(aa);
    
    console.log(result);
const jsonObj = JSON.parse(aa);
while(true){
    num=Math.floor(Math.random() * (20 - 0 + 1)) + 0
    data = jsonObj['data'][num.toString()];
    if(data!=undefined)break;
}
console.log(data); 
document.getElementById("tohis").innerHTML=data;
