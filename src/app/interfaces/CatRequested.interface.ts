export interface GetCatRequestedResponse {
  cats: CatRequested[];
}

export interface CatRequested {
  application_id: number;
  nameCat: string;
  imageCat: string;
}

export interface GetQuestionsAndAnswerResonse {
  questions_and_answers: QuestionsAndAnswer[];
}

export interface QuestionsAndAnswer {
  question: string;
  answer: string;
  application_id: number;
}

export interface getUserByApplicationResponse {
  user: UserByApplication;
}

export interface UserByApplication {
  name: string;
  lastName: string;
  telephoneNumber: number;
  occupation: string;
}
