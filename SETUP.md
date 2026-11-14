# Hustle Ledger: setup (about 20 minutes, once)

## 1. Firebase (your free online database)
1. Go to console.firebase.google.com, sign in with Google, **Add project** (turn Google Analytics off).
2. **Build > Authentication > Get started > Google > Enable**, pick your email as support email, Save.
3. **Build > Firestore Database > Create database**, location London (europe-west2), **Production mode**.
4. Open the **Rules** tab, delete what is there, paste the contents of `firestore.rules`, click **Publish**.
5. Gear icon > **Project settings** > **Your apps** > the **</>** (web) icon > register an app (any name, no hosting). Copy the `firebaseConfig` values.
6. Open `firebase-config.js` and replace the four PASTE_ values (apiKey, authDomain, projectId, appId).

## 2. GitHub Pages (hosts the app)
1. github.com > **New repository** (name e.g. `ledger`, Public is fine: your data is not in the code, only in Firebase).
2. **Add file > Upload files**: drag in every file from this folder (index.html, firebase-config.js, manifest.webmanifest, sw.js, the icon-*.png files). Commit.
3. **Settings > Pages > Deploy from a branch > main / (root) > Save**. After a minute your link is `https://YOURNAME.github.io/ledger/`.
4. Back in Firebase: **Authentication > Settings > Authorized domains > Add domain** `YOURNAME.github.io`.

## 3. Install and sign in
- iPhone: open the link in Safari > Share > **Add to Home Screen**.
- Android: open in Chrome > menu > **Install app**.
- Laptop: open in Chrome or Edge > install icon in the address bar.
Tap **Sign in with Google** once on each device.

## 4. Move your data in
In the old Claude page: menu > Save backup (JSON). In the new app: menu > Restore from backup file > **Replace all**, then tap **Save all**.
