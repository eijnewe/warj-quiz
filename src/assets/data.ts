export type Personality = {
  id: string;
  name: string;
  description: string;
  img: string;
};

export const personalities: Personality[] = [
  {
    id: "wolf1",
    name: "Bus-vargen",
    description:
      "Du är en busig individ som älskar att vara social och att underhålla dina vänner. Ditt motto är att livet ska vara skoj, och om det inte är det så får man se till att göra det skoj! ",
    img: "https://i.pinimg.com/1200x/e0/eb/96/e0eb9615cb9f869d6859d210dba1b17e.jpg",
  },
  {
    id: "wolf2",
    name: "Arg-vargen",
    description:
      "Du är en passionerad person som inte är rädd att säga vad du tycker. Vissa kanske tycker att du börjar veva utan anledning, men du vet att det är viktigt att stå upp för det som är rätt. Men visst, ibland kan du nog lugna ner dig lite.",
    img: "https://media.istockphoto.com/id/144219422/photo/wolf-who-is-very-serious.jpg?s=612x612&w=0&k=20&c=RJ2PVUJz36pAeGeev6r5vUq71v-hNZYulU4EBD6Xatk=",
  },
  {
    id: "wolf3",
    name: "Stil-vargen",
    description:
      "Du är ett modeorakel som alltid är klädd för att imponera. I varje rum är du den stiligaste vargen folk skådat. Dyker det upp problem? Det löser du med din otroliga charm och ditt skarpa öga för detaljer",
    img: "https://thumbs.dreamstime.com/b/fashionable-wolf-posing-sunglasses-stylish-wolf-confidently-poses-sleek-black-sunglasses-amidst-snowy-backdrop-339438577.jpg",
  },
  {
    id: "wolf4",
    name: "Tröttis-vargen",
    description:
      "Zzzz zz zzzZzzzZ...! Vadå varg? Du är trött och alltid redo för en tupplur.",
    img: "https://media.sciencephoto.com/image/c0154994/800wm/C0154994-Gray_wolf_sleeping.jpg",
  },
  {
    id: "wolf5",
    name: "Stora stygga vargen", // blandning av bus + arg
    description:
      "Du är en kraftfull person som inte räds att stå upp för dig själv och andra. Din energi och beslutsamhet gör att du ofta tar ledarrollen. Du trivs med att styra och ställa.",
    img: "https://m.media-amazon.com/images/M/MV5BYmE5MjY4OGEtYmVlOS00YTU5LThkNTMtMzRlMGI4MzlmZWFiXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: "wolf6",
    name: "Clown-vargen", // blandning av bus + stil
    description:
      "Du har både stil och ett gott sinne för humor. Du älskar att få folk att skratta samtidigt som du ser fantastisk ut.",
    img: "https://img.itch.zone/aW1nLzIwNTY3NzQ5LmpwZw==/original/97UYf3.jpg",
  },
  {
    id: "wolf7",
    name: "Troll-vargen", // blandning av bus + tröttis
    description:
      "Du är en lurig jävel som alltid har en räv bakom örat och gillar att provocera. Helst gör du det bekvämt tillbakalutad, med en god dryck och noll stress.",
    img: "https://pbs.twimg.com/media/DgFTf49XUAEmJAB.jpg",
  },
  {
    id: "wolf8",
    name: "Emo-vargen", // blandning av arg + stil
    description:
      "Du är en djup och känslosam individ som ofta reflekterar över livets stora frågor. Din stil speglar din inre värld, och du uttrycker dig gärna genom konst, musik eller poesi.",
    img: "https://media.tenor.com/Oz9_quTF7AAAAAAe/emo-werewolf.png",
  },
  {
    id: "wolf9",
    name: "Gubb-vargen", // blandning av arg + tröttis
    description:
      "Kanske har du surnat till med åren, eller så är du född tjurig. Oavsett vilket så är du en gubbstrutt som älskar att beklaga dig över både det ena och det andra, men det är okej för du är ju ändå ganska söt.",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/292b1350-0273-4658-8d34-3ef4a3039094/d6cp1a1-f29a6db3-f327-4cd4-83c1-761e0a8426e2.jpg/v1/fill/w_1024,h_686,q_75,strp/old_wolf_by_yuukix9_d6cp1a1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8yOTJiMTM1MC0wMjczLTQ2NTgtOGQzNC0zZWY0YTMwMzkwOTQvZDZjcDFhMS1mMjlhNmRiMy1mMzI3LTRjZDQtODNjMS03NjFlMGE4NDI2ZTIuanBnIiwiaGVpZ2h0IjoiPD02ODYiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiIvd20vMjkyYjEzNTAtMDI3My00NjU4LThkMzQtM2VmNGEzMDM5MDk0L3l1dWtpeDktNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.cLduzMY0e5nFrbhjvuICh7Q8j4ZQdkQqyBny5eoHSOA",
  },
  {
    id: "wolf10",
    name: "Pyjamas-vargen", // blandning av stil + tröttis
    description:
      "B1 och B2 kan slänga sig i väggen, här har vi en stilikon som vet hur man bär upp en outfit med både komfort och elegans.",
    img: "https://i.pinimg.com/474x/ac/52/f8/ac52f8482d51f257bf595ff14d147d8a.jpg",
  },
];

