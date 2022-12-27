function calc()
{
    const n1 = parseFloat(document.getElementById('n2').value);
    let n2 = parseFloat(document.getElementById('n2').value);

    let oper = document.getElementById('operators').value;

    if(oper === '+')
    {
        document.getElementById('result').value = n1+n2;
    }

    if(oper === '-')
    {
        document.getElementById('result').value = n1-n2;
    }

    if(oper === '*')
    {
        document.getElementById('result').value = n1*n2;
    }
    reset()
}
function reset () {
    document.getElementById('n1').value = ''
    document.getElementById('n2').value = ''
}

