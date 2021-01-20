import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/cassio.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Cássio Santos DEV"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}
        style={{paddingBottom: '50px'}}
      >
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Cássio Santos</h3>
                    <h6>Programador FRONT-END</h6>
                    <Button justIcon link className={classes.margin5}
                      href="https://twitter.com/Cassiosantos62"
                      target="_blank"
                    >
                      <i className={"fab fa-twitter"} />
                    </Button>

                    <Button justIcon link className={classes.margin5}
                      href="https://www.instagram.com/cassiosantos62"
                      target="_blank"
                    >
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}
                      href="https://www.facebook.com/cassiosantos62"
                      target="_blank"
                    >
                      <i className={"fab fa-facebook"} />
                    </Button>

                    <Button justIcon link className={classes.margin5}
                      href="https://www.linkedin.com/in/c%C3%A1ssio-santos-471787b5/"
                      target="_blank"
                    >
                      <i className={"fab fa-linkedin"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Amante da tecnologia desde o primeiro contato no ano de 2005, busco sempre esta 
                antenado nas novidades do mundo Web. Hoje atuo na área de programação Web com o foco 
                no FRONT END, contribuo com o meu melhor na ACportal Soluções Web onde atuo desde 2017, tambem participo 
                de alguns projetos como freelancer. Estudante de Análise e Desenvolvimento de Sistemas busco capacitação 
                para melhor desenvolver meu trabalho. <br></br>
                
                Dê uma navegada no site para conhecer um pouco melhor do meu trabalho.{" "}
              </p>
            </div>
            
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Experiência",
                      tabIcon: ReceiptIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} >
                            <div>
                              <p>
                                <b>Programador</b> <br/>
                                Nome da empresa: AC Portal Soluções Web Ltda<br/>
                                Período do emprego: Jun. de 2017 – o momento<br/>
                                Localidade: Belo Horizonte Area, Brazil<br/>
                              </p>  
                            </div>  
                          </GridItem>
                          <GridItem xs={12} sm={12} >
                            <div>
                              <p>
                                <b>Programador</b> <br/>
                                Nome da empresa: Fastdezine, Inc.
                                Duração total: 1 ano<br/>
                                Período do emprego: Jan. de 2015<br/>
                                Localidade: Belo Horizonte Area, Brazil<br/>
                              </p>  
                            </div>  
                          </GridItem>
                          
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Formação",
                      tabIcon: AssignmentIndIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12}>
                            <div>
                              <p>
                                <b>Análise e Desenvolvimento de Sitemas</b> <br/>
                                Instituição: Anhanguera Educacional.
                                Conclusão: 06/2021<br/>
                                Localidade: Belo Horizonte, Brazil<br/>
                              </p>

                              
                              
  
                            </div>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Complementares",
                      tabIcon: PlaylistAddIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <p>
                              <b>Atividades Complementares</b><br/>
                              <p>Curso online de Ionic 3 Básico (2017) - School of Net.</p>
                              <p>Curso online de JavaScript Básico (2017) - School of Net.</p>
                              <p>Curso Online de PHP - TreinaWeb (2015).</p>
                              <p>Participação no Workshop: Desenvolvimento de Themes p/ Wordpress - Quartel Design (2014).</p>
                              <p>Participação no evento WordCamp-BH (2014).</p>
                              <p>Curso Profissionalizante de Web Designer, APHDP  (2012).</p>
                              <p>Curso Profissionalizante de Manutenção de computadores, APHDP (2012).</p>
                            </p>
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
