import { ReactNode } from "react";

export interface MenuCardProps {
    name: string,
    image: ReactNode,
    price: string,
    description: string
}

export interface TestimonialsCardProps {
    name: string,
    avatar: ReactNode,
    nickname: string,
    review: string
}

export interface MenuItem {
  id: string;
  name: string;
  image: JSX.Element;
  price: string;
  description: string;
}

export interface MenuContextProps {
  menu: MenuItem[];
}

export interface MenuProviderProps {
  children: ReactNode;
}

export interface BookingFormProps {
  availableTimes: string[];
  updateTimes: (arg0: string) => void
}
