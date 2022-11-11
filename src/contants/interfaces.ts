import { USER_ROLES } from './';

export type TUserRoles = typeof USER_ROLES[keyof typeof USER_ROLES];

export type TSidebarOption = {
  id: number;
  label: string;
  route: string;
  icon: string;
  roles: TUserRoles[];
};

export type TUser = {
  id: number;
  name: string;
  role: TUserRoles;
  company?: string;
  profilePic?: string;
};

export type TNavbarUserData = Pick<TUser, 'name' | 'profilePic'> & {
  role?: TUserRoles;
};

export type TCompany = {
  _id?: string;
  id: string;
  name: string;
  slogan: string;
  description: string;
  location: string;
  employees: TUser[];
  logo: string;
  // pages: IPage[];
  // plan?: IPlan;
};

export interface shopping {
  nameProduct: string;
  price: string;
  idProduct: number;
  amount: number;
  imageRute: string;
  date: string;
}

export interface dataSelect {
  value: string;
  option: string;
}

export type THttpResponse<T> = {
  msg: string;
  data: T;
};

export type TPlans = {
  id:number, 
  name: string, 
  slogan: string, 
  icon: string, 
  type: string, 
  price: number, 
  include: TPlansInclude[]
}

export type TPlansInclude = {
  icon:string,
  description:string
}

export interface viewImageCompanies {
  id:string;
  name: string;
  logo: string;
}
