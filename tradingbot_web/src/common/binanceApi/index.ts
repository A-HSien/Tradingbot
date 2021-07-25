import { signedPost } from "./signedPost";



export const actions = {
    Order: {
        api: '/api/v3/order',
        description: '現貨-下單',
        action: signedPost,
    },
    OrderTest: {
        api: '/api/v3/order/test',
        description: '現貨-下單測試',
        action: signedPost,
    },
    FOrder: {
        api:  '/fapi/v1/order',
        description: 'U本位合約-下單',
        action: signedPost,
    },
    FOrderTest: {
        api:  '/fapi/v1/order/test',
        description: 'U本位合約-下單測試',
        action: signedPost,
    },
    FPositionMargin: {
        api:  '/fapi/v1/positionMargin',
        description: 'U本位合約-調整逐倉保證金',
        action: signedPost,
    },
};

export type ActionKey = keyof typeof actions;