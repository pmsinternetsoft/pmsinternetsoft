import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";
import NFTlayout from "src/layouts/NFTlayout";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home")),
  },
  {
    exact: true,
    path: "/userProfile",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/UserProfile/UserProfile")),
  },
  {
    exact: true,
    path: "/marketplace",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Marketplace/index")),
  },
  {
    exact: true,
    path: "/nft-marketplace",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/NftMarketplace/index")),
  },
  {
    exact: true,
    path: "/admin-marketplace",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/AdminMarketplace/index")),
  },
  {
    exact: true,
    path: "/horse-profile",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/HorseProfile/Profile")),
  },
  {
    exact: true,
    path: "/my-account",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/MyAccount/index")),
  },
  {
    exact: true,
    path: "/collection-details",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/CollectionDetails/index")),
  },
  {
    exact: true,
    path: "/faveorites",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Faveorites/index")),
  },
  {
    exact: true,
    path: "/about",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticContent/About")),
  },
  {
    exact: true,
    path: "/privacy",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/StaticContent/PrivacyPolicy")
    ),
  },
  {
    exact: true,
    path: "/login",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Login/index")),
  },
  {
    exact: true,
    path: "/term-conditions",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/StaticContent/TermsConditions")
    ),
  },
  {
    exact: true,
    path: "/contact-us",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticContent/ContactUs")),
  },
  {
    exact: true,
    path: "/faq",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticContent/Faq")),
  },

  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
