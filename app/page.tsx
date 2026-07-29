const collections = [
  {
    title: "Женский набор на день рождения",
    tag: "Хит WB",
    price: "актуальная цена на Wildberries",
    image: "/products/women-birthday-1.webp",
    href: "https://www.wildberries.ru/catalog/323523327/detail.aspx",
    alt: "Женский подарочный набор wonder me box в круглой коробке с открыткой, кремом, маской и декором",
    description:
      "Яркий бокс для подруги, мамы, коллеги или учителя: открытка, уход, декор и готовая праздничная подача.",
  },
  {
    title: "Мужской набор",
    tag: "Для него",
    price: "актуальная цена на Wildberries",
    image: "/products/men-gift-1.webp",
    href: "https://www.wildberries.ru/catalog/95662496/detail.aspx",
    alt: "Мужской подарочный набор wonder me box в черной коробке с кружкой, сладостями и синей лентой",
    description:
      "Контрастная коробка с полезными сувенирами, сладким акцентом и выразительным поздравлением.",
  },
  {
    title: "Лавандовый бьюти-бокс",
    tag: "Self-care",
    price: "актуальная цена на Wildberries",
    image: "/products/classic-women-1.webp",
    href: "https://www.wildberries.ru/catalog/64465447/detail.aspx",
    alt: "Лавандовый подарочный набор wonder me box с кружкой, бомбочкой для ванны и декором",
    description:
      "Нежный набор в сиреневой палитре для спокойного вечера, ухода и маленького личного ритуала.",
  },
  {
    title: "Новогодний wonder box",
    tag: "Сезон",
    price: "актуальная цена на Wildberries",
    image: "/products/new-year-1.webp",
    href: "https://www.wildberries.ru/catalog/189614451/detail.aspx",
    alt: "Новогодний подарочный набор wonder me box в красной коробке с кружкой, открыткой и праздничным декором",
    description:
      "Праздничная коллекция с яркой упаковкой, открыткой и зимними деталями для эффектного вручения.",
  },
];

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
    alt: "Новогодний подарочный набор wonder me box",
  },
];

const occasions = [
  "день рождения",
  "новоселье",
  "свадьба",
  "новый год",
  "8 марта",
  "корпоративные события",
];

