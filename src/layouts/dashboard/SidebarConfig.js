import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import powerFill from "@iconify/icons-eva/power-fill"
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import { useLocation } from 'react-router-dom';
import categoryFill from '@iconify/icons-eva/grid-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;
// const location = useLocation();

const sidebarConfig = [
  
  {
    title: 'dashboard',
    path: '/admin/dashboard/',
    icon: getIcon(pieChart2Fill)
  },
  // {
  //   title: 'user',
  //   path: '/admin/user/',
  //   icon: getIcon(peopleFill)
  // },
  {
    title: 'campaign admin',
    path: '/admin/campaign_admin/',
    icon: getIcon('codicon:organization')
  },
  {
    title: 'category',
    path: '/admin/category/',
    icon: getIcon('carbon:category')
  },
  {
    title: 'products',
    path: '/admin/products/',
    icon: getIcon('mdi:alpha-p-circle')
  },
  // {
  //   title: 'logout',
  //   path: '',
  //   icon: getIcon(powerFill)
  // },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon(shoppingBagFill)
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon(fileTextFill)
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon(lockFill)
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon(personAddFill)
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon(alertTriangleFill)
  // }
];

export default sidebarConfig;
