import React, { useState } from 'react';
import { DevCardPopover } from '../DevCardPopover/DevCardPopover';
import { IDevCard } from '../../common/interfaces/iDevCard';
import { Box, Button, Card, CardActions, CardContent, Skeleton, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { cardTheme, sxImage, sxImageBox } from './DevCard.styles';
import { useTranslation } from 'react-i18next';

export const DevCard: React.FC<IDevCard> = ({ devImage, devName, devText, devMore }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [anchor, setAnchor] = React.useState<HTMLButtonElement | null>(null);
  const { t } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const card = Boolean(anchor);

  const id = card ? 'simple-popover' : undefined;

  return (
    <ThemeProvider theme={cardTheme}>
      <Card
        sx={{
          [cardTheme.breakpoints.down('md')]: {
            width: '100%',
            height: '30%',
          },
          [cardTheme.breakpoints.down(650)]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Box sx={{ ...sxImageBox, paddingBottom: `${isLoading ? '0' : '70%'}` }}>
          <Box
            component="img"
            sx={sxImage}
            onLoad={() => setIsLoading(false)}
            src={devImage}
            alt="developer image"
          />
        </Box>
        {isLoading && <Skeleton variant="rectangular" sx={sxImageBox} />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            {devName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            {devText}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" aria-describedby={id} onClick={handleClick}>
            {t('read')}
          </Button>
          <DevCardPopover
            id={id}
            card={card}
            anchor={anchor}
            handleClose={handleClose}
            devMore={devMore}
          />
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};
