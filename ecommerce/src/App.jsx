
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar2 from './Components/Appjs-files/Navbar2'
import AdminBanner from './Components/Appjs-files/adminbanner'
import Nav from './Components/Appjs-files/Nav'
import Navbar from './Components/Appjs-files/Navbar'
import Footer from './Components/Appjs-files/Footer'
import Home from './Components/Homefiles/Home'
import Filters from './Components/Homefiles/Filters'
import FiltersCard from './Components/Homefiles/FiltersCard'
import Slider from './Components/Homefiles/Slider'
import Category from './Components/Homefiles/Category'
import Men from './Components/Menfolder/Men'
import Menkurta from './Components/Menfolder/Menkurta'
import Menfragrance from './Components/Menfolder/Menfragrance'
import Detailpage from './Components/All-detailpage/Mendetailpage/Detailpage'
import Fragnances from './Components/Fragnances'
import Sale from './Components/Sale'
import Catalogue from './Components/Catalogue'
import CastnCrew from './Components/CastnCrew'
import NewArival from './Components/NewArival'
import OnlineEdition from './Components/OnlineEdition'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import AddProductform from './Pages/Addproductform'
import Localstoragedata from './Pages/Localstoragedata'
import Checkout from './Pages/Checkout'
import KameezShalwar from './Components/Menfolder/KameezShalwar'
import ApiMensfilter from './Components/Database-files/ApiMensfilter'
import WaisCot from './Components/Menfolder/Waiscot'
import Women from './Components/Womenfolder/Women'
import Unstiched from './Components/Womenfolder/Unstiched'
import Stiched from './Components/Womenfolder/Stiched'
import Kurti from './Components/Womenfolder/Kurti'
import Footwear from './Components/Womenfolder/Footwear'
import BoysGirls from './Components/BoysGirls/BoysGirls'
import Teenboys from './Components/BoysGirls/Teenboys'
import Teengirls from './Components/BoysGirls/Teengirls'
import Kidsgirls from './Components/BoysGirls/Kidsgirls'
import Kidsboys from './Components/BoysGirls/Kidsboys'
import Detailpage2 from './Components/All-detailpage/Mendetailpage/Detailpage2'
import Detailpage3 from './Components/All-detailpage/Mendetailpage/Detailpage3'
import Detailpage4 from './Components/All-detailpage/Mendetailpage/Detailpage4'
import Detailkurti from './Components/All-detailpage/Women/Detailkurti'
import Detailstiched from './Components/All-detailpage/Women/Detailstiched'
import Detailunstiched from './Components/All-detailpage/Women/Detailunstiched'
import Detailfoot from './Components/All-detailpage/Women/Detailfoot'
import Detailboys from './Components/All-detailpage/Boysgirlsdetail/Detailboys'
import Detailgirls from './Components/All-detailpage/Boysgirlsdetail/Detailgirls'
import { useState } from 'react'
import Protected from './Pages/Protected'
import Onlinedetail from './Components/All-detailpage/Otherdetailpages/Onlinedetail'
import Homedetail from './Components/All-detailpage/Otherdetailpages/Homedetail'
import Shopcart2 from './Pages/Shopcart2'







function App() {
          const [isloged , setIsloged] = useState(false);
   return (
      <>
        <AdminBanner/>
         <div className='m-3 rounded-2xl'>
            <Navbar setIsloged={setIsloged}/>
            <Nav />
            <Navbar2 />
         </div>
         <Routes>
         <Route element={<Protected isloged={isloged}/>}>
   {/* home page Components start */}
   <Route path='/' element={<Home/>}></Route>
           <Route path='/slider' element={<Slider/>}></Route>
            <Route path='/filters' element={<Filters/>}></Route>
            <Route path='/filters/:id' element={<Homedetail/>}></Route>
            <Route path='/filtercard' element={<FiltersCard/>}></Route>
            <Route path='/category' element={<Category/>}></Route>
        {/* home page Components end */}
            <Route path='/online' element={<OnlineEdition/>}></Route>
            <Route path='/online/:id' element={<Onlinedetail/>}></Route>
            <Route path='/newarival' element={<NewArival/>}></Route>
    
    {/* women portion start */}
            <Route path='/women' element={<Women/>}></Route>
            <Route path='/unstiched' element={<Unstiched/>}></Route>
            <Route path='/unstiched/:id' element={<Detailunstiched/>}></Route>
            <Route path='/stiched' element={<Stiched/>}></Route>
            <Route path='/stiched/:id' element={<Detailstiched/>}></Route>            
            <Route path='/kurti' element={<Kurti/>}></Route>
            <Route path='/kurti/:id' element={<Detailkurti/>}></Route>
            <Route path='/footwear' element={<Footwear/>}></Route>
            <Route path='/footwear/:id' element={<Detailfoot/>}></Route>            
    {/* women portion start */}


      {/* men portion start */}
            <Route path='/men' element={<Men/>}></Route>
            <Route path='/menkurta' element={<Menkurta/>}></Route>
            <Route path='/menkurta/:id' element={<Detailpage/>}></Route>
            <Route path='/manfragrance' element={<Menfragrance/>}></Route>
            <Route path='/manfragrance/:id' element={<Detailpage4/>}></Route>
            <Route path='/kameez' element={<KameezShalwar/>}></Route>
            <Route path='/kameez/:id' element={<Detailpage2/>}></Route>
            <Route path='/waiscot' element={<WaisCot/>}></Route>
            <Route path='/waiscot/:id' element={<Detailpage3/>}></Route>



      {/* men portion end */}

      {/* boygirls portion end */}
            <Route path='/boygirls' element={<BoysGirls/>}></Route>
            <Route path='/teenboys' element={<Teenboys/>}></Route>
            <Route path='/teengirls' element={<Teengirls/>}></Route>
            <Route path='/kidsboys' element={<Kidsboys/>}></Route>
            <Route path='/kidsboys/:id' element={<Detailboys/>}></Route>
            <Route path='/kidsgirls' element={<Kidsgirls/>}></Route>
            <Route path='/kidsgirls/:id' element={<Detailgirls/>}></Route>
       {/* boysgirl portion end */}

    
            
            <Route path='/cart' element={<Shopcart2/>}></Route>
            <Route path='/fragrances' element={<Fragnances/>}></Route>
            <Route path='/sale' element={<Sale/>}></Route>
            <Route path='/catalogue' element={<Catalogue/>}></Route>
            <Route path='/cast' element={<CastnCrew/>}></Route>
         </Route>
         {/* database link Components portion start */}
         <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/login' element={<Login setIsloged={setIsloged}/>}></Route>
            <Route path='/addproductform' element={<AddProductform/>}></Route>
            <Route path='/localdata' element={<Localstoragedata/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/apimenfilter' element={<ApiMensfilter/>}></Route>
   
            {/* database link Components portion end */}
         </Routes>
     
         <Footer/>
            </>
   )
}

export default App
