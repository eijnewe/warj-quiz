import { personalities } from "@/assets/data"

export const GetRandomImage = () => {

 const randomIndex: number = Math.floor(Math.random() * personalities.length);
 return (
    <img src={personalities[randomIndex].img} alt="Wolf" className="rounded-xl w-70 drop-shadow-xl transition hover:scale-105 border-2 rounded-lg" />
 )
}
