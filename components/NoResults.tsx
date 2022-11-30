import React from 'react';

interface IProps {
  text: string;
}

const NoResults = ({ text }: IProps) => {
  return <div>No Results</div>;
};

export default NoResults;
