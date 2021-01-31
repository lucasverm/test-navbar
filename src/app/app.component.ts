import { Component } from "@angular/core";
import { onMainContentChange } from "./animations/animations";
import { SidenavService } from "./services/sidenav.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [onMainContentChange],
})
export class AppComponent {
  name = "Angular";
  public onSideNavChange: boolean;

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe((res) => {
      console.log(res);
      this.onSideNavChange = res;
    });
  }
}
