export interface getAdoptionsResponse {
  cats: Cat[];
}

export interface Cat {
  nameCat: string;
  created_at: string;
  updated_at: string;
  comments: string;
  evaluation: string;
}
