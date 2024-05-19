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
