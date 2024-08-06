export interface GetCatsResponse {
  cats: Cat[];
}

export interface Cat {
  id: number;
  nameCat: string;
  imageCat: string;
  descriptionCat: string;
  ageCat: number;
  weightCat: string;
  sexCat: number;
  availabilityCat: boolean;
}
