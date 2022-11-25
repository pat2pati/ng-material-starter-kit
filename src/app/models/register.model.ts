export interface RegisterModel {
  name: {
    readonly lastname: string;
    readonly firstname:string;
       };
  readonly email: string;
  readonly username: string;
  readonly password: string;
  address: {
    readonly city: string;
    readonly zipcode: string;
    readonly number: number;
    readonly street: string;
  };
  readonly phone: number;
};
