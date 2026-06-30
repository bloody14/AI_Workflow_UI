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

  // 1. Replace bg-[var(--color-card)] with the new glassmorphism class and add the shadow
  content = content.replace(/bg-\[var\(--color-card\)\]/g, 'bg-white/[0.02] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]');

  // 2. Replace border-[var(--color-border)] with border-[rgba(255,255,255,0.04)]
  // To ensure the [0.5px] is applied correctly, we look for border and border-[var(--color-border)]
  content = content.replace(/border border-\[var\(--color-border\)\]/g, 'border-[0.5px] border-[rgba(255,255,255,0.04)]');
  content = content.replace(/border-t border-\[var\(--color-border\)\]/g, 'border-t-[0.5px] border-t-[rgba(255,255,255,0.04)]');
  content = content.replace(/border-b border-\[var\(--color-border\)\]/g, 'border-b-[0.5px] border-b-[rgba(255,255,255,0.04)]');
  content = content.replace(/border-y border-\[var\(--color-border\)\]/g, 'border-y-[0.5px] border-y-[rgba(255,255,255,0.04)]');
  content = content.replace(/border-l border-t border-\[var\(--color-border\)\]/g, 'border-l-[0.5px] border-t-[0.5px] border-[rgba(255,255,255,0.04)]');
  content = content.replace(/border-r border-b border-\[var\(--color-border\)\]/g, 'border-r-[0.5px] border-b-[0.5px] border-[rgba(255,255,255,0.04)]');
  content = content.replace(/border-\[var\(--color-border\)\]/g, 'border-[rgba(255,255,255,0.04)]'); // catch-all for remaining

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
  }
});
