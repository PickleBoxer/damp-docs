import { NextResponse } from 'next/server';

const BASE_URL = 'https://releases.getdamp.app/win32/x64';

export async function GET() {
  try {
    // Fetch RELEASES file from Cloudflare R2
    const response = await fetch(`${BASE_URL}/RELEASES`, {
      // Cache for 1 hour to avoid hitting the API too frequently
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RELEASES file: ${response.status}`);
    }

    const releasesText = await response.text();
    
    // Extract release date from Last-Modified header
    const lastModified = response.headers.get('Last-Modified');
    const pubDate = lastModified 
      ? new Date(lastModified).toISOString() 
      : new Date().toISOString();
    
    // Parse RELEASES file to extract version from the last -full.nupkg entry
    // Format: SHA1 FILENAME FILESIZE
    // Example: 4B0D4628364F827AEEDBDB71DD854496D58FD7E2 damp-0.1.1-full.nupkg 139397653
    const fullPackageRegex = /damp-(\d+\.\d+\.\d+)-full\.nupkg/g;
    const matches = [...releasesText.matchAll(fullPackageRegex)];
    
    if (matches.length === 0) {
      throw new Error('Could not find any -full.nupkg packages in RELEASES file');
    }
    
    // Get version from the last -full.nupkg entry (newest version)
    const version = matches[matches.length - 1][1];
    
    // Construct release metadata
    const data = {
      version,
      notes: 'See changelog for details',
      pub_date: pubDate,
      platforms: {
        'windows-x86_64': {
          url: `${BASE_URL}/damp-${version} Setup.exe`,
        },
        'windows-x86_64-portable': {
          url: `${BASE_URL}/damp-win32-x64-${version}.zip`,
        },
      },
    };
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching release data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch release data' },
      { status: 500 }
    );
  }
}
