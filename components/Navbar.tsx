import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/" className="logo">Logo</Link>
      <div className="navlinks">
        <Link href="/about" className="link">About</Link>
        <Link href="/display" className="link">Display</Link>
        <Link href="/login" className="link">SignIn</Link>
      </div>
    </div>
  )
}