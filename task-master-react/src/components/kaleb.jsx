import React from 'react';

export default function Kaleb() {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">Kaleb</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header>

      <main className="px-3">
        <h1>Welcome to the Kaleb Website</h1>
        <p className="lead">We are Kaleb.</p>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
        </p>
      </main>

      <footer className="mt-auto text-white-50">
        <p>Est 2026 · Built with <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a></p>
      </footer>
    </div>
  );
}
