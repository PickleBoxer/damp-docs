"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

interface ReleaseData {
  version: string;
  notes: string;
  pub_date: string;
  platforms: {
    "windows-x86_64": {
      url: string;
    };
    "windows-x86_64-portable": {
      url: string;
    };
  };
}

export function DownloadClient() {
  const [releaseData, setReleaseData] = useState<ReleaseData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [autoDownloadStarted, setAutoDownloadStarted] = useState(false);

  useEffect(() => {
    async function fetchReleaseData() {
      try {
        // Use our API route to avoid CORS issues
        const response = await fetch("/api/releases");
        if (!response.ok) {
          throw new Error("Failed to fetch release data");
        }
        const data: ReleaseData = await response.json();
        setReleaseData(data);

        // Automatically start Setup.exe download
        if (!autoDownloadStarted && data.platforms["windows-x86_64"]?.url) {
          setAutoDownloadStarted(true);
          // Create a temporary link and click it to trigger download
          const link = document.createElement("a");
          link.href = data.platforms["windows-x86_64"].url;
          link.download = "";
          document.body.appendChild(link);
          link.click();
          link.remove();
        }
      } catch (err) {
        console.error("Error fetching release data:", err);
        setError(
          "Unable to fetch the latest release. Please try the manual download links below."
        );
      }
    }

    fetchReleaseData();
  }, [autoDownloadStarted]);

  const handleDownload = (url: string) => {
    globalThis.location.href = url;
  };

  if (error) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-fd-secondary/50 border border-fd-border rounded-lg p-6 mb-8">
          <p className="text-center text-fd-muted-foreground mb-4">{error}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={releaseData ? releaseData.platforms["windows-x86_64"].url : "https://releases.getdamp.app/win32/x64/damp-0.1.1 Setup.exe"}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-lg font-semibold hover:bg-fd-primary/90 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Setup.exe (Fallback)
            </a>
            <a
              href={releaseData ? releaseData.platforms["windows-x86_64-portable"].url : "https://releases.getdamp.app/win32/x64/damp-win32-x64-0.1.1.zip"}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-fd-secondary text-fd-secondary-foreground border border-fd-border rounded-lg font-semibold hover:bg-fd-secondary/80 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Portable ZIP (Fallback)
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-fd-secondary/50 border border-fd-border rounded-lg p-8 mb-8">
        {releaseData && (
          <div className="text-center mb-6">
            <p className="text-sm text-fd-muted-foreground mb-2">
              Latest Version
            </p>
            <p className="text-2xl font-bold">v{releaseData.version}</p>
          </div>
        )}

        <div className="text-center mb-6">
          <p className="text-fd-muted-foreground">
            Your download should start automatically. If it doesn&apos;t, use
            the buttons below.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              releaseData &&
              handleDownload(releaseData.platforms["windows-x86_64"].url)
            }
            disabled={!releaseData}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-lg font-semibold hover:bg-fd-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-5 h-5" />
            Download Setup.exe
          </button>
          <button
            onClick={() =>
              releaseData &&
              handleDownload(
                releaseData.platforms["windows-x86_64-portable"].url
              )
            }
            disabled={!releaseData}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-fd-secondary text-fd-secondary-foreground border border-fd-border rounded-lg font-semibold hover:bg-fd-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-5 h-5" />
            Download Portable ZIP
          </button>
        </div>

        {releaseData && (
          <div className="mt-6 text-center text-xs text-fd-muted-foreground">
            <p>
              Released: {new Date(releaseData.pub_date).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
