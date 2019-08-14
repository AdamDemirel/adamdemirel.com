import React from "react";
import { withRouteData } from "react-static";
import Nav from "../components/Nav";
import { Card, Name } from "../pages/home";
import styled from "styled-components";
import { fontFamily, fontSize, lineHeight } from "../backend/StyledSystem";

export default withRouteData(({ title, content }) => {
  // console.log("post props", props);

  return (
    <>
      <Nav />
      <Card>
        <Name>{title}</Name>
        <Text>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Text>
      </Card>
    </>
  );
});

const Text = styled.p`
width: 60%;
margin: 0 auto;
${fontFamily({ fontFamily: "karla" })}
${fontSize({ fontSize: ["20px", "24px", "20px"] })}
${lineHeight({ lineHeight: ["24px", "32px", "30px"] })}
`;
