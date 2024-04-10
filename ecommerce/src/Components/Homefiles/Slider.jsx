import { Carousel } from "@material-tailwind/react";



export function Slider() {
  return (
    <Carousel loop={true} autoplay={true} interval={500}  className="rounded-xl">
      <img
        src="/Images/Slider Images/Slider Image 1.webp"
        alt="image 1"
        className="w-full object-cover object-center h-[28rem]"
      />
      <img
        src="/Images/Slider Images/Slider Image 2.webp"
        alt="image 2"
        className="h-[28rem] w-full object-cover object-center"
      />
      <img
        src="/Images/Slider Images/Slider Image 3.webp"
        alt="image 3"
        className="h-[28rem] w-full object-cover object-center"
      />
       <img
        src="/Images/Slider Images/slider Image 4.webp"
        alt="image 3"
        className="h-[28rem] w-full object-cover object-center"
      />
       <img
        src="/Images/Slider Images/Wedding and Formal Card Image.webp"
        alt="image 3"
        className="h-[28rem] w-full object-cover object-center"
      />
    </Carousel>
  );
}


export default Slider;