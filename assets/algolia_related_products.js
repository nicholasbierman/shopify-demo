// import { relatedProducts } from "@algolia/recommend-js";
// import recommend from "@algolia/recommend";

(function (algolia) {
    

    const recommendClient = recommend(
        algolia.config.app_id,
        "c2fb46977f0dda6da0561a2ac5c1674a"
    );
    const indexName = "shopify_products";
    const currentObjectID = "42447757312255";

    relatedProducts({
        container: "#relatedProducts",
        recommendClient,
        indexName,
        objectIDs: [42447757312255],
        itemComponent({ item, createElement }) {
            return createElement('div', {}, [
                createElement('img', { src: item.product_image }),
                createElement('p', {}, item.title)
            ])
        },
    })
})(window.algoliaShopify);