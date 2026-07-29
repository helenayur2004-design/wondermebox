import Link from "next/link";
import { CategoryGrid, ProductCard, RequestForm } from "./components";
import { occasions, products, reviews, site } from "./content";

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
  ["100+", "товаров бренда на Wildberries"],
  ["4,8+", "оценки у популярных наборов"],
  ["1 день", "чтобы подобрать подарок без суеты"],
];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero__content">
          <p className="eyebrow">Подарочные наборы с готовой подачей</p>
          <h1>wonder me box</h1>
          <p>
            Магазин подарочных боксов для тех случаев, когда подарок должен
            выглядеть личным, красивым и уже полностью готовым к вручению.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="/catalog">
              Перейти в каталог
            </Link>
            <Link className="button button--ghost" href="/contacts">
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
          {heroImages.map((image, index) => (
            <figure className={`hero-card hero-card--${index + 1}`} key={image.src}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>

      <section className="section intro">
        <div className="section__inner intro__grid">
          <div>
            <p className="eyebrow">Готовое решение</p>
            <h2>Внутри уже есть настроение, открытка и упаковка.</h2>
          </div>
          <p>
            Наборы wonder me box собраны так, чтобы подарок выглядел цельно с
            первой секунды: цвет, наполнение, декоративные детали и коробка
            складываются в один аккуратный жест внимания.
          </p>
        </div>
      </section>

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

      <section className="section section--porcelain">
        <div className="section__inner">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Новинки и хиты</p>
              <h2>Реальные наборы wonder me box</h2>
            </div>
            <a className="text-link" href={site.wildberries}>
              Все товары на WB
            </a>
          </div>
          <div className="product-grid">
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
            <h2>Найдите подарок по ситуации</h2>
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
              src="/products/men-gift-2.webp"
              alt="Корпоративный подарочный набор wonder me box"
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
