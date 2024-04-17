function sum(){
    var A=parseFloat(document.getElementById('A').value);
    var B=parseFloat(document.getElementById('B').value);
    if (isNaN(A)||isNaN(B)){
        document.getElementById('kq').innerText='Không đúng định dạng';}
    else {document.getElementById('kq').innerText='A+B='+(A+B);}
    }
function subtract(){
    var A=parseFloat(document.getElementById('A').value);
    var B=parseFloat(document.getElementById('B').value);
    if (isNaN(A)||isNaN(B)){
        document.getElementById('kq').innerText='Không đúng định dạng';}
    else {document.getElementById('kq').innerText='A-B='+(A-B);}
    }
 function multiply(){
    var A=parseFloat(document.getElementById('A').value);
    var B=parseFloat(document.getElementById('B').value);
    if (isNaN(A)||isNaN(B)){
        document.getElementById('kq').innerText='Không đúng định dạng';}
    else {document.getElementById('kq').innerText='AxB='+(A*B);}
    }
function divide(){
    var A=parseFloat(document.getElementById('A').value);
    var B=parseFloat(document.getElementById('B').value);
    if (isNaN(A)||isNaN(B)){
        document.getElementById('kq').innerText='Không đúng định dạng';}
    else if (B==0){
        document.getElementById('kq').innerText='Không thể chia cho 0'
    }
    else {document.getElementById('kq').innerText='A/B='+(A/B);}
    }
function reset(){
    document.getElementById('A').value='';
    document.getElementById('B').value='';
    document.getElementById('kq').innerText='';
}