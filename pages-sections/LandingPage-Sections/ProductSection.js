import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import LanguageIcon from '@material-ui/icons/Language';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PieChartIcon from '@material-ui/icons/PieChart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PhotoIcon from '@material-ui/icons/Photo';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Características dos meus projetos.</h2>
          <h5 className={classes.description}>
          Bem vindo. Sou Cássio FRONT END DEVELPER aqui vou mostra um pouco do que gosto de fazer, 
          atuo na área de desenvolvimento que estou há aproximadamente mais 3 anos no mercado. Focado em ajudar as 
          pessoas e negócios  construírem uma imagem maravilhosa através da internet. Conto com 
          aproximadamente mais 100 clientes em todo o Brasil. Prestando serviço para 
          profissionais liberais, pequenas, médias e grandes empresas.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Site Profissional"
              description="Vamos ajudá-lo a construir uma forte presença online para o seu negócio através da criação de um site profissional que melhor se adapte às suas necessidades e encontre seu público-alvo.."
              icon={LanguageIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Hospedagem de qualidade"
              description="Servidores Otimizados e SSL Grátis , isso traz uma tranquilidade e segurança para seu site e e-mail, e estamos prontos para lhe auxiliar com o que a de melhor, hospede agora mesmo conosco!"
              icon={CloudUploadIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Métricas"
              description="São sistemas de mensuração que quantificam tendência, comportamento ou variável de negócio, permitindo avaliar o desempenho de suas ações de marketing. Tenha noção do retorno do seu trabalho!"
              icon={PieChartIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Criação de E-commerce"
              description="Tenha sua loja virtual aberta 24 horas por dia 7 dias da semana. Crie a sua loja virtual e faça negócios pela internet com facilidade e praticidade para seus clientes e menor custo para sua empresa."
              icon={ShoppingCartIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Layouts Persuasivos"
              description="O Design de cada site é exclusivo, criado a partir da melhor identidade visual para sua empresa, e pensados para gerar resultados para o seu negócio."
              icon={PhotoIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Sites Institucionais"
              description="Sua empresa com uma apresentação moderna, 24 horas por dia, 7 dias por semana."
              icon={PieChartIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
