import Link from "next/link";
import { ProductCard, RequestForm } from "./components";
import { products, site } from "./content";
import { HomeCarousel } from "./home-carousel";

const heroImages = [
  {
    src: "/products/01-nezhny-kompliment.webp",
    alt: "Женский подарочный набор wonder me box",
    label: "нежный комплимент",
  },
  {
    src: "/products/classic-women-1.webp",
    alt: "Лавандовый подарочный набор wonder me box",
    label: "лавандовое настроение",
  },
  {
    src: "/products/teacher-woman-2.webp",
    alt: "Нежно-голубой подарочный набор wonder me box",
    label: "нежно-голубая коллекция",
  },
];

const corporatePlaceholders = [
  "Партия для команды",
  "Подарки клиентам",
  "Брендированная упаковка",
];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero__content">
          <div className="hero-wordmark">
            <h1>Wonder me box</h1>
            <span className="hero-wordmark__gift" aria-hidden="true" />
          </div>
          <p>
            Готовые подарочные наборы, в которых уже всё продумано: наполнение,
            упаковка и открытка. Выберите подарок для неё, для него или к особому
            поводу — остальное мы берём на себя.
          </p>
          <div className="hero-marketplaces">
            <p>Мы на маркетплейсах</p>
            <div className="hero-marketplaces__links">
              <a href={site.wildberries} target="_blank" rel="noreferrer">
                Wildberries <span aria-hidden="true">↗</span>
              </a>
              <a href={site.ozon} target="_blank" rel="noreferrer">
                Ozon <span aria-hidden="true">↗</span>
              </a>
              <a href={site.yandexMarket} target="_blank" rel="noreferrer">
                Яндекс Маркет <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
        <HomeCarousel slides={heroImages} />
      </section>

      <section className="section shop-window">
        <div className="section__inner">
          <div className="product-grid product-grid--showcase">
            {products.map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}
          </div>
          <div className="shop-window__more">
            <Link href="/catalog">Посмотреть ещё</Link>
          </div>
        </div>
      </section>

      <section className="section corporate-band">
        <div className="section__inner corporate-band__grid">
          <div>
            <p className="eyebrow">Корпоративным клиентам</p>
            <h2>Партии подарков согласовываем индивидуально</h2>
            <p>
              Для команд, клиентов и партнеров подготовим подборку под повод,
              количество и нужное впечатление. Цены для корпоративных заказов не
              выводим: все обсуждается отдельно.
            </p>
            <Link className="button button--dark" href="/corporate">
              Страница для компаний
            </Link>
          </div>
          <div className="corporate-placeholders" aria-label="Будущие примеры заказов">
            {corporatePlaceholders.map((item) => (
              <div key={item}>
                <span>фото скоро</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contacts-preview">
        <div className="section__inner contacts__grid">
          <div>
            <p className="eyebrow">Заявка</p>
            <h2>Нужна помощь с выбором?</h2>
            <p>
              Напишите, кому нужен подарок и к какой дате. Ответим с подходящими
              готовыми наборами и уточним способ получения.
            </p>
            <div className="contact-lines">
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.telegram}>Telegram: {site.telegramLabel}</a>
              <a href={site.vk}>VK: {site.vkLabel}</a>
            </div>
          </div>
          <RequestForm compact />
        </div>
      </section>
    </main>
  );
}
