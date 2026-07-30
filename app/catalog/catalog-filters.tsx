"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "../components";
import { products } from "../content";

const filters = [
  {
    id: "all",
    label: "все",
    description:
      "Все готовые наборы wonder me box: для личных подарков, сезонных поводов и небольших вручений.",
  },
  {
    id: "для нее",
    label: "для нее",
    description:
      "Нежные, праздничные и self-care боксы для мамы, подруги, коллеги или любимого человека.",
  },
  {
    id: "для него",
    label: "для него",
    description:
      "Сдержанные подарочные наборы с контрастной подачей, темной упаковкой и практичными деталями.",
  },
  {
    id: "сезонные",
    label: "сезонные",
    description:
      "Праздничные коллекции к Новому году, Дню учителя, благодарности и важным датам.",
  },
];

export function CatalogFilters() {
  const [active, setActive] = useState(filters[0].id);

  const visibleProducts = useMemo(() => {
    if (active === "all") {
      return products;
    }

    return products.filter((product) => product.category === active);
  }, [active]);

  const activeFilter = filters.find((filter) => filter.id === active) ?? filters[0];

  return (
    <div className="catalog-filter">
      <div className="catalog-filter__bar">
        <div className="catalog-filter__tabs" role="tablist" aria-label="Фильтр каталога">
          {filters.map((filter) => (
            <button
              aria-selected={filter.id === active}
              className={filter.id === active ? "is-active" : undefined}
              key={filter.id}
              onClick={() => setActive(filter.id)}
              role="tab"
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>
        <p>{activeFilter.description}</p>
      </div>
      <div className="product-grid product-grid--catalog">
        {visibleProducts.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>
    </div>
  );
}
