import { Author } from "./author";
import { Series } from "./series";
import { Moment } from 'moment';
//import { Genre } from "./genre";

export interface Book {
    name: string;
    description: string;
    author: Author;
    inSeries: boolean;
    series?: Series;
    pages?: number;
    pubDate: Moment;
    owned: boolean;
    //genres: Genre[];
}