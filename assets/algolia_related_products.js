import { relatedProducts } from "@algolia/recommend-js";
import recommend from "@algolia/recommend";

const recommendClient = recommend(
  "U9UXVSI686",
  "920331fae729632bce0ec9d69a87e604"
);
const indexName = "YOUR_INDEX_NAME";
const currentObjectID = "YOUR_OBJECT_ID";

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
