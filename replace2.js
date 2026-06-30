const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.next')) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(__dirname);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 2. The Razor Grid System
  // Replace the old glass classes
  content = content.replace(/bg-white\/\[0\.02\] backdrop-blur-xl shadow-\[inset_0_1px_1px_rgba\(255,255,255,0\.05\)\]/g, 'bg-[rgba(20,20,20,0.4)] backdrop-blur-[16px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]');
  content = content.replace(/bg-\[var\(--color-card\)\]/g, 'bg-[rgba(20,20,20,0.4)] backdrop-blur-[16px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'); // Just in case any are left over

  // Replace old borders
  content = content.replace(/border-\[0\.5px\] border-\[rgba\(255,255,255,0\.04\)\]/g, 'border border-[rgba(255,255,255,0.06)]');
  content = content.replace(/border-t-\[0\.5px\] border-t-\[rgba\(255,255,255,0\.04\)\]/g, 'border-t border-t-[rgba(255,255,255,0.06)]');
  content = content.replace(/border-b-\[0\.5px\] border-b-\[rgba\(255,255,255,0\.04\)\]/g, 'border-b border-b-[rgba(255,255,255,0.06)]');
  content = content.replace(/border-y-\[0\.5px\] border-y-\[rgba\(255,255,255,0\.04\)\]/g, 'border-y border-y-[rgba(255,255,255,0.06)]');
  content = content.replace(/border-l-\[0\.5px\] border-t-\[0\.5px\] border-\[rgba\(255,255,255,0\.04\)\]/g, 'border-l border-t border-[rgba(255,255,255,0.06)]');
  content = content.replace(/border-r-\[0\.5px\] border-b-\[0\.5px\] border-\[rgba\(255,255,255,0\.04\)\]/g, 'border-r border-b border-[rgba(255,255,255,0.06)]');
  content = content.replace(/border-\[rgba\(255,255,255,0\.04\)\]/g, 'border-[rgba(255,255,255,0.06)]'); 

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
  }
});
