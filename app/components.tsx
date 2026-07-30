import Link from "next/link";
import { categories, navigation, products, site, type Product } from "./content";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__bar">
        <span>Бесплатная открытка в каждом наборе</span>
        <span>Актуальная цена и заказ — на Wildberries</span>
        <Link href="/contacts">Получить консультацию</Link>
      </div>
      <div className="site-header__main">
        <Link className="brand" href="/" aria-label="wonder me box">
          <span className="brand__mark">WMB</span>
          <span>wonder me box</span>
        </Link>
        <nav className="nav" aria-label="Главная навигация">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="header-action" href={site.wildberries}>
          Купить на WB
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <Link className="brand" href="/" aria-label="wonder me box">
            <span className="brand__mark">wm</span>
            <span>wonder me box</span>
          </Link>
          <p>Подарочные наборы для близких, команд и важных клиентов.</p>
        </div>
        <nav className="footer__nav" aria-label="Навигация в подвале">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer__contacts">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.wildberries}>Wildberries</a>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <figure>
        <img src={image} alt={alt} />
        <figcaption className="page-hero__label">wonder me box / gift edit</figcaption>
      </figure>
    </section>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link className="product-card__visual" href={`/catalog/${product.slug}`}>
        <img src={product.image} alt={product.alt} />
        <div className="product-card__badges" aria-label="Метки набора">
          <span>{product.tag}</span>
          <span>{product.category}</span>
        </div>
      </Link>
      <div className="product-card__body">
        <p className="product-card__meta">
          {product.occasion} / {product.tone}
        </p>
        <h3>{product.title}</h3>
        <p className="product-card__description">{product.description}</p>
        <p className="product-card__price">{product.price}</p>
        <div className="product-card__actions">
          <Link className="product-card__link" href={`/catalog/${product.slug}`}>
            Подробнее
          </Link>
          <a className="product-card__link" href={product.href}>
            WB
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProductRail({ title = "Популярные наборы" }: { title?: string }) {
  return (
    <section className="section section--flush">
      <div className="section__inner">
        <div className="section__heading">
          <div>
            <p className="eyebrow">Витрина</p>
            <h2>{title}</h2>
          </div>
          <Link className="text-link" href="/catalog">
            Весь каталог
          </Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CategoryGrid() {
  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <Link className="category-card" href={category.href} key={category.title}>
          <img src={category.image} alt="" />
          <small>{String(index + 1).padStart(2, "0")}</small>
          <span>{category.title}</span>
          <p>{category.description}</p>
        </Link>
      ))}
    </div>
  );
}

export function RequestForm({ compact = false }: { compact?: boolean }) {
  return (
    <form
      className={compact ? "request-form request-form--compact" : "request-form"}
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
    >
      <label>
        Имя
        <input type="text" name="name" placeholder="Елена" />
      </label>
      <label>
        Телефон или email
        <input type="text" name="contact" placeholder="+7 или hello@mail.ru" />
      </label>
      <label>
        Что подобрать?
        <textarea
          name="message"
          placeholder="Например: 30 наборов для клиентов до 3 000 ₽"
        />
      </label>
      <button type="submit">Отправить заявку</button>
      <p>Ответим с подборкой, сроками и вариантами упаковки в течение рабочего дня.</p>
    </form>
  );
}
