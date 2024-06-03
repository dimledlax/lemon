import { createContext, useContext, useState } from "react";
import greekSaladImage from "../../assets/greek_salad.jpg"
import bruchettaImage from "../../assets/bruchetta.svg"
import lemonDessertImage from "../../assets/lemon_dessert.jpg"
import margheritaPizzaImage from "../../assets/Margherita-Pizza-093.jpg"
import caesarSaladImage from "../../assets/Caesar-Salad-Fifteen-Spatulas-3.jpg"
import tiramisuImage from "../../assets/Baileys-Tiramisu-A-baJillian-Recipes-24.jpg"
import { MenuContextProps, MenuItem, MenuProviderProps } from "../../models"

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [menu] = useState<MenuItem[]>([
    {
      id: 'menuItem1',
      name: 'Greeek Salad',
      image: <img src={greekSaladImage} alt="greek salad" className="menuImage"/>,
      price: '$ 12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      id: 'menuItem2',
      name: 'Bruchetta',
      image: <img src={bruchettaImage} alt="bruchetta" className="menuImage"/>,
      price: '$ 5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
      id: 'menuItem3',
      name: 'Lemon Dessert',
      image: <img src={lemonDessertImage} alt="lemon dessert" className="menuImage"/>,
      price: '$ 5.00',
      description: "This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
    {
      id: 'menuItem4',
      name: 'Margherita Pizza',
      image: <img src={margheritaPizzaImage} alt="margherita pizza" className="menuImage"/>,
      price: '$ 10.99',
      description: 'A classic Margherita pizza with a rich tomato sauce, fresh mozzarella, and a sprinkling of basil leaves, baked to perfection.',
    },
    {
      id: 'menuItem5',
      name: 'Caesar Salad',
      image: <img src={caesarSaladImage} alt="caesar salad" className="menuImage"/>,
      price: '$ 8.99',
      description: 'Crisp romaine lettuce tossed with Caesar dressing, topped with Parmesan cheese and crunchy croutons.',
    },
    {
      id: 'menuItem6',
      name: 'Tiramisu',
      image: <img src={tiramisuImage} alt="tiramisu" className="menuImage"/>,
      price: '$ 6.50',
      description: 'A delightful Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and a dusting of cocoa powder.',
    }
  ])
  return <MenuContext.Provider value = {{ menu }}>{ children }</MenuContext.Provider>
}

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}