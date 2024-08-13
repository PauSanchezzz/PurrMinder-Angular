export interface Auth {
  email: string;
  password: string;
}

export interface getAuthResponse {
  access_token: string;
  expires_in: number;
  status: number;
}
