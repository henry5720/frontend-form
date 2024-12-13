import { Gender } from "./Gender";

export interface Profile {
  firstName: string;
  lastName: string;
  gender: Gender;
  birth: Date | null;
}