declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const metadata: {
    title: string;
    description: string;
    date: string;
    readTime: string;
    category: string;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
