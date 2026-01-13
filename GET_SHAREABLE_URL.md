# 🌐 Get Your Shareable URL

## Current Status
Your app is running **locally only** at http://localhost:5173/ - this URL only works on your computer.

To share with your org, you need to deploy to a public hosting service.

---

## 🚀 FASTEST: Vercel (30 seconds to live URL)

### Step 1: Login to Vercel
```bash
cd /Users/mpichadze/observability-agent-tutorial
vercel login
```

This will open your browser to authenticate.

### Step 2: Deploy
```bash
vercel --prod
```

### Step 3: Get Your URL
Vercel will immediately give you a URL like:
```
https://observability-agent-tutorial-xxx.vercel.app
```

**✨ You can share this URL immediately!**

---

## 🔵 ALTERNATIVE: GitHub Pages (5 minutes)

### Prerequisites:
- GitHub account
- Git authentication set up

### Steps:

1. **Create GitHub repo:**
   - Go to https://github.com/new
   - Name: `observability-agent-tutorial`
   - Don't initialize with README
   - Click "Create repository"

2. **Push your code:**
   ```bash
   cd /Users/mpichadze/observability-agent-tutorial
   git remote add origin https://github.com/YOUR_USERNAME/observability-agent-tutorial.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Click "Pages" in sidebar
   - Source: Select "GitHub Actions"
   - Wait 2-3 minutes

4. **Your URL will be:**
   ```
   https://YOUR_USERNAME.github.io/observability-agent-tutorial/
   ```

**Note:** You'll need to update vite.config.js first:
```bash
# Change base from '/' back to '/observability-agent-tutorial/'
```

---

## 🎯 Recommended: Vercel

**Why Vercel?**
- ✅ Fastest (30 seconds to URL)
- ✅ No configuration needed
- ✅ Professional URL
- ✅ Automatic SSL/HTTPS
- ✅ Global CDN
- ✅ Free tier is generous

**Just run:**
```bash
vercel login
vercel --prod
```

---

## 📋 What You'll Get

### Your Shareable URL Will Provide:
- ✅ Public access (anyone with link can view)
- ✅ HTTPS enabled (secure)
- ✅ Fast loading worldwide (CDN)
- ✅ Mobile optimized
- ✅ Always online (99.9% uptime)

### Application Features:
- 8 comprehensive sections
- 58+ query examples
- Interactive expandable cards
- Evaluation framework
- Meeting notes
- Demo interface

---

## 🆘 Quick Help

### "I don't have Vercel account"
→ It's free! Will create one during `vercel login`

### "I prefer GitHub"
→ Follow the GitHub Pages steps above

### "Which is easier?"
→ Vercel (just 2 commands)

### "Which is free?"
→ Both are free!

---

## 🎯 Immediate Next Steps

**To get your shareable URL right now:**

```bash
cd /Users/mpichadze/observability-agent-tutorial

# Step 1: Login to Vercel
vercel login

# Step 2: Deploy
vercel --prod

# Step 3: Copy the URL it gives you and share!
```

**That's it! You'll have a URL to share in 30 seconds!** 🚀
