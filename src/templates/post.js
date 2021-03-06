import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Auther from '../components/Auther'
import Layout from '../components/Layout'

const Wrapper = styled.div`
  padding: 12px;
  margin-top: 12px;
`

const Title = styled.h1`
  font-size: 24px;
  line-height: 1.4;
  font-family: -apple-system, 'BlinkMacSystemFont', 'Helvetica Neue', 'Hiragino Sans',
    '游ゴシック Medium', 'YuGothic', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo,sans-serif';

  @media (min-width: 600px) {
    font-size: 30px;
  }
`

const Content = styled.div`
  margin-top: 24px;
  .hidden {
    display: none;
  }

  img {
    max-width: 100%;
  }
`

const Category = styled.div`
  font-family: lato, sans-serif;
  margin-bottom: 4px;
  opacity: 0.5;
  font-size: 14px;
`

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.esaPost

    return (
      <Layout>
        <Wrapper>
          <Helmet title={`${post.name}`} />
          <Category>{post.category}</Category>
          <Title style={{ margin: 0 }}>{post.name}</Title>
          <Auther post={post} />
          <Content dangerouslySetInnerHTML={{ __html: post.body_html }} />
          <hr />
        </Wrapper>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($number: Int!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    esaPost(number: { eq: $number }) {
      number
      category
      name
      wip
      body_html
      updated_at
      updated_by {
        name
        screen_name
        icon
      }
    }
  }
`
