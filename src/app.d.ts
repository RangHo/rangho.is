import type { Component } from "svelte";
import type { OrgMetadata } from "ox-svelte";
import pkg from "../package.json";

declare global {
  // namespace App {
  //   interface Error {}
  //   interface Locals {}
  //   interface PageData {}
  //   interface PageState {}
  // }
  declare const __DEPENDENCIES__: typeof pkg.dependencies;

  declare const __DEV_DEPENDENCIES__: typeof pkg.devDependencies;

  declare "*.org" {
    const component: Component;

    export default component;

    export const metadata: OrgMetadata;
  }

  namespace App {
    interface Platform {
      env: Env;
      ctx: ExecutionContext;
      caches: CacheStorage;
      cf?: IncomingRequestCfProperties
    }
  }

  // namespace App {
  //   interface Error {}
  //   interface Locals {}
  //   interface PageData {}
  //   interface PageState {}
  // }
}
