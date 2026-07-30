import type { Metadata } from "next";
import { PageHero, RequestForm } from "../components";
import { faq, site } from "../content";

export const metadata: Metadata = {
  title: "Доставка и оплата wonder me box",
  description:
    "Информация о доставке, самовывозе и оплате подарочных наборов wonder me box без онлайн-оплаты на сайте.",
};

const delivery = [
  {
    title: "Заказ через сайт",
    text: "Добавьте готовые наборы в корзину и отправьте заявку. Мы подтвердим наличие, дату и удобный способ получения.",
  },
  {
    title: "Самовывоз",
    text: "Самовывоз есть. Точный адрес укажем позже, а сейчас подтверждаем его вручную после заявки.",
  },
  {
    title: "Курьер и СДЭК",
    text: "Доставка по Москве, Санкт-Петербургу и в другие города рассчитывается после оформления заявки.",
  },
];

export default function DeliveryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Доставка и оплата"
        title="Сначала заявка, потом подтверждение деталей"
        text="Онлайн-оплаты на сайте пока нет. После заявки мы уточняем наличие, дату, город, способ получения и только потом согласовываем оплату."
        image="/products/06-novogodniy-uyut.webp"
        alt="Новогодний подарочный набор wonder me box с красной упаковкой"
      />

      <section className="section section--porcelain">
        <div className="section__inner">
          <div className="delivery-grid">
            {delivery.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section delivery-split">
        <div className="section__inner delivery-split__grid">
          <div>
            <p className="eyebrow">Способы получения</p>
            <h2>Самовывоз, курьер или доставка службой</h2>
            <p>
              В корзине можно выбрать самовывоз, курьера по Москве или
              Санкт-Петербургу, СДЭК или индивидуальный расчет для другого
              города.
            </p>
            <a className="button button--primary" href={site.wildberries}>
              Дополнительно на WB
            </a>
          </div>
          <div className="info-panel">
            <strong>Что указывать в заявке</strong>
            <ul>
              <li>имя и телефон;</li>
              <li>город;</li>
              <li>способ получения;</li>
              <li>дата вручения;</li>
              <li>комментарий, если подарок для другого человека.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--porcelain">
        <div className="section__inner faq-grid">
          <div>
            <p className="eyebrow">Вопросы</p>
            <h2>Коротко о заказе</h2>
          </div>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner contacts__grid">
          <div>
            <p className="eyebrow">Нужна точность по срокам?</p>
            <h2>Опишите дату и количество</h2>
            <p>
              Ответим, какой способ получения надежнее и когда получится
              подготовить заказ.
            </p>
          </div>
          <RequestForm compact />
        </div>
      </section>
    </main>
  );
}
