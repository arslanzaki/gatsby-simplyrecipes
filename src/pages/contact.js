import React from "react";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              YOLO green juice chicharrones copper mug pinterest. Affogato 90's
              forage skateboard hella.
            </p>
            <p>Farm-to-table iceland 90's air plant squid fashion axe.</p>
            <p>
              Marxism echo park edison bulb health goth. Meggings butcher
              bespoke air plant, four loko fingerstache austin humblebrag.
            </p>
          </article>

          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>

              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default Contact;
