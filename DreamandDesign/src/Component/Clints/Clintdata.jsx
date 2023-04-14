import Pavifruits from "../../assets/Pavif.png"
import ckr from "../../assets/ckr.png"
import Heera from "../../assets/Heera.png"
import Vcinque from "../../assets/Vcinque.png"
import F4 from "../../assets/F4.png"
import sup from "../../assets/sup.png"
import ph from "../../assets/ph.png"

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const productData = [
    {
      id: 1,
      imageurl: Pavifruits,
      name: "Pavifruits",

    },
    {
      id: 2,
      imageurl:ckr,
      name: "Ckr",

    },
    {
      id: 3,
      imageurl: Heera,
      name: "Heera",

    },
    {
      id: 4,
      imageurl:Vcinque,
      name: "Vcinque",

    },
    {
      id: 5,
      imageurl:F4,
      name: "f4",

    },
    {
      id: 6,
      imageurl:sup,
      name: "sup",

    },
    {
      id: 7,
      imageurl:ph,
      name: "ph",
 
    },
    
  ];