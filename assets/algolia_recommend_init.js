(function (algolia) {
  return recommendClient = recommend(
    algolia.config.app_id,
    algolia.config.search_api_key
  );
})(window.algoliaShopify);
