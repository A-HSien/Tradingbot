// from https://fapi.binance.com/fapi/v1/exchangeInfo

const BTCUSDT = {
    "symbol": "BTCUSDT",
    "pair": "BTCUSDT",
    "contractType": "PERPETUAL",
    "deliveryDate": 4133404800000,
    "onboardDate": 1569398400000,
    "status": "TRADING",
    "maintMarginPercent": "2.5000",
    "requiredMarginPercent": "5.0000",
    "baseAsset": "BTC",
    "quoteAsset": "USDT",
    "marginAsset": "USDT",
    "pricePrecision": 2,
    "quantityPrecision": 3,
    "baseAssetPrecision": 8,
    "quotePrecision": 8,
    "underlyingType": "COIN",
    "underlyingSubType": [],
    "settlePlan": 0,
    "triggerProtect": "0.0500",
    "liquidationFee": "0.012000",
    "marketTakeBound": "0.10",
    "filters": [
        {
            "minPrice": "556.72",
            "maxPrice": "1000000",
            "filterType": "PRICE_FILTER",
            "tickSize": "0.01"
        },
        {
            "stepSize": "0.001",
            "filterType": "LOT_SIZE",
            "maxQty": "1000",
            "minQty": "0.001"
        },
        {
            "stepSize": "0.001",
            "filterType": "MARKET_LOT_SIZE",
            "maxQty": "200",
            "minQty": "0.001"
        },
        {
            "limit": 200,
            "filterType": "MAX_NUM_ORDERS"
        },
        {
            "limit": 10,
            "filterType": "MAX_NUM_ALGO_ORDERS"
        },
        {
            "notional": "5",
            "filterType": "MIN_NOTIONAL"
        },
        {
            "multiplierDown": "0.9000",
            "multiplierUp": "1.1000",
            "multiplierDecimal": "4",
            "filterType": "PERCENT_PRICE"
        }
    ],
    "orderTypes": [
        "LIMIT",
        "MARKET",
        "STOP",
        "STOP_MARKET",
        "TAKE_PROFIT",
        "TAKE_PROFIT_MARKET",
        "TRAILING_STOP_MARKET"
    ],
    "timeInForce": [
        "GTC",
        "IOC",
        "FOK",
        "GTX"
    ]
}


const ETHUSDT = {
    "symbol": "ETHUSDT",
    "pair": "ETHUSDT",
    "contractType": "PERPETUAL",
    "deliveryDate": 4133404800000,
    "onboardDate": 1569398400000,
    "status": "TRADING",
    "maintMarginPercent": "2.5000",
    "requiredMarginPercent": "5.0000",
    "baseAsset": "ETH",
    "quoteAsset": "USDT",
    "marginAsset": "USDT",
    "pricePrecision": 2,
    "quantityPrecision": 3,
    "baseAssetPrecision": 8,
    "quotePrecision": 8,
    "underlyingType": "COIN",
    "underlyingSubType": [],
    "settlePlan": 0,
    "triggerProtect": "0.0500",
    "liquidationFee": "0.005000",
    "marketTakeBound": "0.10",
    "filters": [
        {
            "minPrice": "39.86",
            "maxPrice": "100000",
            "filterType": "PRICE_FILTER",
            "tickSize": "0.01"
        },
        {
            "stepSize": "0.001",
            "filterType": "LOT_SIZE",
            "maxQty": "10000",
            "minQty": "0.001"
        },
        {
            "stepSize": "0.001",
            "filterType": "MARKET_LOT_SIZE",
            "maxQty": "2000",
            "minQty": "0.001"
        },
        {
            "limit": 200,
            "filterType": "MAX_NUM_ORDERS"
        },
        {
            "limit": 10,
            "filterType": "MAX_NUM_ALGO_ORDERS"
        },
        {
            "notional": "5",
            "filterType": "MIN_NOTIONAL"
        },
        {
            "multiplierDown": "0.9000",
            "multiplierUp": "1.1000",
            "multiplierDecimal": "4",
            "filterType": "PERCENT_PRICE"
        }
    ],
    "orderTypes": [
        "LIMIT",
        "MARKET",
        "STOP",
        "STOP_MARKET",
        "TAKE_PROFIT",
        "TAKE_PROFIT_MARKET",
        "TRAILING_STOP_MARKET"
    ],
    "timeInForce": [
        "GTC",
        "IOC",
        "FOK",
        "GTX"
    ]
}

const DOGEUSDT = {
    "symbol": "DOGEUSDT",
    "pair": "DOGEUSDT",
    "contractType": "PERPETUAL",
    "deliveryDate": 4133404800000,
    "onboardDate": 1569398400000,
    "status": "TRADING",
    "maintMarginPercent": "2.5000",
    "requiredMarginPercent": "5.0000",
    "baseAsset": "DOGE",
    "quoteAsset": "USDT",
    "marginAsset": "USDT",
    "pricePrecision": 6,
    "quantityPrecision": 0,
    "baseAssetPrecision": 8,
    "quotePrecision": 8,
    "underlyingType": "COIN",
    "underlyingSubType": [
        "HOT"
    ],
    "settlePlan": 0,
    "triggerProtect": "0.1500",
    "liquidationFee": "0.007500",
    "marketTakeBound": "0.10",
    "filters": [
        {
            "minPrice": "0.002440",
            "maxPrice": "10",
            "filterType": "PRICE_FILTER",
            "tickSize": "0.000010"
        },
        {
            "stepSize": "1",
            "filterType": "LOT_SIZE",
            "maxQty": "10000000",
            "minQty": "1"
        },
        {
            "stepSize": "1",
            "filterType": "MARKET_LOT_SIZE",
            "maxQty": "5000000",
            "minQty": "1"
        },
        {
            "limit": 200,
            "filterType": "MAX_NUM_ORDERS"
        },
        {
            "limit": 10,
            "filterType": "MAX_NUM_ALGO_ORDERS"
        },
        {
            "notional": "5",
            "filterType": "MIN_NOTIONAL"
        },
        {
            "multiplierDown": "0.9000",
            "multiplierUp": "1.1000",
            "multiplierDecimal": "4",
            "filterType": "PERCENT_PRICE"
        }
    ],
    "orderTypes": [
        "LIMIT",
        "MARKET",
        "STOP",
        "STOP_MARKET",
        "TAKE_PROFIT",
        "TAKE_PROFIT_MARKET",
        "TRAILING_STOP_MARKET"
    ],
    "timeInForce": [
        "GTC",
        "IOC",
        "FOK",
        "GTX"
    ]
};

export const infos: Record<string, typeof DOGEUSDT> = {
    BTCUSDT, ETHUSDT, DOGEUSDT
}