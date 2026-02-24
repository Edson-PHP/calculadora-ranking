# ⚡ Projeto – Calculadora de Partidas Rankeadas
## 🚀 Visão Geral

**Aplicação JavaScript simples, funcional e interativa**, focada em calcular o saldo de partidas ranqueadas de um jogador e determinar seu nível de ranking.

---

## ✅ Solução Implementada

Aplicação desenvolvida em **JavaScript puro**, utilizando:

- Variáveis  
- Operadores  
- Laços de repetição  
- Estruturas de decisão (`if/else`)  
- Funções  

A lógica implementa:

- Cálculo do saldo de partidas: `vitórias - derrotas`  
- Determinação do nível do jogador com base no número de vitórias:

| Vitórias | Nível |
|----------|-------|
| < 10     | Ferro |
| 11–20    | Bronze |
| 21–50    | Prata |
| 51–80    | Ouro |
| 81–90    | Diamante |
| 91–100   | Lendário |
| ≥101     | Imortal |

---

## 🧩 Funcionalidades Principais

- Cálculo automático do saldo de vitórias  
- Determinação do ranking do jogador  
- Exibição da mensagem final no formato:

O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}

- Suporte a múltiplos jogadores através de array de simulação  

---

## 🧠 Arquitetura e Boas Práticas

- Separação clara entre funções:
  - `calcularPartidasRankeadas` → cálculo do saldo  
  - `listarRanking` → determinação do nível  
- Código legível e comentado  
- Uso correto de `if/else if` e operadores lógicos `&&`  
- Tipagem implícita controlada com `Number()` quando necessário  
- Estrutura iterativa clara (`for`) para múltiplos resultados  

---

## 🧪 Testes e Simulação

- O projeto inclui array de resultados simulados para testes  
- Cada item do array representa `vitorias` e `derrotas` de um jogador  
- A execução do código imprime no console o resultado de cada simulação  

---

## Rodar o Projeto

1. Clone o projeto com o comando git clone e o endereço do projeto
1. Certifique-se de ter o **Node.js** instalado.   
3. Abra o terminal do Visual Studio Code com o comando: Ctrl + '
4. Rode o comando abaixo no terminal do Visual Studio Code
```bash
node index.js
