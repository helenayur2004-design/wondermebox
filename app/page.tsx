import Link from "next/link";
import { ProductCard, RequestForm } from "./components";
import { products, reviews, site } from "./content";
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

const orderChannels = [
  {
    title: "На сайте",
    text: "Добавьте набор в корзину, оставьте контакты, и мы подтвердим заказ вручную.",
  },
  {
    title: "Маркетплейсы",
    text: "Wildberries, Ozon и Яндекс Маркет доступны как дополнительные варианты покупки.",
  },
  {
    title: "Соцсети",
    text: "Telegram и VK оставляем для быстрых вопросов, уточнений и будущих заказов.",
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
        </div>
      </section>

      <section className="section order-section">
        <div className="section__inner">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Где заказать</p>
              <h2>Сайт — основной сценарий, маркетплейсы и соцсети — рядом</h2>
            </div>
          </div>
          <div className="feature-grid">
            {orderChannels.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
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

      <section className="section section--porcelain brand-story">
        <div className="section__inner brand-story__grid">
          <div>
            <p className="eyebrow">О бренде</p>
            <h2>Подарок должен выглядеть собранным еще до первой фразы</h2>
          </div>
          <div className="story-copy">
            <p>
              wonder me box собирает готовые подарочные наборы для ситуаций,
              когда подарок нужен красивый, понятный и без долгого поиска. Мы
              подбираем наполнение, упаковку и детали так, чтобы бокс выглядел
              аккуратно уже в момент вручения.
            </p>
            <p>
              Стиль сайта держим светлым и дружелюбным: сливочная база,
              нежно-голубые и зеленые акценты, темный контраст для кнопок и
              реальные фотографии наборов в центре внимания.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--porcelain">
        <div className="section__inner reviews">
          <div>
            <p className="eyebrow">Впечатление</p>
            <h2>Главное в наборе — момент, когда его открывают</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <blockquote key={review}>{review}</blockquote>
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
