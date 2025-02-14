const mockDados = {
    lojas:[
        {id:'1', descricao:'descricao',endereco:'endereco x',nome: 'Pizzaria Ria',endereço: 'rua rua',image:"https://i.pinimg.com/736x/49/0b/64/490b640ca8bb4726489296c98509fdb6.jpg",famoso: true, categoria: 'Pizza'},
        { id: '3',descricao:'descricao',endereco:'endereco x', nome: "Pizza Express", famoso: true ,categoria: "Pizza", image: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
        { id: '7',descricao:'descricao',endereco:'endereco x', nome: "Pizza Kelly", famoso: true,categoria: "Pizza", image: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
        { id: "1",descricao:'descricao',endereco:'endereco x', famoso: true,nome: "loja 1",categoria: "Açaí", image: "https://i.pinimg.com/736x/49/0b/64/490b640ca8bb4726489296c98509fdb6.jpg" },
        { id: "2", descricao:'descricao',endereco:'endereco x',famoso: false,nome: "loja 2", categoria: "Açaí",image: "https://img.freepik.com/psd-premium/maquete-do-logotipo-da-fachada-do-restaurante_204971-178.jpg" },
        { id: "3",descricao:'descricao',endereco:'endereco x', famoso: true,nome: "loja 3", categoria: "Pizza",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUtcjnw6soxq4YGuO2wubAoTURqM9Fh4pOA&s" },
        { id: "4", descricao:'descricao',endereco:'endereco x',famoso: false,nome: "loja 4",categoria: "Sushi", image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/12/47/7c/fachada-do-restaurante.jpg" },
        { id: "5", descricao:'descricao',endereco:'endereco x',famoso: true,nome: "loja 5", categoria: "Pizza",image: "https://i.ytimg.com/vi/8_wTuWNEyYM/sddefault.jpg" },
        { id: "6", descricao:'descricao',endereco:'endereco x',famoso: true,nome: "loja 6", categoria: "Sushi",image: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },

    ],
    produtos:[
        { id: '3', nome: "Pizza Marguerita", preco: 25.99, categoria: "Pizza", maisVendido: true, lojaId: 3, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
        { id: '7', nome: "Pizza Portuguesa", preco: 25.99, categoria: "Pizza", maisVendido: true,lojaId: 3, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
        { id: "1", preco: 25.99, nome:"Produto x", categoria: "Açaí",image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 1" },
        { id: "2", preco: 25.99, nome:"Produto x",categoria: "Pizza",image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 2" },
        { id: "3", preco: 25.99, nome:"Produto x",categoria: "Sushi",image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 3" },
        { id: "4", preco: 25.99, nome:"Produto x",categoria: "Pizza",image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 4" },
        { id: "5", preco: 25.99, nome:"Produto x",categoria: "Pizza",image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 5" },
        { id: "6", preco: 25.99, nome:"Produto x",categoria: "Pizza",image: "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1", description: "Descrição do Item 6" },
      
    ]

}