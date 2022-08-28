import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { StartComponent } from './components/start/start.component';
import { BestqualityComponent } from './components/bestquality/bestquality.component';
import { TechspportComponent } from './components/techspport/techspport.component';
import { ServiceProvideComponent } from './components/service-provide/service-provide.component';
import { ServiceHostingsComponent } from './components/service-hostings/service-hostings.component';
import { ServicePriceComponent } from './components/service-price/service-price.component';
import { CustomerLoveComponent } from './components/customer-love/customer-love.component';
import { HostServiceComponent } from './components/host-service/host-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    StartComponent,
    BestqualityComponent,
    TechspportComponent,
    ServiceProvideComponent,
    ServiceHostingsComponent,
    ServicePriceComponent,
    CustomerLoveComponent,
    HostServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
