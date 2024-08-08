import { useEffect } from 'react';

import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';



import Iconify from '@/components/iconify';
import Scrollbar from '@/components/scrollbar';

import NavList from './nav-list';
import { Box, Link } from '@mui/material';
import { RouterLink } from '@/routes/components';
import { useTheme } from '@mui/material/styles';
import { usePathname } from 'next/navigation';
import { useBoolean } from '@/hooks/use-boolean';
import { NavProps } from '../type';
import { NAV } from '@/layouts/config-layout';


// ----------------------------------------------------------------------

export default function NavMobile({ data }: NavProps) {
  const pathname = usePathname();

  const theme = useTheme();

  const mobileOpen = useBoolean();

  useEffect(() => {
    if (mobileOpen.value) {
      mobileOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <IconButton onClick={mobileOpen.onTrue} sx={{ ml: 1, color: 'inherit' }}>
        <Iconify icon="carbon:menu" />
      </IconButton>

      <Drawer
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_VERTICAL,
          },
        }}
      >
        <Scrollbar>


          <List component="nav" disablePadding>
            {data.map((list) => (
              <NavList key={list.title} data={list} />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}
