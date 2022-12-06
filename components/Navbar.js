import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <p>
            Sugam
            <br />
            Palav
          </p>
        </Link>
      </div>
      <p>
        FRONTEND DEVELOPER
        <br /> FOLIO / 2018 &mdash; 2022
      </p>
      <p>
        Available for freelance
        <br />
        from Sept 2022
      </p>
      <button>
        <a href="#footer">Contact</a>
      </button>
    </nav>
  );
}

export default Navbar;
