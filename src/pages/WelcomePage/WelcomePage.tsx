import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Popover,
  Typography,
} from '@mui/material';
import './WelcomePageStyles.scss';

const WelcomePage = () => {
  const [anchor1, setAnchor1] = React.useState<HTMLButtonElement | null>(null);
  const [anchor2, setAnchor2] = React.useState<HTMLButtonElement | null>(null);
  const [anchor3, setAnchor3] = React.useState<HTMLButtonElement | null>(null);

  const handleClickFirst = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor1(event.currentTarget);
  };
  const handleClickSecond = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor2(event.currentTarget);
  };
  const handleClickThird = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor3(event.currentTarget);
  };

  const handleCloseFirst = () => {
    setAnchor1(null);
  };
  const handleCloseSecond = () => {
    setAnchor2(null);
  };
  const handleCloseThird = () => {
    setAnchor3(null);
  };

  const card1 = Boolean(anchor1);
  const card2 = Boolean(anchor2);
  const card3 = Boolean(anchor3);

  const id1 = card1 ? 'simple-popover' : undefined;
  const id2 = card2 ? 'simple-popover' : undefined;
  const id3 = card3 ? 'simple-popover' : undefined;

  return (
    <main className="main">
      <Container
        maxWidth="xl"
        sx={{
          height: 100,
          textAlign: 'center',
        }}
      >
        <section className="welcome-main">
          <h2 className="welcome-header">Welcome Page</h2>
        </section>
      </Container>
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Card sx={{ width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardMedia
            sx={{
              height: 250,
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            image="https://avatars.githubusercontent.com/u/75774830?v=4"
            title="egor dubovik"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Egor Dubovik
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Impressive frontend developer
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" aria-describedby={id1} onClick={handleClickFirst}>
              Learn More
            </Button>
            <Popover
              id={id1}
              open={card1}
              anchorEl={anchor1}
              onClose={handleCloseFirst}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }}>And more and more impressive things!</Typography>
            </Popover>
          </CardActions>
        </Card>
        <Card sx={{ width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardMedia
            sx={{
              height: 250,
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            image="https://avatars.githubusercontent.com/u/60963701?v=4"
            title="olga grishanova"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Olga Grishanova
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Beautiful frontend developer
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" aria-describedby={id2} onClick={handleClickSecond}>
              Learn More
            </Button>
            <Popover
              id={id2}
              open={card2}
              anchorEl={anchor2}
              onClose={handleCloseSecond}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }}>And more and more beautiful things!</Typography>
            </Popover>
          </CardActions>
        </Card>
        <Card sx={{ width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardMedia
            sx={{
              height: 250,
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            image="https://avatars.githubusercontent.com/u/100777452?v=4"
            title="artem prygunov"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Artem Prygunov
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Amazing spider-man
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" aria-describedby={id3} onClick={handleClickThird}>
              Learn More
            </Button>
            <Popover
              id={id3}
              open={card3}
              anchorEl={anchor3}
              onClose={handleCloseThird}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }}>And more and more spider sence!</Typography>
            </Popover>
          </CardActions>
        </Card>
      </Container>
    </main>
  );
};

export default WelcomePage;
