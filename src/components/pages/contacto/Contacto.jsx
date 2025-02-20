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
            <EmailWidget />
            <div className="instagramWidget-contacto">
              <InstagramWidget />
              <p>Instagram</p>
            </div>
            <div className="wppWidget-contacto">
              <WppWidget />
              <p>WhatsApp</p>
            </div>

            <div className="tiktokWidget-contacto">
              <TikTokWidget />
              <p>TikTok</p>
            </div>
          </section>

          <section className="formulario">
            <p>aca va el formulario</p>
          </section>
        </section>
      </section>
    </main>
  );
};
