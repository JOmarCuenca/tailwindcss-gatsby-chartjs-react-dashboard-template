import { Link } from "gatsby";
import React, { FC } from "react";

import { BsPlus, BsGearFill } from 'react-icons/bs';
import { FaChartLine, FaHome, FaMoneyBillWaveAlt } from 'react-icons/fa';

const PanelSideBar: FC = () => {

    return <div className="fixed w-16 bg-gray-700 left-0 top-0 h-screen">
        <SideBarIcon text="Home" icon={<FaHome size="28" />} />
        <Divider />
        <SideBarIcon text="Add" redirect="/add" icon={<BsPlus size="32" />} />
        <SideBarIcon text="Accounting" redirect="/money" icon={<FaMoneyBillWaveAlt size="20" />} />
        <SideBarIcon text="Graphs" redirect="/graphs" icon={<FaChartLine size="20" />} />
        <Divider />
        <SideBarIcon text="Settings" redirect="/settings" icon={<BsGearFill size="22" />} />
    </div>;

}

interface IconProps {
    icon: any,
    redirect?: string,
    text?: string
}

const SideBarIcon: FC<IconProps> = (p) => {

    return <Link to={p.redirect ?? "/"} className="icon-inactive" activeClassName="icon-active">
        <div className="sidebar-icon group">
            {p.icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {p.text ?? "tooltip"}
            </span>
        </div>
    </Link>;
};

const Divider: FC = () => <hr className="sidebar-hr" />;

export default PanelSideBar;