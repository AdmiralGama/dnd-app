import { Character } from "./character";

export interface Account {
    id: number;
    username: string;
    password: string;
    characters: Character[];
}
