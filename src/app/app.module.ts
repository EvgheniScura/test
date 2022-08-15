import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './page/component/table/table.component';
import { ContextComponent } from './page/component/context/context.component';
import { NavigatorComponent } from './page/component/navigator/navigator.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreApiService } from './core/services/core-api-service';
import { CoreAppConfigService } from './core/services/core-app-config.service';
import { SearchNamePipe } from './pipe/pipes/search-name.pipe';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './page/component/chart/chart.component';
import { ContextbottomComponent } from './page/component/contextbottom/contextbottom.component';
import { LoaderComponent } from './page/component/loader/loader.component';


export function loadConfigFile(config: CoreAppConfigService) {
  return () => config.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ContextComponent,
    NavigatorComponent,
    SearchNamePipe,
    ChartComponent,
    ContextbottomComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [CoreApiService,

    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigFile,
      deps: [CoreAppConfigService],
      multi: true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
