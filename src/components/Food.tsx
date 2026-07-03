import type { FoodProps } from '../types';

export const Food = ({ onNext, onSelect }: FoodProps) => {
  return (
    <div>
      <h1>What food do you want to eat?</h1>
      <button
        onClick={() => {
          onSelect('Pizza');
          onNext();
        }}
      >
        Pizza
      </button>
      <button
        onClick={() => {
          onSelect('Sushi');
          onNext();
        }}
      >
        Sushi
      </button>
      <button
        onClick={() => {
          onSelect('Burger');
          onNext();
        }}
      >
        Burger
      </button>
    </div>
  );
};
