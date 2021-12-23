
// atributos que será presentado quando chamar um produto com get
export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;

}

// atributos quando for dar um post nos produtos
export type OrderLocationData = {
   latitude: number,
   longitude: number,
   address: string
}

type ProductId = {
    id: number;
}

export type playloadOrder = {
    products: ProductId[]
} & OrderLocationData;

