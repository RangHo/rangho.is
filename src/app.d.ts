import type { Component } from "svelte";
import type { OrgMetadata } from "ox-svelte";

declare global {
  namespace App {
    interface Error {}
    interface Locals {}
    interface PageData {}
    interface PageState {}
    interface Platform {}
  }

  declare module "*.org" {
    const component: Component;
    export default component;

    export const metadata: OrgMetadata;
  }
}
