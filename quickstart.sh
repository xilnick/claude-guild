#!/bin/bash

echo "🏛️  Claude Guild Quick Start"
echo "============================="
echo ""

npm install

# Build the project
echo "📦 Building project..."
npm run build

echo ""
echo "✅ Build complete!"
echo ""

# Show usage
echo "📚 Usage Examples:"
echo ""
echo "1. Initialize in a project:"
echo "   cd your-project"
echo "   npx claude-guild init"
echo ""
echo "2. Execute a task:"
echo "   npx claude-guild task \"implement user authentication\""
echo ""
echo "3. Create an agent:"
echo "   npx claude-guild agent create"
echo ""
echo "4. View status:"
echo "   npx claude-guild status"
echo ""
echo "5. Run locally:"
echo "   node dist/cli/index.js --help"
echo ""

# Make the CLI executable
chmod +x dist/cli/index.js

echo "🚀 Ready to use!"