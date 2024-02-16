type User = {
    id: string;
    name: string;
    email: string;
    mobile: string;
    image?: string;
    uid?: string;
    createdAt?: Date;
    likesUsers?: string[];
    likedProducts?: string[];
    itemsBought?: string[];
    itemsSold?: string[];
    likesRecieved?: string[];
    feedback?: string[];
};

export default User;
