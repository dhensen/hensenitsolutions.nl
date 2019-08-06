import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const CodereviewGuidelines = ({ data }) => (
  <Layout>
    <Head pageTitle={data.codereviewGuidelinesJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html:
            data.codereviewGuidelinesJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

CodereviewGuidelines.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CodereviewGuidelines;

export const query = graphql`
  query CodereviewGuidelinesQuery {
    codereviewGuidelinesJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
