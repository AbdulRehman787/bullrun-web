import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WebIcon from '@mui/icons-material/Web';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TimelineIcon from '@mui/icons-material/Timeline';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const NavApi = [
    {
        name: "DashBorad",
        icon: <DashboardIcon />,
        link: '../Pages/Home'
    },
    {
        name: "Blog",
        icon: <WebIcon />,
        link: '../Pages/Blog'
    },
    {
        name: "Exculsive Resarch",
        icon: <MenuBookIcon />,
        link: '../Pages/ExculsiveResearch'
    },
    {
        name: "PortFolio",
        icon: <MonetizationOnOutlinedIcon />,
        link: '../Pages/PortFolio'
    },
    {
        name: "Commidity Picks",
        icon: <TimelineIcon />,
        link: '../Pages/CommdityPage'
    },
    {
        name: "AlterNative Picks",
        icon: <InsightsOutlinedIcon />,
        link: '../Pages/AlternativePick'
    },
    {
        name: "Community",
        icon: <QuestionAnswerOutlinedIcon />,
        link: '../Pages/CommdityPage'
    },
    
]


export default NavApi