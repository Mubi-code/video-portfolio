# Video Editor Portfolio - Beginner Guide

## 1. Folder structure
```
video-portfolio/
├── index.html      <- the page content (text, sections, video links)
├── css/style.css   <- the look (colors, spacing, fonts, responsive rules)
├── js/main.js      <- behaviour (scroll animation, menu, YouTube player)
├── images/         <- put your own pictures here
├── .gitignore      <- tells Git which files to skip
└── README.md       <- this guide
```
No installs needed: it is plain HTML, CSS and JavaScript.

## 2. Set up in VS Code
1. Install VS Code from https://code.visualstudio.com (click Download, run the installer, accept defaults).
2. Install Git from https://git-scm.com/downloads (accept defaults). Restart VS Code afterwards.
3. Unzip the project, then in VS Code: File > Open Folder > choose `video-portfolio`.
4. Click the Extensions icon (left bar, four squares), search **Live Server** (by Ritwick Dey) and click Install.

## 3. Run locally
Right-click `index.html` > **Open with Live Server** (or click "Go Live" at the bottom right). Your browser opens the site and refreshes every time you save a file (Ctrl+S).

## 4. Upload to GitHub
1. Create a free account at https://github.com.
2. Click **+** > **New repository**. Name it `video-portfolio`, leave it Public, do NOT tick "Add a README", click Create.
3. In VS Code open the terminal (Terminal > New Terminal) and run these one at a time:
```
git init
git add .
git commit -m "First version of my portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/video-portfolio.git
git push -u origin main
```
(Replace YOUR-USERNAME. If asked to sign in, follow the browser prompt.)
First time using Git? Run these once first:
`git config --global user.name "Your Name"` and `git config --global user.email "you@example.com"`

## 5. Deploy to Vercel (free)
1. Go to https://vercel.com, click **Sign Up**, choose **Continue with GitHub**.
2. Click **Add New... > Project**, find `video-portfolio`, click **Import**.
3. Leave everything default (Framework Preset: **Other**, no build command). Click **Deploy**.
4. After ~30 seconds you get a link like `your-project.vercel.app`. That is your live site.
5. To rename it: Project > Settings > Domains > edit the vercel.app name.

**Updating later:** edit in VS Code, then run `git add .`, `git commit -m "Update"`, `git push`. Vercel redeploys automatically.

## 6. Add your YouTube videos
1. Open the video on YouTube and copy its link (e.g. `https://youtu.be/dQw4w9WgXcQ` or `https://www.youtube.com/watch?v=dQw4w9WgXcQ`; Shorts links work too).
2. In `index.html`, find the Work section and replace `PASTE_YOUTUBE_LINK_HERE`:
```html
<article class="card reveal" data-video="https://youtu.be/dQw4w9WgXcQ">
```
3. Save. The thumbnail loads automatically; clicking opens the video in a pop-up.
4. Videos must be Public or Unlisted on YouTube, with embedding allowed.

## 7. Common changes
- **Text:** edit between the tags in `index.html`, e.g. `<h1>Hi, I'm <em>Your Name</em></h1>`.
- **Colors:** top of `css/style.css`, the `:root` block. Change `--accent` for the highlight color.
- **Fonts:** change the Google Fonts link in `index.html` and the font names in `style.css`.
- **Add a video:** copy a whole `<article class="card reveal"> ... </article>` block and paste below the others.
- **Remove a video or section:** delete its block (from `<article>` to `</article>`, or `<section>` to `</section>`). Also delete the matching link in the nav.
- **Add an image (e.g. your photo):** save it in `images/` and add `<img src="images/me.jpg" alt="Your Name">` where you want it.
- **Add a section:** copy an existing `<section class="section">` block, change the `id`, and add a link in the nav pointing to `#thatid`.
- **Contact links:** replace `youremail@example.com` and the YouTube/Instagram URLs in the Contact section.
- **Page title:** the `<title>` line at the top of `index.html`.

## 8. How the files work together
- `index.html` loads `style.css` (looks) and `main.js` (behaviour).
- Any element with class `reveal` fades in on scroll (CSS defines the look, JS #1 triggers it).
- `data-video` on each card is read by JS #4, which fetches the thumbnail and builds the pop-up player.
- Layout adapts through `@media` rules at the bottom of `style.css`.
