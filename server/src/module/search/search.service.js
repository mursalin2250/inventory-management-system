import Search from "./search.model.js";

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
    .populate("category" ,'name -_id')
    .populate("product",'name -_id')
    .populate("supplier",'name -_id -buyingPrice');

  return result;
};
