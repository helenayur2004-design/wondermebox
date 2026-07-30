import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the wonder me box home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /wonder me box/i);
  assert.match(html, /В каталог/);
  assert.match(html, />Главное</);
  assert.match(html, /Реальные наборы wonder me box/);
  assert.match(html, /Изумрудный платок/);
  assert.match(html, /Посмотреть ещё/);
  assert.match(html, /Наполнение/);
  assert.doesNotMatch(html, />WB</);
  assert.doesNotMatch(html, /product-card__meta/);
  const badgeBlocks = html.match(/<div class="product-card__badges"[^>]*>.*?<\/div>/g) ?? [];
  assert.equal(badgeBlocks.length, 6);
  badgeBlocks.forEach((block) => {
    assert.equal((block.match(/<span/g) ?? []).length, 1);
  });
  assert.match(html, /Мы на маркетплейсах/);
  assert.match(html, /Яндекс Маркет/);
  assert.doesNotMatch(html, /Каталог готовых наборов/);
  assert.match(html, /остальное мы берём на себя/);
  assert.doesNotMatch(html, /онлайн-оплаты сейчас/);
  assert.doesNotMatch(html, /Где заказать/);
  assert.doesNotMatch(html, /Подарок должен выглядеть собранным/);
  assert.doesNotMatch(html, /Главное в наборе — момент/);
  assert.doesNotMatch(html, /Партия для команды|Подарки клиентам|Брендированная упаковка/);
  assert.match(html, /фото скоро/);
  assert.doesNotMatch(html, /Codex is working|Your site is taking shape|react-loading-skeleton/);
});

test("server-renders catalog and product pages", async () => {
  const catalog = await render("/catalog");
  assert.equal(catalog.status, 200);
  assert.match(await catalog.text(), /Витрина wonder me box/);

  const product = await render("/catalog/nezhny-kompliment");
  assert.equal(product.status, 200);
  const html = await product.text();
  assert.match(html, /Изумрудный платок/);
  assert.match(html, /В корзину/);
  assert.match(html, /Купить на WB/);
});
