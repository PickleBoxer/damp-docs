import { Download } from "lucide-react";

/**
 * Static Download Component
 * 
 * IMPORTANT: When updating to a new DAMP version:
 * 1. Update CURRENT_VERSION below
 * 2. Update SETUP_DOWNLOAD_URL with the new Setup.exe link
 * 3. Update PORTABLE_DOWNLOAD_URL with the new Portable ZIP link
 * 4. Update RELEASE_DATE with the release date
 */

// ========================================
// UPDATE THESE VALUES FOR EACH NEW RELEASE
// ========================================
const CURRENT_VERSION = "0.1.1";
const RELEASE_DATE = "2026-01-15";
const SETUP_DOWNLOAD_URL = "https://releases.getdamp.app/win32/x64/damp-0.1.1 Setup.exe";
const PORTABLE_DOWNLOAD_URL = "https://releases.getdamp.app/win32/x64/damp-win32-x64-0.1.1.zip";
// ========================================

export function DownloadClient() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-fd-secondary/50 border border-fd-border rounded-lg p-8 mb-8">
        <div className="text-center mb-6">
          <p className="text-sm text-fd-muted-foreground mb-2">
            Latest Version
          </p>
          <p className="text-2xl font-bold">v{CURRENT_VERSION}</p>
        </div>

        <div className="text-center mb-6">
          <p className="text-fd-muted-foreground">
            Choose your preferred download option below.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={SETUP_DOWNLOAD_URL}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-lg font-semibold hover:bg-fd-primary/90 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Setup.exe
          </a>
          <a
            href={PORTABLE_DOWNLOAD_URL}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-fd-secondary text-fd-secondary-foreground border border-fd-border rounded-lg font-semibold hover:bg-fd-secondary/80 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Portable ZIP
          </a>
        </div>

        <div className="mt-6 text-center text-xs text-fd-muted-foreground">
          <p>
            Released: {new Date(RELEASE_DATE).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
