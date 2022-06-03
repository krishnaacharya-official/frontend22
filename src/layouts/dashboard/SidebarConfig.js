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
import React, { useEffect } from 'react';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;


 const  sidebarConfig = [

    {
      title: 'dashboard',
      path: '/admin/dashboard/',
      icon: getIcon(pieChart2Fill),
      name:'DASHBOARD'
    },
    {
      title: 'donors',
      path: '/admin/user/',
      icon: getIcon(peopleFill),
      name:'DONORS'
    },
    {
      title: 'campaign admin',
      path: '/admin/campaign_admin/',
      icon: getIcon('codicon:organization'),
      name:'CAMPAIGN_ADMIN'

    },
    {
      title: 'category',
      path: '/admin/category/',
      icon: getIcon('carbon:category'),
      name:'CAMPAIGN_ADMIN'

    },
    {
      title: 'products',
      path: '/admin/products/',
      icon: getIcon('mdi:alpha-p-circle'),
      name:'PRODUCT'

    },
    {
      title: 'projects',
      path: '/admin/projects/',
      icon: getIcon('fontisto:ampproject'),
      name:'PROJECT'

    },
    {
      title: 'orders',
      path: '/admin/orders/',
      icon: getIcon('eos-icons:products'),
      name:'ORDERS'

    },
    {
      title: 'donation',
      path: '/admin/donation/',
      icon: getIcon('iconoir:donate'),
      name:'DONATION'
    },
    {
      title: 'cms',
      path: '/admin/cms/',
      icon: getIcon('iconoir:page-flip'),
      name:'CMS'

    },
    {
      title: 'partnership',
      path: '/admin/partnership/',
      icon: getIcon('teenyicons:question-circle-solid'),
      name:'PARTNERSHIP'

    },
    {
      title: 'verified',
      path: '/admin/verified/',
      icon: getIcon('codicon:unverified'),
      name:'VERIFIED'

    },
    // {
    //   title: 'profile',
    //   path: '/admin/profile/',
    //   icon: getIcon(peopleFill),
    //   name:'PROFILE'
    // },
    {
      title: 'setting',
      path: '/admin/setting/',
      icon: getIcon('ci:settings-filled'),
      name:'SETTING'
    },


  ];





export default sidebarConfig;
