salario = 3400;
console.log(`Seu salario bruto é de ${salario}`);

if (salario >= 2259.21 && salario <= 2826.65){
    desconto = 169.75
    rrpf = salario * 0.075
    salario_liqui = salario - rrpf + desconto
    console.log(`Seu salario liquido é de ${salario_liqui}`)
}

else if(salario > 2826.65 && salario <= 3751.05){
    desconto = 381.44
    rrpf = salario * 0.15
    salario_liqui = salario - rrpf + desconto
    console.log(`Seu salario liquido é de ${salario_liqui}`)
}

else if(salario > 3751.05){
    desconto = 866.71
    rrpf = salario * 0.25
    salario_liqui = salario - rrpf + desconto
    console.log(`Seu salario liquido é de ${salario_liqui}`)
}

else{
    console.log(`Seu salario ${salario} esta muito baixo para ser taxado`)
};