import Collapse from '@mui/material/Collapse';




import NavItem from './nav-item';
import { NavListProps } from '../type';
import { useActiveLink } from '@/routes/hooks/use-active-link';
import { useBoolean } from '@/hooks/use-boolean';

// ----------------------------------------------------------------------

export default function NavList({ data }: NavListProps) {
  const active = useActiveLink(data.path);

  const menuOpen = useBoolean();

  return (
    <>
      <NavItem
        onClick={menuOpen.onToggle}
        //
        title={data.title}
        path={data.path}
        //
        active={active}
      />
    </>
  );
}
