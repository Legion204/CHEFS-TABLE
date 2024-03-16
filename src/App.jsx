import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cooking from "./components/Cooking-container/Cooking-container";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handelWantToCook = ({ recipe }) => {
    const isExist = recipes.find((item) => item.recipe_id == recipe.recipe_id);

    if (!isExist) {
      const newRecipe = [...recipes, recipe];
      setRecipes(newRecipe);
    } else {
      toast("You already added this recipe");
    }
  };

  console.log(recipes.map(recipe=>recipe.recipe_id));

  const handelCurrentlyCooking = (id) => {
    const newCooking = recipes.filter((item) => item.recipe_id != id);
    setRecipes(newCooking);
  };

  return (
    <div className="container mx-auto">
      <Header></Header>
      <Banner></Banner>
      <div className="text-center mt-24">
        <h1 className="font-semibold text-5xl">Our Recipes</h1>
        <p className="text-[#150B2B99] mt-6">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-12">
        <Recipes handelWantToCook={handelWantToCook}></Recipes>
        <Cooking
          recipes={recipes}
          handelCurrentlyCooking={handelCurrentlyCooking}
        ></Cooking>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default App;
