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
    title: "Заказ через сайт",
    text: "Добавьте готовые наборы в корзину и отправьте заявку без онлайн-оплаты.",
    href: "/catalog",
    label: "В каталог",
  },
  {
    title: "Быстрый вопрос",
    text: "Напишите нам в Telegram или VK, если нужно уточнить состав, дату или наличие.",
    href: site.telegram,
    label: `Telegram ${site.telegramLabel}`,
  },
  {
    title: "Корпоративный заказ",
    text: "Укажите количество, дату вручения и пожелания к упаковке или открыткам. Цены согласуем отдельно.",
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
        text="Расскажите, кому нужен набор, какой повод и к какой дате. Основной путь — корзина на сайте, Wildberries остается дополнительным вариантом."
        image="/products/05-lyubimomu-uchitelyu.webp"
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
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.telegram}>Telegram: {site.telegramLabel}</a>
              <a href={site.vk}>VK: {site.vkLabel}</a>
              <span>Адрес самовывоза: {site.address}</span>
              <a href={site.wildberries}>Wildberries как вариант покупки</a>
            </div>
          </div>
          <RequestForm />
        </div>
      </section>
    </main>
  );
}
