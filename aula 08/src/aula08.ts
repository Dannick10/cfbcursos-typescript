let dados:object={
    nome:"Daniel",
    idade:24,
    status: 'A',
    ola: ()=>{console.log(dados.nome + ' say:oi')},
    info: (p:string)=>{console.log(p)}
};

dados.nome='Daniel Rocha';
console.log(typeof(dados));
console.log(dados.nome);
dados.ola();
dados.info(dados.status);
