const wweNews = [
  { tag: "WWE", title: "The WWE universe never stops talking", copy: "Catch up on the latest stories, rivalries, moments and talking points from WWE.", stamp: "WWE UPDATE", art: "WWE" },
  { tag: "WWE", title: "The road to championship glory", copy: "From surprise challenges to title defenses, follow the stories shaping the WWE scene.", stamp: "RINGSIDE", art: "CHAMPIONS" },
  { tag: "WWE", title: "Big moments. Bigger reactions.", copy: "The moments that get fans talking deserve a place right here at The Wrestling Zone.", stamp: "THE BUZZ", art: "MOMENTS" },
];

const twzNews = [
  { tag: "TWZ EXCLUSIVE", title: "TWZ stories start right here", copy: "Get the latest TWZ announcements, rivalries, match cards and show updates.", stamp: "TWZ UPDATE", art: "TWZ" },
  { tag: "TWZ MATCH CENTER", title: "Who is next in line?", copy: "Follow the contenders, champions and rivalries making waves in The Wrestling Zone.", stamp: "MATCH WATCH", art: "THE ZONE" },
];

const matches = [
  { type: "FEATURED MATCH", a: "SUPERSTAR ONE", b: "SUPERSTAR TWO", note: "Add your official TWZ or WWE matchup here" },
  { type: "TWZ SHOWDOWN", a: "THE CHALLENGER", b: "THE CHAMPION", note: "Your next big TWZ rivalry goes here" },
];

export default function Home() {
  return (
    <main>
      <div className="ticker"><span>THE WRESTLING ZONE</span> WWE • TWZ • NEWS • MATCH CARDS • QUIZZES <i>✦</i> WHERE WRESTLING FANS CONNECT</div>
      <header className="nav wrap">
        <a className="brand" href="#"><span className="brand-mark">TWZ</span><span>THE WRESTLING <b>ZONE</b><small>WWE • TWZ • FAN COMMUNITY</small></span></a>
        <nav><a href="#wwe">WWE</a><a href="#twz">TWZ</a><a href="#matches">MATCH CARDS</a><a href="/community">COMMUNITY</a><a href="#quiz">WHATSAPP QUIZ</a></nav>
        <a className="nav-cta" href="#quiz">JOIN THE COMMUNITY <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content wrap">
          <p className="eyebrow"><span /> WELCOME TO THE WRESTLING ZONE</p>
          <h1>ALL THINGS<br/><em>WRESTLING.</em></h1>
          <p className="hero-copy">Your home for WWE updates, TWZ action, match cards and fan conversations.<br/>Step into the Zone — the wrestling world is always talking.</p>
          <div className="hero-actions"><a className="button primary" href="#wwe">EXPLORE THE LATEST <span>→</span></a><a className="button ghost" href="#quiz">JOIN THE QUIZ GROUP</a></div>
          <div className="hero-bottom"><span>THE WRESTLING ZONE — TWZ</span><span>WWE NEWS · TWZ UPDATES · FAN QUIZZES</span></div>
        </div>
        <div className="hero-side">T<br/>W<br/>Z</div>
      </section>

      <section className="quick-stats wrap">
        <div><strong>WWE</strong><span>THE BIGGEST<br/>WRESTLING STAGE</span></div>
        <div><strong>TWZ</strong><span>OUR WRESTLING<br/>ZONE</span></div>
        <div><strong>FANS</strong><span>ONE COMMUNITY<br/>ONE PASSION</span></div>
        <p>WELCOME TO <b>THE ZONE.</b></p>
      </section>

      <section className="section wrap" id="wwe">
        <div className="section-head"><div><p className="eyebrow">WHAT'S HAPPENING</p><h2>WWE <em>UPDATES.</em></h2></div><span className="section-index">01 — WWE ZONE</span></div>
        <div className="news-grid">{wweNews.map((item, i) => <article className={`news-card news-${i+1}`} key={item.title}><div className="news-art"><span className="art-number">0{i+1}</span><span className="art-word">{item.art}</span><span className="art-cross">✦</span></div><div className="news-meta"><span>{item.tag}</span><span>{item.stamp}</span></div><h3>{item.title}</h3><p>{item.copy}</p><a href="#quiz">JOIN THE DISCUSSION <b>↗</b></a></article>)}</div>
      </section>

      <section className="twz-section" id="twz"><div className="wrap"><div className="section-head"><div><p className="eyebrow">OUR PROMOTION. OUR STORIES.</p><h2>INSIDE <em>TWZ.</em></h2></div><span className="section-index">02 — THE WRESTLING ZONE</span></div>
        <div className="news-grid twz-grid">{twzNews.map((item, i) => <article className={`news-card news-${i+1}`} key={item.title}><div className="news-art"><span className="art-number">TWZ / 0{i+1}</span><span className="art-word">{item.art}</span><span className="art-cross">✦</span></div><div className="news-meta"><span>{item.tag}</span><span>{item.stamp}</span></div><h3>{item.title}</h3><p>{item.copy}</p><a href="#matches">VIEW MATCH CENTER <b>↗</b></a></article>)}</div>
      </div></section>

      <section className="match-section" id="matches"><div className="wrap"><div className="section-head"><div><p className="eyebrow">THE MATCH CENTER</p><h2>MATCH <em>CARDS.</em></h2></div><span className="section-index">03 — WWE & TWZ</span></div>
        <div className="match-list">{matches.map((m,i)=><article className="match-row" key={m.type}><span className="match-no">0{i+1}</span><div className="match-info"><small>{m.type}</small><h3>{m.a} <i>VS</i> {m.b}</h3><p>{m.note}</p></div><span className="match-status">COMING UP</span><span className="match-arrow">↗</span></article>)}</div>
        <p className="disclaimer">SAMPLE MATCHUPS — REPLACE THESE WITH YOUR OFFICIAL WWE AND TWZ CARDS.</p>
      </div></section>

      <section className="quiz-section" id="quiz"><div className="wrap quiz-inner"><div><p className="eyebrow">THINK YOU KNOW WRESTLING?</p><h2>TEST YOUR<br/><em>KNOWLEDGE.</em></h2><p>Join the TWZ WhatsApp quizzing group, challenge other fans and prove you know your WWE history, superstars and iconic moments.</p><a className="button whatsapp" href="https://chat.whatsapp.com/REPLACE_WITH_YOUR_GROUP_INVITE" target="_blank" rel="noreferrer">JOIN THE WHATSAPP QUIZ GROUP <span>↗</span></a><small className="link-note">The WhatsApp invite link is a placeholder. Add your group's real invite link before publishing.</small></div><div className="quiz-art"><span className="quiz-bubble">?</span><strong>WRESTLING<br/>TRIVIA</strong><small>ONLY THE REAL FANS KNOW.</small></div></div></section>

      <section className="join"><div className="wrap join-inner"><p className="eyebrow">ONE PASSION. ONE COMMUNITY.</p><h2>WELCOME TO<br/>THE <em>ZONE.</em></h2><p>WWE news, TWZ action and wrestling quizzes — all in one place.</p><a className="button light" href="#wwe">EXPLORE THE WRESTLING ZONE <span>→</span></a></div></section>
      <footer className="footer wrap"><a className="brand" href="#"><span className="brand-mark">TWZ</span><span>THE WRESTLING <b>ZONE</b><small>WWE • TWZ • FAN COMMUNITY</small></span></a><p>© 2026 THE WRESTLING ZONE. WWE IS A TRADEMARK OF ITS RESPECTIVE OWNER.</p><a href="#">BACK TO TOP ↑</a></footer>
    </main>
  );
}
