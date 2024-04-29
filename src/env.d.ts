/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
