import { Item } from "./item";

interface Section  {
    title: string;
    language: {
        en: string;
        pt: string;
    },
    items: Item[]
}

export { Section };