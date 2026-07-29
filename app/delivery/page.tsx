import type { Metadata } from "next";
import { PageHero, RequestForm } from "../components";
import { faq, site } from "../content";

export const metadata: Metadata = {
  title: "Доставка и оплата wonder me box",
  description:
    "Информация о покупке подарочных наборов wonder me box на Wildberries, индивидуальных заявках, сроках и корпоративной доставке.",
};

const delivery = [
  {
    title: "Готовые наборы",
    text: "Покупка проходит через Wildberries: там видны актуальная цена, сроки доставки, пункты выдачи и условия возврата.",
  },
  {
    title: "Индивидуальная заявка",
    text: "Для подбора под повод напишите бюджет, получателя и дату. Мы предложим подходящие готовые позиции или формат партии.",
  },
  {
    title: "Корпоративные заказы",
    text: "Для партий заранее согласуем количество, упаковку, открытки, адреса и дату передачи подарков.",
  },
];

export default function DeliveryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Доставка и оплата"
        title="Покупка без лишних шагов"
        text="Готовые наборы удобно заказать на Wildberries, а нестандартные и корпоративные задачи лучше обсудить через заявку."
        image="/products/new-year-3.webp"
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
            <p className="eyebrow">Wildberries</p>
            <h2>Для готовых наборов самый быстрый путь — карточка товара</h2>
            <p>
              На маркетплейсе можно проверить наличие, стоимость, срок доставки
              и выбрать удобный пункт выдачи.
            </p>
            <a className="button button--primary" href={site.wildberries}>
              Смотреть wonder me box на WB
            </a>
          </div>
          <div className="info-panel">
            <strong>Что уточнить перед заказом партии</strong>
            <ul>
              <li>количество наборов;</li>
              <li>бюджет на один подарок;</li>
              <li>дата вручения;</li>
              <li>город или список адресов;</li>
              <li>нужны ли открытки и брендирование.</li>
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
              Ответим, какой формат надежнее: готовая покупка на WB или
              отдельное согласование партии.
            </p>
          </div>
          <RequestForm compact />
        </div>
      </section>
    </main>
  );
}
