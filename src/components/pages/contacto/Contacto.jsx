import "./contacto.css";
import { EmailWidget } from "../../common/widgets/emailWidget/EmailWidget";
import { InstagramWidget } from "../../common/widgets/instagramWidget/InstagramWidget";
import { WppWidget } from "../../common/widgets/wppWidget/WppWidget";
import { TikTokWidget } from "../../common/widgets/tiktokWidget/TikTokWidget";
import { useState, useContext } from "react";
import { FacebookWidget } from "../../common/widgets/facebookWidget/FacebookWidget";
import { ThemeContext } from "../../context/ThemeContext";

export const Contacto = () => {
  const { theme } = useContext(ThemeContext);

  document.title = "Contacto";

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
    <main className={theme}>
      <section className="contacto">
        <section className="titlePage">
          <h1>Contacto</h1>
        </section>

        <section className="widgets-form">
          <section className="widgets-contacto">
            <ul>
              <li>
                <EmailWidget />
              </li>
              <li>
                <div className="widgets-style">
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
                <div className="widgets-style">
                  <WppWidget />
                  <p>WhatsApp</p>
                </div>
              </li>
              <li>
                <div className="widgets-style">
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
              <li>
                <div className="widgets-style">
                  <FacebookWidget />
                  <a
                    href="https://web.facebook.com/marialaura.liaudat"
                    target="_blank"
                  >
                    <p>Facebook</p>
                  </a>
                </div>
              </li>
            </ul>
          </section>

          <section className="formulario-container">
            <form onSubmit={funcionForm}>
              <div className="label-input">
                <label>Nombre y apellido</label>
                <input
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={funcionInput}
                />
              </div>
              <div className="label-input">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={funcionInput}
                />
              </div>
              <div className="label-input">
                <label>Mensaje</label>
                <input
                  type="text"
                  placeholder="Mensaje"
                  name="mensaje"
                  onChange={funcionInput}
                />
              </div>
              <div className="btn-container">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </section>
        </section>
      </section>
    </main>
  );
};
