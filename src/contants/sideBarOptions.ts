import { ROUTES, USER_ROLES, TSidebarOption } from './';

const SIDEBAR_OPTIONS: TSidebarOption[] = [
  {
    id: 1,
    label: 'Usuarios',
    route: ROUTES.ADMIN.USERS,
    icon: 'group',
    roles: [USER_ROLES.ADMIN],
  },
  {
    id: 2,
    label: 'Planes',
    route: ROUTES.ADMIN.PLANS,
    icon: 'list',
    roles: [USER_ROLES.ADMIN],
  },
  {
    id: 3,
    label: 'Crear y editar plantillas',
    route: ROUTES.ADMIN.TEMPLATE,
    icon: 'feed',
    roles: [USER_ROLES.ADMIN],
  },
  {
    id: 4,
    label: 'Carrito de Compras',
    route: ROUTES.CUSTOMER.SHOPPING,
    icon: 'shopping_cart',
    roles: [USER_ROLES.CUSTOMER],
  },
  {
    id: 5,
    label: 'Historial de compras',
    route: ROUTES.CUSTOMER.HISTORY,
    icon: 'history',
    roles: [USER_ROLES.CUSTOMER],
  },
  {
    id: 6,
    label: 'Creación y edición de paginas',
    route: ROUTES.COMPANY_ADMIN.PAGES,
    icon: 'note_add',
    roles: [USER_ROLES.COMPANY],
  },
  {
    id: 7,
    label: 'Edición Categorías/Productos',
    route: ROUTES.COMPANY_ADMIN.PRODUCTS,
    icon: 'shopping_bag',
    roles: [USER_ROLES.COMPANY],
  },
  {
    id: 8,
    label: 'Galería',
    route: ROUTES.COMPANY_ADMIN.GALERY,
    icon: 'archive',
    roles: [USER_ROLES.COMPANY],
  },
  {
    id: 9,
    label: 'Usuarios',
    route: ROUTES.COMPANY_ADMIN.USERS,
    icon: 'group',
    roles: [USER_ROLES.COMPANY],
  },
  {
    id: 10,
    label: 'Configuración General',
    route: ROUTES.COMPANY_ADMIN.CONFIG,
    icon: 'settings',
    roles: [USER_ROLES.COMPANY],
  },
  {
    id: 11,
    label: 'Empresas',
    route: ROUTES.ADMIN.COMPANIES,
    icon: 'business',
    roles: [USER_ROLES.ADMIN],
  },
];

export default SIDEBAR_OPTIONS;
