export interface GetDocumentTypeResponse {
  data: DocumentType[]
}

export interface DocumentType {
  idDocumentType: number
  documentType: string
}

export interface GetCityResponse {
  data: City[]
}

export interface City {
  idCity: number
  city: string
}

export interface GetOccupationResponse {
  data: Occupation[]
}

export interface Occupation {
  idOccupation: number
  occupation: string
}

export interface GetCalendarResponse {
  data: Calendar[]
}

export interface Calendar {
  idCalendar: number
  calendar: string
}

export interface GetSexResponse {
  data: Sex[]
}

export interface Sex {
  idSex: number
  sex: string
}

export interface GetPersonalityResponse {
  data: Personality[]
}

export interface Personality {
  idPersonality: number
  personality: string
}

export interface GetCatHealthResponse {
  data: CatHealth[]
}

export interface CatHealth {
  idCatHealth: number
  catHealth: string
}

export interface GetSpecialConditionResponse {
  data: SpecialCondition[]
}

export interface SpecialCondition {
  idSpecialCondition: number
  specialCondition: string
}
