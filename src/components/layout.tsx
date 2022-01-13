/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PanelSideBar from "./sidebar";

import "../styles/main.css"

const Layout = ({ children }) => {

  return (
    <>
      <PanelSideBar/>
      <div
        className="min-h-screen bg-gray-600 ml-16 p-6"
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
