export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
    // constructor garante que todos os dados que são necessários para que o objeto, que é gerado a partir da classe, sejam passados. Garantir que todos os usuarios vão ter as informações necessárias quando a nova instancia da classe for criada. A forma de instanciar a classe, passando propriedades para dentro dela, é através do constructor.
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome() {
        // pode ter lógica condicional
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
    // utilizamos o set para alterar e validar as alterações (antes que sejam feitas) das propriedades de uma classe que já esta instanciada 
        if (novoNome === ''){
            throw new Error('Formato não valido')
        }
        this.#nome = novoNome
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}