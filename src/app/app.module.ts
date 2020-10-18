import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemingService } from './services/theming.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { GithubService } from './services/github.service';
import { UserComponent } from './pages/user/user.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { ChunkedForDirective } from './directives/chunked-for.directive';

export function themeFactory(themeService: ThemingService) {
  return () => themeService.setThemeOnStart();
}

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CardComponent,
    HomeComponent,
    UserComponent,
    TabBarComponent,
    ChunkedForDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    ThemingService,
    {
      provide: APP_INITIALIZER,
      useFactory: themeFactory,
      deps: [ThemingService],
      multi: true,
    },
    GithubService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
