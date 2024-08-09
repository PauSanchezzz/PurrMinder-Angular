export interface GetCatsResponse {
  cats: Cat[];
}

export interface Cat {
  id: number;
  nameCat: string;
  imageCat: String;
  descriptionCat: string;
  ageCat: number;
  calendar_id: number;
  weightCat: string;
  sexCat_id: number;
  specialCondition: boolean;
  specialCondition_id: number;
  catHealth_id: number;
  personality_id: number;
  availabilityCat: boolean;
}
