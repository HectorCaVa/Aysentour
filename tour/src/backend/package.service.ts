import { Injectable } from '@angular/core';
import { getDatabase, ref, get, push, set, query, orderByChild, equalTo } from 'firebase/database';
import { app } from 'src/backend/firebase-config';

@Injectable({
    providedIn: 'root'
})
export class PackageService {
    constructor() { }

    async getPackages() {
        const db = getDatabase(app);
        const packagesRef = ref(db, 'paquetes');
        const snapshot = await get(packagesRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            return Object.keys(data).map(key => ({ id: key, ...data[key] }));
        } else {
            throw new Error('No packages found');
        }
    }

    async getPackageById(packageId: string) {
        const db = getDatabase(app);
        const packageRef = ref(db, `paquetes/${packageId}`);
        const snapshot = await get(packageRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            throw new Error('Package not found');
        }
    }

    async postReservation(reservationData: any) {
        const db = getDatabase(app);
        try {
            const reservationId = push(ref(db, 'reservas')).key;
            if (!reservationId) {
                throw new Error('Error generating reservation ID');
            }

            await set(ref(db, 'reservas/' + reservationId), {
                reservationId: reservationId,
                packageId: reservationData.packageId,
                username: reservationData.username,
                startDate: reservationData.startDate,
                endDate: reservationData.endDate,
                numberOfPeople: reservationData.numberOfPeople,
                totalPrice: reservationData.totalPrice,
            });

            return reservationId;
        } catch (error: any) {
            throw new Error('Error posting reservation: ' + error.message);
        }
    }

    async getReservationsByUsername(username: string) {
        const db = getDatabase(app);
        const reservationsRef = ref(db, 'reservas');
        const snapshot = await get(reservationsRef);

        if (snapshot.exists()) {
            const data = snapshot.val();
            const reservations = Object.keys(data)
                .map(key => ({ id: key, ...data[key] }))
                .filter(reservation => reservation.username === username);
            return reservations;
        } else {
            throw new Error('No reservations found for this user');
        }
    }


}
