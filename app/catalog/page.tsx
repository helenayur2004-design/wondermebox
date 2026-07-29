import type { Metadata } from "next";
import { CategoryGrid, PageHero, ProductCard, RequestForm } from "../components";
import { products, site } from "../content";
import { CatalogFilters } from "./catalog-filters";

export const metadata: Metadata = {
  title: "Каталог подарочных наборов wonder me box",
  description:
    "Каталог подарочных наборов wonder me box для нее, для него, к праздникам, благодарности и корпоративным заказам.",
};

const categorySections = [
  {
    id: "for-her",
    title: "Для нее",
    text: "Нежные и праздничные наборы для мамы, подруги, коллеги, учителя или любимого человека.",
    items: products.filter(
      (product) => product.category === "для нее" || product.category === "self-care",
    ),
  },
  {
    id: "for-him",
    title: "Для него",
    text: "Сдержанная подача, темные коробки, практичные детали и понятный мужской характер.",
    items: products.filter((product) => product.category === "для него"),
  },
  {
    id: "season",
    title: "Сезонные",
    text: "Коллекции к Новому году, весенним праздникам и датам, когда подарок нужен быстро.",
    items: products.filter((product) => product.category === "сезон"),
  },
  {
    id: "thanks",
    title: "Благодарность",
    text: "Деликатные подарки для наставников, преподавателей, коллег и тех, кому хочется сказать спасибо.",
    items: products.filter((product) => product.category === "благодарность"),
  },
];

export default function CatalogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Каталог"
        title="Готовые подарочные наборы"
        text="Выбирайте по получателю, поводу или настроению. У каждого набора есть отдельная карточка с составом, фото и быстрым переходом к покупке."
        image="/products/holiday-box-1.webp"
        alt="Подарочный набор wonder me box в коробке с праздничной лентой"
      />

      <section className="section section--tight">
        <div className="section__inner">
          <CategoryGrid />
        </div>
      </section>

      <section className="section section--porcelain">
        <div className="section__inner">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Все наборы</p>
              <h2>Витрина wonder me box</h2>
            </div>
            <a className="text-link" href={site.wildberries}>
              Открыть бренд на Wildberries
            </a>
          </div>
          <CatalogFilters />
        </div>
      </section>

      {categorySections.map((section) => (
        <section className="section catalog-section" id={section.id} key={section.id}>
          <div className="section__inner">
            <div className="section__heading">
              <div>
                <p className="eyebrow">Подборка</p>
                <h2>{section.title}</h2>
              </div>
              <p className="section-note">{section.text}</p>
            </div>
            <div className="product-grid product-grid--catalog">
              {section.items.map((product) => (
                <ProductCard product={product} key={product.slug} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section contacts-preview">
        <div className="section__inner contacts__grid">
          <div>
            <p className="eyebrow">Не нашли точное попадание?</p>
            <h2>Подберем набор под получателя и бюджет</h2>
            <p>
              Напишите повод, количество и желаемую сумму. Мы предложим готовые
              варианты или подскажем, какие боксы лучше подойдут.
            </p>
          </div>
          <RequestForm compact />
        </div>
      </section>
    </main>
  );
}
