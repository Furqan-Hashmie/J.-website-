

const Footer = () => {
  return (

     <div className="text-center bg-black rounded-xl m-2 shadow-gray-400 shadow-2xl">
      <div className="text-white">
   <div className="max-w-screen-xl mx-auto lg:flex lg:items-center  ml-10">
  <div className="lg:w-0 lg:flex-1">
   <div className="py-16">
   <h2 id="newsletter-headline" className="text-2xl leading-9 tracking-tight text-gray-300 font-semilbold sm:text-4xl sm:leading-10 mr-80">
    BE THE FIRST
    </h2>
    <p className="max-w-3xl mt-3 text-gray-400 mr-80">
    New arrivals. Exclusive previews. First access to <br/> sales. Sign up to stay in the know.
    </p>
   </div>
  </div>
  <div className="max-w-md mt-8 lg:mt-0 lg:ml-8 mr-[6rem]">
    <form aria-labelledby="newsletter-headline">
      <div>
        <div className="sm:flex items-center">
          <input name="EMAIL" type="email" required="required" placeholder="Enter your email" aria-label="Email address" className="w-full px-5 py-3 text-base leading-6 transition duration-150 ease-in-out border-2 rounded-md appearance-none focus:outline-none sm:max-w-xs border-gray-200 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 bg-white" />
          <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button type="submit" className="block px-5 py-3 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </form>
    <p className="mt-3 text-sm leading-5 text-gray-200">
      I will never spam or share your email under any circustance.
    </p>
  </div>
</div>
      </div>
      {/* .../ */}

<footer className="flex flex-col items-center bg-black text-center dark:bg-neutral-600 lg:text-left">
  <div className="container mx-auto ">
    <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4">
      {/*First links section*/}
      <div className="mb-6 font-bold">
        <h5 className="mb-2.5 font-bold uppercase text-white">
          Customer Services
        </h5>
        <ul className="mb-0 list-none">
          <li>
            <a href="#!" className=" text-gray-400 dark:text-neutral-200">Delivery & Orders</a>
          </li>
          <li>
            <a href="#!" className="text-gray-400 dark:text-neutral-200">   Returns & Exchanges</a>
          </li>
          <li>
            <a href="#!" className=" text-gray-400 dark:text-neutral-200">Terms & Conditions</a>
          </li>
          <li>
            <a href="#!" className=" text-gray-400 dark:text-neutral-200">Privacy Policy</a>
          </li>
        </ul>
      </div>
      {/*Second links section*/}
      <div className="mb-6 font-bold">
        <h5 className="mb-2.5 font-bold uppercase text-white">
          Company
        </h5>
        <ul className="mb-0 list-none">
          <li>
            <a href="#!" className=" text-gray-400">About Us</a>
          </li>
          <li>
            <a href="#!" className=" text-gray-400">Payment Guide</a>
          </li>
          <li>
            <a href="#!" className=" text-gray-400">Careers</a>
          </li>
          <li>
            <a href="#!" className= "text-gray-400">Store Addresses</a>
          </li>
        </ul>
      </div>
      {/*Third links section*/}
      <div className="mb-6 font-bold">
        <h5 className="mb-2.5 font-bold uppercase text-white">
          Need Help?
        </h5>
        <ul className="mb-0 list-none">
          <li>
            <a href="#!" className=" text-gray-400 dark:text-neutral-200">Contact Us:</a>
          </li>
          <li>
            <a href="#!" className=" text-gray-400 dark:text-neutral-200 ml-10">+92 21 111 112 111 </a>
          </li>
          <li>
            <a href="#!" className=" text-gray-400 dark:text-neutral-200">Our Link</a>
          </li>
          <li>
            <a href="#!" className=" text-gray-400 dark:text-neutral-200 ml-10">eshop@junaidjamshed.com</a>
          </li>
        </ul>
      </div>
      <div className="mb-6 font-bold">
        <h5 className="mb-2.5 font-bold uppercase text-white dark:text-neutral-200">
          Follow Us
        </h5>
        <ul className="mb-0 list-none">
          <li>
            <a href="#!" className=" text-gray-400 dark:text-neutral-200">Instagram</a>
          </li>
          <li>
            <a href="#!" className=" text-gray-400 dark:text-neutral-200">Facebook</a>
          </li>
          <li>
            <a href="#!" className=" text-gray-400 dark:text-neutral-200">Linked in</a>
          </li>
          <li>
            <a href="#!" className=" text-gray-400 dark:text-neutral-200">Twitter</a>
          </li>
        </ul>
      </div>
    
    </div>
  </div>

</footer>

      {/* /... */}
  <footer className="flex flex-col space-y-7 justify-center m-10 p-10">
  <nav className="flex justify-center flex-wrap gap-6 text-gray-200 font-medium">
    <a className="hover:text-gray-500" href="#">Home</a>
    <a className="hover:text-gray-500" href="#">About</a>
    <a className="hover:text-gray-500" href="#">Services</a>
    <a className="hover:text-gray-500" href="#">Media</a>
    <a className="hover:text-gray-500" href="#">Help</a>
    <a className="hover:text-gray-500" href="#">Contacts</a>
  </nav>
<div className="flex justify-around">
  <p className="text-center text-white font-medium">© 2023 Company Ltd. All rights reservered.</p>
  <div className="flex justify-center space-x-5">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    </a>
  </div>
</div>
</footer>



    </div>
    

  )
}

export default Footer