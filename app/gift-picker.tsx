"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "./content";

const recipients = [
  { id: "для нее", label: "для нее" },
  { id: "для него", label: "для него" },
  { id: "благодарность", label: "спасибо" },
  { id: "сезон", label: "праздник" },
];

const occasions = [
  { id: "день рождения", label: "день рождения" },
  { id: "новый год", label: "новый год" },
  { id: "забота", label: "self-care" },
  { id: "спасибо", label: "учителю / коллеге" },
];

const budgets = ["до 1 500 ₽", "1 500–3 000 ₽", "партия B2B"];

export function GiftPicker() {
  const [recipient, setRecipient] = useState(recipients[0].id);
  const [occasion, setOccasion] = useState(occasions[0].id);
  const [budget, setBudget] = useState(budgets[1]);

  const recommendation = useMemo(() => {
    const direct =
      products.find(
        (product) =>
          (product.category === recipient ||
            (recipient === "для нее" && product.category === "self-care")) &&
          product.occasion === occasion,
      ) ??
      products.find(
        (product) =>
          product.category === recipient ||
          (recipient === "для нее" && product.category === "self-care"),
      );

    if (budget === "партия B2B") {
      return products.find((product) => product.slug === "men-gift") ?? direct ?? products[0];
    }

    return direct ?? products[0];
  }, [budget, occasion, recipient]);

  return (
    <section className="section gift-picker-section" id="gift-picker">
      <div className="section__inner gift-picker">
        <div className="gift-picker__intro">
          <p className="eyebrow">Подбор за минуту</p>
          <h2>Соберите вводные, а сайт сразу покажет подходящий набор</h2>
          <p>
            Это быстрый сценарий для покупателя: он выбирает получателя, повод и
            бюджет, а затем переходит в карточку подходящего бокса или оставляет
            заявку на партию.
          </p>
        </div>

        <div className="gift-picker__panel" aria-label="Подбор подарочного набора">
          <div className="gift-picker__controls">
            <fieldset>
              <legend>Получатель</legend>
              <div className="choice-row">
                {recipients.map((item) => (
                  <button
                    className={recipient === item.id ? "is-active" : undefined}
                    key={item.id}
                    onClick={() => setRecipient(item.id)}
                    type="button"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>Повод</legend>
              <div className="choice-row">
                {occasions.map((item) => (
                  <button
                    className={occasion === item.id ? "is-active" : undefined}
                    key={item.id}
                    onClick={() => setOccasion(item.id)}
                    type="button"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>Формат</legend>
              <div className="choice-row">
                {budgets.map((item) => (
                  <button
                    className={budget === item ? "is-active" : undefined}
                    key={item}
                    onClick={() => setBudget(item)}
                    type="button"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          <article className="gift-picker__result">
            <figure>
              <img src={recommendation.image} alt={recommendation.alt} />
            </figure>
            <div>
              <p className="eyebrow">Рекомендация</p>
              <h3>{recommendation.title}</h3>
              <p>{recommendation.intro}</p>
              <div className="hero__actions">
                <Link className="button button--primary" href={`/catalog/${recommendation.slug}`}>
                  Смотреть набор
                </Link>
                <a className="button button--ghost" href={recommendation.href}>
                  Купить на WB
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
