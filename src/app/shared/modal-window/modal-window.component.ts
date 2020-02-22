import { Component, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { fromEvent, Subscription } from 'rxjs';

import { ModalService } from '../services/modal-service';

@AutoUnsubscribe()
@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.html',
  styleUrls: ['./modal-window.scss']
})

export class ModalComponent implements OnInit, OnDestroy {
  constructor(
    public modalService: ModalService,
    private readonly el: ElementRef,
    private readonly renderer: Renderer2
  ) { }

  public modalWindowSub: Subscription;

  private element: any;

  public ngOnInit(): void {
    this.element = this.el.nativeElement;

    this.renderer.appendChild(document.body, this.element);

    this.modalWindowSub = fromEvent(this.element, 'click')
      .subscribe((el: any) => {
        if (el.target.className === 'modal-window') {
          this.modalService.isModalOpened = false;
        }
      });
  }

  public ngOnDestroy(): void { }
}
