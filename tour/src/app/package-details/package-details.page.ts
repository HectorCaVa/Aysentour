import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Packages, PACKAGES } from '../data/packages';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.page.html',
  styleUrls: ['./package-details.page.scss'],
})
export class PackageDetailsPage implements OnInit {

  package: Packages | undefined;
  selectedDate: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const packageId = Number(this.route.snapshot.paramMap.get('id'));
    this.package = PACKAGES.find(pkg => pkg.id === packageId);
    this.selectedDate = this.route.snapshot.paramMap.get('date') ?? undefined;
  }

  goBack() {
    this.router.navigate(['/packages']);
  }
}