// Contrato que define la estructura que deben cumplir los objetos
export interface Packages {
    id: number;
    name: string;
    description: string;
    // Agregar cualquier otra propiedad de los paquetes turisticos
}

// Constante que almacena un Array de objetos que cumplen con la
// interface Packages
export const PACKAGES: Packages[] = [
    {id: 1, name: 'Paquete A', description: 'Descripcion paquete A'},
    {id: 2, name: 'Paquete B', description: 'Descripcion paquete B'},
    {id: 3, name: 'Paquete C', description: 'Descripcion paquete C'}
    // Agrega más paquetes según sea necesario
]