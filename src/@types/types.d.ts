export type Dish = {
    category: string;
    name: string;
    image: string;
    description: string;
    glutenFree: boolean;
    vegetarian: boolean;
    price: number;
    id: string;
    inCart: boolean;
};

export type Home = {
    category: string;
    name: string;
    image: string;
}

export type Comments = {
    name?: string;
    //category: string;
    comment: string;
    id: string
}

export type UserDetails = {
    firstName: string;
    lastName: string;
    city: string;
    street: string;
    houseNumber: string;
    notes?: string;
}