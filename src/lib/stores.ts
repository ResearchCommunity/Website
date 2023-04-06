/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable } from 'svelte/store'

export interface CartProduct {
    productId: number;
    colorId: number;
    sizeId: number;
    amount: number;
}

export const shopProducts = writable(<any[]>[])

export const cart = writable(<CartProduct[]>[])