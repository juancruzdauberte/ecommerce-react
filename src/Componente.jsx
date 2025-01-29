const productos = [{
    id: 1,
    nombre: "Juan"
},
{
    id: 2,
    nombre: "Pilaarr"
}]

export default function Componente(){
    const listaProductos = productos.map(producto => <li key={producto.id}>{producto.nombre}</li>)
    return(<ul>{listaProductos}</ul>)
}