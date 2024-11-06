'use client';

import { useEffect, useState } from 'react';

function fetchMealIdeas(ingredient) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.meals || [])
    .catch(error => {
      console.error('Error fetching meal ideas:', error);
      return [];
    });
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h2 className="text-xl font-bold mb-2">Meal Ideas</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal} className="p-2">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
