const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'mockData.ts');
let data = fs.readFileSync(filePath, 'utf8');

// Regex to find description: "some description" },
data = data.replace(/description:\s*"([^"]+)"\s*}/g, (match, desc) => {
    // Generate some random looking but realistic numbers
    const r1 = Math.floor(Math.random() * 90 + 10);
    const r2 = Math.floor(Math.random() * 900 + 100);
    const r3 = Math.floor(Math.random() * 9000 + 1000);
    const phone = `017-${r2}-${r3}`;
    
    const m1 = Math.floor(Math.random() * 900 + 100);
    const m2 = Math.floor(Math.random() * 900 + 100);
    const m3 = Math.floor(Math.random() * 90 + 10);
    const mapCode = `${m1} ${m2} ${m3}*11`;
    
    return `description: "${desc}", phone: "${phone}", mapCode: "${mapCode}" }`;
});

fs.writeFileSync(filePath, data);
console.log("Updated mockData.ts with phone and mapCodes");
