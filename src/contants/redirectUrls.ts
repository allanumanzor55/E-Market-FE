import { TUserRoles, ROUTES } from '.';

export const getUrlByRole: Record<TUserRoles, string> = {
  admin: `/${ROUTES.ADMIN.ROOT}`,
  customer: `/${ROUTES.CUSTOMER.ROOT}`,
  company: `/${ROUTES.COMPANY_ADMIN.ROOT}`,
};
