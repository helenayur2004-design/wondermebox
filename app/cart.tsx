"use client";

import {
  createContext,
  type FormEvent,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { site, type Product } from "./content";

type CartProduct = Pick<
  Product,
  "slug" | "title" | "price" | "priceValue" | "image" | "alt" | "category"
>;

type CartItem = CartProduct & {
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  isOpen: boolean;
  addItem: (product: CartProduct) => void;
  decreaseItem: (slug: string) => void;
  removeItem: (slug: string) => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "wonder-me-box-cart";

function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}

function useCart() {
  const value = useContext(CartContext);

  if (!value) {
    throw new Error("Cart components must be used inside CartProvider");
  }

  return value;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as CartItem[];
      if (Array.isArray(parsed)) {
        setItems(parsed);
      }
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce(
      (sum, item) => sum + item.priceValue * item.quantity,
      0,
    );

    return {
      items,
      count,
      total,
      isOpen,
      addItem(product) {
        setItems((current) => {
          const existing = current.find((item) => item.slug === product.slug);
          if (existing) {
            return current.map((item) =>
              item.slug === product.slug
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
          }

          return [...current, { ...product, quantity: 1 }];
        });
        setIsOpen(true);
      },
      decreaseItem(slug) {
        setItems((current) =>
          current
            .map((item) =>
              item.slug === slug
                ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                : item,
            )
            .filter((item) => item.quantity > 0),
        );
      },
      removeItem(slug) {
        setItems((current) => current.filter((item) => item.slug !== slug));
      },
      openCart() {
        setIsOpen(true);
      },
      closeCart() {
        setIsOpen(false);
      },
      clearCart() {
        setItems([]);
      },
    };
  }, [isOpen, items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function CartButton({ className = "header-action" }: { className?: string }) {
  const { count, openCart } = useCart();

  return (
    <button className={className} onClick={openCart} type="button">
      Корзина
      {count > 0 ? <span className="cart-button__count">{count}</span> : null}
    </button>
  );
}

export function AddToCartButton({
  product,
  className = "button button--primary",
  children = "В корзину",
}: {
  product: CartProduct;
  className?: string;
  children?: ReactNode;
}) {
  const { addItem } = useCart();

  return (
    <button className={className} onClick={() => addItem(product)} type="button">
      {children}
    </button>
  );
}

export function CartDrawer() {
  const {
    addItem,
    clearCart,
    closeCart,
    decreaseItem,
    isOpen,
    items,
    removeItem,
    total,
  } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const addAgain = (item: CartItem) => {
    const product: CartProduct = {
      slug: item.slug,
      title: item.title,
      price: item.price,
      priceValue: item.priceValue,
      image: item.image,
      alt: item.alt,
      category: item.category,
    };

    addItem(product);
  };

  const orderLines = items.map(
    (item) =>
      `${item.title} — ${item.quantity} шт. x ${item.price} = ${formatPrice(
        item.quantity * item.priceValue,
      )}`,
  );

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (items.length === 0) return;

    const formData = new FormData(event.currentTarget);
    const orderNumber = `WMB-${Date.now().toString().slice(-6)}`;
    const payload = [
      `Заявка ${orderNumber}`,
      "",
      "Состав заказа:",
      ...orderLines,
      `Итого: ${formatPrice(total)}`,
      "",
      `Имя: ${formData.get("name") || ""}`,
      `Телефон: ${formData.get("phone") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Телефон получателя: ${formData.get("recipientPhone") || ""}`,
      `Получатель: ${formData.get("recipientName") || ""}`,
      `Город: ${formData.get("city") || ""}`,
      `Способ получения: ${formData.get("delivery") || ""}`,
      `Дата: ${formData.get("date") || ""}`,
      `Откуда узнали: ${formData.get("source") || ""}`,
      `Промокод: ${formData.get("promo") || ""}`,
      `Комментарий: ${formData.get("comment") || ""}`,
      `Подписка: ${formData.get("subscribe") ? "да" : "нет"}`,
    ].join("\n");

    const previous = JSON.parse(
      window.localStorage.getItem("wonder-me-box-orders") || "[]",
    ) as unknown[];
    window.localStorage.setItem(
      "wonder-me-box-orders",
      JSON.stringify([
        { orderNumber, createdAt: new Date().toISOString(), payload },
        ...previous,
      ]),
    );

    setSubmitted(true);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Заявка ${orderNumber} wonder me box`,
    )}&body=${encodeURIComponent(payload)}`;
  }

  return (
    <div className={isOpen ? "cart is-open" : "cart"} aria-hidden={!isOpen}>
      <button
        aria-label="Закрыть корзину"
        className="cart__backdrop"
        onClick={closeCart}
        type="button"
      />
      <aside className="cart__panel" aria-label="Корзина wonder me box">
        <div className="cart__header">
          <div>
            <p className="eyebrow">Корзина</p>
            <h2>Ваш заказ</h2>
          </div>
          <button aria-label="Закрыть" className="cart__close" onClick={closeCart} type="button">
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart__empty">
            <p>Корзина пока пустая.</p>
            <button className="button button--primary" onClick={closeCart} type="button">
              Вернуться к каталогу
            </button>
          </div>
        ) : (
          <>
            <div className="cart__items">
              {items.map((item) => (
                <article className="cart-item" key={item.slug}>
                  <img src={item.image} alt={item.alt} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                    <strong>{formatPrice(item.priceValue * item.quantity)}</strong>
                  </div>
                  <div className="cart-item__controls">
                    <button onClick={() => decreaseItem(item.slug)} type="button">
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addAgain(item)} type="button">
                      +
                    </button>
                    <button
                      aria-label={`Удалить ${item.title}`}
                      onClick={() => removeItem(item.slug)}
                      type="button"
                    >
                      ×
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart__total">
              <span>Итого</span>
              <strong>{formatPrice(total)}</strong>
            </div>

            <form className="cart-form" onSubmit={submitOrder}>
              <p>
                Онлайн-оплаты пока нет. Отправьте заявку, и мы подтвердим наличие,
                дату и удобный способ получения.
              </p>
              <label>
                Ваше имя
                <input name="name" placeholder="Имя и фамилия" required type="text" />
              </label>
              <label>
                Ваш email
                <input name="email" placeholder="hello@mail.ru" type="email" />
              </label>
              <label>
                Ваш телефон
                <input name="phone" placeholder="+7 (000) 000-00-00" required type="tel" />
              </label>
              <label>
                Телефон получателя
                <input name="recipientPhone" placeholder="+7 (000) 000-00-00" type="tel" />
              </label>
              <label>
                Город
                <input name="city" placeholder="Москва" type="text" />
              </label>
              <fieldset>
                <legend>Доставка</legend>
                <label>
                  <input defaultChecked name="delivery" type="radio" value="Самовывоз" />
                  Самовывоз бесплатно, адрес уточним позже
                </label>
                <label>
                  <input name="delivery" type="radio" value="Курьер по Москве" />
                  Курьером по Москве
                </label>
                <label>
                  <input name="delivery" type="radio" value="Курьер по Санкт-Петербургу" />
                  Курьером по Санкт-Петербургу
                </label>
                <label>
                  <input name="delivery" type="radio" value="СДЭК" />
                  СДЭК до двери или пункта выдачи
                </label>
                <label>
                  <input name="delivery" type="radio" value="Индивидуально" />
                  Другой город, рассчитать индивидуально
                </label>
              </fieldset>
              <label>
                Получатель
                <input name="recipientName" placeholder="ФИО полностью" type="text" />
              </label>
              <label>
                Желаемая дата
                <input name="date" type="date" />
              </label>
              <label>
                Комментарий
                <textarea
                  name="comment"
                  placeholder="Например: нужен подарок для коллеги, забрать удобно вечером"
                />
              </label>
              <label>
                Откуда вы о нас узнали?
                <select name="source" defaultValue="">
                  <option value="" disabled>
                    Выберите вариант
                  </option>
                  <option>Wildberries</option>
                  <option>Telegram</option>
                  <option>VK</option>
                  <option>Рекомендация</option>
                  <option>Поиск</option>
                </select>
              </label>
              <label>
                Промокод
                <input name="promo" placeholder="Введите промокод" type="text" />
              </label>
              <label className="cart-form__check">
                <input name="subscribe" type="checkbox" />
                Подписаться на новости и скидки
              </label>
              <button className="button button--primary" type="submit">
                Отправить заявку
              </button>
              {submitted ? (
                <p className="cart-form__success">
                  Заявка собрана. Если почтовое приложение не открылось, напишите
                  нам на {site.email} или в Telegram {site.telegramLabel}.
                </p>
              ) : null}
              <button className="cart-form__clear" onClick={clearCart} type="button">
                Очистить корзину
              </button>
            </form>
          </>
        )}
      </aside>
    </div>
  );
}
