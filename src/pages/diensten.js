import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
// wtf
const Diensten = ({ data }) => (
  <Layout>
    <Head pageTitle={data.dienstenJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.dienstenJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Diensten.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Diensten;

export const query = graphql`
  query ServicesQuery {
    dienstenJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
