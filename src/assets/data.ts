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
    name: "Mys-vargen",
    description:
      "Du är en gosig typ som gillar att stanna hemma bland kuddar, filtar och tända ljus. Du längtar efter helgen då du kan bygga en koja i soffan som du inte behöver lämna på flera dagar.",
    img: "https://thumbs.dreamstime.com/b/european-grey-wolf-pups-cuddling-together-canis-lupus-euroasian-dozing-100937401.jpg",
  },
  {
    id: "wolf3",
    name: "Tröttis-vargen",
    description: "Zzzz zz zzzZzzzZ...!",
    img: "https://th-thumbnailer.cdn-si-edu.com/hqYVjjL9xGmOd_dO2bWOY57kbDw=/fit-in/1200x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ab/e3/abe3aed8-d1d0-468c-b8d6-ed209300a19b/42-55072244edit.jpg",
  },
  {
    id: "wolf4",
    name: "Mums-vargen",
    description: "",
    img: "https://static.wikia.nocookie.net/sciffy/images/9/98/JacobWestbrook.png/revision/latest/scale-to-width-down/1000?cb=20200928085204",
  },
  {
    id: "wolf5",
    name: "Arg-vargen",
    description: "",
    img: "https://i.pinimg.com/736x/0f/ef/e3/0fefe398baca31cf3328660ead931eee.jpg",
  },
  {
    id: "wolf6",
    name: "Lill-vargen",
    description: "",
    img: "https://static.scientificamerican.com/sciam/cache/file/27787B0F-5C69-4A29-97FC89BA646FDB6B_source.jpg?w=600",
  },
  {
    id: "wolf7",
    name: "∩ddoɔɥuǝɹ-ʌɐɹƃǝu",
    description: "",
    img: "https://i.pinimg.com/originals/52/b0/0b/52b00bf5d3b22f1d9d92e3d2a40578ff.jpg",
  },
  {
    id: "wolf8",
    name: "Stil-vargen",
    description: "",
    img: "https://thumbs.dreamstime.com/b/fashionable-wolf-posing-sunglasses-stylish-wolf-confidently-poses-sleek-black-sunglasses-amidst-snowy-backdrop-339438577.jpg",
  },
];

type Question = {
  question: string,
  A: string,
  B: string,
  C: string,
  D: string
}

export const questions: Question[] = [
  {
    question: "Du är på en fest där du inte känner någon, vad gör du?",
    A: "Går hem.",
    B: "Försöker hälsa på alla och skaffa nya vänner.",
    C: "Kollar in snacksutbudet.",
    D: "Går ut på balkongen och stirrar längtande på månen."
  },
  {
    question: "En kompis har kärleksproblem och ber om råd, hur svarar du?",
    A: '"Fråga någon annan, jag vet väl inte."',
    B: "Ger dem en kopp té och lyssnar på deras hela livshistoria.",
    C: "Ringer en annan kompis som alltid har de bästa råden- ju fler desto bättre!",
    D: "Säger åt kompisen att göra slut. Allt det där låter för krångligt."
  }

]

export function getPersonalityById(id: string): Personality | undefined {
  return personalities.find(p => p.id === id);
}