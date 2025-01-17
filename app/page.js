export default function Home() {
  return <Navbar />;
}

function Navbar(){
  return(
  <nav className="border-b border-sky-400 sticky top-0 bg-cyan-600 text-gray-100 z-10">
    <div className="h-14 max-w-7xl p-5 mx-auto flex items-center justify-between">
      <a href="/" className="font-medium text-lg md:hover:underline">Kevin Kim's Website</a>
      <ul className="flex items-center justify-end space-x-4 text-sm font-medium">
        <li className="md:hover:underline">
          <a href= "/blog">Blog</a>
        </li>
        <li className="md:hover:underline">
          <a href="/photos">Photos</a>
        </li>
        <li classNae="md:hover:underline">
          <a href="/contactUs">Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}