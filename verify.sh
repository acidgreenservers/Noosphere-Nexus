#!/bin/bash

echo "🔍 Verifying Noosphere Nexus setup..."
echo ""

# Check required files
echo "📁 Checking files..."
files=("index.html" "package.json" "vite.config.js" "src/main.jsx" "src/App.jsx" "src/index.css" ".github/workflows/deploy.yml")
all_good=true

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file - MISSING!"
        all_good=false
    fi
done

echo ""
echo "📦 Checking package.json scripts..."
if grep -q '"build": "vite build"' package.json; then
    echo "✅ Build script found"
else
    echo "❌ Build script missing!"
    all_good=false
fi

echo ""
if [ "$all_good" = true ]; then
    echo "✅ All checks passed! Ready to deploy."
    echo ""
    echo "Next steps:"
    echo "1. git add ."
    echo "2. git commit -m 'fix: update for GitHub Pages deployment'"
    echo "3. git push"
    echo "4. Go to Settings → Pages → set source to 'GitHub Actions'"
    echo "5. Wait 1-2 minutes for workflow to complete"
else
    echo "❌ Some files are missing. Please check the setup."
fi
