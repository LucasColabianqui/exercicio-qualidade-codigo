function procurarNumero(lista, numero) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            return true
        }
    }
    return false
}
