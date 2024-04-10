import { Link } from "react-router-dom";



function Category() {
    return (
        <div>
        <p className="text-center text-2xl font-extrabold mt-14 border-black ">Choose By Category</p>
            <div className="container mx-auto flex justify-around  mt-12">
                <div>
                  <Link to="/women">
                  <img
                        className="h-72 w-72 rounded-full object-cover object-center"
                        src="/Images/Home Page Images/Kurti Home Image.webp"
                        alt="nature image"
                    />
                  </Link>
                    <p className="text-center text-xl font-extrabold">Women's</p>
                </div>
                <div>
                <Link to="men">
                <img
                        className="h-72 w-72 rounded-full object-cover object-center"
                        src="/Images/Home Page Images/Kurta Mens Home Image.webp"
                        alt="nature image"
                    />
                </Link>
                    <p className="text-center text-xl font-extrabold">Men's</p>
                </div>
                <div>
                  <Link to="kidsgirls">
                  <img
                        className="h-72 w-72 rounded-full object-cover object-center"
                        src="/Images/Boys & Girls Home/kids girls new.webp"
                        alt="nature image"
                    />
                  </Link>
                    <p className="text-center text-xl font-extrabold">Girls</p>
                </div>
                <div>
              <Link to="/kidsboys">
              <img
                        className="h-[18rem] w-[19rem] rounded-full object-cover object-center"
                        src="/Images/Boys & Girls Home/kids boys new.webp"
                        alt="nature image"
                    />
              </Link>
                    <p className="text-center text-xl font-extrabold">Boys</p>
                </div>
            </div>
        </div>
    );
}

export default Category