import { Field } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';

export type BlogContentHubFields = {
  fields?: {
    blogId?: Field<string>;
  };
};

export type BlogContentHubProps = ComponentProps & BlogContentHubFields;
