// import { relatedProducts } from "@algolia/recommend-js";
// import recommend from "@algolia/recommend";

(function (algolia) {
  const recommendClient = recommend(
    algolia.config.app_id,
    algolia.config.search_api_key
  );
/* TODO: add logic to read current indexName */
  const indexName = "shopify_products";
  const arrayOfCartProducts = document.querySelectorAll('.cart-item__details');
  const objectIDs = arrayOfCartProducts.map(product => {
    product
  })
  /* TODO: add logic to prevent variants of same item showing */
  frequentlyBoughtTogether({
    container: "#frequentlyBoughtTogether",
    recommendClient,
    indexName,
    objectID: [42447759540479],
    itemComponent({ item, createElement }) {
      console.log(item);
      return createElement("div", {}, [
        createElement("img", { src: item.product_image }),
        createElement("p", {}, item.title),
      ]);
    },
  });
})(window.algoliaShopify);
