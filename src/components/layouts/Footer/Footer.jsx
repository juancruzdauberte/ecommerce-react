import "./footer.css";
import { InstagramWidget } from "../../common/instagramWidget/InstagramWidget";
import { FacebookWidget } from "../../common/facebookWidget/FacebookWidget";
import { EmailWidget } from "../../common/emailWidget/EmailWidget";

export function Footer() {
  return (
    <>
      <section className="widgets-mail">
        <div className="widgets-container">
          <h4>Seguinos en nuestras redes</h4>
          <div className="widgets">
            <InstagramWidget />
            <FacebookWidget />
          </div>
        </div>

        <div className="mail">
          <EmailWidget />
          <a href="mailto:tierradenudos@gmail.com">tierradenudos@gmail.com</a>
        </div>
      </section>

      <section className="navbar-footer">
        <ul>
          <li>Todos</li>
          <li>Colgantes</li>
          <li>Hogar</li>
          <li>Tapiz</li>
        </ul>
      </section>
    </>
  );
}
