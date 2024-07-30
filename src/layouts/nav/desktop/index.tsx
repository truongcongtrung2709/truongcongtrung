import { Stack } from "@mui/material";

type Props = {
  data: {
    title: string;
    path: string
  }[]
}
export default function NavDesktop({ data }: Props) {
  return (
    <Stack
      component='nav'
      direction='row'
      spacing={5}
      sx={{
        height: 1
      }}
    >
      {data.map(list)=>(
        
      )}
    </Stack>
  )
}