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

export interface FormData {
    name: string,
    guests: string,
    date: string,
    time: string,
    occasion: string,
    email: string
}

export interface BookingFormProps {
  availableTimes: string[];
  setSelectedDate: (date: string) => void;
  updateTimes: (arg0: string, arg1: string) => void;
  submitForm: (formData: FormData) => void
}

export interface BookingState {
  [date: string]: string[];
}
