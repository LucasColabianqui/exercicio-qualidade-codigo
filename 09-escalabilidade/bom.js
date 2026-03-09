class UsuarioService {

    constructor(database){
        this.database = database
    }

    adicionarUsuario(usuario){
        this.database.salvar(usuario)
    }

}
