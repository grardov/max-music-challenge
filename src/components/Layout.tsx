import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="px-4">
      <header className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <h1 className="m-0">Max</h1>
          <small className="font-light uppercase">
            Music Audience Exchange
          </small>
        </div>
        <Link to="/my-list">View My List</Link>
      </header>
      <main className="my-8">
        <Outlet />
      </main>
    </div>
  );
}
