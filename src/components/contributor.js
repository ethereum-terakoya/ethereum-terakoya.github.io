import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useIntl } from "react-intl";
import Img from "gatsby-image";
import HrComponent from "./hrComponent";
import { StaticQuery, graphql} from "gatsby";

const contributorImages = graphql`
  query {
    fujitsu: file(relativePath: { eq: "contributor/fujitsu.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    contributorSample1: file(relativePath: { eq: "contributor/contributor-sample1.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    contributorSample2: file(relativePath: { eq: "contributor/contributor-sample2.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    contributorSample3: file(relativePath: { eq: "contributor/contributor-sample3.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Contributor = (props) => {
    const intl = useIntl();
    return (
        <Container className="py-5 mb-5">
            <Row>
                <Col >
                    <h4 className="text-center mb-4">{intl.formatMessage({ id: "contributor" })}</h4>

                    <HrComponent />
                </Col>
            </Row>
            <Row className="justify-content-start">
                <StaticQuery
                    query={contributorImages}
                    render={ data => {
                        const list = [];
                        const contributors = [
                            {name: "sample1", fixed: data.contributorSample1.childImageSharp.fixed},
                            {name: "fujitsu", fixed: data.fujitsu.childImageSharp.fixed},
                            {name: "sample2", fixed: data.contributorSample2.childImageSharp.fixed},
                            {name: "sample3", fixed: data.contributorSample3.childImageSharp.fixed},
                        ]
                        contributors.forEach((c, i) => {
                            list.push(<Col className="text-center py-2" key={i} sm={3}>
                                <Img fixed={c.fixed}/>
                                <div>{intl.formatMessage({ id: `contributor.${c.name}` })}</div>
                            </Col>);
                        })
                        return list
                    }}
                />
            </Row>
        </Container>
    )
}

export default Contributor
