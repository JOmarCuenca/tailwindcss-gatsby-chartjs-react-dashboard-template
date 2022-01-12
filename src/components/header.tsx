import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    className="mb-6 bg-purple-700"
  >
    <div
      className="mx-auto max-w-5xl py-8"
    >
      <h1 className="m-0 text-4xl">
        <Link
          to="/"
          className="text-white"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
