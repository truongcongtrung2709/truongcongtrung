import { useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Portal from '@mui/material/Portal';
import Grid from '@mui/material/Unstable_Grid2';
import ListSubheader from '@mui/material/ListSubheader';
import { NavItemBaseProps, NavListProps } from '../type';
import NavItem from './nav-item';
import { useActiveLink } from '@/routes/hooks/use-active-link';


// ----------------------------------------------------------------------


export default function NavList({ data }: NavListProps) {

  const active = useActiveLink(data.path);

  return (
    <>
      <NavItem
        //
        title={data.title}
        path={data.path}
        //
        active={active}
      />
    </>
  );
}

// ----------------------------------------------------------------------