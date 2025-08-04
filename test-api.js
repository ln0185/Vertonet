// Test script to verify API endpoints
const fetch = require('cross-fetch');

async function testAPI() {
  const baseUrl = process.env.TEST_URL || 'http://localhost:3000';
  
  console.log(`Testing API at: ${baseUrl}`);
  
  try {
    // Test the events API
    const response = await fetch(`${baseUrl}/api/events?limit=3&language=en`);
    const data = await response.json();
    
    console.log('✅ API Response:', JSON.stringify(data, null, 2));
    
    if (data.events && data.events.length > 0) {
      console.log(`✅ Successfully fetched ${data.events.length} events`);
    } else {
      console.log('⚠️  No events returned');
    }
  } catch (error) {
    console.error('❌ API Test Failed:', error.message);
  }
}

testAPI(); 