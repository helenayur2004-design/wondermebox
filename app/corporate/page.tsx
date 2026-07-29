import type { Metadata } from "next";
import { PageHero, ProductRail, RequestForm } from "../components";

export const metadata: Metadata = {
  title: "Корпоративные подарки wonder me box",
  description:
    "Корпоративные подарочные наборы wonder me box для сотрудников, клиентов, партнеров и праздничных кампаний.",
};

const options = [
  {
    title: "Единая партия",
    text: "Одинаковые наборы для команды, класса, офиса или клиентской базы.",
  },
  {
    title: "Разные категории",
    text: "Несколько типов боксов для женщин, мужчин, партнеров и руководителей.",
  },
  {
    title: "Брендирование",
    text: "Открытки, наклейки, ленты, цвета и вложения в стилистике вашей компании.",
  },
];

const process = [
  "Вы присылаете повод, количество, бюджет и желаемую дату.",
  "Мы предлагаем подборку наборов, цветовую подачу и варианты вложений.",
  "Согласовываем состав, упаковку, открытки и доставку.",
  "Готовим партию и передаем подарки к выбранной дате.",
];

export default function CorporatePage() {
  return (
    <main>
      <PageHero
        eyebrow="Корпоративные подарки"
        title="Наборы для команды, клиентов и партнеров"
        text="Подарки могут быть готовыми к вручению и при этом не выглядеть безлично. Подберем состав, упаковку и тон поздравления под вашу задачу."
        image="/products/men-gift-2.webp"
        alt="Подарочные наборы wonder me box для корпоративного заказа"
      />

      <section className="section section--porcelain">
        <div className="section__inner">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Форматы</p>
              <h2>Для небольших команд и больших партий</h2>
            </div>
          </div>
          <div className="feature-grid">
            {options.map((option) => (
              <article key={option.title}>
                <h3>{option.title}</h3>
                <p>{option.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section corporate-band">
        <div className="section__inner corporate-band__grid">
          <div>
            <p className="eyebrow">Процесс</p>
            <h2>Берем на себя подбор, оформление и подготовку</h2>
            <p>
              Можно отталкиваться от готовых наборов wonder me box или собрать
              партию в нужной палитре. Самое важное: срок, количество и бюджет.
            </p>
          </div>
          <ol className="process-list">
            {process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="section__inner contacts__grid">
          <div>
            <p className="eyebrow">Заявка для компании</p>
            <h2>Расскажите о партии подарков</h2>
            <p>
              В заявке можно написать только самое базовое: кому дарите, сколько
              наборов нужно и какой бюджет удобен. Остальное уточним в ответе.
            </p>
          </div>
          <RequestForm />
        </div>
      </section>

      <ProductRail title="Наборы, которые часто берут за основу" />
    </main>
  );
}
