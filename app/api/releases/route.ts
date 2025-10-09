import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://releases.getdamp.app/latest.json', {
      headers: {
        'Accept': 'application/json',
      },
      // Cache for 1 hour to avoid hitting the API too frequently
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching release data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch release data' },
      { status: 500 }
    );
  }
}
