// import {
//     createOrderService,
//     getAllOrderService,
//     getOrderByIdService,
//     orderSummaryService,
//     updateStatusService
// } from './order.service.js';

// export const createOrder = async(req,res) => {
//   const order = await createOrderService(req.body);
//   res.status(201).json(order);
// };

// export const getAllOrder = async(req,res) => {
//     const result = await getAllOrderService(req.query);
//     res.json(result);
// };

// export const getOrderById = async(req,res) => {
//     const order = await getOrderByIdService(req.id);
//     res.json(order);
// };

// export const updateOrderStatus = async(req,res) => {
//     const update = await updateStatusService(
//         req.params.id,
//         req.body.status
//     );
//     res.json(update);
// };

// export const getOrderSummary = async(req,res) => {
//     const summary = await orderSummaryService();
//     res.json(summary);
// };

import {
  createOrderService,
  getAllOrderService,
  getOrderByIdService,
  orderSummaryService,
  updateStatusService
} from './order.service.js';

export const createOrder = async (req, res) => {
  try {
    const order = await createOrderService(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAllOrder = async (req, res) => {
  try {
    const result = await getAllOrderService(req.query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await getOrderByIdService(req.params.id);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateOrderStatus = async (req, res) => {
  try {
    const update = await updateStatusService(
      req.params.id,
      req.body.status
    );
    res.json(update);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderSummary = async (req, res) => {
  try {
    const summary = await orderSummaryService();
    res.json(summary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
