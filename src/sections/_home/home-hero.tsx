
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';



import { bgGradient } from '@/theme/css';



import CareerHeroIllustration from '@/assets/illustrastions/career-hero-illustration';
import { useResponsive } from '@/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function HomeView() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');



  return (

    <Container id="home">
      <Grid container spacing={3} justifyContent="space-between">
        <Grid xs={12} md={6} lg={5}>
          <Stack
            spacing={5}
            sx={{
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            <Stack spacing={3}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                Hi there, I'm
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {` Trung `}
                </Box>
              </Typography>

              <Typography variant="h3" sx={{ color: 'grey.500' }}>
                I'm a front-end developer with a passion for crafting engaging and intuitive user interfaces. Let's collaborate to build exceptional digital experiences!
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        {mdUp && (
          <Grid xs={12} md={6} lg={6}>
            <CareerHeroIllustration />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
