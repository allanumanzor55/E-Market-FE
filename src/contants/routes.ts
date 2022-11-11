const ROUTES = {
  HOME: '',
  LOGIN: 'login',
  RECOVER_PASSWORD: 'recover_password/:mode',
  PLAN_SELECTION: 'plan-selection',
  REGISTER: 'register',
  ADMIN: {
    ROOT: 'admin',
    USERS: 'users',
    CREATE_USER: 'create-user',
    PLANS: 'plans',
    TEMPLATE: 'template',
    COMPANIES:'companies'
  },
  CUSTOMER: {
    ROOT: 'customer',
    SHOPPING: 'shopping-cart',
    HISTORY: 'shopping-history',
  },
  COMPANY_ADMIN: {
    ROOT: 'admin-companies',
    PAGES:'pages',
    PRODUCTS:'products',
    GALERY:'galery',
    USERS: 'users',
    CREATE_USER: 'create-user',
    CONFIG:'config'
  },
} as const;

export default ROUTES;
