import Link from "next/link";
import { useRouter } from "next/router";

const linkStyle = {
  marginRight: 15,
};

const Header = () =>{
  const router = useRouter();
  const gotoPhoto = () =>{
    router.push({
      pathname: '/photos/[photoId]',
      query: {
        photoId: 123,
        ref: 'social',
      },
    })
  }
  return (
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
    <button onClick={gotoPhoto}>Goto Photo by Click</button>
  </div>
  )
};

export default Header;
