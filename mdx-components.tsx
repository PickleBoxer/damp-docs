import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as FilesComponents from 'fumadocs-ui/components/files';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import * as icons from 'lucide-react'; // Import all icons from lucide-react
import { cn } from "@/lib/utils"

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    img: ({ className, ...props }: React.ComponentProps<"img">) => (
      <img className={cn("rounded-md border", className)} {...props} />
    ),
    ...TabsComponents,
    ...FilesComponents,
    Accordion,
    Accordions,
    ...components,
  };
}
