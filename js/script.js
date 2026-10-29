// DATOS PARA FILTRAR //

// primer filtro: proyectos //

const dwmireille = [

// Proyectos //

{id: 1, name:"2 años",image: "img/hembra 1.jpg", genero: "Hembra", description: "Es cariñosa y tranquila. Le gusta estar acompañada y disfrutar de las caricias."},
{id: 2, name:"1 años",image: "img/hembra 2.jpg", genero: "Hembra", description: "Es una gatita dulce e independiente. Disfruta descansar en lugares cómodos y jugar de vez en cuando."},
{id: 3, name:"7 meses",image: "img/hembra 3.jpg", genero: "Hembra", description: "Es una gatita dulce y juguetona, le encanta tomar siestas al sol y que la acaricien."},
{id: 4, name:"1 mes",image: "img/hembra 4.jpg", genero: "Hembra", description: "Es una gatita bebé, tierna y curiosa. Le encanta dormir, jugar y recibir cariño."},

//unete
{id: 1, name:"2 meses",image: "img/macho 1.jpg", genero: "Macho", description: "Es un gatito bebé, curioso y cariñoso. Le encanta jugar con pelotitas y recibir atención."},
{id: 2, name:"8 meses",image: "img/macho 2.jpg", genero: "Macho", description: "Es un gatito joven, juguetón y sociable. Le gusta explorar, correr y convivir con las personas."},
{id: 3, name:"3 meses",image: "img/macho 3.jpg", genero: "Macho", description: "Es un gatito tranquilo y amoroso. Disfruta las siestas, las caricias y estar en un lugar seguro."},
{id: 4, name:"2 meses",image: "img/macho 4.jpg", genero: "Macho", description: "Es un gatito bebé, juguetón y adorable. Le gusta dormir mucho y explorar poquito a poquito."},
]


// Obtener los contenedores y botones del DOM
const dwmireilleContainer = document.getElementById("adopcion-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwmireilleToRender = [];
    if (genero === "all") {
        dwmireilleToRender = dwmireille;
    } else {
        dwmireilleToRender = dwmireille.filter(Dwmireille => Dwmireille.genero === genero);
    }
}