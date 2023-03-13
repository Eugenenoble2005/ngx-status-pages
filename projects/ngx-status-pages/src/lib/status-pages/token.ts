import { InjectionToken } from "@angular/core";
import { StatusPagesConfig } from "../ngx-status-pages.module";

export const MY_CONFIG_TOKEN = new InjectionToken<StatusPagesConfig>('myConfig', {
    providedIn: 'root',
    factory: () => new StatusPagesConfig()
  });