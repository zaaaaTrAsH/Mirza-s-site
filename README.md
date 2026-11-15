# Mirza's Site

Static portfolio + assignment site (HTML, CSS, JavaScript). No build step.

## Structure
- `index.html` – home (hero, About me, My Assignment)
- `tti.html` – TTI assignment list
- `assignment.html?id=materi-2` – one assignment viewer (page turning + download link)
- `data.js` – **edit this** to change contact info, assignments, page images, download links
- `style.css`, `script.js` – styling and shared navbar/footer logic

## Add content to an assignment
1. Put page images in `assets/materi-2/1.png`, `2.png`, ...
2. In `data.js`:
   ```js
   { id: "materi-2", title: "Materi #2", desc: "Merangkum materi 2",
     pages: ["assets/materi-2/1.png", "assets/materi-2/2.png"],
     download: "https://drive.google.com/..." }
   ```

## Host on GitHub Pages
1. Create a repo and push these files to the `main` branch (files at the repo root).
2. Repo → Settings → Pages → Source: "Deploy from a branch" → `main` / `(root)` → Save.
3. Your site will be at `https://<username>.github.io/<repo>/`.

Preview locally: open `index.html` in a browser (or run `python -m http.server`). 