export type Question = {
  question: string;
  a1: string;
  a2: string;
  a3: string;
  a4: string;
};

export const questions: Question[] = [
  {
    question: "Du är på en fest där du inte känner någon, vad gör du?",
    a1: "Försöker hälsa på alla och skaffa nya vänner.", // bus
    a2: "Går ut på balkongen och stirrar längtande på månen.", // arg
    a3: "Kollar in snacksutbudet och minglar elegant.", // stil
    a4: "Går hem.", // tröttis
  },
  {
    question: "En kompis har kärleksproblem och ber om råd, hur svarar du?",
    a1: "Ringer en annan kompis som alltid har de bästa råden - ju fler desto bättre!", // bus
    a2: "Säger åt kompisen att göra slut. Allt det där låter för krångligt.", // arg
    a3: "Ger dem en kopp té och lyssnar på deras hela livshistoria.", // stil
    a4: '"Fråga någon annan, jag vet väl inte."', // tröttis
  },
  {
    question: "Hur ser din perfekta helg ut?",
    a1: "Ringer en vän för att hitta på något spontant.", // bus
    a2: "Kör minst ett hårt träningspass.", // arg
    a3: "Hittar en anledning att klä upp mig.", // stil
    a4: "Sova ut och sen potentiellt sova lite till.", // trött
  },
  {
    question: "Vad är viktigast för dig i vardagen?",
    a1: "Att ha roligt.", // bus
    a2: "Att saker går rätt till.", // arg
    a3: "Att få va kreativ.", // stil
    a4: "Att det finns tid för vila och återhämtning.", // trött
  },
  {
    question: "Du ska iväg någonstans. Hur förbereder du dig?",
    a1: "Packar i sista minuten, det löser sig längs vägen.", // bus
    a2: "Blir frustrerad över att det är svårt att få tag på den digitala biljetten.", // arg
    a3: "Planerar noga och packar i god tid.", // stil
    a4: "Överväger att stanna hemma istället.", // trött
  },
];

export function getPersonalityById(id: string): Personality | undefined {
  return personalities.find((p) => p.id === id);
}

export const memoryIcons: string[] = [
  "src/assets/wolf-icon (1).png",
  "src/assets/wolf-icon (2).png",
  "src/assets/wolf-icon (3).png",
  "src/assets/wolf-icon (4).png",
  "src/assets/wolf-icon (5).png",
  "src/assets/wolf-icon (6).png",
  "src/assets/wolf-icon (7).png",
  "src/assets/wolf-icon (8).png",
  "src/assets/wolf-icon (9).png",
];

export type MemoryIconsProps = {
  id: number;
  name: string;
  img: string;
  matched: boolean;
};

export const MemoryIcons1: MemoryIconsProps[] = [
  {
    id: 1,
    name: "1",
    img: "src/assets/wolf-icon (1).png",
    matched: false,
  },
  {
    id: 2,
    name: "2",
    img: "src/assets/wolf-icon (2).png",
    matched: false,
  },
  {
    id: 3,
    name: "3",
    img: "src/assets/wolf-icon (3).png",
    matched: false,
  },
  {
    id: 4,
    name: "4",
    img: "src/assets/wolf-icon (4).png",
    matched: false,
  },
  {
    id: 5,
    name: "5",
    img: "src/assets/wolf-icon (5).png",
    matched: false,
  },
  {
    id: 6,
    name: "6",
    img: "src/assets/wolf-icon (6).png",
    matched: false,
  },
  {
    id: 7,
    name: "7",
    img: "src/assets/wolf-icon (7).png",
    matched: false,
  },
  {
    id: 8,
    name: "8",
    img: "src/assets/wolf-icon (8).png",
    matched: false,
  },
];
