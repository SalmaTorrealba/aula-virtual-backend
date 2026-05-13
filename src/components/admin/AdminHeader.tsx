import "./AdminHeader.css";

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <div className="admin-header-info">
        <span className="admin-header-name">ADMINISTRADOR</span>
        <svg
          xmlns="[w3.org](http://www.w3.org/2000/svg)"
          className="admin-header-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
        </svg>
      </div>
    </header>
  );
}
