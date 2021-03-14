import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useIntl } from "react-intl";
import Img from "gatsby-image";
import HrComponent from "./hrComponent";
import { StaticQuery, graphql } from "gatsby";

const contributorImages = graphql`
  query {
    act: file(relativePath: { eq: "contributor/act.jpg" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    collabo_gate: file(relativePath: { eq: "contributor/collabo_gate.jpg" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    comps: file(relativePath: { eq: "contributor/comps.jpg" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fujitsu: file(relativePath: { eq: "contributor/fujitsu.jpg" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    hitachi: file(relativePath: { eq: "contributor/hitachi.jpg" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    layerx: file(relativePath: { eq: "contributor/layerx.jpg" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    waseda: file(relativePath: { eq: "contributor/waseda.jpg" }) {
      childImageSharp {
        fixed(width: 200, height:90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Contributor = (props) => {
  const intl = useIntl();
  return (
      <>
      <Row className="pt-5">
        <Col>
          <h4 className="text-center mb-4">
            {intl.formatMessage({ id: "contributor" })}
          </h4>
        </Col>
      </Row>
    <HrComponent />
    <Container className="pb-5" >
      <Row className="justify-content-start" style={{width:"80%", margin:"auto"}}>
        <StaticQuery
          query={contributorImages}
          render={(data) => {
            const list = [];
            const contributors = [
              { name: "act", fixed: data.act.childImageSharp.fixed },
              {
                name: "collabo_gate",
                fixed: data.collabo_gate.childImageSharp.fixed,
              },
              { name: "comps", fixed: data.comps.childImageSharp.fixed },
              { name: "fujitsu", fixed: data.fujitsu.childImageSharp.fixed },
              { name: "hitachi", fixed: data.hitachi.childImageSharp.fixed },
              { name: "layerx", fixed: data.layerx.childImageSharp.fixed },
              { name: "waseda", fixed: data.waseda.childImageSharp.fixed },
            ];
            contributors.forEach((c, i) => {
              list.push(
                <Col className="text-center py-2" key={i} sm={3}>
                  <Img fixed={c.fixed} />
                  <div>
                    {intl.formatMessage({ id: `contributor.${c.name}` })}
                  </div>
                </Col>
              );
            });
            return list;
          }}
        />
      </Row>
    </Container></>
  );
};

export default Contributor;
