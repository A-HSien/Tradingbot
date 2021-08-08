import { HttpErrors } from "@loopback/rest";
import { FutureApiBase } from "./common";
import { BinanceAPI } from "./HttpMethods";

const api = FutureApiBase + '/fapi/v1/exchangeInfo';
const resp = {
    "timezone": "UTC",
    "serverTime": 1627907955766,
    "futuresType": "U_MARGINED",
    "rateLimits": [
        {
            "rateLimitType": "REQUEST_WEIGHT",
            "interval": "MINUTE",
            "intervalNum": 1,
            "limit": 2400
        },
        {
            "rateLimitType": "ORDERS",
            "interval": "MINUTE",
            "intervalNum": 1,
            "limit": 1200
        },
        {
            "rateLimitType": "ORDERS",
            "interval": "SECOND",
            "intervalNum": 10,
            "limit": 300
        }
    ],
    "exchangeFilters": [],
    "assets": [
        {
            "asset": "USDT",
            "marginAvailable": true,
            "autoAssetExchange": "-10000"
        },
        {
            "asset": "BTC",
            "marginAvailable": true,
            "autoAssetExchange": "-0.00100000"
        },
        {
            "asset": "BNB",
            "marginAvailable": false,
            "autoAssetExchange": "0"
        },
        {
            "asset": "ETH",
            "marginAvailable": true,
            "autoAssetExchange": "-5"
        },
        {
            "asset": "BUSD",
            "marginAvailable": true,
            "autoAssetExchange": "-10000"
        }
    ],
    "symbols": [
        {
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
        },
        {
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
        },
        {
            "symbol": "BCHUSDT",
            "pair": "BCHUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BCH",
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
                    "minPrice": "13.93",
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
                    "maxQty": "1000",
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
        },
        {
            "symbol": "XRPUSDT",
            "pair": "XRPUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "XRP",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 1,
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
                    "minPrice": "0.0143",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "EOSUSDT",
            "pair": "EOSUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "EOS",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
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
                    "minPrice": "0.111",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "200000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "LTCUSDT",
            "pair": "LTCUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "LTC",
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
                    "minPrice": "3.61",
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
                    "maxQty": "10000",
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
        },
        {
            "symbol": "TRXUSDT",
            "pair": "TRXUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "TRX",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
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
                    "minPrice": "0.00132",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "10000000",
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
        },
        {
            "symbol": "ETCUSDT",
            "pair": "ETCUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ETC",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 2,
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
                    "minPrice": "1.051",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "LOT_SIZE",
                    "maxQty": "100000",
                    "minQty": "0.01"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "100000",
                    "minQty": "0.01"
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
        },
        {
            "symbol": "LINKUSDT",
            "pair": "LINKUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "LINK",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 2,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI",
                "HOT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.0500",
            "liquidationFee": "0.005000",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.464",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "LOT_SIZE",
                    "maxQty": "100000",
                    "minQty": "0.01"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "100000",
                    "minQty": "0.01"
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
        },
        {
            "symbol": "XLMUSDT",
            "pair": "XLMUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "XLM",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
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
                    "minPrice": "0.00648",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "1000000",
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
        },
        {
            "symbol": "ADAUSDT",
            "pair": "ADAUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ADA",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "HOT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.0500",
            "liquidationFee": "0.005000",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.01740",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00010"
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
                    "maxQty": "3000000",
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
        },
        {
            "symbol": "XMRUSDT",
            "pair": "XMRUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "XMR",
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
                    "minPrice": "4.36",
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
                    "maxQty": "5000",
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
        },
        {
            "symbol": "DASHUSDT",
            "pair": "DASHUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "DASH",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 2,
            "quantityPrecision": 3,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "3.82",
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
                    "maxQty": "3000",
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
        },
        {
            "symbol": "ZECUSDT",
            "pair": "ZECUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ZEC",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 2,
            "quantityPrecision": 3,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "2.85",
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
                    "maxQty": "5000",
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
        },
        {
            "symbol": "XTZUSDT",
            "pair": "XTZUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "XTZ",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
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
                    "minPrice": "0.064",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "600000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "BNBUSDT",
            "pair": "BNBUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BNB",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 2,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "BSC",
                "HOT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.0500",
            "liquidationFee": "0.005000",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "6.600",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.010"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "LOT_SIZE",
                    "maxQty": "100000",
                    "minQty": "0.01"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "20000",
                    "minQty": "0.01"
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
        },
        {
            "symbol": "ATOMUSDT",
            "pair": "ATOMUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ATOM",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 2,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.251",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "LOT_SIZE",
                    "maxQty": "100000",
                    "minQty": "0.01"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "100000",
                    "minQty": "0.01"
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
        },
        {
            "symbol": "ONTUSDT",
            "pair": "ONTUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ONT",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "BSC"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0241",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "500000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "IOTAUSDT",
            "pair": "IOTAUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "IOTA",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0205",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "200000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "BATUSDT",
            "pair": "BATUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BAT",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0134",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "600000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "VETUSDT",
            "pair": "VETUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "VET",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 6,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.002080",
                    "maxPrice": "100000",
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
                    "maxQty": "10000000",
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
        },
        {
            "symbol": "NEOUSDT",
            "pair": "NEOUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "NEO",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 2,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "1.093",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "LOT_SIZE",
                    "maxQty": "100000",
                    "minQty": "0.01"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "20000",
                    "minQty": "0.01"
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
        },
        {
            "symbol": "QTUMUSDT",
            "pair": "QTUMUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "QTUM",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.246",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "90000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "IOSTUSDT",
            "pair": "IOSTUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "IOST",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 6,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.000587",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.000001"
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
                    "maxQty": "10000000",
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
        },
        {
            "symbol": "THETAUSDT",
            "pair": "THETAUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "THETA",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.1070",
                    "maxPrice": "1000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0010"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "400000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "ALGOUSDT",
            "pair": "ALGOUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ALGO",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0141",
                    "maxPrice": "1000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "ZILUSDT",
            "pair": "ZILUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ZIL",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00219",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
        },
        {
            "symbol": "KNCUSDT",
            "pair": "KNCUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "KNC",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.03200",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00100"
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
                    "maxQty": "300000",
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
        },
        {
            "symbol": "ZRXUSDT",
            "pair": "ZRXUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ZRX",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0179",
                    "maxPrice": "1000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "500000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "COMPUSDT",
            "pair": "COMPUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "COMP",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 2,
            "quantityPrecision": 3,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "8",
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
                    "maxQty": "2500",
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
        },
        {
            "symbol": "OMGUSDT",
            "pair": "OMGUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "OMG",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.1055",
                    "maxPrice": "1000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "100000",
                    "minQty": "0.1"
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
        },
        {
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
        },
        {
            "symbol": "SXPUSDT",
            "pair": "SXPUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "SXP",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI",
                "BSC"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0454",
                    "maxPrice": "1000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "500000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "KAVAUSDT",
            "pair": "KAVAUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "KAVA",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0593",
                    "maxPrice": "200",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "200000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "BANDUSDT",
            "pair": "BANDUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BAND",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.1647",
                    "maxPrice": "500",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "80000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "RLCUSDT",
            "pair": "RLCUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "RLC",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.1029",
                    "maxPrice": "200",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "170000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "WAVESUSDT",
            "pair": "WAVESUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "WAVES",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.3420",
                    "maxPrice": "200",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0010"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "32000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "MKRUSDT",
            "pair": "MKRUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "MKR",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 2,
            "quantityPrecision": 3,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "50",
                    "maxPrice": "50000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.10"
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
        },
        {
            "symbol": "SNXUSDT",
            "pair": "SNXUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "SNX",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.164",
                    "maxPrice": "1000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "40000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "DOTUSDT",
            "pair": "DOTUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "DOT",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "HOT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.0500",
            "liquidationFee": "0.005000",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.373",
                    "maxPrice": "500",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "100000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "DEFIUSDT",
            "pair": "DEFIUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "DEFI",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 1,
            "quantityPrecision": 3,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "INDEX",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "33.8",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.1"
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
        },
        {
            "symbol": "YFIUSDT",
            "pair": "YFIUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "YFI",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 1,
            "quantityPrecision": 3,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "667",
                    "maxPrice": "500000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "1"
                },
                {
                    "stepSize": "0.001",
                    "filterType": "LOT_SIZE",
                    "maxQty": "500",
                    "minQty": "0.001"
                },
                {
                    "stepSize": "0.001",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "25",
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
        },
        {
            "symbol": "BALUSDT",
            "pair": "BALUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BAL",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.630",
                    "maxPrice": "5000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "20000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "CRVUSDT",
            "pair": "CRVUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "CRV",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.031",
                    "maxPrice": "1000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "300000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "TRBUSDT",
            "pair": "TRBUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "TRB",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "1.230",
                    "maxPrice": "4000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.010"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "10000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "YFIIUSDT",
            "pair": "YFIIUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "YFII",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 1,
            "quantityPrecision": 3,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "31.1",
                    "maxPrice": "300000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.1"
                },
                {
                    "stepSize": "0.001",
                    "filterType": "LOT_SIZE",
                    "maxQty": "500",
                    "minQty": "0.001"
                },
                {
                    "stepSize": "0.001",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "100",
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
        },
        {
            "symbol": "RUNEUSDT",
            "pair": "RUNEUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "RUNE",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.1720",
                    "maxPrice": "200",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0010"
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
                    "maxQty": "50000",
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
        },
        {
            "symbol": "SUSHIUSDT",
            "pair": "SUSHIUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "SUSHI",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI",
                "HOT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.1430",
                    "maxPrice": "500",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0010"
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
                    "maxQty": "100000",
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
        },
        {
            "symbol": "SRMUSDT",
            "pair": "SRMUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "SRM",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0920",
                    "maxPrice": "300",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0010"
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
                    "maxQty": "100000",
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
        },
        {
            "symbol": "BZRXUSDT",
            "pair": "BZRXUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BZRX",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0079",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
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
                    "maxQty": "1000000",
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
        },
        {
            "symbol": "EGLDUSDT",
            "pair": "EGLDUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "EGLD",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "1.770",
                    "maxPrice": "2000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.010"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "6000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "SOLUSDT",
            "pair": "SOLUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "SOL",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.4130",
                    "maxPrice": "400",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0010"
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
                    "maxQty": "20000",
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
        },
        {
            "symbol": "ICXUSDT",
            "pair": "ICXUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ICX",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0234",
                    "maxPrice": "400",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
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
                    "maxQty": "300000",
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
        },
        {
            "symbol": "STORJUSDT",
            "pair": "STORJUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "STORJ",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0190",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
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
                    "maxQty": "500000",
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
        },
        {
            "symbol": "BLZUSDT",
            "pair": "BLZUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BLZ",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00360",
                    "maxPrice": "20",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "2000000",
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
        },
        {
            "symbol": "UNIUSDT",
            "pair": "UNIUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "UNI",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI",
                "HOT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.3730",
                    "maxPrice": "300",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0010"
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
                    "maxQty": "100000",
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
        },
        {
            "symbol": "AVAXUSDT",
            "pair": "AVAXUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "AVAX",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.3480",
                    "maxPrice": "1000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0010"
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
                    "maxQty": "25000",
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
        },
        {
            "symbol": "FTMUSDT",
            "pair": "FTMUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "FTM",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 6,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.007660",
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
                    "maxQty": "1000000",
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
        },
        {
            "symbol": "HNTUSDT",
            "pair": "HNTUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "HNT",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.1660",
                    "maxPrice": "1000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0010"
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
                    "maxQty": "30000",
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
        },
        {
            "symbol": "ENJUSDT",
            "pair": "ENJUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ENJ",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "NFT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.02250",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00010"
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
                    "maxQty": "750000",
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
        },
        {
            "symbol": "FLMUSDT",
            "pair": "FLMUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "FLM",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0096",
                    "maxPrice": "1000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
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
                    "maxQty": "800000",
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
        },
        {
            "symbol": "TOMOUSDT",
            "pair": "TOMOUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "TOMO",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0250",
                    "maxPrice": "1000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
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
                    "maxQty": "110000",
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
        },
        {
            "symbol": "RENUSDT",
            "pair": "RENUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "REN",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00878",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "500000",
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
        },
        {
            "symbol": "KSMUSDT",
            "pair": "KSMUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "KSM",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "4.060",
                    "maxPrice": "10000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.010"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "2000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "NEARUSDT",
            "pair": "NEARUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "NEAR",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0477",
                    "maxPrice": "1000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
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
                    "maxQty": "120000",
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
        },
        {
            "symbol": "AAVEUSDT",
            "pair": "AAVEUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "AAVE",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "4.340",
                    "maxPrice": "10000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.010"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "5000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "FILUSDT",
            "pair": "FILUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "FIL",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "1.381",
                    "maxPrice": "10000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "10000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "20000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "RSRUSDT",
            "pair": "RSRUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "RSR",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 6,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.000778",
                    "maxPrice": "10",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.000001"
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
                    "maxQty": "10000000",
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
        },
        {
            "symbol": "LRCUSDT",
            "pair": "LRCUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "LRC",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00512",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "700000",
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
        },
        {
            "symbol": "MATICUSDT",
            "pair": "MATICUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "MATIC",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00960",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00010"
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
                    "maxQty": "1000000",
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
        },
        {
            "symbol": "OCEANUSDT",
            "pair": "OCEANUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "OCEAN",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.01379",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "400000",
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
        },
        {
            "symbol": "CVCUSDT",
            "pair": "CVCUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "CVC",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00517",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "1000000",
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
        },
        {
            "symbol": "BELUSDT",
            "pair": "BELUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BEL",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI",
                "BSC"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.03610",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00010"
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
                    "maxQty": "200000",
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
        },
        {
            "symbol": "CTKUSDT",
            "pair": "CTKUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "CTK",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "BSC"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.02600",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00100"
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
                    "maxQty": "150000",
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
        },
        {
            "symbol": "AXSUSDT",
            "pair": "AXSUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "AXS",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "NFT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.015000",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.08000",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.01000"
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
                    "maxQty": "100000",
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
        },
        {
            "symbol": "ALPHAUSDT",
            "pair": "ALPHAUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ALPHA",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.01760",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00010"
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
                    "maxQty": "500000",
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
        },
        {
            "symbol": "ZENUSDT",
            "pair": "ZENUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1569398400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ZEN",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "1.437",
                    "maxPrice": "10000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "8000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "SKLUSDT",
            "pair": "SKLUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1598252400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "SKL",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00544",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "1000000",
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
        },
        {
            "symbol": "GRTUSDT",
            "pair": "GRTUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1608274800000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "GRT",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.01398",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "300000",
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
        },
        {
            "symbol": "1INCHUSDT",
            "pair": "1INCHUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1608879600000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "1INCH",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI",
                "HOT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0613",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "1"
                },
                {
                    "stepSize": "1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "100000",
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
        },
        {
            "symbol": "BTCBUSD",
            "pair": "BTCBUSD",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1610352000000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BTC",
            "quoteAsset": "BUSD",
            "marginAsset": "BUSD",
            "pricePrecision": 1,
            "quantityPrecision": 3,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.012000",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "557.6",
                    "maxPrice": "500000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.1"
                },
                {
                    "stepSize": "0.001",
                    "filterType": "LOT_SIZE",
                    "maxQty": "500",
                    "minQty": "0.001"
                },
                {
                    "stepSize": "0.001",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "20",
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
        },
        {
            "symbol": "AKROUSDT",
            "pair": "AKROUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1610953200000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "AKRO",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00048",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "7000000",
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
        },
        {
            "symbol": "CHZUSDT",
            "pair": "CHZUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1611212400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "CHZ",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "NFT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00447",
                    "maxPrice": "100",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
        },
        {
            "symbol": "SANDUSDT",
            "pair": "SANDUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1610953200000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "SAND",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "NFT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00494",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "1000000",
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
        },
        {
            "symbol": "ANKRUSDT",
            "pair": "ANKRUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1611558000000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ANKR",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 6,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.001510",
                    "maxPrice": "100000",
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
        },
        {
            "symbol": "LUNAUSDT",
            "pair": "LUNAUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1611730800000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "LUNA",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.1600",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0010"
                },
                {
                    "stepSize": "1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "1"
                },
                {
                    "stepSize": "1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "30000",
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
        },
        {
            "symbol": "BTSUSDT",
            "pair": "BTSUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1612076400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BTS",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00114",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "3000000",
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
        },
        {
            "symbol": "LITUSDT",
            "pair": "LITUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1613545200000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "LIT",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.077",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "100000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "UNFIUSDT",
            "pair": "UNFIUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1612854000000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "UNFI",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI",
                "BSC"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.222",
                    "maxPrice": "10000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "20000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "DODOUSDT",
            "pair": "DODOUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1613718000000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "DODO",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI",
                "BSC"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.033",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "300000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "REEFUSDT",
            "pair": "REEFUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1611558000000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "REEF",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 6,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.000516",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.000001"
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
                    "maxQty": "10000000",
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
        },
        {
            "symbol": "RVNUSDT",
            "pair": "RVNUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1614063600000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "RVN",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00154",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "3000000",
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
        },
        {
            "symbol": "SFPUSDT",
            "pair": "SFPUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1614150000000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "SFP",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0223",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "1"
                },
                {
                    "stepSize": "1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "300000",
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
        },
        {
            "symbol": "XEMUSDT",
            "pair": "XEMUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1614668400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "XEM",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0035",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "1"
                },
                {
                    "stepSize": "1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "1000000",
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
        },
        {
            "symbol": "BTCSTUSDT",
            "pair": "BTCSTUSDT",
            "contractType": "",
            "deliveryDate": 4133404800000,
            "onboardDate": 1614754800000,
            "status": "PENDING_TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BTCST",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.040000",
            "marketTakeBound": "0.30",
            "filters": [
                {
                    "minPrice": "0.668",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "1000",
                    "minQty": "0.1"
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
                    "multiplierDown": "0.8500",
                    "multiplierUp": "1.1500",
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
        },
        {
            "symbol": "COTIUSDT",
            "pair": "COTIUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1615273200000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "COTI",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00328",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "1000000",
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
        },
        {
            "symbol": "CHRUSDT",
            "pair": "CHRUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1615532400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "CHR",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "NFT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0031",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "1"
                },
                {
                    "stepSize": "1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "1000000",
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
        },
        {
            "symbol": "MANAUSDT",
            "pair": "MANAUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1615705200000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "MANA",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "NFT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0136",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "1"
                },
                {
                    "stepSize": "1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "100000",
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
        },
        {
            "symbol": "ALICEUSDT",
            "pair": "ALICEUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1615791600000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ALICE",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "NFT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.120",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "10000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "HBARUSDT",
            "pair": "HBARUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1615964400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "HBAR",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00279",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "300000",
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
        },
        {
            "symbol": "ONEUSDT",
            "pair": "ONEUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1615964400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ONE",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00124",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "1000000",
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
        },
        {
            "symbol": "LINAUSDT",
            "pair": "LINAUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1615964400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "LINA",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "BSC"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00087",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
        },
        {
            "symbol": "STMXUSDT",
            "pair": "STMXUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1615964400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "STMX",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00048",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "10000000",
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
        },
        {
            "symbol": "DENTUSDT",
            "pair": "DENTUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1616482800000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "DENT",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 6,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.000070",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.000001"
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
                    "maxQty": "10000000",
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
        },
        {
            "symbol": "CELRUSDT",
            "pair": "CELRUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1617001200000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "CELR",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00050",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
        },
        {
            "symbol": "HOTUSDT",
            "pair": "HOTUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1617087600000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "HOT",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 6,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.000129",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.000001"
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
                    "maxQty": "10000000",
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
        },
        {
            "symbol": "MTLUSDT",
            "pair": "MTLUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1617174000000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "MTL",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0390",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "1"
                },
                {
                    "stepSize": "1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "50000",
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
        },
        {
            "symbol": "OGNUSDT",
            "pair": "OGNUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1617174000000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "OGN",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "NFT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0137",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "1"
                },
                {
                    "stepSize": "1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "100000",
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
        },
        {
            "symbol": "BTTUSDT",
            "pair": "BTTUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1617692400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BTT",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 6,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.000067",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.000001"
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
                    "maxQty": "10000000",
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
        },
        {
            "symbol": "NKNUSDT",
            "pair": "NKNUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1617865200000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "NKN",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00602",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "150000",
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
        },
        {
            "symbol": "SCUSDT",
            "pair": "SCUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1618210800000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "SC",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 6,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.000368",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.000001"
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
                    "maxQty": "10000000",
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
        },
        {
            "symbol": "DGBUSDT",
            "pair": "DGBUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1618815600000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "DGB",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 5,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.00131",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00001"
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
                    "maxQty": "1500000",
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
        },
        {
            "symbol": "1000SHIBUSDT",
            "pair": "1000SHIBUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1620630000000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "1000SHIB",
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
                    "minPrice": "0.000157",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.000001"
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
        },
        {
            "symbol": "ICPUSDT",
            "pair": "ICPUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1620716400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ICP",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 2,
            "quantityPrecision": 2,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "3",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.01"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "LOT_SIZE",
                    "maxQty": "100000",
                    "minQty": "0.01"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "10000",
                    "minQty": "0.01"
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
        },
        {
            "symbol": "BAKEUSDT",
            "pair": "BAKEUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1621321200000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BAKE",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0500",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "1"
                },
                {
                    "stepSize": "1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "30000",
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
        },
        {
            "symbol": "GTCUSDT",
            "pair": "GTCUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1615791600000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "GTC",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 3,
            "quantityPrecision": 1,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.200",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.001"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "0.1"
                },
                {
                    "stepSize": "0.1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "5000",
                    "minQty": "0.1"
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
        },
        {
            "symbol": "ETHBUSD",
            "pair": "ETHBUSD",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1623744000000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ETH",
            "quoteAsset": "BUSD",
            "marginAsset": "BUSD",
            "pricePrecision": 2,
            "quantityPrecision": 3,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.005000",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "41.10",
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
                    "maxQty": "150",
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
        },
        {
            "symbol": "BTCUSDT_210924",
            "pair": "BTCUSDT",
            "contractType": "CURRENT_QUARTER",
            "deliveryDate": 1632470400000,
            "onboardDate": 1623830400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BTC",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 1,
            "quantityPrecision": 3,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.012000",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "576.3",
                    "maxPrice": "500000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.1"
                },
                {
                    "stepSize": "0.001",
                    "filterType": "LOT_SIZE",
                    "maxQty": "500",
                    "minQty": "0.001"
                },
                {
                    "stepSize": "0.001",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "30",
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
        },
        {
            "symbol": "ETHUSDT_210924",
            "pair": "ETHUSDT",
            "contractType": "CURRENT_QUARTER",
            "deliveryDate": 1632470400000,
            "onboardDate": 1623830400000,
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
            "triggerProtect": "0.1500",
            "liquidationFee": "0.005000",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "41.10",
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
                    "maxQty": "300",
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
        },
        {
            "symbol": "BTCDOMUSDT",
            "pair": "BTCDOMUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1623913200000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BTCDOM",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 1,
            "quantityPrecision": 3,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "INDEX",
            "underlyingSubType": [
                "DEFI"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "10",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.1"
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
        },
        {
            "symbol": "KEEPUSDT",
            "pair": "KEEPUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1624172400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "KEEP",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.10",
            "filters": [
                {
                    "minPrice": "0.0040",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "1"
                },
                {
                    "stepSize": "1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "500000",
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
        },
        {
            "symbol": "TLMUSDT",
            "pair": "TLMUSDT",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1626332400000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "TLM",
            "quoteAsset": "USDT",
            "marginAsset": "USDT",
            "pricePrecision": 4,
            "quantityPrecision": 0,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.05",
            "filters": [
                {
                    "minPrice": "0.0040",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.0001"
                },
                {
                    "stepSize": "1",
                    "filterType": "LOT_SIZE",
                    "maxQty": "1000000",
                    "minQty": "1"
                },
                {
                    "stepSize": "1",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "500000",
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
                    "multiplierDown": "0.9500",
                    "multiplierUp": "1.0500",
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
        },
        {
            "symbol": "BNBBUSD",
            "pair": "BNBBUSD",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1627372800000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "BNB",
            "quoteAsset": "BUSD",
            "marginAsset": "BUSD",
            "pricePrecision": 3,
            "quantityPrecision": 2,
            "baseAssetPrecision": 8,
            "quotePrecision": 8,
            "underlyingType": "COIN",
            "underlyingSubType": [
                "BSC",
                "HOT"
            ],
            "settlePlan": 0,
            "triggerProtect": "0.1500",
            "liquidationFee": "0.007500",
            "marketTakeBound": "0.05",
            "filters": [
                {
                    "minPrice": "6.600",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.010"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "LOT_SIZE",
                    "maxQty": "10000",
                    "minQty": "0.01"
                },
                {
                    "stepSize": "0.01",
                    "filterType": "MARKET_LOT_SIZE",
                    "maxQty": "300",
                    "minQty": "0.01"
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
                    "multiplierDown": "0.9500",
                    "multiplierUp": "1.0500",
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
        },
        {
            "symbol": "ADABUSD",
            "pair": "ADABUSD",
            "contractType": "PERPETUAL",
            "deliveryDate": 4133404800000,
            "onboardDate": 1627372800000,
            "status": "TRADING",
            "maintMarginPercent": "2.5000",
            "requiredMarginPercent": "5.0000",
            "baseAsset": "ADA",
            "quoteAsset": "BUSD",
            "marginAsset": "BUSD",
            "pricePrecision": 5,
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
            "marketTakeBound": "0.05",
            "filters": [
                {
                    "minPrice": "0.01740",
                    "maxPrice": "100000",
                    "filterType": "PRICE_FILTER",
                    "tickSize": "0.00010"
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
                    "maxQty": "25000",
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
                    "multiplierDown": "0.9500",
                    "multiplierUp": "1.0500",
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
    ]
};
type Resp = typeof resp;

const cache = {
    data: resp.symbols,
    time: resp.serverTime,
};
const expire = 1000 * 60 * 60 * 24 * 3; // 3 days
const buffer = 1000 * 60 * 5; // 5 mins
const dataIsValid = (withBuffer = false) => {
    const lifetime = Date.now() - cache.time;
    return lifetime < (expire + (withBuffer ? buffer : 0));
};

export const getAllSymbol = () => cache.data.map(e => e.symbol);

export const updateExchangeInfo = () => {
    if (dataIsValid()) {
        console.log('use exchangeInfo cache');
        return Promise.resolve(true);
    }
    return BinanceAPI.get<Resp>(api).then(resp => {
        console.log('update exchangeInfo cache');
        cache.data = resp.data.symbols;
        cache.time = Date.now();
        return true;
    });
};

export const getExchangeInfo = (symbol: string) => {
    if (!dataIsValid(true))
        console.error('using expired exchangeInfo, it might produce unexpected problems');
    const result = cache.data.find(each => each.symbol === symbol);
    if (!result) throw new Error('exchangeInfo no found. symbol: ' + symbol);
    return result;
};