interface Props {
  hasItem: boolean;
  clicked: boolean;
}

const CreateItems = () => {
  const items: Props[] = [];

  for (let i = 0; i < 36; i++) {
    items.push({hasItem: false, clicked: false});
  }
  const randomIndex = Math.floor(Math.random() * 36);
  items[randomIndex].hasItem = true;

  return items;
};

export default CreateItems;