import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.css']
})
export class InicioPageComponent {
  constructor(public modalService: NgbModal) { }

  openModal(content: any) {
    const modalOptions: NgbModalOptions = {
      scrollable: true
    };

    this.modalService.open(content, modalOptions);
  }
}
