export interface Guitar {
    id: number
    name: string
    image: string
    description: string
    price: number 
}

export interface CartItem extends Pick<Guitar, 'id' | 'name' | 'price'> {
    quantity: number
}