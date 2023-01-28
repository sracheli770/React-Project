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

export type InitialState = {
    dishes: Dish[];
}

export type Comments={
    name?:string;
    //category: string;
    comment:string;
    id:string
}