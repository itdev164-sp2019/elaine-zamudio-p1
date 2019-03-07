import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button, IconButton, Section } from '../components/Element'
import { Search } from 'styled-icons/feather'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Project 1</h1>
    <p>Elaine Zamudio</p>
    <p>ITDEV 164: Web Programming II</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Section flex justifyContent="space-evenly" m={2}>
    <Link to="/page-2/">See what this link does</Link>
    <Button variant="primary">MyCustomButton!</Button>
    <IconButton icon={<Search />} />
    </Section>
  </Layout>
)

export default IndexPage
