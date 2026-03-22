const https = require('https');
const urls = [
  'https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e', // Day 1
  'https://images.unsplash.com/photo-1506461883276-59454378f141', // Day 2
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e', // Day 3
  'https://images.unsplash.com/photo-1520637102912-2d6ecb21a0cd', // Day 4
  'https://images.unsplash.com/photo-1480796927426-f609979314bd', // Day 5
  'https://images.unsplash.com/photo-1490806840058-29bf8b5aadb5', // Day 6
  'https://images.unsplash.com/photo-1510255011985-78ba9d8db346', // Day 7
  'https://images.unsplash.com/photo-1503899036084-c55cdd92da26', // Day 8
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713'  // Day 9
];

async function check() {
  for (let i=0; i<urls.length; i++) {
    const url = urls[i];
    await new Promise(r => {
      https.get(url, (res) => {
        console.log(`Day ${i+1}: ${res.statusCode}`);
        r();
      });
    });
  }
}
check();
