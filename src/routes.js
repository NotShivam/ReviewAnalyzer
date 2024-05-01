import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

import Promo from "views/admin/promotion/Promotion";
import List from "views/admin/promotion/List";
import DeployCoupon from "views/admin/promotion/DeployCoupon";
import DynamicCoupon from "views/admin/promotion/DynamicCoupon";
import CouponDetails from "views/admin/promotion/CouponDetails";
import CustomerSpecific from "views/admin/promotion/customerSpecific";
import Giftcard from "views/admin/promotion/Giftcard";
import Register from "views/admin/promotion/Register";
import Newsletter from "views/admin/promotion/Newsletter";
import CompanyDetails from "views/admin/promotion/CompanyDetails";
import Documentation from "views/admin/promotion/Documentation";
import Segrigation from "views/admin/promotion/Segrigation";

import OtherSMA from "views/admin/promotion/OtherSMA";
import YoutubeSummary from "views/admin/promotion/YoutubeSummary";
import { FiYoutube } from "react-icons/fi";
import { FaRedditAlien } from "react-icons/fa";
import { IoLogoReddit } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoIosPricetags } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdAnnouncement,
  MdCardGiftcard,
  MdLoyalty,
  MdMarkunreadMailbox,
  MdFireplace,
  MdList,
  MdSupervisedUserCircle,
  MdStackedBarChart,
  MdOutlineFilePresent,
} from "react-icons/md";

import { TiSocialYoutube } from "react-icons/ti";
import { IoNewspaperOutline } from "react-icons/io5";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Recent News",
    layout: "/admin",
    path: "recomendation",
    icon: <IoNewspaperOutline className="h-6 w-6" />,
    component: <List />,
  },
  {
    name: "YouTube Extraction",
    layout: "/admin",
    path: "youtube-ngram",
    icon: <TiSocialYoutube className="h-6 w-6" />,
    component: <OtherSMA />,
  },
  {
    name: "YouTube Retreval",
    layout: "/admin",
    path: "youtube-summary",
    icon: <FiYoutube className="h-6 w-6" />,
    component: <YoutubeSummary />,
  },
  {
    name: "Reddit Extraction",
    layout: "/admin",
    path: "reddit-ngram",
    icon: <FaRedditAlien className="h-6 w-6" />,
    component: <OtherSMA />,
  },
  {
    name: "Reddit Retreval",
    layout: "/admin",
    path: "reddit-summary",
    icon: <IoLogoReddit className="h-6 w-6" />,
    component: <YoutubeSummary />,
  },
  // {
  //   name: "Deploy Coupon",
  //   layout: "/admin",
  //   path: "deployCoupon",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <DeployCoupon />,
  // },
  {
    name: "ABSA",
    layout: "/admin",
    path: "aspect-based-sentiment-analysis",
    icon: <FaMobileAlt className="h-6 w-6" />,
    component: <Segrigation />,
  },
  {
    name: "Newsletter",
    layout: "/admin",
    path: "newsletter",
    icon: <MdMarkunreadMailbox className="h-6 w-6" />,
    component: <Newsletter />,
  },
  {
    name: "Company Data",
    layout: "/admin",
    path: "companyData",
    icon: <MdSupervisedUserCircle className="h-6 w-6" />,
    component: <CompanyDetails />,
  },
  {
    name: "Documentation",
    layout: "/admin",
    path: "docs",
    icon: <MdOutlineFilePresent className="h-6 w-6" />,
    component: <Documentation />,
  }
];
export default routes;
