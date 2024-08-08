import NavDesktop from './nav/desktop';
import { navConfig } from './config-navigation';
import { useTheme } from '@mui/material/styles';
import { useOffSetTop } from '@/hooks/use-off-set-top';
import { AppBar, Box, Container, Link, Stack, Toolbar, Typography } from '@mui/material';
import SettingsButton from './common/settings-button';
import { bgBlur } from '@/theme/css';
import { HEADER } from './config-layout';
import HeaderShadow from './common/header-shadow';
import { RouterLink } from '@/routes/components';
import NavMobile from './nav/mobile';
import { useResponsive } from '@/hooks/use-responsive';

export default function Header() {
  const mdUp = useResponsive('up', 'md');

  const theme = useTheme();

  const offset = useOffSetTop();


  const renderContent = (
    <>
      {!mdUp && (
        <Box>
          <Link
            component={RouterLink}
            href="/"
            color="inherit"
            aria-label="go to homepage"
            sx={{
              transition: theme.transitions.create('all', {
                duration: theme.transitions.duration.shorter,
              }),
              lineHeight: 0, textDecoration: 'none', fontSize: 30,
              '&:hover': {
                backgroundColor: 'transparent',
                color: theme.palette.primary.main
              },
            }}

          >
            TCT
          </Link>
        </Box>
      )}
      {
        mdUp ? (
          <Stack sx={{ flexGrow: 1, textAlign: "center", height: 1 }} >
            <NavDesktop data={navConfig.slice(0, 3)} />
          </Stack >
        ) : (
          <Box sx={{ flexGrow: 1 }}></Box>
        )
      }
      {mdUp && (
        <Box>
          <Link
            component={RouterLink}
            href="/"
            color="inherit"
            aria-label="go to homepage"
            sx={{
              transition: theme.transitions.create('all', {
                duration: theme.transitions.duration.shorter,
              }),
              lineHeight: 0, textDecoration: 'none', fontSize: 30,
              '&:hover': {
                backgroundColor: 'transparent',
                color: theme.palette.primary.main
              },
            }}

          >
            TCT
          </Link>
        </Box>
      )}
      {
        mdUp ? (
          <Stack sx={{ flexGrow: 1, textAlign: "center", height: 1 }} >
            <NavDesktop data={navConfig.slice(-3)} />
          </Stack >
        ) : (
          <Box sx={{ flexGrow: 1 }}></Box>
        )
      }
      {!mdUp && <NavMobile data={navConfig} />}

    </>
  )
  return (
    <AppBar sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...({
            color: 'common.white',
          }),
          ...(offset && {
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderContent}
        </Container>
      </Toolbar>

    </AppBar>
  )
}