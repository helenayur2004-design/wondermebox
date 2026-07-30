import type { Metadata } from "next";
import { PageHero, ProductRail } from "../components";

export const metadata: Metadata = {
  title: "О бренде wonder me box",
  description:
    "Wonder me box — бренд готовых подарочных наборов с красивой упаковкой, понятным составом и вниманием к моменту вручения.",
};

const values = [
  {
    title: "Готово к вручению",
    text: "Подарок не нужно дооформлять: коробка, лента, открытка и композиция уже работают вместе.",
  },
  {
    title: "Без случайного наполнения",
    text: "В наборах сочетаются уходовые, декоративные, сладкие и полезные детали, которые поддерживают общий образ.",
  },
  {
    title: "Для разных поводов",
    text: "Есть варианты для близких, коллег, учителей, клиентов, сезонных праздников и благодарности.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="О бренде"
        title="Подарок должен быть красивым уже до первой фразы"
        text="wonder me box собирает готовые боксы, которые помогают поздравить тепло, аккуратно и без долгих поисков. Мы не про холодный премиум, а про приятный подарок, который уже упакован в эмоцию."
        image="/products/02-lavandovoe-nastroenie.webp"
        alt="Лавандовый подарочный набор wonder me box с нежной упаковкой"
      />

      <section className="section section--porcelain brand-story">
        <div className="section__inner brand-story__grid">
          <div>
            <p className="eyebrow">Идея</p>
            <h2>Собранный подарок вместо компромисса</h2>
          </div>
          <div className="story-copy">
            <p>
              Часто подарок покупают в последний момент, и он получается либо
              слишком обычным, либо требует еще упаковки, открытки и пары
              маленьких деталей. Wonder me box закрывает этот путь целиком:
              набор выглядит празднично, понятно и лично.
            </p>
            <p>
              Визуальный акцент бренда — готовая подача. Человек получает не
              просто вещи в коробке, а маленький сценарий распаковки: цвет,
              текстура, открытка, декор и настроение.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Принципы</p>
              <h2>Что важно в каждом боксе</h2>
            </div>
          </div>
          <div className="feature-grid">
            {values.map((value) => (
              <article key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section quote-band">
        <div className="section__inner">
          <blockquote>
            “Хороший подарок не объясняют долго. Его открывают — и сразу
            понятно, что о человеке подумали.”
          </blockquote>
        </div>
      </section>

      <ProductRail title="Наборы, с которых можно начать" />
    </main>
  );
}
