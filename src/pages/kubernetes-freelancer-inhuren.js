import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const KubernetesFreelancerInhuren = ({ data }) => (
  <Layout>
    <Head pageTitle={data.kubernetesFreelancerInhurenJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.kubernetesFreelancerInhurenJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

KubernetesFreelancerInhuren.propTypes = {
  data: PropTypes.object.isRequired,
};

export default KubernetesFreelancerInhuren;

export const query = graphql`
  query KubernetesFreelancerInhurenQuery {
    kubernetesFreelancerInhurenJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
