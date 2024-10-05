import BillingIcon from '@/assets/svgs/BillingIcon.svg';
import ScheduleIcon from '@/assets/svgs/ScheduleIcon.svg';
import PeopleIcon from '@/assets/svgs/PeopleIcon.svg';
import Instructor from '@/assets/instructor.png';
import Student from '@/assets/student.png';
import newImgTwo from '@/assets/news_img_2.png';
import newImgThree from '@/assets/news_img_3.png';
import newImgFour from '@/assets/news_img_4.png';

export const formField = {
  login: [
    {
      id: 'user_name',
      htmlFor: 'user_name',
      name: 'user_name',
      type: 'text',
      placeHolder: 'Enter your user name',
      labelText: 'User name',
    },
    {
      id: 'password',
      htmlFor: 'password',
      name: 'password',
      type: 'password',
      placeHolder: 'Enter your password',
      labelText: 'Password',
    },
  ],
  signup: [
    {
      id: 'email',
      htmlFor: 'email',
      name: 'email',
      type: 'email',
      placeHolder: 'Enter your email',
      labelText: 'Email',
    },
    {
      id: 'user_name',
      htmlFor: 'user_name',
      name: 'user_name',
      type: 'text',
      placeHolder: 'Enter your user name',
      labelText: 'User name',
    },
    {
      id: 'password',
      htmlFor: 'password',
      name: 'password',
      type: 'password',
      placeHolder: 'Enter your password',
      labelText: 'Password',
    },
  ],
};

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
    id: 3,
    label: 'How It Works',
    url: '/how-it-works',
    style: 'hover:text-lightGreen mx-4', // Added mx-4 for consistent spacing
  },
  {
    id: 4,
    label: 'Blog',
    url: '/blog',
    style: 'hover:text-lightGreen mx-4', // Added mx-4 for consistent spacing
  },
  {
    id: 5,
    label: 'About Us',
    url: '/about-us',
    style: 'hover:text-lightGreen mx-4', // Added mx-4 for consistent spacing
  },
];


export const navItemLoginAndSignup = [
  {
    id: 6,
    label: 'Login',
    url: '/login',
  },
  {
    id: 7,
    label: 'Sign Up',
    url: '/register',
  },
];

export const successStory = [
  {
    id: 1,
    value: '15K+',
    label: 'People Supported',
  },
  {
    id: 2,
    value: '75%',
    label: 'Community Impact',
  },
  {
    id: 3,
    value: '35',
    label: 'Local Projects',
  },
  {
    id: 4,
    value: '26',
    label: 'Partner Organizations',
  },
  {
    id: 5,
    value: '16',
    label: 'Years of Service',
  },
];

export const cloudSolutions = [
  {
    id: 1,
    image: BillingIcon,
    heading: 'Community Funding & Resource Management',
    text: 'Manage community projects and resource allocation transparently and effectively.',
  },
  {
    id: 2,
    image: ScheduleIcon,
    heading: 'Event Planning & Participation',
    text: 'Organize events to bring communities together and track participation.',
  },
  {
    id: 3,
    image: PeopleIcon,
    heading: 'Beneficiary Tracking',
    text: 'Track support provided to individuals or families to ensure needs are met.',
  },
];

export const userType = [
  {
    id: 1,
    image: Instructor,
    type: 'FOR VOLUNTEERS',
    buttonText: 'Join Our Cause',
  },
  {
    id: 2,
    image: Student,
    type: 'FOR BENEFICIARIES',
    buttonText: 'Apply for Assistance',
  },
];

export const newsList = [
  {
    id: 1,
    img: newImgTwo,
    badge: 'Community Update',
    heading:
      'ITOKO AID Launches New Initiative for Educational Support in Rural Areas',
    excerpt:
      'We are proud to announce a new initiative aimed at providing educational resources in underserved communities...',
  },
  {
    id: 2,
    img: newImgThree,
    badge: 'News',
    heading:
      'Local Partnerships Enhance Community Development Efforts',
    excerpt:
      'Through our new partnerships, we’re reaching more people and providing better resources...',
  },
  {
    id: 3,
    img: newImgFour,
    badge: 'News',
    heading:
      'Success Stories: How ITOKO AID Has Changed Lives',
    excerpt:
      'Hear from individuals who have benefited from our programs and see how ITOKO AID is making a difference...',
  },
];
