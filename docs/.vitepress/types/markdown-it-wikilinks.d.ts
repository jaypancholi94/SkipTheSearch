declare module "markdown-it-wikilinks" {
  interface WikilinksOptions {
    baseURL?: string;
    relativeBaseURL?: string;
    makeAllLinksAbsolute?: boolean;
    uriSuffix?: string;
    htmlAttributes?: Record<string, string>;
    generatePageNameFromLabel?: (label: string) => string;
    postProcessPageName?: (label: string) => string;
    postProcessLabel?: (label: string) => string;
  }

  function wikilinks(options?: WikilinksOptions): (md: unknown) => void;
  export = wikilinks;
}
