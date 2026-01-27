import { personalities } from "@/assets/data"

export const GetRandomImage = () => {

 const randomIndex: number = Math.floor(Math.random() * personalities.length);
 return (
    <img src={personalities[randomIndex].img} alt="Wolf" className="object-cover aspect-square"/>
 )
}
