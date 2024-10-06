let decisao = prompt('----Central de atendimento----\nEscolha: 1, Clinico geral. 2, Otorrino. 3 Gastro')
  if (decisao == 1){
  let escolhaClinico = prompt('----Clinico Geral----\n 1, Agendar consulta. 2, Falar com medico. 3, Sair.')
  if (escolhaClinico == 1){
    let nome = prompt('Digite o seu nome para agendamento')
    let telefone = prompt('Digite o seu telefone para contado')
    window.alert(`Nome:${nome}\nTelefone ${telefone}\nVocê Confima?`)
  }
   else if(escolhaGastro == 2){
   window.alert('Você sera encaminhado para o medico')
  }
}
else if(decisao == 2){
  let escolhaOtorrino = prompt('----Otorrino----\n 1, Agendar consulta. 2, Falar com medico. 3, Sair.')
  if (escolhaOtorrino == 1){
    let nome = prompt('Digite o seu nome para agendamento')
    let telefone = prompt('Digite o seu telefone para contado')
    window.alert(`Nome:${nome}\nTelefone ${telefone}\nVocê Confima?`)
  }
   else if(escolhaGastro == 2){
   alert('Você sera encaminhado para o medico')
  }
}

else if(decisao == 3){
  let escolhaGastro = prompt('----Gastro----\n 1, Agendar consulta. 2, Falar com medico. 3, Sair.')
  if (escolhaGastro == 1){
    let nome = prompt('Digite o seu nome para agendamento')
    let telefone = prompt('Digite o seu telefone para contado')
    window.alert(`Nome:${nome}\nTelefone ${telefone}\nVocê Confima?`)
  }
  else if(escolhaGastro == 2){
   window.alert('Você sera encaminhado para o medico')
  }
}

// ------------------------------------------------------------------------------------------

let horaOnibus = prompt('Qual oinbus voce quer saber a hora: 1.Jardim Atlantico 2.Rio Doce 3.PE-15')

if (horaOnibus === '1') {
  window.alert('O onibus Jardim Atlantico passa as 13:50')
}

else if (horaOnibus === '2') {
  window.alert('O onibus Rio Doce passa as 14:00')
}

else if (horaOnibus === '3') {
  window.alert('O onibus PE-15 passa as 15:30')
}

else {
  window.alert('Valor invalido')
}
