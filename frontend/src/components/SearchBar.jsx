import  { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const {
    search,
    setSearch,
    showSearch,
    setShowSearch,
   products    
  } = useContext(ShopContext);
  


  return (
    showSearch && (
      <div className="border-t border-b bg-gray-50 text-center ">
        <div className="inline-flex  items-center justify-center border border-gray-400 px-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2  ">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" text-[15px] sm:text-xl flex-1 outline-none bg-inherit "
            type="text"
            placeholder="Search"
          />
          
          <img className="w-0 sm:w-4" src={assets.search_icon} alt="" />
        </div>
        {
    products.filter((item) => {
      if(search === "") {
        return item;
      }else if(item.name.toLowerCase().includes(search.toLowerCase())){
        return item;
      }
    })
    .map((item) => {
      return(
        <Link className={` ${search === "" ? "hidden" : "text-gray-700 cursor-pointer "}  `}  to={`/product/${item._id}`} onClick={() => search("")} >

        <div className="overflow-hidden w-screen h-full border-b mb-2 flex items-center gap-2">
          <img
            className="w-16 h-16 hover:scale-110 transition ease-in-out "
            src={item.image[0]}
            alt=""
          />
        <p className="pt-3 pb-1 text-sm">{item.name}</p>

        </div>
      </Link>
      )
      
    })
  }
        <img
          onClick={() => setShowSearch(false)}
          className="inline w-3 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />

      </div>
    )
  );
};

export default SearchBar;
