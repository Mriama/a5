import { BienService } from './service/bien.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule ,MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ImmobilerComponent } from './immobiler/immobiler.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { CatalogueComponent } from './immobiler/catalogue/catalogue.component';
import { RechercheComponent } from './immobiler/recherche/recherche.component';
import { HeaderComponent } from './immobiler/header/header.component';
import { FooterComponent } from './immobiler/footer/footer.component';
import { FormBienComponent } from './immobiler/form-bien/form-bien.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { AppRoutingModule } from './immobiler/app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DetailComponent } from './immobiler/detail/detail.component';
import { RouterModule , Routes } from '@angular/router';
import { AfficheurComponent } from './immobiler/afficheur/afficheur.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule }   from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormInscriptionComponent } from './immobiler/form-inscription/form-inscription.component';
import { FormConnectionComponent } from './immobiler/form-connection/form-connection.component'; 
import { MatTabsModule } from '@angular/material/tabs';







 const approute:Routes=[
  { path:"",component:ImmobilerComponent},
  { path:"Detail/:id",component:DetailComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ImmobilerComponent,
    CatalogueComponent,
    RechercheComponent,
    HeaderComponent,
    FooterComponent,
    FormBienComponent,
    DetailComponent,
    AfficheurComponent,
    FormInscriptionComponent,
    FormConnectionComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatChipsModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forRoot(approute),
    MatPaginatorModule,
    FormsModule,
    NgxPaginationModule,
    MatTabsModule

          
  ],
  exports: [
     MatButtonModule, 
     MatToolbarModule,
     MatDividerModule,
     MatCardModule, 
     MatExpansionModule,
     MatGridListModule,
     MatChipsModule,
     MatInputModule,
     MatFormFieldModule,
     MatSelectModule,
     MatPaginatorModule,
     FormsModule,
     NgxPaginationModule,
     MatTabsModule

    ],
  providers: [BienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
