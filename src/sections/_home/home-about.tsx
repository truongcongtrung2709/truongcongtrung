import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';


import Image from '@/components/image';
import { bgGradient } from '@/theme/css';
import { alpha, useTheme } from '@mui/material/styles';
import { useResponsive } from '@/hooks/use-responsive';


// ----------------------------------------------------------------------

export default function HomeAbout() {
  const mdUp = useResponsive('up', 'md');

  const theme = useTheme()

  return (

    <Container
      id="about"
      sx={{
        py: { xs: 8, md: 15 },
      }}
    >
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          color: 'primary.main',
          mb: { xs: 2, md: 10 },
        }}
      >
        About me
      </Typography>

      <Grid
        container
        spacing={3}
        alignItems={{ md: 'center' }}
        justifyContent={{ md: 'space-between' }}
      >
        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image
              alt="about"
              src="/assets/images/avatar/avatar.jpg"
              ratio="4/6"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
        )}

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h3" color='primary.main' sx={{ mb: 3 }}>
            Crafting digital experiences with precision and creativity.
          </Typography>

          <Typography sx={{ color: 'common.white' }}>
            Greeting, my name is Trung, I live in Ho Chi Minh city, VietNam. I graduated at Hutech University, I'm Frontend Developer, my target is give clients have a new and perfect experience.
          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 5, md: 10 }}
            sx={{ mt: { xs: 8, md: 10 } }}
          >
            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'common.white' }}>
                My Short-term goals is to gain more knowledge and experience.

              </Typography>
            </Stack>

            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'common.white' }}>
                My Long-term goals is become a Full-stack developer and further with higher positions

              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>

  );
}
