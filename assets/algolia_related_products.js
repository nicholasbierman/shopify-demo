import { relatedProducts } from "@algolia/recommend-js";
import recommend from "@algolia/recommend";
    const recommendClient = recommend(
        "U9UXVSI686",
        "920331fae729632bce0ec9d69a87e604"
    );
    const indexName = "shopify_products";
    const currentObjectID = "42447757312255";

    relatedProducts({
        container: "#relatedProducts",
        recommendClient,
        indexName,
        objectIDs: [42447757312255],
        itemComponent({ item, createElement }) {
            return createElement('div', {}. [
                createElement('img', { src: item.product_image }),
            createElement('p', {}, item.title)
            ])
        },
  });

