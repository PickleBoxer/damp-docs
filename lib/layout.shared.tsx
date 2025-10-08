import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Box, Book } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Box className="size-6" aria-label="Logo" />
          Damp
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
  };
}
