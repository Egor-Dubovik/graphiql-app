import React, { FC, MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import Typography from '@mui/material/Typography';
import { selectSchemaStack, setPath, setStackDataArray } from '../../../features/Sheme/schemaSlice';
import { Breadcrumbs } from '@mui/material';
import { sxBreadcrumbItem, sxBreadcrumbs } from './SchemaPath.style';

const SchemaPath: FC = () => {
  const { path, dataArray } = useAppSelector(selectSchemaStack);
  const dispatch = useAppDispatch();

  const handleSwitchPath = (event: MouseEvent<HTMLSpanElement>) => {
    const content = (event.target as HTMLElement).textContent;
    if (content) {
      const searchItemIndex = path.indexOf(content);
      if (searchItemIndex !== -1) {
        const newPath = [...path].splice(0, searchItemIndex + 1);
        const newDataArray = [...dataArray].splice(0, searchItemIndex + 2);
        dispatch(setPath(newPath));
        dispatch(setStackDataArray(newDataArray));
      }
    }
  };

  return (
    <Breadcrumbs separator="›" sx={sxBreadcrumbs}>
      {path.map((pathItem) => (
        <Typography key={pathItem} onClick={handleSwitchPath} sx={sxBreadcrumbItem}>
          {pathItem}
        </Typography>
      ))}
    </Breadcrumbs>
  );
};

export default SchemaPath;
