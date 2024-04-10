import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div>
        <nav className='bg-[#FBFBFB]'>
        <Link to="/"><img src="/Images/new_logo.webp" className="h-10 item-center m-auto pt-1"></img>
</Link>
        </nav>
    </div>
  )
}

export default Nav