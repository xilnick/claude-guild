#!/bin/bash

# Claude Guild Publishing Script
echo "🏛️ Claude Guild - Publishing to npm..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run from project root."
    exit 1
fi

# Check if install.js exists
if [ ! -f "install.js" ]; then
    echo "❌ Error: install.js not found."
    exit 1
fi

# Check if commands directory exists
if [ ! -d "commands" ]; then
    echo "❌ Error: commands directory not found."
    exit 1
fi

# Verify login to npm
echo "🔐 Checking npm authentication..."
npm whoami > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "❌ Please login to npm first: npm login"
    exit 1
fi

# Clean up any test artifacts
echo "🧹 Cleaning up test artifacts..."
rm -rf .claude .guild CLAUDE.md.backup 2>/dev/null || true

# Run test installation
echo "🧪 Testing installation..."
node install.js --no-interaction > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "❌ Installation test failed"
    exit 1
fi

# Clean up test artifacts again
rm -rf .claude .guild CLAUDE.md.backup 2>/dev/null || true

# Show current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "📦 Current version: $CURRENT_VERSION"

# Prompt for version bump
echo ""
echo "Select version bump:"
echo "1) patch (bug fixes: $CURRENT_VERSION -> $(npm version --no-git-tag-version patch --dry-run 2>/dev/null | grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+'))"
echo "2) minor (new features: $CURRENT_VERSION -> $(npm version --no-git-tag-version minor --dry-run 2>/dev/null | grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+'))"
echo "3) major (breaking changes: $CURRENT_VERSION -> $(npm version --no-git-tag-version major --dry-run 2>/dev/null | grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+'))"
echo "4) Skip version bump"

read -p "Enter choice (1-4): " choice

case $choice in
    1)
        echo "📈 Bumping patch version..."
        npm version patch --no-git-tag-version
        ;;
    2)
        echo "📈 Bumping minor version..."
        npm version minor --no-git-tag-version
        ;;
    3)
        echo "📈 Bumping major version..."
        npm version major --no-git-tag-version
        ;;
    4)
        echo "⏭️ Skipping version bump..."
        ;;
    *)
        echo "❌ Invalid choice. Skipping version bump..."
        ;;
esac

# Show final version
FINAL_VERSION=$(node -p "require('./package.json').version")
echo "📦 Publishing version: $FINAL_VERSION"

# Check if version was changed and remind about git
if [ "$CURRENT_VERSION" != "$FINAL_VERSION" ]; then
    echo ""
    echo "ℹ️  Version updated from $CURRENT_VERSION to $FINAL_VERSION"
    echo "   Note: Git commit and tag were not created automatically."
    echo "   After publishing, you may want to commit and tag:"
    echo "   git add package.json && git commit -m 'v$FINAL_VERSION' && git tag v$FINAL_VERSION"
fi

# Confirm publication
echo ""
read -p "Publish claude-guild@$FINAL_VERSION to npm? (y/N): " confirm

if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
    echo "🚀 Publishing to npm..."
    npm publish --access public
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully published claude-guild@$FINAL_VERSION"
        echo ""
        echo "🎉 Installation command:"
        echo "   npx claude-guild"
        echo ""
        echo "📋 Next steps:"
        echo "   1. Test installation: npx claude-guild@$FINAL_VERSION"
        echo "   2. Update documentation if needed"
        echo "   3. Create GitHub release"
    else
        echo "❌ Publication failed"
        exit 1
    fi
else
    echo "❌ Publication cancelled"
    exit 1
fi