import { Component, OnInit } from '@angular/core';
import { ActividadesService } from 'src/backend/actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  categorias: { [key: string]: any } = {};
  selectedCategoria: string | null = null;
  actividades: any[] = [];

  constructor(private actividadesService: ActividadesService) {}

  ngOnInit() {
    this.loadAllActividades();
  }

  async loadAllActividades() {
    this.categorias = await this.actividadesService.getAllActividades();
  }

  selectCategoria(categoria: string) {
    this.selectedCategoria = categoria;
    this.actividades = Object.values(this.categorias[categoria]);
  }
}