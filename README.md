# The Wrestling Zone (TWZ)

A responsive wrestling fan website for WWE updates, TWZ promotion news, match cards and a WhatsApp wrestling quiz community.

## Before publishing
In `app/page.tsx`, replace `https://chat.whatsapp.com/REPLACE_WITH_YOUR_GROUP_INVITE` with the real invite URL for your WhatsApp quizzing group. Replace sample headlines and sample matchups with your real posts.

## Run locally
1. Install Node.js 18.17+.
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:3000

## Deploy to Vercel
1. Upload this project to a GitHub repository.
2. Sign in at https://vercel.com and choose **Add New → Project**.
3. Import the repository; Vercel should detect Next.js automatically.
4. Select **Deploy**. Vercel will give you a `*.vercel.app` address.

## Visitor community posting
The `/community` page includes a post form and public feed. To enable shared posts across visitors:
1. Create a project at https://supabase.com.
2. In the Supabase SQL Editor, run `supabase-setup.sql`.
3. Copy your Project URL and anon/publishable key into Vercel Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Redeploy on Vercel.
5. Review submissions in the Supabase Table Editor. Change `status` from `pending` to `approved` to publish them, or `rejected` to decline them.

Posts are moderated before public display. Never put a Supabase service-role key in frontend environment variables.
