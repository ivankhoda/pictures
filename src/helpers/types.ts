import { CharacterLocation, ResourceBase } from "rickmortyapi/dist/interfaces";

export interface Character extends ResourceBase {
  id: number;
  liked: boolean;
  status: "Dead" | "Alive" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}
