export interface Employee {
    id?: number;
    name: string;
    email: string;
    department: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export enum Department {
    HR = 'HR',
    IT = 'IT',
    FINANCE = 'FINANCE',
    OPERATIONS = 'OPERATIONS'
}