export interface Packages {
    id: number;
    name: string;
    description: string;
    location: string;
    duration: string;
    price: number;
    rating: number;
    availableDates: string[];
    startDate?: string; // startDate ahora es opcional
}

export const PACKAGES: Packages[] = [
    {
        id: 1,
        name: 'Tour por la Carretera Austral',
        description: 'Un viaje inolvidable por la famosa Carretera Austral, explorando paisajes espectaculares y la naturaleza virgen de la región de Aysén.',
        location: 'Carretera Austral',
        duration: '7 días',
        price: 1200,
        rating: 8.6,
        availableDates: ['2024-06-15', '2024-06-22', '2024-07-05'],
    },
    {
        id: 2,
        name: 'Excursión al Parque Nacional Queulat',
        description: 'Descubre el impresionante Ventisquero Colgante y la exuberante vegetación del Parque Nacional Queulat en un recorrido guiado.',
        location: 'Parque Nacional Queulat',
        duration: '2 días',
        price: 450,
        rating: 8.4,
        availableDates: ['2024-06-18', '2024-07-01', '2024-07-15'],
    },
    {
        id: 3,
        name: 'Navegación por los Fiordos de Aysén',
        description: 'Explora los fiordos y canales de la región de Aysén en un tour en barco, con la posibilidad de avistar fauna marina y disfrutar de paisajes únicos.',
        location: 'Fiordos de Aysén',
        duration: '3 días',
        price: 800,
        rating: 9.0,
        availableDates: ['2024-06-20', '2024-07-10', '2024-07-25'],
    }
    // Agrega más paquetes según sea necesario
];
