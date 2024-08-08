import { Stack } from "@mui/material";
import NavList from "./nav-list";
import { NavProps } from "../type";


export default function NavDesktop({ data, sx, ...other }: NavProps) {
  return (
    <Stack
      component='nav'
      direction='row'
      spacing={5}
      justifyContent='center'
      sx={{
        height: 1,
      }}
      {...other}

    >
      {data.map((list) => (
        <NavList key={list.title} data={list} />
      ))}
    </Stack>
  )
}