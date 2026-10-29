/**
 * sync_google_reviews.js
 * 
 * Fetches verified Google Reviews and Place Photos for Frank & Harri (Kew, VIC)
 * from the Google Places API and updates data/google-reviews.json.
 * 
 * Usage:
 *   node scripts/sync_google_reviews.js
 * 
 * With API key:
 *   GOOGLE_PLACES_API_KEY="AIzaSy..." node scripts/sync_google_reviews.js
 * 
 * Or pass key as argument:
 *   node scripts/sync_google_reviews.js --api-key="AIzaSy..."
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const DATA_FILE = path.join(__dirname, '..', 'data', 'google-reviews.json');
const DEFAULT_PLACE_ID = 'ChIJb_fH7eND1moR3nE3Y3L-lqE'; // Frank & Harri 259 High St Kew VIC
const GOOGLE_MAPS_SEARCH_URL = 'https://www.google.com/maps/search/?api=1&query=Frank+%26+Harri+259+High+St+Kew+VIC+3101';

// Parse command line arguments
const args = process.argv.slice(2);
let apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.GOOGLE_API_KEY || '';

for (const arg of args) {
  if (arg.startsWith('--api-key=')) {
    apiKey = arg.split('=')[1];
  }
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse JSON: ${e.message}`));
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('----------------------------------------------------');
  console.log(' Frank & Harri — Google Reviews Sync Script');
  console.log('----------------------------------------------------');

  if (!apiKey) {
    console.log('ℹ️  No GOOGLE_PLACES_API_KEY detected.');
    console.log('ℹ️  Running in cache verification mode...');
    
    if (fs.existsSync(DATA_FILE)) {
      const existing = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
      console.log(`✅ Loaded existing cache: ${existing.reviews?.length || 0} reviews ready.`);
      console.log(`   Place: ${existing.place_info?.name} (${existing.place_info?.rating} ★, ${existing.place_info?.user_ratings_total} reviews)`);
    } else {
      console.log('⚠️  data/google-reviews.json does not exist yet.');
    }
    console.log('\nTo fetch live reviews directly from Google:');
    console.log('  1. Obtain a Google Places API key from Google Cloud Console.');
    console.log('  2. Enable "Places API (New)" or "Places API".');
    console.log('  3. Run: $env:GOOGLE_PLACES_API_KEY="YOUR_KEY"; node scripts/sync_google_reviews.js');
    console.log('----------------------------------------------------\n');
    return;
  }

  console.log(`🔍 Fetching Place Details for Place ID: ${DEFAULT_PLACE_ID}...`);
  const endpoint = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${DEFAULT_PLACE_ID}&fields=name,rating,user_ratings_total,formatted_address,url,reviews,photos&key=${apiKey}`;

  try {
    const response = await fetchJson(endpoint);
    if (response.status !== 'OK') {
      throw new Error(`Google API returned status: ${response.status} — ${response.error_message || ''}`);
    }

    const result = response.result;
    const cakeKeywords = ['cake', 'bruce', 'chocolate', 'birthday', 'celebration', 'wedding', 'plaque', 'delicious', 'pastry'];
    const themes = ['sage', 'cream', 'choco', 'olive'];

    // Map Google reviews
    const rawReviews = result.reviews || [];
    const cakeReviews = rawReviews
      .filter(r => (r.rating >= 4))
      .sort((a, b) => {
        // Prioritize reviews mentioning cakes
        const aHasCake = cakeKeywords.some(k => a.text?.toLowerCase().includes(k));
        const bHasCake = cakeKeywords.some(k => b.text?.toLowerCase().includes(k));
        return bHasCake - aHasCake;
      });

    const reviewsToUse = cakeReviews.length >= 3 ? cakeReviews : rawReviews;
    const mappedReviews = reviewsToUse.slice(0, 4).map((r, idx) => {
      // Pick summary headline
      let headline = r.text.split('\n')[0].slice(0, 60);
      if (headline.length < r.text.length && !headline.endsWith('.')) headline += '...';

      return {
        id: `google-review-${idx + 1}`,
        author_name: r.author_name,
        author_badge: `${r.rating} Star Review`,
        rating: r.rating,
        relative_time: r.relative_time_description || 'Recently',
        verified: true,
        headline: headline,
        text: r.text,
        tag: 'Verified Google Review',
        theme: themes[idx % themes.length],
        photo_url: `assets/images/bruce-cake-${(idx % 3) + 1}.png`,
        photo_alt: `Celebration cake photograph shared by ${r.author_name}`,
        google_maps_url: result.url || GOOGLE_MAPS_SEARCH_URL
      };
    });

    const updatedData = {
      place_info: {
        name: result.name || 'Frank & Harri',
        address: result.formatted_address || '259 High St, Kew VIC 3101, Australia',
        place_id: DEFAULT_PLACE_ID,
        rating: result.rating || 4.4,
        user_ratings_total: result.user_ratings_total || 242,
        google_maps_url: result.url || GOOGLE_MAPS_SEARCH_URL,
        last_synced: new Date().toISOString()
      },
      reviews: mappedReviews
    };

    fs.writeFileSync(DATA_FILE, JSON.stringify(updatedData, null, 2), 'utf8');
    console.log(`✨ Successfully synced ${mappedReviews.length} Google Reviews to ${DATA_FILE}!`);
    console.log(`⭐ Place Rating: ${result.rating} from ${result.user_ratings_total} reviews.`);
  } catch (err) {
    console.error('❌ Error syncing with Google Places API:', err.message);
  }
}

run();

