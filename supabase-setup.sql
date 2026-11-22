-- Run this in your Supabase project's SQL Editor.
create table if not exists public.community_posts (
  id uuid primary key default gen_random_uuid(),
  author text not null check (char_length(author) between 1 and 40),
  category text not null check (category in ('WWE','TWZ','Wrestling News','Opinion','Predictions')),
  title text not null check (char_length(title) between 1 and 100),
  body text not null check (char_length(body) between 1 and 3000),
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now()
);

alter table public.community_posts enable row level security;

-- Anyone can submit a post, but it always starts pending.
create policy "Visitors can submit pending posts"
on public.community_posts for insert
to anon
with check (status = 'pending');

-- Visitors can only read posts that an admin has approved.
create policy "Visitors can read approved posts"
on public.community_posts for select
to anon
using (status = 'approved');

grant select, insert on public.community_posts to anon;
