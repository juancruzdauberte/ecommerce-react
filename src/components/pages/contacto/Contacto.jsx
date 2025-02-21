import "./contacto.css";
import { EmailWidget } from "../../common/widgets/emailWidget/EmailWidget";
import { InstagramWidget } from "../../common/widgets/instagramWidget/InstagramWidget";
import { WppWidget } from "../../common/widgets/wppWidget/WppWidget";
import { TikTokWidget } from "../../common/widgets/tiktokWidget/TikTokWidget";
export const Contacto = () => {
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
            <p>aca va el formulario</p>
          </section>
        </section>
      </section>
    </main>
  );
};
