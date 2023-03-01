// import { relatedProducts } from "@algolia/recommend-js";
// import recommend from "@algolia/recommend";

(function (algolia) {
    const recommendClient = recommend(
        algolia.config.app_id,
        algolia.config.search_api_key
    );
    const indexName = "shopify_products";
    const currentObjectID = window.location.search.split('=')[1];
    if (!currentObjectID) return;
    /* TODO: add logic to prevent variants of same item showing */
    relatedProducts({
        container: "#relatedProducts",
        recommendClient,
        indexName,
        objectIDs: [currentObjectID],
        itemComponent({ item, createElement }) {
            return createElement('div', {}, [
                createElement('img', { src: item.product_image }),
                createElement('p', {}, item.title)
            ])
        },
    })
})(window.algoliaShopify);