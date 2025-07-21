import { Select,Group,Button } from '@mantine/core';

function OptionForm(){
    const pokemonEntities = [
    'ability',
    'berry',
    'berry-firmness',
    'berry-flavor',
    'characteristic',
    'contest-effect',
    'contest-type',
    'egg-group',
    'encounter-condition',
    'encounter-condition-value',
    'encounter-method',
    'evolution-chain',
    'evolution-trigger',
    'gender',
    'generation',
    'growth-rate',
    'item',
    'item-attribute',
    'item-category',
    'item-fling-effect',
    'item-pocket',
    'language',
    'location',
    'location-area',
    'machine',
    'move',
    'move-ailment',
    'move-battle-style',
    'move-category',
    'move-damage-class',
    'move-learn-method',
    'move-target',
    'nature',
    'pal-park-area',
    'pokeathlon-stat',
    'pokedex',
    'pokemon',
    'pokemon-color',
    'pokemon-form',
    'pokemon-habitat',
    'pokemon-shape',
    'pokemon-species',
    'region',
    'stat',
    'super-contest-effect',
    'type',
    'version',
    'version-group',
  ];
  return(
    <Group>
      <Select
        label="Entity"
        placeholder="Select entity"
        data={pokemonEntities}
        defaultValue="pokemon"
        w={250}
        searchable
      />
      
      <Select
        label="Per Page"
        placeholder="Select"
        data={['5', '10', '15', '20', '25', '50', '100']}
        defaultValue="10"
        w={100}
      />
      
        <Button.Group>
            <Button variant="default">{'<<'}</Button>
            <Button variant="default">{'<'}</Button>
            <Button variant="default">{'>'}</Button>
            <Button variant="default">{'>>'}</Button>
        </Button.Group>
      
    </Group>
  );
   
}
export default OptionForm;