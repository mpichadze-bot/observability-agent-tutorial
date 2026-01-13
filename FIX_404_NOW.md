# 🔧 Fix 404 Error - Step by Step

## The Problem
You're getting a 404 error when accessing: https://mpichadze-bot.github.io/observability-agent-tutorial/

## ✅ Quick Fix Checklist

### Step 1: Enable GitHub Pages (MOST COMMON ISSUE)

1. **Go to repository settings:**
   - https://github.com/mpichadze-bot/observability-agent-tutorial/settings/pages

2. **Under "Build and deployment":**
   - **Source:** Select **"GitHub Actions"** (NOT "Deploy from a branch")
   - Click **Save**

3. **Wait 2-3 minutes** for the deployment to complete

### Step 2: Verify Workflow Ran

1. **Check Actions tab:**
   - https://github.com/mpichadze-bot/observability-agent-tutorial/actions

2. **Look for "Deploy to GitHub Pages" workflow:**
   - Should show ✅ (green checkmark) if successful
   - If ❌ (red X), click on it to see the error

3. **If workflow hasn't run:**
   ```bash
   cd /Users/mpichadze/observability-agent-tutorial
   git add .
   git commit -m "Trigger deployment"
   git push origin main
   ```

### Step 3: Check Repository Visibility

**The repository MUST be public for GitHub Pages to work:**
- Go to: https://github.com/mpichadze-bot/observability-agent-tutorial/settings
- Scroll to "Danger Zone"
- If it says "Change visibility" → "Make public", click it
- Confirm making it public

### Step 4: Verify the URL

**Correct URL:**
```
https://mpichadze-bot.github.io/observability-agent-tutorial/
```

**Common mistakes:**
- ❌ `https://github.com/mpichadze-bot/observability-agent-tutorial` (this is the repo, not the site)
- ❌ `https://mpichadze-bot.github.io/` (missing project name)
- ❌ Missing trailing slash `/`

### Step 5: Clear Browser Cache

Sometimes browsers cache the 404 page:
- **Chrome/Edge:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- **Firefox:** Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Or open in Incognito/Private mode

---

## 🔍 Detailed Troubleshooting

### Check 1: Is the workflow file present?

```bash
cd /Users/mpichadze/observability-agent-tutorial
ls -la .github/workflows/
```

Should show: `deploy.yml`

### Check 2: Does the build work locally?

```bash
cd /Users/mpichadze/observability-agent-tutorial
npm run build
ls -la dist/
```

Should show: `index.html` and `assets/` folder

### Check 3: Are permissions correct?

Go to: https://github.com/mpichadze-bot/observability-agent-tutorial/settings/actions

Under "Workflow permissions":
- Should be: **"Read and write permissions"**
- Check: ✅ "Allow GitHub Actions to create and approve pull requests"

### Check 4: Is the base path correct?

Check `vite.config.js`:
```javascript
base: '/observability-agent-tutorial/'
```

This should match your repository name exactly.

---

## 🚀 Force Redeploy

If everything looks correct but still getting 404:

```bash
cd /Users/mpichadze/observability-agent-tutorial

# Make sure everything is committed
git add .
git commit -m "Force redeploy"

# Push to trigger workflow
git push origin main

# Wait 2-3 minutes, then check:
# https://github.com/mpichadze-bot/observability-agent-tutorial/actions
```

---

## 📋 Most Likely Solutions (in order)

1. **90% of cases:** GitHub Pages not enabled or set to wrong source
   - Fix: Settings → Pages → Source: GitHub Actions

2. **5% of cases:** Repository is private
   - Fix: Make repository public

3. **3% of cases:** Workflow hasn't run yet
   - Fix: Push a new commit to trigger workflow

4. **2% of cases:** Browser cache
   - Fix: Clear cache or use incognito mode

---

## ✅ After Fixing

Once GitHub Pages is enabled correctly:

1. **Wait 2-3 minutes** after enabling
2. **Check Actions:** Should show successful deployment
3. **Visit:** https://mpichadze-bot.github.io/observability-agent-tutorial/
4. **Should work!** 🎉

---

## 🆘 Still Not Working?

**Check these in order:**

1. ✅ Repository is public?
2. ✅ GitHub Pages enabled with "GitHub Actions" source?
3. ✅ Workflow ran successfully (green checkmark)?
4. ✅ Using correct URL with trailing slash?
5. ✅ Cleared browser cache?
6. ✅ Waited 2-3 minutes after enabling Pages?

**If all checked and still 404, check the workflow logs:**
- https://github.com/mpichadze-bot/observability-agent-tutorial/actions
- Click on the latest workflow run
- Check for any error messages

---

**Most common fix: Enable GitHub Pages → Source: GitHub Actions** ✅
