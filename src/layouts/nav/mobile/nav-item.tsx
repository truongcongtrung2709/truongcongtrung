import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { alpha, styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

import { RouterLink } from '@/routes/components';

import Iconify from '@/components/iconify';
import { NavItemProps, NavItemStateProps } from '../type';


// ----------------------------------------------------------------------

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  ({ title, path, active, ...other }, ref) => {
    const renderContent = (
      <StyledNavItem ref={ref} active={active} {...other}>
        <Box component="span" sx={{ flexGrow: 1 }}>
          {title}
        </Box>


      </StyledNavItem>
    );


    return (
      <Link component={RouterLink} href={path} underline="none">
        {renderContent}
      </Link>
    );
  }
);

export default NavItem;

// ----------------------------------------------------------------------

const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<NavItemStateProps>(({ active, theme }) => ({
  ...theme.typography.body1,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(1.5),
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: theme.typography.fontSecondaryFamily,
  ...(active && {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightSemiBold,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  }),
}));