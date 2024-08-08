import { ListItemButtonProps, StackProps } from "@mui/material";


export type NavItemBaseProps = {
  title: string;
  path: string;
};

export type NavListProps = {
  data: NavItemBaseProps;
};

export type NavProps = StackProps & {
  data: NavItemBaseProps[];
};

export type NavItemProps = ListItemButtonProps & NavItemBaseProps & NavItemStateProps;

export type NavItemStateProps = {
  active?: boolean;
};