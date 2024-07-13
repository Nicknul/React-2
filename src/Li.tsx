interface textNode {
  textNode: string[0];
}

const Li: React.FC<textNode> = ({ textNode }) => {
  return <li>{textNode}</li>;
};

export = Li;
