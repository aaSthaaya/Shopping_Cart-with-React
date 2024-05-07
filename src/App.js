import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useEffect, useState } from 'react';

function App() {

  //to set data from LS

  // const getLocalItems = ()=>{
  //   let list = localStorage.getItem('lists');
  //   console.log(list);

  //   if(list){
  //     return JSON.parse(localStorage.getItem('lists'));
  //   }else{
  //     return [];
  //   }
  // }

  const [product, setProduct] = useState([
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Black Watch',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Kathmandu Laptops',
      price: 50000
    },
    {
      url: 'https://image.made-in-china.com/2f0j00EBRQnTjcgMoV/CCTV-Camera-HKD-80830-.jpg',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 400
    },
    {
      url: 'https://th.bing.com/th/id/OIP.FgVVtmaBFqlUOo7wsa5NowHaHa?rs=1&pid=ImgDetMain',
      name: 'The Dinosaur',
      category: 'Toy',
      seller: 'Toystory Ltd',
      price: 800
    },
    {
      url: 'https://th.bing.com/th/id/R.420aca68cf2f535dd6177ebeb495cbb3?rik=iJt1afz399tzUQ&riu=http%3a%2f%2fwww.abcdoes.com%2fwp-content%2fuploads%2f2016%2f09%2fBuzz_toy_story_3.png&ehk=Zv1ILSrcsIg827C7tyUPCBK4AG9a4%2bwdGNv8bFe87Sk%3d&risl=&pid=ImgRaw&r=0',
      name: 'Buzz The Light',
      category: 'Toy',
      seller: 'Toystory Ltd',
      price: 1100
    },
    {
      url: 'https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/disney-toy-story-woody-cardboard-stand-up~13577449',
      name: 'Woody',
      category: 'Toy',
      seller: 'Toystory Ltd',
      price: 1400
    },
    {
      url: 'https://th.bing.com/th/id/OIP.KEXl4vScnMXwsVHyDePZmwHaHa?rs=1&pid=ImgDetMain',

      name: 'Guru',
      category: 'Toy',
      seller: 'Illumination Ltd',
      price: 2200
    },
    {
      url: 'https://th.bing.com/th/id/OIP.Hwc4qMapdG7OJh0lq-xlegHaJQ?rs=1&pid=ImgDetMain',
      name: 'Little Girl Dress',
      category: 'Girls Clothing',
      seller: 'Zara Ltd',
      price: 4100
    },
    {
      url: 'https://th.bing.com/th/id/OIP.t333Y9NdH08OckGwA1unIwHaJB?rs=1&pid=ImgDetMain',
      name: 'Walkie Talkie',
      category: 'Handphone',
      seller: 'Nepal Telecome Ltd',
      price: 2100
    },
    {
      url: 'https://th.bing.com/th/id/OIP.V5Ciye5IYKwSbTtKZjElLwHaF7?rs=1&pid=ImgDetMain',
      name: 'Woolen cap, mufler',
      category: 'Clothing',
      seller: 'Nepal Wool Ltd',
      price: 5500
    },
    {
      url: 'https://th.bing.com/th/id/OIP.SnU5JnRwjTMRSEAJ_HgsjwHaEK?rs=1&pid=ImgDetMain',
      name: 'PS 5',
      category: 'Game',
      seller: 'SONY Ltd',
      price: 1000000
    },
    {
      url: 'https://th.bing.com/th/id/OIP.U_m3T7i1jWb4iS4QQ8t_rAHaFj?rs=1&pid=ImgDetMain',
      name: 'Drone',
      category: 'Modal Aircraft',
      seller: 'SONY Ltd',
      price: 33000
    },
  ])

  const [cart, setCart] = useState([]);
  // const [cart, setCart] = useState(getLocalItems());

  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  //add data to localStorage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(product))
  }, [product]);

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }

    </div>
  );
}

export default App;