export interface IUserRegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface IUserLoginPayload {
  email: string;
  password: string;
}

// export interface IUserFinalRegisterPayload {
//   username: string;
//   email: string;
//   password: string;
//   approved: boolean;
//   admin: string;
// }

export interface IAPIAuthSuccessResponse {
  id: string;
  token: string;
}
