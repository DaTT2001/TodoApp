import React from 'react';
import { JobTitleProps } from '../../../../shared/interfaces';
import { TITLE_LENGTH } from '../../../../shared/constants';

const JobTitle = ({ title }: JobTitleProps): JSX.Element => {
  if (title.length <= TITLE_LENGTH) {
    return <span>{title}</span>;
  } else if (title.length <= TITLE_LENGTH * 2 && title.length > TITLE_LENGTH) {
    return (
      <div>
        {title.substring(0, TITLE_LENGTH)}<br />
        {title.substring(TITLE_LENGTH)}
      </div>
    );
  } else {
    return <span>{title.substring(0, TITLE_LENGTH)}<br />
      {title.substring(TITLE_LENGTH, (TITLE_LENGTH * 2) - 3)}...</span>;
  }
};

export default JobTitle;
