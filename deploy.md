# Deployment Guide - MosquitoAskari

This guide details how to deploy the MosquitoAskari (Vite + React) project to AWS and Digital Ocean.

## 1. Prerequisites
- Node.js (v18 or higher)
- Access to your domain (mosquitoaskari.com) DNS settings.
- A GitHub/GitLab repository with the project code.

## 2. Local Build
Before deploying manually, always ensure the project builds correctly:
```bash
npm install
npm run build
```
The output will be in the `/dist` directory.

---

## 3. Deploy to AWS

### Option A: AWS Amplify (Recommended - Easiest with CI/CD)
1. Log in to the [AWS Management Console](https://console.aws.amazon.com/).
2. Navigate to **AWS Amplify**.
3. Click **New App** > **Host web app**.
4. Connect your GitHub/GitLab repository.
5. Select the branch (e.g., `main`).
6. **Build Settings**: Amplify will auto-detect Vite. Ensure the build command is `npm run build` and the output directory is `dist`.
7. Click **Save and Deploy**.
8. **Domain Setup**: Go to **Domain Management** in the Amplify sidebar to link `mosquitoaskari.com`.

### Option B: S3 + CloudFront (Manual/Classic Static Hosting)
1. **S3**:
   - Create an S3 bucket with the name `mosquitoaskari.com`.
   - Disable "Block all public access" (if hosting directly) or use OAC with CloudFront.
   - Upload the contents of the `/dist` folder to the bucket root.
2. **CloudFront**:
   - Create a Distribution.
   - **Origin**: Select your S3 bucket.
   - **Default Root Object**: `index.html`.
   - **Viewer Protocol Policy**: "Redirect HTTP to HTTPS".
   - **Error Pages**: Create a custom error response for `404` -> `/index.html` (Status: 200) to support React Router.
3. **Route 53**: Create an A record (Alias) pointing your domain to the CloudFront distribution URL.

---

## 4. Deploy to Digital Ocean

### Option A: App Platform (Easiest)
1. Log in to your [Digital Ocean Dashboard](https://cloud.digitalocean.com/).
2. Click **Create** > **Apps**.
3. Connect your GitHub repository.
4. **App Settings**:
   - Digital Ocean will detect the project.
   - App Type: **Static Site**.
   - Build Command: `npm run build`.
   - Output Directory: `dist`.
5. Click **Create Resources**.
6. **Custom Domain**: In the App settings, navigate to **Settings** > **Domains** to add `mosquitoaskari.com`.

### Option B: Droplet (VPS with Nginx)
1. Create a Ubuntu Droplet.
2. Install Nginx: `sudo apt update && sudo apt install nginx`.
3. Build the project locally (`npm run build`).
4. Copy the `/dist` folder to the server:
   ```bash
   scp -r ./dist/* root@your_droplet_ip:/var/www/html/
   ```
5. Configure Nginx (`/etc/nginx/sites-available/default`) to serve `index.html` for all routes:
   ```nginx
   location / {
       try_files $uri $uri/ /index.html;
   }
   ```
6. Restart Nginx: `sudo systemctl restart nginx`.
7. Set up SSL using Certbot: `sudo apt install certbot python3-certbot-nginx && sudo certbot --nginx`.

---

## 5. Deploy to GitHub Pages (Automated)

I have set up a GitHub Actions workflow that will automatically deploy your site whenever you push to the `main` branch.

### Setup Steps:
1. **GitHub Repository**: Create a new repository on GitHub (e.g., `mosquito-askari`).
2. **Push Code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. **Settings**:
   - Go to your repository **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, ensure it is set to **GitHub Actions**.
4. **Custom Domain**:
   - In the same **Pages** settings, add `mosquitoaskari.com`.
   - Ensure your DNS provider has the correct CNAME/A records pointing to GitHub Pages.

---

## 7. Deploy to Netlify (Easiest Alternative)

1. Log in to your [Netlify Dashboard](https://app.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Connect your GitHub account and select the `MosquitoAskari` repository.
4. **Site Settings**:
   - Branch to deploy: `main`.
   - Build command: `npm run build`.
   - Publish directory: `dist`.
5. Click **Deploy MosquitoAskari**.
6. **Custom Domain**: Go to **Domain management** > **Add domain** to link `mosquitoaskari.com`.

---

## 8. Formspree Integration (Reminder)
The "Expression of Interest" form is configured to send emails to `info@mosquitoaskari.com`. Ensure the environment where you deploy has internet access (Standard for all above options).
