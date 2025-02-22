import "./contacto.css";
import { EmailWidget } from "../../common/widgets/emailWidget/EmailWidget";
import { InstagramWidget } from "../../common/widgets/instagramWidget/InstagramWidget";
import { WppWidget } from "../../common/widgets/wppWidget/WppWidget";
import { TikTokWidget } from "../../common/widgets/tiktokWidget/TikTokWidget";
import { useState } from "react";

export const Contacto = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "", //estas propiedades deben ser igual a la de los inputs. ej: name= "email"
    mensaje: "",
  });

  const funcionForm = (evento) => {
    evento.preventDefault();
    console.log(userInfo);
  };

  const funcionInput = (evento) => {
    const { value, name } = evento.target; //name es el nombre que tiene el input y value es su valor
    setUserInfo({ ...userInfo, [name]: value }); // hacemos una copia del obejto. [name]: value actualiza o agrega una PROPIEDAD dinámica en el objeto.
  };

  return (
    <main>
      <section className="contacto">
        <section>
          <h1>Contacto</h1>
        </section>

        <section className="widgets-form">
          <section className="widgets-contacto">
            <ul>
              <li>
                <EmailWidget />
              </li>
              <li>
                <div className="instagramWidget-contacto">
                  <InstagramWidget />
                  <a
                    href="https://www.instagram.com/tierradenudos_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p> Instagram</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="wppWidget-contacto">
                  <WppWidget />
                  <p>WhatsApp</p>
                </div>
              </li>
              <li>
                <div className="tiktokWidget-contacto">
                  <TikTokWidget />
                  <a
                    href="https://www.tiktok.com/@tierradenudos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>TikTok</p>
                  </a>
                </div>
              </li>
            </ul>
          </section>

          <section className="formulario">
            <form onSubmit={funcionForm}>
              <label>Nombre y apellido</label>
              <input
                type="text"
                placeholder="nombre"
                name="nombre"
                onChange={funcionInput}
              />
              <label>Email</label>
              <input
                type="text"
                placeholder="email"
                name="email"
                onChange={funcionInput}
              />
              <label>Mensaje</label>
              <input
                type="text"
                placeholder="mensaje"
                name="mensaje"
                onChange={funcionInput}
              />
              <button type="submit">Enviar</button>
            </form>
          </section>
        </section>
      </section>
    </main>
  );
};
