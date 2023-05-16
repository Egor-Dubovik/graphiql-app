import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import ObjectSchemaView from '../../components/schema/ObjectView/ObjectView';
import GraphqlTools from '../../components/graphql/GraphqlTools/GraphqlTools';
import BaseSchemaList from '../../components/schema/BaseSchemaList';

const Schema: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedType, setSelectedType] = useState<Type | null>(null);
  // const [typeStack, setTypeStack] = useState<Type[]>([]);

  const handleOpen = async () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // const handleTypeClick = (type: Type) => {
  //   setSelectedType(type);
  //   // setTypeStack([...typeStack, type]);
  // };

  const handleBackClick = () => {
    // const stack = [...typeStack];
    // stack.pop();
    // setTypeStack(stack);
    // setSelectedType(stack[stack.length - 1]);
  };

  return (
    <>
      <button onClick={handleOpen}>Открыть редактор схемы GraphQL</button>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <BaseSchemaList />
      </Drawer>
    </>
  );
};

export default Schema;
