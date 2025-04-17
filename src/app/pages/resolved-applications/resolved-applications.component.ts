import { CommonModule, formatDate } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import {
  Cat,
  getAdoptionsResponse,
} from '../../interfaces/adoptions.interface';
import { CatRequestedService } from '../../services/cat-requested.service';
import { CalendarModule } from 'primeng/calendar';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import moment from 'moment';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FilterDetailAdoptions } from '../../interfaces/CatRequested.interface';

@Component({
  selector: 'app-resolved-applications',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './resolved-applications.component.html',
  styleUrl: './resolved-applications.component.css',
})
export class ResolvedApplicationsComponent implements OnInit, OnChanges {
  resolvedApplications: Cat[] = [];
  @Input() data: FilterDetailAdoptions | null = null;
  filters!: FormGroup;
  noResults: boolean = false;

  constructor(
    private CatRequestedService: CatRequestedService,
    private fb: FormBuilder,
  ) {
    this.filters = this.fb.group({
      fecha_inicio: [''],
      fecha_fin: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.filters.patchValue({
        fecha_inicio: formatDate(this.data.fecha_inicio, 'yyyy-MM-dd', 'en'),
        fecha_fin: formatDate(this.data.fecha_fin, 'yyyy-MM-dd', 'en'),
      });
    }
  }

  onSubmit(): void {
    if (this.filters.valid) {
      this.CatRequestedService.filterDetailAdoption(
        this.filters.value,
      ).subscribe({
        next: (response: any) => {
          if (response.cats.length === 0) {
            this.noResults = true;
          } else {
            this.resolvedApplications = response.cats.map((cat: any) => ({
              ...cat,
              created_at: moment(cat.created_at).format('DD/MMM/YYYY'),
              updated_at: moment(cat.updated_at).format('DD/MMM/YYYY'),
            }));
            this.noResults = false;
          }
        },
      });
    }
  }

  ngOnInit(): void {
    this.CatRequestedService.getDetailAdoptions().subscribe(
      (response: getAdoptionsResponse) => {
        this.resolvedApplications = response.cats.map((cat) => ({
          ...cat,
          created_at: moment(cat.created_at).format('DD/MMM/YYYY'),
          updated_at: moment(cat.updated_at).format('DD/MMM/YYYY'),
        }));
      },
    );
  }

  cleanFilters(): void {
    this.ngOnInit();
    this.noResults = false;
    this.filters.reset();
  }

  exportToExcel(): void {
    const formattedApplications = this.resolvedApplications.map((cat) => ({
      'Nombre Felino': String(cat.nameCat),
      'Fecha Recepción': String(cat.created_at),
      'Fecha Respuesta': String(cat.updated_at),
      Comentarios: cat.comments ? String(cat.comments) : '',
      Estado: cat.evaluation ? String(cat.evaluation) : '',
    }));

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
      formattedApplications,
    );

    const columnWidths = [
      { wpx: 120 },
      { wpx: 120 },
      { wpx: 120 },
      { wpx: 200 },
      { wpx: 100 },
    ];
    worksheet['!cols'] = columnWidths;

    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'adopciones-resueltas');
    XLSX.writeFile(workbook, 'adopciones-resueltas.xlsx');
  }
  exportToPDF(): void {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    const imgWidth = 20;
    const imgHeight = 20;
    const imgX = (pageWidth - imgWidth) / 2 - 30;
    const textX = imgX + imgWidth + 5;

    doc.addImage('/cat-pdf.png', 'PNG', imgX, 10, imgWidth, imgHeight);

    doc.setTextColor(102, 12, 68);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Adopciones resueltas', textX, 20);

    const formattedApplications = this.resolvedApplications.map((cat) => ({
      Nombre_Felino: String(cat.nameCat),
      Fecha_recepcion: String(cat.created_at),
      Fecha_respuesta: String(cat.updated_at),
      Comentarios: cat.comments ? String(cat.comments) : '',
      Estado: cat.evaluation ? String(cat.evaluation) : '',
    }));

    (doc as any).autoTable({
      head: [
        [
          'Nombre Felino',
          'Fecha Recepción',
          'Fecha Respuesta',
          'Comentarios',
          'Estado',
        ],
      ],
      body: formattedApplications.map((row) => [
        row.Nombre_Felino,
        row.Fecha_recepcion,
        row.Fecha_respuesta,
        row.Comentarios,
        row.Estado,
      ]),
      startY: 35,
      theme: 'grid',
      headStyles: {
        fillColor: [226, 208, 217],
        textColor: [102, 12, 68],
        fontStyle: 'bold',
      },
      styles: {
        cellPadding: 3,
      },
    });

    doc.save('adopciones-resueltas.pdf');
  }
}
