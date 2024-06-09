export interface Packages {
    id: number;
    name: string;
    description: string;
    availableDates: string[]; // Añadimos fechas disponibles
}

export const PACKAGES: Packages[] = [
    {
        id: 1,
        name: 'Paquete A',
        description: 'Descripción paquete A',
        availableDates: ['2024-06-10', '2024-06-15', '2024-06-20'] // Fechas disponibles para Paquete A
    },
    {
        id: 2,
        name: 'Paquete B',
        description: 'Descripción paquete B',
        availableDates: ['2024-06-12', '2024-06-17', '2024-06-22'] // Fechas disponibles para Paquete B
    },
    {
        id: 3,
        name: 'Paquete C',
        description: 'Descripción paquete C',
        availableDates: ['2024-06-14', '2024-06-19', '2024-06-24'] // Fechas disponibles para Paquete C
    }
    // Agrega más paquetes según sea necesario
];  