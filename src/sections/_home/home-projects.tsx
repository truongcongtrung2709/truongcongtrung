import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { IProjectProps } from '@/types/project';
import { useResponsive } from '@/hooks/use-responsive';
import { RouterLink } from '@/routes/components';
import Image from '@/components/image';
import TextMaxLine from '@/components/text-max-line';
import Iconify from '@/components/iconify';
import { varHover } from '@/components/animate/variants/actions';
import { varTranHover } from '@/components/animate/variants/transition';


// ----------------------------------------------------------------------

type Props = {
  projects: IProjectProps[];
};

export default function HomeProjects({ projects }: Props) {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="h2" sx={{
          color: 'primary.main',
        }}>My Projects</Typography>
      </Stack>

      <Grid
        spacing={3}
        container
        alignItems="center"
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid xs={6} md={2}>
          <SmallItem project={projects[0]} />
        </Grid>

        {!mdUp && (
          <Grid xs={6} md={2}>
            <SmallItem project={projects[2]} />
          </Grid>
        )}

        <Grid container xs={12} sm={12} md={8}>
          <Grid xs={6} md={9}>
            {mdUp ? (
              <LargeItem project={projects[1]} />
            ) : (
              <SmallItem project={projects[1]} square />
            )}
          </Grid>

          <Grid xs={6} md={3}>
            <Stack justifyContent={{ md: 'flex-end' }} sx={{ height: { md: 1 } }}>
              <SmallItem project={projects[2]} square />
            </Stack>
          </Grid>

          <Grid xs={6} md={3}>
            <SmallItem project={projects[2]} square />
          </Grid>

          <Grid xs={6} md={9}>
            {mdUp ? (
              <LargeItem project={projects[2]} />
            ) : (
              <SmallItem project={projects[2]} square />
            )}
          </Grid>
        </Grid>

        {mdUp && (
          <Grid xs={6} md={2}>
            <SmallItem project={projects[2]} />
          </Grid>
        )}
      </Grid>

    </Container>
  );
}

// ----------------------------------------------------------------------

type LargeItemProps = {
  project: IProjectProps;
};

function LargeItem({ project }: LargeItemProps) {
  return (
    <Paper
      sx={{
        display: 'grid',
        borderRadius: 2,
        boxShadow: (theme) => theme.customShadows.z24,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        },
      }}
    >
      <Box sx={{ p: 0.75 }}>
        <Image alt="cover" src={project.coverUrl} ratio="3/4" sx={{ borderRadius: 2 }} />
      </Box>

      <Stack alignItems="flex-end" justifyContent="space-between" sx={{ p: 3, pt: 5, height: 1 }}>
        <div>

          <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
            {project.title}
          </Typography>

          <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
            {project.description}
          </TextMaxLine>
        </div>

        <Button
          component={RouterLink}
          href='/'
          size="small"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          Learn more
        </Button>
      </Stack>
    </Paper>
  );
}

// ----------------------------------------------------------------------

type SmallItemProps = {
  project: IProjectProps;
  square?: boolean;
};

function SmallItem({ project, square }: SmallItemProps) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Link component={RouterLink} href='/'>
      <Paper
        component={m.div}
        whileHover="hover"
        sx={{
          position: 'relative',
          cursor: 'pointer',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 1,
            height: 1,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
            textAlign: 'center',
          }}
        >

          <Typography variant="h6">{project.title}</Typography>
        </Stack>

        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          <Image
            alt="cover"
            src={project.coverUrl}
            ratio={(square && '1/1') || (mdUp && '3/4') || '1/1'}
            overlay={alpha(theme.palette.grey[900], 0.48)}
          />
        </m.div>
      </Paper>
    </Link>
  );
}
