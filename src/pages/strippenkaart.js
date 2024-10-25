import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Strippenkaart = ({ data }) => (
  <Layout>
    <Head pageTitle={data.strippenkaartJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.strippenkaartJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Strippenkaart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Strippenkaart;

export const query = graphql`
  query ServicesQuery {
    strippenkaartJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
