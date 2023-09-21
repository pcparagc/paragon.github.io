import React from "react";
import IconLink from "./IconLink";
import { Box, Typography } from "@mui/material";

function PortfolioBlock(props) {
  const { image, live, description, title } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        component={"img"}
        src={image}
        alt={"mockup"}
        sx={{
          width: 631,
          height: 385,
        }}
      />
      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={live} title={"Live Demo"} icon={"fa fa-safari"} />
        </Box>
        <Box p={1} borderRadius={"25px"}>
          <Typography variant="body2" gutterBottom>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
