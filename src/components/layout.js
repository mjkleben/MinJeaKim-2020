/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import '../../public/assets/css/layout.css'
import RadialMenu from "react-radial-menu"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
      >
        <main>{children}</main>


        
        <footer>
        </footer>
        {/* <RadialMenu
                    animation={"shrinkIn"}
                    distance ={35}
                    itemsSize ={70}
                    stagger={0}
                    items={[
                        {"href":"http://www.facebook.com", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"},
                        {"href":"http://www.facebook.com", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"},
                        {"href":"http://www.facebook.com", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"},
                        {"href":"", "image":"url('')"},
                        {"href":"", "image":"url('')"},
                        {"href":"", "image":"url('')"},
                        {"href":"http://www.facebook.com", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"},
                        {"href":"http://www.facebook.com", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"}]
                    }
                    center={{"image": "url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"}}
        />   */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
