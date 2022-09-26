import {
  faMicrochip,
  faHouseChimney,
  faCircleInfo,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";

const Sidebardata = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icons: faHouseChimney,
  },
  {
    title: "Activity",
    path: "/dashboard/activity",
    icons: faClock,
  },
  {
    title: "Calender",
    path: "/dashboard/calender",
    icons: faCalendar,
  },
  {
    title: "Prediction",
    path: "/dashboard/prediction",
    icons: faMicrochip,
    span: "Beta",
  },
  {
    title: "Support",
    path: "/dashboard/support",
    icons: faCircleInfo,
  },
  {
    title: "Setting",
    path: "/dashboard/setting",
    icons: faGears,
  },
];

export default Sidebardata;
