const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'mockData.ts');
let data = fs.readFileSync(filePath, 'utf8');

// The file currently has: description: "...", phone: "...", mapCode: "..." }
// We want to add address: "..."
data = data.replace(/description:\s*"([^"]+)",\s*phone:\s*"([^"]+)",\s*mapCode:\s*"([^"]+)"\s*}/g, (match, desc, phone, mapCode) => {
    let city = "青森縣青森市";
    if (desc.includes("花卷") || desc.includes("平泉") || desc.includes("嚴美溪")) city = "岩手縣花卷市";
    else if (desc.includes("仙台") || desc.includes("松島")) city = "宮城縣仙台市";
    else if (desc.includes("弘前")) city = "青森縣弘前市";
    else if (desc.includes("八戶") || desc.includes("種差")) city = "青森縣八戶市";
    
    // Generate fake but realistic-looking address like 青森縣青森市本町 1-2-3
    const addr = `${city}本町 ${Math.floor(Math.random() * 5 + 1)}-${Math.floor(Math.random() * 20 + 1)}-${Math.floor(Math.random() * 10 + 1)}`;
    
    return `description: "${desc}", phone: "${phone}", mapCode: "${mapCode}", address: "${addr}" }`;
});

fs.writeFileSync(filePath, data);
console.log("Added addresses to mockData.ts");
