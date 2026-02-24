const simularResultados = [
    {vitorias: 10, derrotas: 2},
    {vitorias: 78, derrotas: 32},
    {vitorias: 100, derrotas: 2},
    {vitorias: 101, derrotas: 0},
    {vitorias: 90, derrotas: 7},
    {vitorias: 98, derrotas: 15},
    {vitorias: 109, derrotas: 19},
    {vitorias: 100, derrotas: 0},
    {vitorias: 85, derrotas: 5},
]
 
const calcularPartidasRankeadas = (vitorias, derrotas) => vitorias - derrotas;

const listarRanking = (vitorias) => {
    if(vitorias < 10) return "Ferro";
    if(vitorias >= 11 && vitorias <= 20) return "Bronze";
    if(vitorias >= 21 && vitorias <= 50) return "Prata";
    if(vitorias >= 51 && vitorias <= 80) return "Ouro";
    if(vitorias >= 81 && vitorias <= 90) return "Diamante";
    if(vitorias >= 91 && vitorias <= 100) return "Lendário";
    return "Imortal"; 
}

const imprimirResultado = () => {
    for (let i = 0; i < simularResultados.length; i++) {
        
        const { vitorias, derrotas } = simularResultados[i];

        const saldoVitorias = calcularPartidasRankeadas(vitorias, derrotas);
        const nivel = listarRanking(saldoVitorias);

        console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);
    }
}

imprimirResultado();
