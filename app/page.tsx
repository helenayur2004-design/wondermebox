import Link from "next/link";
import { CategoryGrid, ProductCard, RequestForm } from "./components";
import { products, reviews, site } from "./content";

const heroImages = [
  {
    src: "/products/01-nezhny-kompliment.webp",
    alt: "Женский подарочный набор wonder me box",
  },
  {
    src: "/products/03-kofe-i-harakter.webp",
    alt: "Мужской подарочный набор wonder me box",
  },
  {
    src: "/products/06-novogodniy-uyut.webp",
    alt: "Новогодний подарочный набор wonder me box",
  },
];

const benefits = [
  ["6", "готовых наборов"],
  ["3", "основные категории"],
  ["0", "онлайн-оплаты сейчас"],
];

const orderChannels = [
  {
    title: "На сайте",
    text: "Добавьте набор в корзину, оставьте контакты, и мы подтвердим заказ вручную.",
  },
  {
    title: "Маркетплейсы",
    text: "Wildberries уже доступен как дополнительный вариант покупки. Ozon добавим позже.",
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
          <p className="eyebrow">Готовые подарочные наборы</p>
          <h1>wonder me box</h1>
          <p>
            Боксы для нее, для него и сезонных поводов: с реальными фото,
            готовой упаковкой, открыткой и понятным сценарием заказа через
            корзину без онлайн-оплаты.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="/catalog">
              В каталог
            </Link>
            <a className="button button--ghost" href={site.wildberries}>
              Wildberries
            </a>
          </div>
          <dl className="hero__facts" aria-label="Преимущества wonder me box">
            {benefits.map(([value, label]) => (
              <div key={value}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="home-hero__gallery" aria-label="Реальные наборы wonder me box">
          <figure className="hero-card hero-card--focus">
            <img src={heroImages[0].src} alt={heroImages[0].alt} />
            <figcaption>для нее / для него / сезонные</figcaption>
          </figure>
          <div className="hero-stack">
            {heroImages.slice(1).map((image) => (
              <figure className="hero-card" key={image.src}>
                <img src={image.src} alt={image.alt} />
              </figure>
            ))}
            <div className="hero-note">
              <span>pastel edit</span>
              <p>сливочное масло, нежно-голубой, шалфейный и мягкий персик</p>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true">
            <span>ready gift sets</span>
            <span>wonder me box</span>
            <span>no online payment</span>
          </div>
        </div>
      </section>

      <section className="brand-strip" aria-label="Быстрая навигация">
        <Link href="/catalog#for-her">для нее</Link>
        <Link href="/catalog#for-him">для него</Link>
        <Link href="/catalog#season">сезонные</Link>
        <Link href="/corporate">корпоративным</Link>
        <Link href="/delivery">доставка</Link>
        <Link href="/contacts">контакты</Link>
      </section>

      <section className="section section--porcelain">
        <div className="section__inner">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Категории</p>
              <h2>Сначала выберите направление</h2>
            </div>
            <Link className="text-link" href="/catalog">
              Смотреть каталог
            </Link>
          </div>
          <CategoryGrid />
        </div>
      </section>

      <section className="section shop-window">
        <div className="section__inner">
          <div className="shop-window__top">
            <nav className="shop-tabs" aria-label="Подборки каталога">
              <Link className="shop-tabs__item is-active" href="/catalog">
                все
              </Link>
              <Link className="shop-tabs__item" href="/catalog#for-her">
                для нее
              </Link>
              <Link className="shop-tabs__item" href="/catalog#for-him">
                для него
              </Link>
              <Link className="shop-tabs__item" href="/catalog#season">
                сезонные
              </Link>
            </nav>
            <div className="shop-window__copy">
              <h2>Каталог готовых наборов</h2>
              <p>
                У каждого бокса есть отдельная карточка с описанием, составом,
                ценой и кнопкой добавления в корзину.
              </p>
            </div>
            <Link className="button button--outline" href="/catalog">
              Все наборы
            </Link>
          </div>
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
