import { nanoid } from "nanoid";

export class Book {
   id: string;
   title: string;
   author: string;
   publishing_company: string;
   release_year: number;
   pages: number;

   constructor() {
      this.id = nanoid();
      this.title = '';
      this.author = '';
      this.publishing_company = '';
      this.release_year = 1901;
      this.pages = 0;
   }
}