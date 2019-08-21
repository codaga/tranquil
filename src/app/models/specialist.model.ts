export class Specialist {
    id: number;
    name: string;
    avatarUrl: string;
    address: {
        street: string;
        city: string;
        country: string; 
        zipcode: string;
        };
    phone: string;
    email: string;
    specialty: string;
    gender: string;
    isActive: boolean;
}