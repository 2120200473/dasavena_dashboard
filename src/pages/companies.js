import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';


import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./json";
import { themeJson } from "./theme";

const companies = [

];

const Page = () => (
  <>
    <Head>
      <title>
        Expediente Digital | Dasavena
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Expediente Digital
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
                
              </Stack>
            </Stack>
            
          </Stack>

          
        </Stack>
      </Container>
      
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

function SurveyComponent() {
  const survey = new Model(json);
  // You can delete the line below if you do not use a customized theme
  survey.applyTheme(themeJson);
  survey.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
  });
  return (<Survey model={survey} />);
}

export default SurveyComponent;
