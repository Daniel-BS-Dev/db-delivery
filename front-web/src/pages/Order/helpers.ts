import { Product } from './types';

export function checkIsSelected (selectedProducts: Product[], product: Product){
    return selectedProducts.some(item => item.id === product.id);
}

export function formatPrice(price: number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL',  // tipo da moeda
        maximumFractionDigits: 2 // numero de digitos
});

    return formatter.format(price);
}