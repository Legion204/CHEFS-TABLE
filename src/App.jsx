import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cooking from "./components/Cooking-container/Cooking-container";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipes,setNewRecipes]=useState([]);

  const handelWantToCook = ({ recipe }) => {
    const isExist = recipes.find((item) => item.recipe_id == recipe.recipe_id);

    if (!isExist) {
      const newRecipe = [...recipes, recipe];
      setRecipes(newRecipe);
      toast.success('Recipe successfully added')
    } else {
      toast.warn("You already added this recipe");
    }
  };

  const handelCurrentlyCooking = (recipe) => {
    const cooking = recipes.filter((item) => item.recipe_id != recipe.recipe_id);
    setRecipes(cooking);

    const cooking2 = recipes.filter((item) => item.recipe_id === recipe.recipe_id);
     setNewRecipes((prevRecipes) => prevRecipes.concat(cooking2));


  };
  

  return (
    <div className="container mx-auto">
      <Header></Header>
      <Banner></Banner>
      <div className="text-center mt-24 m-2">
        <h1 className="font-semibold text-5xl">Our Recipes</h1>
        <p className="text-[#150B2B99] mt-6">
        Step into the world of culinary delights with our handpicked recipes. From classic comforts to bold innovations, each dish promises to tantalize your taste buds. With easy-to-follow instructions and pro tips, you all effortlessly whip up gourmet meals. Whether it is a weekday dinner or a weekend indulgence, our diverse range ensures there is something for everyone. Get ready to dive in, explore, and elevate your cooking game with our flavorful creations!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-12">
        <Recipes handelWantToCook={handelWantToCook}></Recipes>
        <Cooking
          recipes={recipes}
          handelCurrentlyCooking={handelCurrentlyCooking}
          newRecipes={newRecipes}
        ></Cooking>
        <ToastContainer></ToastContainer>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
