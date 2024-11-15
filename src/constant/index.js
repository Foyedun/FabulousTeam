import children from "../assets/children.jpg"
import drinking from "../assets/drinking.jpeg";
import health from "../assets/healthissue.jpg";
import school1 from "../assets/school1.jpg";


export const navItems = [
  {
    id: 1,
    label: 'Home',
    url: '/',
    style: 'hover:text-lightGreen mx-4', // Added mx-4 for consistent spacing
  },
  {
    id: 2,
    label: 'Our Mission',
    url: '/mission',
    style: 'hover:text-lightGreen mx-4', // Added mx-4 for consistent spacing
  },
  {
    id: 5,
    label: 'About Us',
    url: '/about-us',
    style: 'hover:text-lightGreen mx-4', // Added mx-4 for consistent spacing
  },
];


export const sectors = [
  {
    heading: "Education Sector",
    note: "Help us provide quality education to children who need it the most. Your support will build schools, provide resources, and train teachers.",
    img: school1,
    path: "/education-donation",
  },
  {
    heading: "Medical Sector",
    note: "Provide medical care and life-saving treatments for underserved communities. Every donation can bring healing to those in pain.",
    img: health,
    path: "/medical-donation",
  },
  {
    heading: "Helping Kids Sector",
    note: "Ensure that every child has access to nutritious meals, clothing, and a safe environment to grow and thrive. Let’s give them a brighter future.",
    img: children,
    path: "/kids-donation",
  },
  {
    heading: "Well-being Sector",
    note: "Access to clean water is a basic human right. With your help, we can bring clean and safe drinking water to entire communities.",
    img: drinking,
    path: "/wellbeing-donation",
  },
];
