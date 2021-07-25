import { order } from "./Order";


export const actions = {
    order: order,
}

export type ActionKey = keyof typeof actions;