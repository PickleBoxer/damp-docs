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
    
    // Parse RELEASES file to extract version
    // Format: SHA1 FILENAME FILESIZE
    // Example: 94689FEDE03A3C1946BCCD23A09CE9813E9F6F0E damp-0.1.0-full.nupkg 138680320
    const versionRegex = /damp-(\d+\.\d+\.\d+)/;
    const versionMatch = versionRegex.exec(releasesText);
    
    if (!versionMatch) {
      throw new Error('Could not extract version from RELEASES file');
    }
    
    const version = versionMatch[1];
    
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
