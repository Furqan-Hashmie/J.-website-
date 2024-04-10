import { Link } from "react-router-dom"


const Images = () => {
  return (
  <div className="mt-28">
  <div className="container">
  <img src="/Images/Home Page Images/fragrance img.webp" className="h-auto max-w-full rounded-2xl ml-20" alt="..." />
  </div>

  <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-3">
       <Link to="#">
       <div className="rounded-lg  overflow-hidden">
          <img alt="content" className="object-cover object-center h-[35rem] w-11/12 ml-auto rounded-2xl" src="/Images/Home Page Images/Kurti home new.webp" />
        </div>
       </Link>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
       <Link to="#">
       <div className="rounded-lg overflow-hidden">
          <img alt="content" className="object-cover object-center h-[35rem]  w-[37rem] rounded-2xl" src="/Images/Home Page Images/new waiscot img home.webp" />
        </div>
       </Link>

      </div>
    </div>
  </div>
   <div className="container">
  <img src="/Images/Slider Images/Wedding and Formal Card Image.webp" className="h-auto max-w-full rounded-2xl ml-20" alt="..." />
  </div>

</div>

  )
}

export default Images