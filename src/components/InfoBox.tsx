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
        <Typography variant="subtitle2" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1.2 }}>
          {content}
        </Typography>
      );
    }

    return (
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
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
        backgroundColor: 'background.paper',
        px: 3,
        py: 2,
        width: 240,
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
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
