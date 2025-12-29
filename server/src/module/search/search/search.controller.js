import { universalSearchService } from "./search.service.js";

export const universalSearchController = async (req, res) => {
  try {
    const data = await universalSearchService(req.query);

    res.status(200).json({
      success: true,
      total: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
