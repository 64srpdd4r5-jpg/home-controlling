import { Stack, Typography } from '@mui/material';

interface KpiProps {
  title: string;
  value: string;
}

const Kpi = ({ title, value }: KpiProps) => (
  <Stack spacing={0.5}>
    <Typography variant="subtitle1" color="text.secondary">
      {title}
    </Typography>
    <Typography variant="h4" fontWeight={700} color="text.primary">
      {value}
    </Typography>
  </Stack>
);

export default Kpi;
