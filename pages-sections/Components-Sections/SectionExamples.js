import React from "react";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import landing from "assets/img/landing.jpg";
import profile from "assets/img/profile.jpg";

import in8 from "assets/img/img-portifolio-in8.jpg";
import aguacristalina from "assets/img/img-portifolio-agua-cristalina.jpg";
import constec from "assets/img/img-portifolio-constec.jpg";
import wedding from "assets/img/img-portifolio-wedding.jpg";
import pontodasimpressoras from "assets/img/img-portifolio-ponto-das-impressoras.jpg";
import coopermoda from "assets/img/img-portifolio-coopermoda.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Link href="https://www.in8home.com/">
              <a className={classes.link} target="_blank">
                <img
                  src={in8}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  Ver site desenvolvido.
                </Button>
              </a>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link href="http://aguacristalinamg.com.br/">
              <a className={classes.link} target="_blank">
                <img
                  src={aguacristalina}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  Ver site desenvolvido.
                </Button>
              </a>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link href="http://constecmg.com.br/" >
              <a className={classes.link} target="_blank">
                <img
                  src={constec}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  Ver site desenvolvido.
                </Button>
              </a>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link href="https://www.weddingjoias.com.br/" >
              <a className={classes.link} target="_blank">
                <img
                  src={wedding}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  Ver site desenvolvido.
                </Button>
              </a>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link href="https://www.pontodasimpressoras.com.br/">
              <a className={classes.link} target="_blank">
                <img
                  src={pontodasimpressoras}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  https://www.pontodasimpressoras.com.br/
                </Button>
              </a>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link href="http://coopermoda.com.br/">
              <a className={classes.link} target="_blank">
                <img
                  src={coopermoda}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  Ver site desenvolvido.
                </Button>
              </a>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
