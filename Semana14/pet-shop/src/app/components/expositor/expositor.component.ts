import { Component } from '@angular/core';

@Component({
  selector: 'app-expositor',
  templateUrl: './expositor.component.html',
  styleUrls: ['./expositor.component.css']
})
export class ExpositorComponent {
  ngOnInit(): void {
    this.alterHeaderImg();
  }

  alterHeaderImg() {
    const nextButton: HTMLElement | null = window.document.getElementById("next");
    const prevButton: HTMLElement | null = window.document.getElementById("prev");
    const mainHeaderDiv: HTMLElement | null = window.document.getElementById("main-header");

    if (nextButton && prevButton && mainHeaderDiv) {
      nextButton.addEventListener("click", () => {
        mainHeaderDiv.style.backgroundImage = 'url("file:///C:/Users/55739/Pictures/Saved%20Pictures/fotopet2.jpg")';
      });

      prevButton.addEventListener("click", () => {
        mainHeaderDiv.style.backgroundImage = 'url("file:///C:/Users/55739/Pictures/Saved%20Pictures/fotopet.jpg")';
      });
    }
  }
}
