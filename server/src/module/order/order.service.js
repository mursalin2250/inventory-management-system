import orderModel from './order.model.js'

export const createOrderService = async (data) => {
  return await orderModel.create(data);
};

export const getAllOrderService = async ({ page = 1, limit = 10, status }) => {
  const query = status ? { status } : {};

  const orders = await orderModel.find(query)
    .limit(Number(limit))
    .skip((page - 1) * limit)
    .sort({ createdAt: -1 });

  const total = await orderModel.countDocuments(query);

  return {
    orders,
    total,
    currentPage: Number(page),
    totalPages: Math.ceil(total / limit)
  };
};

export const getOrderByIdService = async (id) => {
  return await orderModel.findById(id);
};

export const updateStatusService = async (id, status) => {
  return await orderModel.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
};

export const orderSummaryService = async () => {
  const totalOrders = await orderModel.countDocuments();

  const totalRevenueAgg = await orderModel.aggregate([
    { $match: { status: "Confirmed" } },
    { $group: { _id: null, total: { $sum: "$orderValue" } } }
  ]);

  const returned = await orderModel.countDocuments({ status: "Returned" });
  const onTheWay = await orderModel.countDocuments({ status: "Out for delivery" });
  const delayed = await orderModel.countDocuments({ status: "Delayed" });

  return {
    totalOrders,
    totalRevenue: totalRevenueAgg[0]?.total || 0,
    returned,
    onTheWay,
    delayed
  };
};
