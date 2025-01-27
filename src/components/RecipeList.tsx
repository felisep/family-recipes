import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { recipes } from '../data/recipes';

interface RecipeListProps {
  language: string;
}

const RecipeList: React.FC<RecipeListProps> = ({ language }) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {language === 'en' ? 'Recipes' : 'Recetas'}
      </Typography>
      <Grid container spacing={2}>
        {recipes.map(recipe => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4}>
            <Card>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={recipe.image}
                  alt={recipe.name}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {recipe.name}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RecipeList;