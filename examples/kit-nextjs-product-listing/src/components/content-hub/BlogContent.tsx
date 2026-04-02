import React from 'react';
import { BlogContentHubProps } from './blog-content-hub.props';

export const Default: React.FC<BlogContentHubProps> = (props) => {
  console.log('BlogContent props:', props);

  return (
    <div className="blog-content-placeholder">
      <h1>Placeholder Content SDK Blog Content</h1>
    </div>
  );
};
