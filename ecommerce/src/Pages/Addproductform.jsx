import { Button , Input , Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddProductform = () => {
  const notify = () => 
  toast.success('👍 product add successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });


  const url = 'https://api.cloudinary.com/v1_1/dfedh5ypm/image/upload';
  const preset = "imgstore";

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  // const [colour, setColour] = useState("");
  // const [qty, setQty] = useState("");
  // const [subcategory, setSubcategory] = useState("");

  const onChange = (e) => {
    if (e.target.name === "image") {
      setImage(e.target.files[0]);
    } else if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
    }  else if (e.target.name === "category") {
      setCategory(e.target.value);
    } 
  };

//   const [selectedSubcategory, setSelectedSubcategory] = useState("");
//   const subcategoryOptions = [ "jackets", "sweater" , "sweatshirt" ]; // Add more subcategories as needed

//   const onSubcategoryChange = (e) => {
//     setSelectedSubcategory(e.target.value);
//   };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("upload_preset", preset);
    formdata.append('clud_name', 'dfedh5ypm');
    try {
      const res = await axios.post(url, formdata);
      const imageUrl = res.data.secure_url;
      const postUrl = "http://localhost:5000/api/item/create";
      notify();
      const alldata = await axios.post(postUrl, {
        title,
        imageUrl,
        description,
        price,
        category,
        // subcategory,
        // qty,
        // colour,
      });
      console.log(alldata)
      setCategory("");
      setPrice("");
      setDescription("");
      setImage("");
      setTitle("");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="mt-10 w-3/4 mx-auto py-6 rounded-xl">
      <form className="max-w-md mx-auto">
        <div className="font-bold text-3xl text-center my-5 underline underline-offset-4 text-gray-800">
          <p>ADD NEW PRODUCTS</p>
        </div>
        <div className="relative z-0 w-full mb-5 mt-4 group">
          <Input
            label="Title"
            type="text"
            name="title"
            value={title}
            onChange={onChange}
          />
        </div>
        <div className="relative z-0 w-full mb-5 mt-4 group">
          <Textarea
            label="Description"
            name="description"
            onChange={onChange}
            value={description}
          />
        </div>

        <div className="relative z-0 w-full mb-5 mt-4 group">
          <Input
            label="Price"
            type="number"
            name="price"
            value={price}
            onChange={onChange}
          />
        </div>
        <div>
        <div className="relative z-0 w-full mb-5 mt-4 group">
            <Input
              label="Category"
              type="text"
              name="category"
              onChange={onChange}
              value={category}
            />
          </div>
        </div>
        <div className="mb-5 mt-4 border border-gray-400 rounded-lg py-3 px-3">
          <label
            className="block mb-2 text-sm font-medium text-blue-gray-600 dark:text-white"
            htmlFor="user_avatar"
          >
            Upload file
          </label>
          <div>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 active:border-blue-600"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
              name="image"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white"
            type="submit"
            onClick={onSubmit}
     
          >
            Add Product
          </Button>
          <Link className="mx-3" to="/checkout">
            <Button className=" bg-white text-green-700 border border-green-700 hover:bg-green-700 hover:text-white">
              View All Product
            </Button>
          </Link>
        </div>
      </form>

        <ToastContainer />
    </div>

  );
};

export default AddProductform;