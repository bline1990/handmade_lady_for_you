"use client";

import ProductList from "./ProductList";

export default function ProductClient({ products, t, lang }) {
  return (
    <ProductList
      products={Array.isArray(products) ? products : []}
      t={t}
      lang={lang}
    />
  );
}
