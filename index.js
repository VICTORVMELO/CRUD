(async () => {

    const database = require('./db');
    const Produto = require('./models/produto');
    const Fabricante = require('./models/fabricante');
    await database.sync({force: true});

    const novoFabricante = await Fabricante.create({
        nome: 'Apple'
    })

    /*const novoProduto = Produto.create({
        nome: 'MacBook',
        preco: 10000,
        descricao: 'Notebook da Apple',
        idfabricante: novoFabricante.id
    })
    console.log(novoProduto);*/


  /* const produto = await produto.findByPk(1, { include: Fabricante });
  console.log(produto.Fabricante.nome);*/
    
    const fabricante = await Fabricante.findByPk(1, {include: Produto});
    const produto = await fabricante.getProdutos();
    console.log(fabricante.produto);
    

    /*const produto = await Produto.findByPk(1);
    console.log(produto);*/

    /* produto.descricao = 'Fiz uma alteração';
    produto.save();  */
/* 
    await Produto.destroy();

    await Produto.destroy ({ where: {
        preco: 30
    }})  */
})();