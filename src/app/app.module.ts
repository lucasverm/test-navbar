import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { LeftMenuComponent } from "./components/left-menu/left-menu.component";
import { MaterialModule } from "./material.module";
import { SidenavService } from "./services/sidenav.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  declarations: [AppComponent, HeaderComponent, LeftMenuComponent],
  providers: [SidenavService],
  bootstrap: [AppComponent],
})
export class AppModule {}
