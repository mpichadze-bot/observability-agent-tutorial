#!/bin/bash

# 🚀 Deploy Observability Agent Learning Hub to GitHub
# This script helps you deploy the application to GitHub

echo "🚀 Observability Agent Learning Hub - GitHub Deployment"
echo "========================================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📋 Step 1: Create GitHub Repository"
echo "-----------------------------------"
echo ""
echo "Please create a GitHub repository:"
echo "1. Go to: https://github.com/new"
echo "2. Repository name: observability-agent-tutorial"
echo "3. Description: Interactive learning hub for Salesforce Agentforce Observability Agent"
echo "4. Choose: Public or Private"
echo "5. DO NOT initialize with README (we already have files)"
echo "6. Click 'Create repository'"
echo ""
read -p "Press Enter after you've created the repository..."

echo ""
echo "📝 Step 2: Enter Your GitHub Username"
echo "-------------------------------------"
read -p "GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Error: GitHub username is required"
    exit 1
fi

echo ""
echo "🔗 Step 3: Adding Remote Repository"
echo "-----------------------------------"

# Check if origin already exists
if git remote | grep -q "^origin$"; then
    echo "⚠️  Remote 'origin' already exists. Removing it..."
    git remote remove origin
fi

# Add the remote
REPO_URL="https://github.com/${GITHUB_USERNAME}/observability-agent-tutorial.git"
git remote add origin "$REPO_URL"
echo "✅ Remote added: $REPO_URL"

echo ""
echo "📤 Step 4: Pushing to GitHub"
echo "---------------------------"
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Next Steps:"
    echo "=============="
    echo ""
    echo "1. Go to your repository:"
    echo "   https://github.com/${GITHUB_USERNAME}/observability-agent-tutorial"
    echo ""
    echo "2. Enable GitHub Pages:"
    echo "   - Click 'Settings' tab"
    echo "   - Click 'Pages' in left sidebar"
    echo "   - Under 'Build and deployment':"
    echo "     → Source: Select 'GitHub Actions'"
    echo "   - Click 'Save'"
    echo ""
    echo "3. Wait 2-3 minutes for deployment"
    echo ""
    echo "4. Your app will be live at:"
    echo "   https://${GITHUB_USERNAME}.github.io/observability-agent-tutorial/"
    echo ""
    echo "✨ The GitHub Actions workflow will automatically deploy your app!"
    echo ""
else
    echo ""
    echo "❌ Error: Failed to push to GitHub"
    echo ""
    echo "Possible issues:"
    echo "1. Repository doesn't exist yet - create it first"
    echo "2. Authentication failed - you may need to set up a personal access token"
    echo "3. Wrong username - check your GitHub username"
    echo ""
    echo "For authentication help, see:"
    echo "https://docs.github.com/en/authentication"
    exit 1
fi
