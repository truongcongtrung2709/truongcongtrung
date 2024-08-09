'use client'

import MainLayout from "@/layouts";
import { HEADER } from "@/layouts/config-layout";
import { Box, Typography } from "@mui/material";
import HomeHero from "../home-hero";
import HomeAbout from "../home-about";
import HomeSkills from "../home-skills";
import { skills } from "@/_mock/_skills";
import HomeProjects from "../home-projects";
import { projects } from "@/_mock/_projects";

export default function HomeView() {
  return (
    <MainLayout>
      <HomeHero />
      <HomeAbout />
      <HomeSkills skills={skills} />
      <HomeProjects projects={projects} />
    </MainLayout>

  )
}
