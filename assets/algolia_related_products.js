import { relatedProducts } from "@algolia/recommend-js";
import recommend from "@algolia/recommend";

function(algolia) {
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
        objectIDs: [currentObjectID],
        itemComponent({ item }) {
            return (
                <pre>
                    <code>{JSON.stringify(item)}</code>
                </pre>
            );
        },
    });
} (window.algoliaShopify);
