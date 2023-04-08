//Passo 1

class Aluno {
    constructor(nome, quantidadeDeFaltas, notas) {
        this.nome = nome;
        this.quantidadeDeFaltas = quantidadeDeFaltas;
        this.notas = notas;

    }

//Passo 2

    calcularMedia() {
        let soma = 0;
        for (const nota of this.notas) {
            soma += nota;
        }
        return soma / this.notas.length;
    }

//Método faltas

    faltas() {
        this.quantidadeDeFaltas++;
    }
}
// Teste de Classe.

const novoAluno = new Aluno('Vinicius', 0, [7, 8, 9]);
console.table(novoAluno);

const alunos = {
    estudantes: [],
    adicionarAluno(nome, quantidadeDeFaltas, notas) {
        const adAluno = new Aluno(nome, quantidadeDeFaltas, notas);
        this.estudantes.push(adAluno);
    },
};

    alunos.adicionarAluno("Kelly", 0, [9, 9, 9]);
    alunos.adicionarAluno("Maria Eduarda", 0, [8, 6, 9]);
    alunos.adicionarAluno("Eduardo", 0, [10, 3, 7]);
    console.table(alunos.estudantes);

//Passo 3 
const curso = {
    nomeCurso: "dh",
    notaAprovacao: 7,
    faltasMax: 10,
    listaEstudantes: [aluno1 = "Vinicius", aluno2 = "Maria Eduarda", aluno3= "Eduardo"],


//Passo 4 

    adicionarAluno(nome, quantidadeDefaltas, notas) {
        const adAluno = new Aluno(nome, quantidadeDefaltas, notas);
        this.listaEstudantes.push(adAluno);
    },

//Passo 5

    consultarAluno(alunoAserConsultado) {
        for (const aluno of this.listaEstudantes) {
          if (aluno.nome === alunoAserConsultado) {
            return aluno;
          }
          return null;
        }
        if (
          calcularMedia() >= this.notaAprovacao &&
          Aluno.quantidadeDefaltas < this.faltasMax
        ) {
          return true;
        } else if (
          Aluno.quantidadeDefaltas == this.faltasMax &&
          this.notaAprovacao (0.1) > this.notaAprovacao
        ){
          return true;
        } else {
          return false;
        }
      },
      aprovadoReprovado() {
        let aprovadoReprovado = [];
        for (const list of this.listaEstudantes) {
          aprovadoReprovado += list;
        }
        return aprovadoReprovado;
      },
    };
    
    curso.adicionarAluno("Kauana", 0, [6.5, 7.2, 8.3]);
    //console.table(curso.listaEstudantes);
    const buscarAluno = curso.consultarAluno("Kauana");
    //console.table(buscarAluno);