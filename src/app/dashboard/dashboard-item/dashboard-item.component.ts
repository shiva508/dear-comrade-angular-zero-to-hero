import { Component, Input, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // host: { class: 'dashboard-item' },
})
export class DashboardItemComponent {
  /* @Input({ required: true }) imageSrc!: string;
  @Input({ required: true }) altText!: string;
  @Input({ required: true }) headerName!: string;
*/
  imageSrcSig = input.required<string>();
  altTextSig = input.required<string>();
  headerNameSig = input.required<string>();
}
