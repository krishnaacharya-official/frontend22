import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import ForgotPasswordController from '../Controller/frontEnd/ForgotPasswordController';
import SigninController from '../Controller/frontEnd/SigninController';
import SignupController from '../Controller/frontEnd/SignupController';
// import HomePage from '../View/frontEnd/Layout/Home/HomePage';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';

// import Router from '../routes';
import { BaseOptionChartStyle } from '../components/charts/BaseOptionChart';
import ScrollToTop from '../components/ScrollToTop';
import HomeController from '../Controller/frontEnd/HomeController';
import ItemDetailsController from '../Controller/frontEnd/ItemDetailsController';
import OrganizationDetailsController from '../Controller/frontEnd/OrganizationDetailsController';
import ProjectDetailsController from '../Controller/frontEnd/ProjectDetailsController';
import ThemeConfig from '../theme';
import GlobalStyles from '../theme/globalStyles';
import AdminPrivateRoutes from './AdminPrivateRoutes';
import FrontEndLayOut from './FrontEndLayOut';
// import OrganizationAdminController from '../Controller/frontEnd/OrganizationAdminController';
import AboutController from '../Controller/frontEnd/AboutController';
import ApplyOrganizationController from '../Controller/frontEnd/ApplyOrganizationController';
import CartController from '../Controller/frontEnd/CartController';
import CategoryProductsController from '../Controller/frontEnd/CategoryProductsController';
import CheckoutController from '../Controller/frontEnd/CheckoutController';
import PlansController from '../Controller/frontEnd/PlansController';
import ResetPasswordController from '../Controller/frontEnd/ResetPasswordController';
import AdminDetail from '../View/frontEnd/admin-detail';
import ChangePassword from '../View/frontEnd/change-password';
import AdminActivity from '../View/frontEnd/Component/organisms/admin-activity';
import AdminAdmin from '../View/frontEnd/Component/organisms/admin-admin';
import AdminBilling from '../View/frontEnd/Component/organisms/admin-billing';
import AdminControl from '../View/frontEnd/Component/organisms/admin-control';
import AdminDashboard from '../View/frontEnd/Component/organisms/admin-dashboard';
import AdminPosts from '../View/frontEnd/Component/organisms/admin-posts';
import AdminProjects from '../View/frontEnd/Component/organisms/admin-projects';
import AdminSettingsTab from '../View/frontEnd/Component/organisms/admin-settings-tab';
import AdminTax from '../View/frontEnd/Component/organisms/admin-tax';
import CompanySettings from '../View/frontEnd/Component/organisms/company-settings';
import LeaderBoard from '../View/frontEnd/Component/organisms/leaderboard';
import PaymentMethod from '../View/frontEnd/Component/organisms/payment-method';
import UserAccounts from '../View/frontEnd/Component/organisms/user-accounts';
import UserAdmin from '../View/frontEnd/Component/organisms/user-admin';
import UserBilling from '../View/frontEnd/Component/organisms/user-billing';
import UserControl from '../View/frontEnd/Component/organisms/user-control';
import UserDashboard from '../View/frontEnd/Component/organisms/user-dashboard';
import UserHistory from '../View/frontEnd/Component/organisms/user-history';
import UserItems from '../View/frontEnd/Component/organisms/user-items';
import UserProfile from '../View/frontEnd/Component/organisms/user-profile';
import UserSettingsTab from '../View/frontEnd/Component/organisms/user-settings-tab';
import UserTax from '../View/frontEnd/Component/organisms/user-tax';
import UserXp from '../View/frontEnd/Component/organisms/user-xp';
import DonationConfirmPage from '../View/frontEnd/DonationConfirmPage';
import Help from '../View/frontEnd/help';
import HelpArticle from '../View/frontEnd/help-article';
import HelpCategory from '../View/frontEnd/help-category';
import HelpContact from '../View/frontEnd/help-contact';
import ItemTags from '../View/frontEnd/item-tags';
import Media from '../View/frontEnd/media';
import OrderConfirmPage from '../View/frontEnd/order-confirmation';
import Partnership from '../View/frontEnd/partnership';
import Pricing from '../View/frontEnd/pricing';
import Ranks from '../View/frontEnd/ranks';
import Sponsors from '../View/frontEnd/sponsors';
import Terms from '../View/frontEnd/terms';
import ThankYou from '../View/frontEnd/ThankYou';
import Trust from '../View/frontEnd/trust';
import UserDetail from '../View/frontEnd/user-detail';
import VerifiedDonors from '../View/frontEnd/verified-donors';
import Xp from '../View/frontEnd/xp';

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0)
  }
}));

