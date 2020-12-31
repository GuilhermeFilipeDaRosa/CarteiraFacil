function init() {
    criarBancoDeDados();
}

function criarBancoDeDados() {
    let db = openDatabase('mydb', '1.0', 'carteiraFacil', 2 * 1024 * 1024);

    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS USUARIO (ID SUSUARIO, EMAIL, SENHA)');
    });
}

init();