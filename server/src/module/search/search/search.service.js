import Search from ".search.model.js";

export const universalSearchService = async (query) => {
  const filter = {};

  if (query.category) {
    filter.category = query.category;
  }

  if (query.product) {
    filter.product = query.product;
  }

  if (query.supplier) {
    filter.supplier = query.supplier;
  }

  const result = await Search.find(filter)
    .populate("category")
    .populate("product")
    .populate("supplier");

  return result;
};
