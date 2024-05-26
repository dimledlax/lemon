import { createContext, useContext, useState } from "react";
import greekSaladImage from "../../assets/greek_salad.jpg"
import bruchettaImage from "../../assets/bruchetta.svg"
import lemonDessertImage from "../../assets/lemon_dessert.jpg"
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