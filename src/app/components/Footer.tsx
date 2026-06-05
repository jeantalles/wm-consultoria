export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <a href="/#hero" className="footer-logo">
          <img src="/img/logo.png" alt="WM Consultoria" />
        </a>
        <div className="footer-copy">
          © 2026 WM Consultoria. Todos os direitos reservados. · Arq. Miriam
          Pereira
        </div>
        <div className="footer-social">
          <a
            href="https://instagram.com/wm_consultoriaa"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/wm1consultoria/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
