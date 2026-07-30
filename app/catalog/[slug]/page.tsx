import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddToCartButton } from "../../cart";
import { ProductCard, RequestForm } from "../../components";
import { products, site } from "../../content";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Набор не найден",
    };
  }

  return {
    title: `${product.title} — wonder me box`,
    description: product.intro,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <main>
      <nav className="breadcrumbs" aria-label="Хлебные крошки">
        <Link href="/">wonder me box</Link>
        <span>/</span>
        <Link href="/catalog">каталог</Link>
        <span>/</span>
        <span>{product.title}</span>
      </nav>
      <section className="product-detail">
        <div className="product-detail__gallery">
          <figure className="product-detail__main-image">
            <img src={product.gallery[0]} alt={product.alt} />
          </figure>
          <div className="product-detail__thumbs" aria-label="Галерея набора">
            {product.gallery.map((image, index) => (
              <figure key={image}>
                <img
                  src={image}
                  alt={index === 0 ? product.alt : `${product.title}, фото ${index + 1}`}
                />
              </figure>
            ))}
          </div>
        </div>
        <div className="product-detail__summary">
          <p className="eyebrow">{product.tag}</p>
          <h1>{product.title}</h1>
          <p className="product-detail__intro">{product.intro}</p>
          <div className="product-detail__purchase">
            <p className="product-detail__price">{product.price}</p>
            <div className="hero__actions">
              <AddToCartButton product={product}>В корзину</AddToCartButton>
              <a className="button button--ghost" href={product.href}>
                Купить на WB
              </a>
              <Link className="button button--ghost" href="/contacts">
                Задать вопрос
              </Link>
            </div>
            <ul className="promise-list" aria-label="Что уже включено">
              <li>готовая подарочная упаковка</li>
              <li>открытка и декоративная подача</li>
              <li>заявка через сайт без онлайн-оплаты</li>
            </ul>
          </div>
          <div className="product-detail__meta" aria-label="Характеристики набора">
            <div>
              <span>Получатель</span>
              <strong>{product.category}</strong>
            </div>
            <div>
              <span>Повод</span>
              <strong>{product.occasion}</strong>
            </div>
            <div>
              <span>Тон</span>
              <strong>{product.tone}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--porcelain product-story">
        <div className="section__inner product-story__grid">
          <div>
            <p className="eyebrow">О наборе</p>
            <h2>Что внутри</h2>
            <p>{product.description}</p>
          </div>
          <ul className="included-list">
            {product.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section product-support">
        <div className="section__inner support-grid">
          <article>
            <span>01</span>
            <h3>Готовая упаковка</h3>
            <p>
              Набор уже выглядит как подарок: коробка, лента, открытка и
              композиция внутри собраны заранее.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Заказ через сайт</h3>
            <p>
              Добавьте набор в корзину и оставьте контакты. Мы подтвердим
              наличие, дату и способ получения вручную.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Для партии</h3>
            <p>
              Если нужно несколько одинаковых или брендированных наборов,
              отправьте заявку с количеством и датой вручения.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--porcelain">
        <div className="section__inner">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Еще варианты</p>
              <h2>Похожие подарки</h2>
            </div>
            <a className="text-link" href={site.wildberries}>
              Все товары на WB
            </a>
          </div>
          <div className="product-grid product-grid--related">
            {related.map((item) => (
              <ProductCard product={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section contacts-preview">
        <div className="section__inner contacts__grid">
          <div>
            <p className="eyebrow">Подбор</p>
            <h2>Хотите похожий набор под конкретный повод?</h2>
            <p>
              Опишите получателя, повод и дату. Подскажем, какие готовые боксы
              подойдут или как согласовать корпоративную партию.
            </p>
          </div>
          <RequestForm compact />
        </div>
      </section>
    </main>
  );
}
