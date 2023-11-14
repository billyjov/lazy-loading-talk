import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone-sticker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-sticker.component.html',
  styleUrls: ['./standalone-sticker.component.css']
})
export default class StandaloneStickerComponent {

}
