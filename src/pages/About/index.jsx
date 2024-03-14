import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-4xl font-bold leading-none text-gray-800 sm:text-5xl">
          About BurgerApp
        </h1>
        <img src="https://pics.craiyon.com/2023-05-30/af89e757b5b44b9e9888858b98817801.webp" alt="BurgerApp logo" className="w-32 h-32 mx-auto mt-8 mb-12 bg-white rounded-full shadow-lg" />
        <p className="text-gray-700 text-base md:text-lg">
          Welcome to BurgerApp - a delightful and user-friendly platform that empowers you to craft your own customized burgers with an array of delectable toppings. Our mission is to bring joy and simplicity to your burger-building experience, whether you're a seasoned aficionado or just craving a delicious meal.
        </p>
        <div className="mt-10">
          <Link to={"/"} className="bg-green-500 text-white px-4 py-2 text-lg font-bold rounded-lg">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};