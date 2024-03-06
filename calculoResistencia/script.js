function FazerCalculo(){
    let valueF01= document.getElementById("faixa01").value;
    //alert (valueF01);
    let valueF02= document.getElementById("faixa02").value;
    //alert (valueF02);
    let mult= parseFloat (document.getElementById("mult").value);
    //alert (mult);
    let tol= parseFloat (document.getElementById("tol").value);
    //alert (tol);

    let juntar= valueF01+""+ valueF02;
    let resistencia= juntar * mult;
    tol= resistencia * tol;
    let tolemin= resistencia - tol;
    let tolmax= resistencia+ tol;
    //alert(operacao);  
    //alert(tol);
    document.getElementById('result').value=resistencia;
    document.getElementById('resulTol').value=tolemin + " / " + tolmax;
}