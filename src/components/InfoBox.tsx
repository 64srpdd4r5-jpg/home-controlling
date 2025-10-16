import { Box, Paper, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

type InfoBoxTitle = string | ReactNode;

interface InfoBoxProps {
  title: InfoBoxTitle;
  action?: ReactNode;
  children: ReactNode;
}

const InfoBox = ({ title, action, children }: InfoBoxProps) => {
  const renderTitle = (content: InfoBoxTitle) => {
    if (typeof content === 'string') {
      return (
        <Typography
          variant="subtitle2"
          color="#101828"
          sx={{
            textTransform: 'uppercase',
            letterSpacing: 1.2,
            fontWeight: 700,
          }}
        >
          {content}
        </Typography>
      );
    }

    return (
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: '18px',
          bgcolor: '#ecf2ff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'primary.main',
        }}
      >
        {content}
      </Box>
    );
  };

  const hasAction = Boolean(action);

  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: '#ffffff',
        px: 3.5,
        py: 3,
        width: 240,
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'rgba(39, 64, 115, 0.08)',
        boxShadow: '0 20px 40px rgba(15, 33, 89, 0.05)',
        color: '#101828',
      }}
    >
      <Stack
        direction="row"
        justifyContent={hasAction ? 'space-between' : 'flex-start'}
        alignItems="flex-start"
        spacing={hasAction ? 2 : 0}
      >
        {renderTitle(title)}
        {hasAction ? (
          <Box color="text.secondary" display="flex" alignItems="center">
            {action}
          </Box>
        ) : null}
      </Stack>
      <Box flexGrow={1} display="flex" alignItems="flex-end">
        {children}
      </Box>
    </Paper>
  );
};

export default InfoBox;
