import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useIntl } from "react-intl";
import Img from "gatsby-image";
import HrComponent from "./hrComponent";
import { StaticQuery, graphql} from "gatsby";

const contributorImages = graphql`
  query {
    hitachi: file(relativePath: { eq: "contributor/hitachi.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fujitsu: file(relativePath: { eq: "contributor/fujitsu.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    act: file(relativePath: { eq: "contributor/act.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    collabo_gate: file(relativePath: { eq: "contributor/collabo_gate.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    comps: file(relativePath: { eq: "contributor/comps.jpg" }) {
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
                            {name: "hitachi", fixed: data.hitachi.childImageSharp.fixed},
                            {name: "fujitsu", fixed: data.fujitsu.childImageSharp.fixed},
                            {name: "act", fixed: data.act.childImageSharp.fixed},
                            {name: "collabo_gate", fixed: data.collabo_gate.childImageSharp.fixed},
                            {name: "comps", fixed: data.comps.childImageSharp.fixed},
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
