import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText } from '@mui/material';

interface RecipeDetailProps {
  recipe: {
    name: string;
    image: string;
    ingredients: string[];
    steps: string[];
  };
  language: string;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, language }) => {
  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={recipe.image}
          alt={recipe.name}
          style={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {recipe.name}
          </Typography>
          <Typography variant="h6" component="h2">
            {language === 'en' ? 'Ingredients' : 'Ingredientes'}
          </Typography>
          <List>
            {recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <ListItemText primary={ingredient} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" component="h2">
            {language === 'en' ? 'Steps' : 'Pasos'}
          </Typography>
          <List>
            {recipe.steps.map((step: string, index: number) => (
              <ListItem key={index}>
                <ListItemText primary={`${index + 1}. ${step}`} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RecipeDetail;