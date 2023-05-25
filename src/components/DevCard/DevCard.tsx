import React from 'react';
import { DevCardPopover } from '../DevCardPopover/DevCardPopover';
import { IDevCard } from '../../common/interfaces/iDevCard';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { cardTheme, cardMediaTheme } from './DevCard.styles';

export const DevCard: React.FC<IDevCard> = ({ devImage, devName, devText, devMore }) => {
  const [anchor, setAnchor] = React.useState<HTMLButtonElement | null>(null);

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
        <ThemeProvider theme={cardMediaTheme}>
          <CardMedia
            sx={{
              [cardMediaTheme.breakpoints.down(1150)]: {
                height: '170px',
              },
              [cardMediaTheme.breakpoints.down('md')]: {
                height: '450px',
              },
              [cardMediaTheme.breakpoints.down(650)]: {
                height: '300px',
              },
              [cardMediaTheme.breakpoints.down(450)]: {
                width: '70%',
              },
              [cardMediaTheme.breakpoints.down(350)]: {
                width: '60%',
                height: '250px',
              },
            }}
            image={devImage}
            title={devName.toLowerCase()}
          />
        </ThemeProvider>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            {devName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            {devText}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" aria-describedby={id} onClick={handleClick}>
            Read more
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
