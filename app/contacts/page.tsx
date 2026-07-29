import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, RequestForm } from "../components";
import { site } from "../content";

export const metadata: Metadata = {
  title: "Контакты wonder me box",
  description:
    "Связаться с wonder me box для подбора подарочного набора, корпоративной партии или вопроса по заказу.",
};

const contactCards = [
  {
    title: "Покупка готового набора",
    text: "Откройте витрину бренда на Wildberries и выберите карточку с актуальными сроками.",
    href: site.wildberries,
    label: "Wildberries",
  },
  {
    title: "Индивидуальный подбор",
    text: "Напишите повод, бюджет и получателя. Ответим с подходящими вариантами.",
    href: `mailto:${site.email}`,
    label: site.email,
  },
  {
    title: "Корпоративный заказ",
    text: "Укажите количество, дату вручения и пожелания к упаковке или открыткам.",
    href: "/corporate",
    label: "Для компаний",
  },
];

export default function ContactsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Контакты"
        title="Поможем выбрать подарок без долгих поисков"
        text="Расскажите, кому нужен набор, какой повод и бюджет. Для готовой покупки можно сразу перейти на Wildberries."
        image="/products/teacher-woman-3.webp"
        alt="Подарочный набор wonder me box с открыткой и декором"
      />

      <section className="section section--porcelain">
        <div className="section__inner contact-card-grid">
          {contactCards.map((card) => (
            <article key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {card.href.startsWith("/") ? (
                <Link className="text-link" href={card.href}>
                  {card.label}
                </Link>
              ) : (
                <a className="text-link" href={card.href}>
                  {card.label}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__inner contacts__grid">
          <div>
            <p className="eyebrow">Заявка</p>
            <h2>Оставьте вводные, мы предложим варианты</h2>
            <p>
              Чем подробнее повод и получатель, тем точнее получится подборка.
              Для корпоративного заказа добавьте количество и желаемую дату.
            </p>
            <div className="contact-lines">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.wildberries}>wonder me box на Wildberries</a>
            </div>
          </div>
          <RequestForm />
        </div>
      </section>
    </main>
  );
}
