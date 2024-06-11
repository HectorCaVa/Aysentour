import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-pack',
  templateUrl: './detalles-pack.page.html',
  styleUrls: ['./detalles-pack.page.scss'],
})
export class DetallesPackPage implements OnInit {
  images: string[] = [
    'assets/img/1.png',
    'assets/img/2.png',
    'assets/img/3.png',
    'assets/img/4.png',
    'assets/img/5.png',
  ];
  currentSlide = 0;
  packId: string = '';
  alquilarVehiculo: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.packId = params['id'];
      this.loadPackDetails(this.packId);
    });
  }

  loadPackDetails(packId: string) {
    console.log(`Cargando detalles del paquete con ID: ${packId}`);
    // Aquí podrías realizar cualquier lógica adicional, como cargar los detalles del paquete utilizando el ID
  }

  costoTotalPorPersona(): number {
    let costoBasePorPersona = 590841; // Precio base sin considerar el alquiler del vehículo
    let costoAlquilerVehiculo = 0; // Costo adicional por el alquiler del vehículo
    if (this.alquilarVehiculo) {
      costoAlquilerVehiculo = 3000 * 7; // Supongamos que el costo adicional por día es de $3000 y se alquila por 7 días
    }

    let costoTotalPorPersona = costoBasePorPersona + costoAlquilerVehiculo;
    return costoTotalPorPersona;
  }

  costoTotalPor2Persona(): number {
    let costoBasePor2Persona = 1181682; // Precio base sin considerar el alquiler del vehículo
    let costoAlquilerVehiculo = 0; // Costo adicional por el alquiler del vehículo
    if (this.alquilarVehiculo) {
      costoAlquilerVehiculo = 3000 * 7; // Supongamos que el costo adicional por día es de $3000 y se alquila por 7 días
    }

    let costoTotalPor2Persona = costoBasePor2Persona + costoAlquilerVehiculo;
    return costoTotalPor2Persona;
  }


  alquilar() {
    this.alquilarVehiculo = true;
  }

  cancelarAlquiler() {
    this.alquilarVehiculo = false;
  }

  previousSlide() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.images.length - 1;
    } else {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (this.currentSlide === this.images.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
  }
}