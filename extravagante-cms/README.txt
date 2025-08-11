
EXTRAVAGANTÈ — Netlify + Netlify CMS Ready
-----------------------------------------

How to use:
1) Create a GitHub repository and push these files to the 'main' branch.
2) In Netlify: New site -> Import from Git -> Connect your GitHub repo -> Deploy.
3) Enable Identity in Netlify Dashboard (Settings -> Identity) and turn it on.
4) Under Identity -> Services, enable 'Git Gateway' or connect via Netlify GitHub app.
5) In Netlify Dashboard, go to 'Site settings' -> 'Identity' -> 'Invite users' or enable registration.
6) Visit https://your-site.netlify.app/admin to open the CMS (Netlify will serve admin/index.html).
7) Use the CMS to edit products (images will upload to assets/uploads if configured).

Notes:
- This site uses remote image URLs for product examples. You can upload images via the CMS once media_folder is connected.
- Animations are simple CSS/IntersectionObserver-based for tasteful fades.
- Image markup uses <picture> with AVIF where provided and lazy loading for speed.
