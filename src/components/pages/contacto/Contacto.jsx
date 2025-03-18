import "./contacto.css";
import { EmailWidget } from "../../common/widgets/emailWidget/EmailWidget";
import { InstagramWidget } from "../../common/widgets/instagramWidget/InstagramWidget";
import { WppWidget } from "../../common/widgets/wppWidget/WppWidget";
import { TikTokWidget } from "../../common/widgets/tiktokWidget/TikTokWidget";
import { useState, useContext } from "react";
import { FacebookWidget } from "../../common/widgets/facebookWidget/FacebookWidget";
import { ThemeContext } from "../../context/ThemeContext";
import { Formulario } from "../../layouts/formulario/Formulario";
import { toast } from "sonner";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const Contacto = () => {
  const { theme } = useContext(ThemeContext);

  document.title = "Contacto";

  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "", //estas propiedades deben ser igual a la de los inputs. ej: name= "email"
    mensaje: "",
  });

  const campos = [
    {
      label: "Nombre y apellido",
      name: "nombre",
      placeholder: "Nombre y apellido",
    },
    { label: "Email", name: "email", placeholder: " email" },
    { label: "Mensaje", name: "mensaje", placeholder: "Mensaje" },
  ];

  const funcionForm = (evento) => {
    evento.preventDefault();
    evento.target.reset();
    toast.success("Mensaje enviado exitosamente");

    let mensageCollection = collection(db, "userMensage");
    addDoc(mensageCollection, userInfo);
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
            <Formulario
              funcionForm={funcionForm}
              funcionInput={funcionInput}
              btnText="Enviar"
              campos={campos}
            />
          </section>
        </section>
      </section>
    </main>
  );
};
