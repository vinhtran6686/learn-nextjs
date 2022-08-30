import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link> 
    <Link href="/post">
      <a style={linkStyle}>Post</a>
    </Link>
    
    <Link href="/photos">
      <a style={linkStyle}>Photos</a>
    </Link>
    <Link href="/photos/create">
      <a style={linkStyle}>Create Photos</a>
    </Link>
  </div>
);

export default Header;
