import * as React from 'react'
import { Helmet } from "react-helmet"

import Layout from '../components/layout'
import Wrapper from "../components/cover"

import {
  About,
  Title,
} from "/home/gustavo/Blog/gcsilva/src/styles/styles"

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vinicius Costa</title>
        <link rel="canonical" href="https://vcsilva.com/" />
      </Helmet>
      <Wrapper>
        <Title>Hi, I'm Vinicius</Title>
        <About>
          I'm a software developer based in Brasilia, Brasil. I am an eletrical engenring studant
          and check my thoughts here at this blog.
        </About>
      </Wrapper>

    </Layout>
  )
}