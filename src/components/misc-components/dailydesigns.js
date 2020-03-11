import React, { Component } from 'react'
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import '../../../public/assets/css/dailydesign.scss'
import ModalImage from "react-modal-image";


const DailyDesigns = () => {
    return (
        <div className="misc-container">
            <div className="misc">
                <h3>DAILY DESIGNS</h3>
                <StaticQuery
                                query={graphql`

                                {
                                    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/DailyDesign/"  }}) {
                                      edges{
                                      node {
                                        frontmatter {
                                            title
                                            date
                                            imagepath
                                        }
                                      }
                                      }
                                    }
                                  }
                                `}
                                render=    
                                {data => data.allMarkdownRemark.edges.map(post => (
                                    <div className="project-item" key={post.node.id}>
                                        <div className="project-card">
                                            <div className="project-image">
                                            <ModalImage
                                            small={post.node.frontmatter.imagepath}
                                            large={post.node.frontmatter.imagepath}
                                            alt={post.node.frontmatter.title}
                                            />
                                            </div>
                                            <p>{post.node.frontmatter.title}</p>
                                            <p>{post.node.frontmatter.date}</p>
                                        </div>
                                    </div>
                                ))}
                    >
                    </StaticQuery>
            </div>
        </div>
    )
}

export default DailyDesigns
