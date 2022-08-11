class Producto {
    constructor(nombre, precio, id, img) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.img = img
    }
}
let valorTotal;
const productos = [];
const carrito = [];
productos.push(new Producto("Remera", 300, 1, "https://media.istockphoto.com/photos/happy-smiling-man-portrait-picture-id183870483?k=20&m=183870483&s=612x612&w=0&h=n7JfQX0rL9ZnftW2b3e24wENmcAqIMYFSoHesvWWMug="))
productos.push(new Producto("Pantalon", 500, 2, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/34e88b84-bd8d-40c2-9348-0e753d1ce070/pants-dri-fit-retro-fly-t1gvkv.png'))
productos.push(new Producto("Camisa", 400, 3, 'https://media.revistagq.com/photos/62b0210c64f1d59a3bd596cd/3:4/w_1290,h_1720,c_limit/mejores%20camisas%20de%20rayas%20hombre.jpg'))
productos.push(new Producto("Campera", 600, 4, 'https://assets.adidas.com/images/w_600,f_auto,q_auto/02f61aebd295495389f1ad1a01057311_9366/Campera_Presentacion_Tiro_River_Plate_Gris_GU9639_21_model.jpg'))
const listaProductos = document.getElementById('seccion-productos')
const modalContainer = document.querySelector('#modal-container')
const modal = document.querySelector('#modal')
const cerrarModal = document.querySelector('#modal-close')
cerrarModal.addEventListener('click', () => {
    modalContainer.classList.remove('modal-container-active')
})
for (const producto of productos) {
    const article = document.createElement('article')
    article.className = 'item'
    article.innerHTML = `<h1> ${producto.nombre}</h1>      
                        <div> <img class="imagen" src = ${producto.img} alt = " "> </div>
                        <h2> $${producto.precio} </h2> `
    listaProductos.append(article)
    const btn1 = document.createElement('button')
    btn1.id = 'btn1'
    btn1.innerHTML = `<p>Agregar producto</p>`
    article.append(btn1)
    btn1.addEventListener('click', () => {
        modalContainer.classList.add('modal-container-active')
        carrito.push(producto)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
}
const sectionCarrito = document.querySelector('#cart-seccion')
const carritoContainer = document.querySelector('#carrito-container')
const carritoDiv = document.querySelector('#carrito')
const carritoList = document.querySelector('#carritoList');
const btn3 = document.createElement('button')
btn3.id = 'openCarrito'
btn3.innerHTML = `<img class="cart" src="./img/shopping_cart_FILL0_wght400_GRAD0_opsz48.png" alt="">`
const btn4 = document.createElement('button')
btn4.id = 'closeCarrito'
btn4.innerHTML = `<p> Pagar </p>`
btn4.addEventListener('click', () => {
    location.href = 'pages/pay.html';
})
const btn5 = document.querySelector('#btn5')
btn5.addEventListener('click', () => {
    carritoContainer.classList.remove('carrito-container-active')
})
btn3.addEventListener('click', () => {
    carritoContainer.classList.add('carrito-container-active')
    valorTotal = carrito.reduce((valorAcc, item) => { return valorAcc + item.precio; }, 0);
    carritoDiv.innerHTML = ` <h1> El valor total es $${valorTotal} </h1>
                             <div> Los productos que selecionaste son: ${carrito.length}</div>
                             `
                             for(const item of carrito){
                                carritoDiv.innerHTML += `<p>${item.nombre}</p>`
                              }
    carritoDiv.append(btn4, btn5)
})
sectionCarrito.append(btn3)

