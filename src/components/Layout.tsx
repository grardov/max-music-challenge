import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="px-4">
      <header className="flex flex-row items-center justify-between">
        <Link to="/">
          <img src="../../../public/max-logo.webp" alt="Max" className="w-44" />
        </Link>
        <Link to="/my-list">View My List</Link>
      </header>
      <main className="my-8">
        <Outlet />
      </main>
    </div>
  );
}
