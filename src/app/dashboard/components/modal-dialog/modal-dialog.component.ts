import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'modal-dialog-dashboard',
  templateUrl: 'modal-dialog.component.html',
})
export class ModalDialogComponent implements OnInit {
  ngOnInit() {
    this.bookService.isVisible$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }

  public isVisible: boolean = false;
  public submitted: boolean = false;

  constructor(private bookService: BooksService) {}

  hideDialog() {
    this.isVisible = false;
    this.submitted = false;
  }

  saveBook() {
    this.isVisible = false;
    this.submitted = true;
  }
}
