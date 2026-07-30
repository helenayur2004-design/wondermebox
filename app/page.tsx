import Link from "next/link";
import { CategoryGrid, ProductCard, RequestForm } from "./components";
import { occasions, products, reviews, site } from "./content";
import { GiftPicker } from "./gift-picker";

const heroImages = [
  {
    src: "/products/women-birthday-1.webp",
    alt: "Женский подарочный набор wonder me box",
  },
  {
    src: "/products/men-gift-1.webp",
    alt: "Мужской подарочный набор wonder me box",
  },
  {
    src: "/products/holiday-box-1.webp",
    alt: "Праздничный подарочный набор wonder me box",
  },
];

const benefits = [
  ["6", "готовых коллекций"],
  ["WB", "быстрый заказ"],
  ["B2B", "брендирование"],
];

const shopTabs = [
  { label: "все", href: "/catalog" },
  { label: "для нее", href: "/catalog#for-her" },
  { label: "для него", href: "/catalog#for-him" },
  { label: "сезон", href: "/catalog#season" },
  { label: "благодарность", href: "/catalog#thanks" },
  { label: "корпоративные", href: "/corporate" },
];

const giftFlow = [
  ["01", "выбрать повод"],
  ["02", "проверить состав"],
  ["03", "купить на WB"],
  ["04", "подарить сразу"],
];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero__content">
          <p className="eyebrow">Подарочные наборы с готовой подачей</p>
          <h1>Подарок, который выглядит как маленький праздник</h1>
          <p>
            Wonder me box собирает продуманные подарочные боксы для дней
            рождения, благодарности, сезонных праздников и корпоративных
            вручений. Реальные наборы уже готовы к заказу на Wildberries.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="/catalog">
              Перейти в каталог
            </Link>
            <Link className="button button--ghost" href="#gift-picker">
              Подобрать подарок
            </Link>
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
            <figcaption>для нее / для него / сезон / спасибо</figcaption>
          </figure>
          <div className="hero-stack">
            {heroImages.slice(1).map((image) => (
              <figure className="hero-card" key={image.src}>
                <img src={image.src} alt={image.alt} />
              </figure>
            ))}
            <div className="hero-note">
              <span>gift concierge</span>
              <p>подбор под повод, бюджет и получателя</p>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true">
            <span>wonder me box</span>
            <span>gift sets</span>
            <span>ready to give</span>
          </div>
        </div>
      </section>

      <section className="brand-strip" aria-label="Быстрая навигация">
        <Link href="/catalog#for-her">для нее</Link>
        <Link href="/catalog#for-him">для него</Link>
        <Link href="/catalog#season">новый год</Link>
        <Link href="/catalog#thanks">спасибо</Link>
        <Link href="/corporate">корпоративные</Link>
        <Link href="/delivery">доставка</Link>
      </section>

      <section className="section intro">
        <div className="section__inner intro__grid intro__grid--editorial">
          <div>
            <p className="eyebrow">Brand edit</p>
            <h2>Витрина, где подарок чувствуется до покупки</h2>
          </div>
          <div className="editorial-copy">
            <p>
              Наборы wonder me box собраны так, чтобы подарок выглядел цельно с
              первой секунды: цвет, наполнение, декоративные детали и коробка
              складываются в один аккуратный жест внимания.
            </p>
            <div className="editorial-marks">
              <span>готовая упаковка</span>
              <span>открытка внутри</span>
              <span>реальные фото</span>
              <span>быстрый заказ WB</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section signature-section">
        <div className="section__inner signature-layout">
          <div className="signature-layout__copy">
            <p className="eyebrow">Gift architecture</p>
            <h2>Один набор закрывает весь сценарий вручения</h2>
            <p>
              Вместо случайной покупки “чего-нибудь красивого” покупатель видит
              готовый образ: кому дарить, какой повод, какая эмоция и как
              подарок будет выглядеть в руках.
            </p>
          </div>
          <div className="signature-board">
            {giftFlow.map(([number, text]) => (
              <div key={number}>
                <span>{number}</span>
                <strong>{text}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GiftPicker />

      <section className="section">
        <div className="section__inner">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Категории</p>
              <h2>Выберите настроение подарка</h2>
            </div>
            <Link className="text-link" href="/catalog">
              Смотреть все
            </Link>
          </div>
          <CategoryGrid />
        </div>
      </section>

      <section className="section shop-window">
        <div className="section__inner">
          <div className="shop-window__top">
            <nav className="shop-tabs" aria-label="Подборки каталога">
              {shopTabs.map((tab, index) => (
                <Link
                  className={index === 0 ? "shop-tabs__item is-active" : "shop-tabs__item"}
                  href={tab.href}
                  key={tab.label}
                >
                  {tab.label}
                </Link>
              ))}
            </nav>
            <div className="shop-window__copy">
              <h2>Реальные наборы wonder me box</h2>
              <p>
                Готовые подарочные боксы с продуманной упаковкой, открыткой и
                визуальным эффектом “можно дарить сразу”.
              </p>
            </div>
            <a className="button button--outline" href={site.wildberries}>
              Все товары на WB
            </a>
          </div>
          <div className="product-grid product-grid--showcase">
            {products.slice(0, 4).map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section occasion-shop">
        <div className="section__inner occasion-shop__grid">
          <div>
            <p className="eyebrow">Подбор</p>
            <h2>Подарки под повод, бюджет и тон поздравления</h2>
            <p>
              Если повод уже известен, проще двигаться от него: день рождения,
              благодарность, праздник для команды или небольшой знак внимания.
            </p>
          </div>
          <ul className="occasion-list" aria-label="Поводы для подарка">
            {occasions.map((occasion) => (
              <li key={occasion}>{occasion}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section split-feature">
        <div className="section__inner split-feature__grid">
          <figure>
            <img
              src="/products/holiday-women-1.webp"
              alt="Подарочный набор wonder me box для корпоративного заказа"
            />
          </figure>
          <div>
            <p className="eyebrow">Корпоративные заказы</p>
            <h2>Подарки для команды и клиентов без ощущения массовости.</h2>
            <p>
              Соберем партию с фирменными цветами, открытками, вложениями и
              доставкой по нескольким адресам. Для старта достаточно количества,
              бюджета и повода.
            </p>
            <Link className="button button--dark" href="/corporate">
              Подробнее для компаний
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--porcelain">
        <div className="section__inner reviews">
          <div>
            <p className="eyebrow">Впечатление</p>
            <h2>Главное в наборе — момент, когда его открывают.</h2>
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
            <h2>Расскажите, кому нужен подарок</h2>
            <p>
              Ответим с подборкой наборов, вариантами упаковки и ориентиром по
              срокам. Для запуска достаточно повода, бюджета и количества.
            </p>
          </div>
          <RequestForm compact />
        </div>
      </section>
    </main>
  );
}