export default function MainRoutes() {
  const [login, setLogin] = useState(false);
  const adminAuthToken = typeof window !== 'undefined' && localStorage.getItem('adminAuthToken');
  const CampaignAdminAuthToken =
    typeof window !== 'undefined' && localStorage.getItem('CampaignAdminAuthToken');
  const userAuthToken = typeof window !== 'undefined' && localStorage.getItem('userAuthToken');
  const tempCampaignAdminAuthToken =
    typeof window !== 'undefined' && localStorage.getItem('tempCampaignAdminAuthToken');

  const token = tempCampaignAdminAuthToken ? tempCampaignAdminAuthToken : CampaignAdminAuthToken;

  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div id="full-content">
      {token && location.pathname.startsWith('/campaign') && (
        <Routes>
          <Route path="/" element={<AdminDetail />}>
            <Route path="/campaign/:name/dashboard" element={<AdminDashboard />} />
            <Route path="/campaign/:name" element={<AdminDashboard />} />
            <Route path="/campaign/:name/posts" element={<AdminPosts />} />
            <Route path="/campaign/:name/activity" element={<AdminActivity />} />
            <Route path="/campaign/:name/tax" element={<AdminTax />} />
            <Route path="/campaign/:name/project" element={<AdminProjects />} />
            <Route path="/campaign/:name/settings" element={<AdminSettingsTab />}>
              <Route path="/campaign/:name/settings/company" element={<CompanySettings />} />
              <Route path="/campaign/:name/settings/paymentMethod" element={<PaymentMethod />} />
              <Route
                path="/campaign/:name/settings/paymentMethod/:accountId"
                element={<PaymentMethod />}
              />
              <Route path="/campaign/:name/settings/administrators" element={<AdminAdmin />} />
              <Route path="/campaign/:name/settings/billing" element={<AdminBilling />} />
              <Route path="/campaign/:name/settings/controls" element={<AdminControl />} />
            </Route>
            <Route path="*" element={<AdminDashboard />} />
          </Route>
        </Routes>
      )}
      {CampaignAdminAuthToken && !location.pathname.startsWith('/campaign') && (
        <Routes>
          <Route path="/" element={<FrontEndLayOut />}>
            <Route path="/" element={<HomeController />} />
            <Route path="/categories/:slug" element={<CategoryProductsController />} />
            <Route path="/xp" element={<Xp />} />
            <Route exact path="/change-password" element={<ChangePassword />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/pricing" element={<Pricing />} />

            <Route path="/help" element={<Help />} />
            <Route path="/trust" element={<Trust />} />
            <Route path="/plans" element={<PlansController />} />
            <Route path="/help-category" element={<HelpCategory />} />
            <Route path="/help-article" element={<HelpArticle />} />
            <Route path="/help-contact" element={<HelpContact />} />
            <Route path="/item-tags" element={<ItemTags />} />
            <Route path="/media" element={<Media />} />
            <Route path="/ranks" element={<Ranks />} />
            <Route path="/about-us" element={<AboutController />} />
            <Route exact path="/organization/:name" element={<OrganizationDetailsController />} />
            <Route path="/terms" element={<Terms />} />

            {/* <Route exact path="/change-password" element={<ChangePassword />} /> */}
            <Route exact path="/item/:name" element={<ItemDetailsController />} />
            <Route exact path="/project/:name" element={<ProjectDetailsController />} />
            {/* <Route path="/cart" element={<CartController />} />
                        <Route path="/checkout" element={<CheckoutController />} />
                        <Route path="/thankyou" element={<ThankYou />} /> */}
            <Route path="*" element={<HomeController />} />
          </Route>
        </Routes>
      )}

      {location.pathname.startsWith('/admin')
        ? !adminAuthToken &&
          !userAuthToken &&
          !CampaignAdminAuthToken && (
            <ThemeConfig>
              <ScrollToTop />
              <GlobalStyles />
              <BaseOptionChartStyle />
              <LogoOnlyLayout />
            </ThemeConfig>
          )
        : !location.pathname.startsWith('/admin') &&
          !location.pathname.startsWith('/campaign') &&
          !adminAuthToken &&
          !userAuthToken &&
          !CampaignAdminAuthToken && (
            <>
              <Routes>
                <Route path="/" element={<HomeController />} />
                <Route path="/categories/:slug" element={<CategoryProductsController />} />
                <Route
                  exact
                  path="/organization/:name"
                  element={<OrganizationDetailsController />}
                />
                <Route exact path="/item/:name" element={<ItemDetailsController />} />
                <Route exact path="/project/:name" element={<ProjectDetailsController />} />
                <Route exact path="/signin" element={<SigninController />} />
                <Route exact path="/signup" element={<SignupController />} />
                <Route exact path="/forgot-password" element={<ForgotPasswordController />} />
                <Route exact path="/otp/:email" element={<ResetPasswordController />} />
                <Route exact path="/apply" element={<ApplyOrganizationController />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/partnership" element={<Partnership />} />
                <Route path="/about-us" element={<AboutController />} />
                <Route path="/verified" element={<VerifiedDonors />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/media" element={<Media />} />
                <Route path="/ranks" element={<Ranks />} />
                <Route path="/trust" element={<Trust />} />
                <Route path="/xp" element={<Xp />} />
                <Route path="/help" element={<Help />} />
                <Route path="/help-category" element={<HelpCategory />} />
                <Route path="/help-article" element={<HelpArticle />} />
                <Route path="/help-contact" element={<HelpContact />} />
                <Route path="/verified" element={<VerifiedDonors />} />
                <Route path="/item-tags" element={<ItemTags />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route exact path="*" element={<SigninController />} />
              </Routes>
            </>
          )}

      {
        adminAuthToken ? (
          <ThemeConfig>
            <ScrollToTop />
            <GlobalStyles />
            <BaseOptionChartStyle />
            <AdminPrivateRoutes />
          </ThemeConfig>
        ) : (
          <></>
        )

        // adminAuthToken && !location.pathname.startsWith('/admin') &&

        // <Routes>
        //     <Route exact path="/" element={<SigninController />} />
        //     <Route exact path="/signin" element={<SigninController />} />
        //     <Route exact path="*" element={<SigninController />} />
        //     <Route exact path="/signup" element={<SignupController />} />
        //     <Route exact path="/forgot-password" element={<ForgotPasswordController />} />
        //     <Route exact path="/otp/:email" element={<ResetPasswordController />} />
        //     <Route exact path="/apply" element={<ApplyOrganizationController />} />
        //     <Route path="/sponsors" element={<Sponsors />} />
        //     <Route path="/partnership" element={<Partnership />} />
        //     <Route path="/about-us" element={<AboutController />} />
        //     <Route path="/verified" element={<VerifiedDonors />} />
        //     <Route path="/terms" element={<Terms />} />
        //     <Route path="/media" element={<Media />} />
        //     <Route path="/ranks" element={<Ranks />} />
        //     <Route path="/trust" element={<Trust />} />
        //     <Route path="/xp" element={<Xp />} />
        //     <Route path="/help" element={<Help />} />
        //     <Route path="/help-category" element={<HelpCategory />} />
        //     <Route path="/help-article" element={<HelpArticle />} />
        //     <Route path="/help-contact" element={<HelpContact />} />
        //     <Route path="/verified" element={<VerifiedDonors />} />
        //     <Route path="/item-tags" element={<ItemTags />} />
        //     <Route exact path="*" element={<SigninController />} />
        // </Routes>
      }

      {userAuthToken &&
        !location.pathname.startsWith('/admin') &&
        !location.pathname.startsWith('/campaign') && (
          <Routes>
            <Route path="/" element={<FrontEndLayOut />}>
              <Route path="/" element={<HomeController />} />
              <Route path="/categories/:slug" element={<CategoryProductsController />} />
              <Route exact path="/apply" element={<ApplyOrganizationController />} />
              <Route path="/about-us" element={<AboutController />} />
              <Route path="/xp" element={<Xp />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/help" element={<Help />} />
              <Route path="/trust" element={<Trust />} />
              <Route path="/help-category" element={<HelpCategory />} />
              <Route path="/help-article" element={<HelpArticle />} />
              <Route path="/help-contact" element={<HelpContact />} />
              <Route path="/item-tags" element={<ItemTags />} />
              <Route path="/media" element={<Media />} />
              <Route path="/ranks" element={<Ranks />} />
              <Route exact path="/organization/:name" element={<OrganizationDetailsController />} />
              <Route exact path="/change-password" element={<ChangePassword />} />
              <Route exact path="/item/:name" element={<ItemDetailsController />} />
              <Route exact path="/project/:name" element={<ProjectDetailsController />} />
              <Route path="/cart" element={<CartController />} />
              <Route path="/checkout" element={<CheckoutController />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="/order/:id" element={<OrderConfirmPage />} />
              <Route path="/donate/:id" element={<DonationConfirmPage />} />
              <Route path="/verified" element={<VerifiedDonors />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="user" element={<UserDetail />}>
                <Route path="/user/:name/dashboard" element={<UserDashboard />} />
                <Route path="/user/:name/items" element={<UserItems />} />
                <Route path="/user/:name/xp" element={<UserXp />} />
                <Route path="/user/:name/tax" element={<UserTax />} />
                <Route path="/user/:name/history" element={<UserHistory />} />
                <Route path="/user/:name/settings" element={<UserSettingsTab />}>
                  <Route path="/user/:name/settings/profile" element={<UserProfile />} />
                  <Route path="/user/:name/settings/accounts" element={<UserAccounts />} />
                  <Route path="/user/:name/settings/billing" element={<UserBilling />} />
                  <Route path="/user/:name/settings/controls" element={<UserControl />} />
                  <Route path="/user/:name/settings/administrator" element={<UserAdmin />} />
                </Route>
              </Route>
              <Route path="*" element={<HomeController />} />
            </Route>
          </Routes>
        )}
    </div>
  );
}
