import { useState } from "react";
import { addItem } from "../../../firebase";

export const NewProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "", //estas propiedades deben ser igual a la de los inputs.
    stock: "",
    url: "",
    description: "",
    category: "",
  });

  const funcionForm = (evento) => {
    evento.preventDefault();
    addItem(product); //importo la funcion de addItem de firebase.js donde esta misma va a recibir por parametro el producto que se envie en el formulario
    console.log(product);
  };

  const funcionInput = (evento) => {
    const { value, name } = evento.target; //name es el nombre que tiene el input y value es su valor
    setProduct({ ...product, [name]: value }); // hacemos una copia del objeto. [name]: value actualiza o agrega una PROPIEDAD dinámica en el objeto.
  };
  return (
    <main>
      <section>
        <form onSubmit={funcionForm}>
          <div className="label-input">
            <label>Titulo</label>
            <input
              type="text"
              placeholder="Titulo"
              name="title"
              onChange={funcionInput}
            />
          </div>
          <div className="label-input">
            <label>Url imagen</label>
            <input
              type="text"
              placeholder="Url imagen"
              name="url"
              onChange={funcionInput}
            />
          </div>
          <div className="label-input">
            <label>Categoria</label>
            <input
              type="text"
              placeholder="Categoria"
              name="category"
              onChange={funcionInput}
            />
          </div>
          <div className="label-input">
            <label>Descripcion</label>
            <input
              type="text"
              placeholder="Descripcion"
              name="description"
              onChange={funcionInput}
            />
          </div>
          <div className="label-input">
            <label>Precio</label>
            <input
              type="number"
              placeholder="Precio"
              name="price"
              onChange={funcionInput}
            />
          </div>
          <div className="label-input">
            <label>Disponibilidad</label>
            <input
              type="number"
              placeholder="Disponibilidad"
              name="stock"
              onChange={funcionInput}
            />
          </div>

          <div className="btn-container">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </section>
    </main>
  );
};
