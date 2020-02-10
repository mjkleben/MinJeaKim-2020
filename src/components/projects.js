import React, { Component } from 'react'
import '../../public/assets/css/projects.scss'
// import ProfilePic from '../../public/assets/img/profile.png'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Projects = () => {
    return (
        <div className="projects-container">
            <div className="projects">
                <h3>PROJECTS</h3>
                <StaticQuery
                    query={graphql`
                    {
                        allMarkdownRemark {
                        edges {
                            node {
                            frontmatter {
                                path
                                title
                                platform
                                imagepath
                            }
                            excerpt
                            }
                        }
                        }
                    }
                    `}
                    render=    
                    
                    {data => data.allMarkdownRemark.edges.map(post => (
                        <div key={post.node.id}>
                            <div className="project-card">
                                <div className="project-image">
                                    <img src={post.node.frontmatter.imagepath}/>
                                </div>
                                <p>{post.node.frontmatter.title}</p>
                                <p>{post.node.frontmatter.platform}</p>
                                <div className="view-case"><p>CASE STUDY</p></div>
                            </div>
                        </div>
                      ))}
                ></StaticQuery>
                
            </div>
            
        </div>
    )
}

export default Projects