const steps = [
  "Выбираете готовую коллекцию или повод",
  "Добавляете открытку, ленту и фирменные детали",
  "Мы красиво упаковываем и доставляем получателю",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero__shade" />
        <header className="site-header" aria-label="Главная навигация">
          <a className="brand" href="#top" aria-label="wonder me box">
            <span className="brand__mark">wm</span>
            <span>wonder me box</span>
          </a>
          <nav className="nav" aria-label="Разделы сайта">
            <a href="#catalog">Каталог</a>
            <a href="#corporate">Корпоративным</a>
            <a href="#process">Как это работает</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </header>

        <div className="hero__layout">
          <div className="hero__content">
            <p className="eyebrow">Подарочные наборы с доставкой по России</p>
            <h1>wonder me box</h1>
            <p className="hero__lead">
              Боксы, которые выглядят так, будто подарок собирали именно для
              этого человека. Теплые, эффектные, готовые к вручению.
            </p>
            <div className="hero__actions" aria-label="Основные действия">
              <a className="button button--primary" href="#catalog">
                Выбрать набор
              </a>
              <a className="button button--ghost" href="#corporate">
                Корпоративный заказ
              </a>
            </div>
            <dl className="hero__facts" aria-label="Преимущества">
              <div>
                <dt>100+</dt>
                <dd>реальных товаров бренда</dd>
              </div>
              <div>
                <dt>4,8+</dt>
                <dd>оценки у популярных наборов</dd>
              </div>
              <div>
                <dt>WB</dt>
                <dd>быстрый заказ на маркетплейсе</dd>
              </div>
            </dl>
          </div>
          <div className="hero__gallery" aria-label="Реальные наборы wonder me box">
            {heroImages.map((image, index) => (
              <figure className={`hero-card hero-card--${index + 1}`} key={image.src}>
                <img src={image.src} alt={image.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section intro" aria-labelledby="intro-title">
        <div className="section__inner intro__grid">
          <div>
            <p className="eyebrow">Мы продумали все детали</p>
            <h2 id="intro-title">
              Подарок выглядит личным, даже если времени почти не было.
            </h2>
          </div>
          <p>
            В каждом боксе сочетаются заметная упаковка, понятный повод,
            открытка, полезные детали и ощущение готового сюрприза. Набор не
            нужно дооформлять: он уже выглядит как подарок.
          </p>
        </div>
      </section>

      <section className="section catalog" id="catalog" aria-labelledby="catalog-title">
        <div className="section__inner">
          <div className="section__heading">
            <p className="eyebrow">Коллекции</p>
            <h2 id="catalog-title">Готовые наборы для разных поводов</h2>
            <a className="text-link" href="#contacts">
              Получить полный каталог
            </a>
          </div>
          <div className="product-grid">
            {collections.map((item) => (
              <article className="product-card" key={item.title}>
                <a className="product-card__visual" href={item.href}>
                  <img src={item.image} alt={item.alt} />
                  <span>{item.tag}</span>
                </a>
                <div className="product-card__body">
                  <p>{item.price}</p>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                  <a className="product-card__link" href={item.href}>
                    Смотреть на Wildberries
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section occasions" aria-labelledby="occasions-title">
        <div className="section__inner occasions__grid">
          <div>
            <p className="eyebrow">Поводы</p>
            <h2 id="occasions-title">Подберем набор под адресата и тон события</h2>
          </div>
          <ul className="occasion-list" aria-label="Поводы для подарка">
            {occasions.map((occasion) => (
              <li key={occasion}>{occasion}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section corporate"
        id="corporate"
        aria-labelledby="corporate-title"
      >
        <div className="section__inner corporate__grid">
          <div>
            <p className="eyebrow">Для компаний</p>
            <h2 id="corporate-title">
              Корпоративные подарки, которые не выглядят массовыми.
            </h2>
            <p>
              Собираем партии для клиентов, сотрудников и партнеров: добавим
              фирменные цвета, открытки, вложения, брендированную ленту и
              отдельную логистику по нескольким адресам. Каждый набор сохранит
              ощущение персонального подарка.
            </p>
            <a className="button button--dark" href="#contacts">
              Рассчитать партию
            </a>
          </div>
          <figure className="corporate__image">
            <img
              src="/products/men-gift-2.webp"
              alt="Корпоративный подарочный набор wonder me box для мужчин"
            />
          </figure>
          <div className="corporate__panel" aria-label="Корпоративные условия">
            <div>
              <strong>20+</strong>
              <span>минимальная партия</span>
            </div>
            <div>
              <strong>3-7 дней</strong>
              <span>срок подготовки тиража</span>
            </div>
            <div>
              <strong>RU</strong>
              <span>доставка по России</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section process" id="process" aria-labelledby="process-title">
        <div className="section__inner">
          <div className="section__heading">
            <p className="eyebrow">Процесс</p>
            <h2 id="process-title">От идеи до вручения за три шага</h2>
          </div>
          <ol className="step-list">
            {steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section contacts" id="contacts" aria-labelledby="contacts-title">
        <div className="section__inner contacts__grid">
          <div>
            <p className="eyebrow">Заявка</p>
            <h2 id="contacts-title">Расскажите, кому нужен подарок</h2>
            <p>
              Ответим с подборкой наборов, вариантами упаковки и ориентиром по
              срокам. Для запуска достаточно повода, бюджета и количества.
            </p>
          </div>
          <form
            className="request-form"
            action="mailto:hello@wondermebox.ru"
            method="post"
            encType="text/plain"
          >
            <label>
              Имя
              <input type="text" name="name" placeholder="Анна" />
            </label>
            <label>
              Телефон или email
              <input type="text" name="contact" placeholder="+7 или hello@mail.ru" />
            </label>
            <label>
              Что подобрать?
              <textarea
                name="message"
                placeholder="Например: 35 наборов для клиентов до 5 000 ₽"
              />
            </label>
            <button type="submit">Отправить заявку</button>
            <p>
              Мы ответим с подборкой, сроками и вариантами упаковки в течение
              рабочего дня.
            </p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <a className="brand" href="#top" aria-label="wonder me box">
            <span className="brand__mark">wm</span>
            <span>wonder me box</span>
          </a>
          <p>Подарочные наборы для близких, команд и важных клиентов.</p>
          <a href="mailto:hello@wondermebox.ru">hello@wondermebox.ru</a>
        </div>
      </footer>
    </main>
  );
}
