"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

type Post = { id: string; category: string; title: string; body: string; author: string; created_at: string };

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("WWE");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadPosts() {
    if (!url || !key) return;
    const res = await fetch(`${url}/rest/v1/community_posts?select=id,category,title,body,author,created_at&status=eq.approved&order=created_at.desc`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      cache: "no-store"
    });
    if (res.ok) setPosts(await res.json());
  }

  useEffect(() => { loadPosts().catch(() => setStatus("Could not load posts right now.")); }, []);

  async function submitPost(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!url || !key) { setStatus("Community posting is not connected yet. Add your Supabase settings to activate it."); return; }
    setLoading(true); setStatus("");
    try {
      const res = await fetch(`${url}/rest/v1/community_posts`, {
        method: "POST",
        headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify({ author: author.trim(), category, title: title.trim(), body: body.trim(), status: "pending" })
      });
      if (!res.ok) throw new Error("Post submission failed");
      setAuthor(""); setTitle(""); setBody("");
      setStatus("Your post was submitted for review. It will appear here after approval.");
    } catch {
      setStatus("Sorry, your post could not be submitted. Please try again.");
    } finally { setLoading(false); }
  }

  return (
    <main className="community-page">
      <header className="nav wrap">
        <Link className="brand" href="/"><span className="brand-mark">TWZ</span><span>THE WRESTLING <b>ZONE</b><small>WWE • TWZ • FAN COMMUNITY</small></span></Link>
        <Link className="nav-cta" href="/">← BACK HOME</Link>
      </header>
      <section className="community-hero"><div className="wrap"><p className="eyebrow"><span/> THE FANS' ARENA</p><h1>THE TWZ<br/><em>COMMUNITY.</em></h1><p>Have a wrestling take? A breaking update? A prediction? This is your space to speak up.</p></div></section>
      <section className="wrap community-layout">
        <div className="post-form-panel">
          <p className="eyebrow">MAKE YOUR VOICE HEARD</p><h2>CREATE A <em>POST.</em></h2>
          <p className="form-intro">Share something with fellow wrestling fans. Posts are reviewed before appearing publicly.</p>
          <form onSubmit={submitPost}>
            <label>Your display name<input value={author} onChange={e=>setAuthor(e.target.value)} placeholder="e.g. RingsideFan" maxLength={40} required /></label>
            <label>Post category<select value={category} onChange={e=>setCategory(e.target.value)}><option>WWE</option><option>TWZ</option><option>Wrestling News</option><option>Opinion</option><option>Predictions</option></select></label>
            <label>Post headline<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Give your post a headline" maxLength={100} required /></label>
            <label>Your post<textarea value={body} onChange={e=>setBody(e.target.value)} placeholder="What's happening in the wrestling world?" rows={6} maxLength={3000} required /></label>
            <button className="button primary submit-post" disabled={loading}>{loading ? "SUBMITTING..." : "SUBMIT FOR REVIEW"} <span>→</span></button>
            {status && <p className="form-status" role="status">{status}</p>}
          </form>
          {(!url || !key) && <p className="setup-note">ADMIN SETUP REQUIRED: connect a Supabase project and add the two environment variables to activate shared posting.</p>}
        </div>
        <aside className="community-feed"><div className="feed-heading"><div><p className="eyebrow">FROM THE FANS</p><h2>LATEST <em>POSTS.</em></h2></div><button onClick={()=>loadPosts()} className="refresh-button">↻ REFRESH</button></div>
          {posts.length ? posts.map(post=><article className="fan-post" key={post.id}><div className="post-meta"><span>{post.category}</span><time>{new Date(post.created_at).toLocaleDateString()}</time></div><h3>{post.title}</h3><p>{post.body}</p><small>POSTED BY {post.author.toUpperCase()}</small></article>) : <div className="empty-feed"><span>✦</span><h3>THE FLOOR IS YOURS.</h3><p>Approved community posts will appear here. Be the first to share a take.</p></div>}
        </aside>
      </section>
      <footer className="footer wrap"><Link className="brand" href="/"><span className="brand-mark">TWZ</span><span>THE WRESTLING <b>ZONE</b><small>WWE • TWZ • FAN COMMUNITY</small></span></Link><p>© 2026 THE WRESTLING ZONE</p><Link href="/">BACK HOME ↑</Link></footer>
    </main>
  );
}
