# Darshan S — Coaching & Training Consultant Portfolio

A 5-page static site (Home, About, Services, Projects, Contact) built with plain HTML/CSS/JS — no build step, no framework, works directly on GitHub Pages.

```
├── index.html            Home
├── about/index.html      About
├── services/index.html   Coaching Focus / Services
├── projects/index.html   Selected Engagements
├── contact/index.html    Contact
├── assets/style.css      Shared styles
├── assets/main.js        Shared scripts (nav + scroll reveal)
└── .nojekyll             Tells GitHub Pages to skip Jekyll processing
```

The portrait photo is embedded directly in `index.html` as a base64 image, so there's no separate binary asset to manage.

## Host it on GitHub Pages

Go to Settings then Pages, choose Deploy from a branch, select main and root, then Save.
