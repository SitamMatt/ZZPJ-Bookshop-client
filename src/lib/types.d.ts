export interface Product{
    id: Number;
    authorId: Number;
    title: String;
    price: double;
    description: String;
    pageNumber: Number;
    publishingHouse: String;
    isbn: String;
    publicationYear: Number;
    productSize: Number;
    productItemList: ProductItem[];
}

export interface ProductItem{
    id: Number;
    productId: Number;
}

export interface CreateOrder{
    userID: Number;
    paymentType: String;
    itemList: List<CreateOrderItem>;
}

export interface CreateOrderItem{
    quantity: Number;
    productId: Number;
}

export interface Order{
    id: Number;
    userID: Number;
    totalCost: Number;
    status: String;
    paymentID: String;
    paymentType: String;
    itemList: List<OrderItem>;
}

export interface OrderItem{
    id: Number;
    orderId: Number;
    productItemId: Number;
}