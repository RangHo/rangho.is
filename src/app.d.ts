import type { Component } from "svelte";
import type { OrgMetadata } from "ox-svelte";

import pkg from "../package.json";

declare global {
  namespace App {
    interface Error {}
    interface Locals {}
    interface PageData {}
    interface PageState {}
    interface Platform {}
  }

  declare const __DEPENDENCIES__: typeof pkg.dependencies;

  declare const __DEV_DEPENDENCIES__: typeof pkg.devDependencies;

  declare module "*.org" {
    const component: Component;
    export default component;

    export const metadata: OrgMetadata;
  }
}
