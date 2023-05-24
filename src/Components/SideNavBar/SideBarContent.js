import { AiFillAlert, AiTwotoneLike } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import {
  BsFillCalendar2DateFill,
  BsGlobeCentralSouthAsia,
} from 'react-icons/bs';
import { SiBlockchaindotcom } from 'react-icons/si';
import { MdTopic, MdLocationCity } from 'react-icons/md';
import { FaMapMarkedAlt } from 'react-icons/fa';

export const SideBarContent = [
  {
    name: 'Dashboard',
    icon: <RxDashboard size={40} />,
  },
  {
    name: 'Intensity',
    icon: <AiFillAlert size={40} />,
  },
  {
    name: 'Likelihood',
    icon: <AiTwotoneLike size={40} />,
  },
  {
    name: 'Relevance',
    icon: <SiBlockchaindotcom size={40} />,
  },
  {
    name: 'Year',
    icon: <BsFillCalendar2DateFill size={40} />,
  },
  {
    name: 'Country',
    icon: <BsGlobeCentralSouthAsia size={40} />,
  },
  {
    name: 'Topics',
    icon: <MdTopic size={40} />,
  },
  {
    name: 'Region',
    icon: <FaMapMarkedAlt size={40} />,
  },
  {
    name: 'City ',
    icon: <MdLocationCity size={40} />,
  },
];
