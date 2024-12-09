declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module "*.svg?url" {
  import React from "react";
  const content: React.ReactNode;
  export default content;
}

declare module "*.svg" {
  import type React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare const __IS_DEV__: boolean;
declare const __API__: string;

