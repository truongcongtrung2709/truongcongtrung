import useResponsive from '@/hooks/use-responsive';
import { AppBar, Box, Container, Link, Stack, Toolbar, Typography } from '@mui/material';
import NavDesktop from './nav/desktop';
import { navConfig } from './config-navigation';

export default function Header() {
  const mdUp = useResponsive('up', 'md');

  const renderContent = (
    <>
      <Box>
        <Typography variant='h1'>TCT</Typography>
        <Link href="/" />
      </Box>
      {mdUp ? (
        <Stack sx={{ flexGrow: 1, textAlign: "center", height: 1 }}>
          <NavDesktop data={navConfig} />
        </Stack>
      ) : (
        <Box sx={{ flexGrow: 1 }}></Box>
      )}
    </>
  )
  return (
    <AppBar>
      <Toolbar>
        <Container>
          {renderContent}
        </Container>
      </Toolbar>
    </AppBar>
  )
}