import React from "react";
import {
  FaRoad,
  FaTools,
  FaParking,
  FaArrowsAltH,
  FaCarSide,
  FaClock,
  FaUserTie,
  FaCogs,
  FaGraduationCap,
  FaCar,
  FaCalendarCheck,
  FaCheckCircle,
  FaTimesCircle,
  FaPhone,
} from "react-icons/fa";
import { FaPeopleGroup, FaLocationDot } from "react-icons/fa6";
import {
  MdTraffic,
  MdOutlineMoreTime,
  MdOutlineAttachMoney,
  MdLocationOn,
  MdLocationOff,
  MdOutlineMoneyOff,
} from "react-icons/md";
import { IoSpeedometer, IoTimerOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { TbSteeringWheelFilled, TbSteeringWheelOff } from "react-icons/tb";
import { AiFillSafetyCertificate, AiOutlineCloseSquare } from "react-icons/ai";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoMdMail, IoIosStar } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { BiSolidErrorAlt } from "react-icons/bi";
import { PiStudentFill } from "react-icons/pi";

export default function GetIcon(name: string): React.ReactNode | undefined {
  const IconMap: Record<string, React.ReactNode> = {
    FaClock: <FaClock />,
    FaCogs: <FaCogs />,
    FaParking: <FaParking />,
    FaArrowsAltH: <FaArrowsAltH />,
    FaRoad: <FaRoad />,
    FaCarSide: <FaCarSide />,
    FaGraduationCap: <FaGraduationCap />,
    FaUserTie: <FaUserTie />,
    FaTools: <FaTools />,
    FaCalendarCheck: <FaCalendarCheck />,
    FaCar: <FaCar />,
    FaPeopleGroup: <FaPeopleGroup />,
    FaCheckCircle: <FaCheckCircle />,
    FaTimesCircle: <FaTimesCircle />,
    IoSpeedometer: <IoSpeedometer />,
    IoTimerOutline: <IoTimerOutline />,
    MdTraffic: <MdTraffic />,
    MdOutlineMoreTime: <MdOutlineMoreTime />,
    MdOutlineAttachMoney: <MdOutlineAttachMoney />,
    MdOutlineMoneyOff: <MdOutlineMoneyOff />,
    MdLocationOn: <MdLocationOn />,
    MdLocationOff: <MdLocationOff />,
    TfiCup: <TfiCup />,
    TbSteeringWheelFilled: <TbSteeringWheelFilled />,
    TbSteeringWheelOff: <TbSteeringWheelOff />,
    AiFillSafetyCertificate: <AiFillSafetyCertificate />,
    AiOutlineCloseSquare: <AiOutlineCloseSquare />,
    LiaCertificateSolid: <LiaCertificateSolid />,
    FaPhone: <FaPhone />,
    FaLocationDot: <FaLocationDot />,
    IoMdMail: <IoMdMail />,
    FaTrophy: <FaTrophy />,
    BiSolidErrorAlt: <BiSolidErrorAlt />,
    PiStudentFill: <PiStudentFill />,
    IoIosStar: <IoIosStar />,
  };

  return IconMap[name];
}
