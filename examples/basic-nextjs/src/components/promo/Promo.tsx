import React, { JSX } from 'react';
import {
  NextImage as ContentSdkImage,
  Link as ContentSdkLink,
  RichText as ContentSdkRichText,
  ImageField,
  Field,
  LinkField,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

interface Fields {
  PromoIcon: ImageField;
  PromoText: Field<string>;
  PromoLink: LinkField;
  PromoText2: Field<string>;
}

type PromoProps = ComponentProps & {
  fields: Fields;
};

interface PromoContentProps extends PromoProps {
  renderText: (fields: Fields) => JSX.Element;
  renderImage: (fields: Fields) => JSX.Element;
}

const PromoContent = (props: PromoContentProps): JSX.Element => {
  const { fields, params, renderText, renderImage } = props;
  const { styles, RenderingIdentifier: id } = params;

  const Wrapper = ({ children }: { children: JSX.Element }): JSX.Element => (
    <div className={`component promo ${styles}`} id={id}>
      <div className="component-content">{children}</div>
    </div>
  );

  if (!fields) {
    return (
      <Wrapper>
        <span className="is-empty-hint">Promo</span>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <>
        <div className="field-promoicon">
          {renderImage(fields)}
        </div>
        <div className="promo-text">{renderText(fields)}</div>
      </>
    </Wrapper>
  );
};

export const Default = (props: PromoProps): JSX.Element => {
  const renderText = (fields: Fields) => (
    <>
      <div className="field-promotext">
        <ContentSdkRichText field={fields.PromoText} />
      </div>
      <div className="field-promolink">
        <ContentSdkLink field={fields.PromoLink} />
      </div>
    </>
  );

  const renderImage = (fields: Fields) => (
    <>
      <ContentSdkImage field={fields.PromoIcon} />
    </>
  );

  return <PromoContent {...props} renderText={renderText} renderImage={renderImage} />;
};

export const WithText = (props: PromoProps): JSX.Element => {
  const renderText = (fields: Fields) => (
    <>
      <div className="field-promotext">
        <ContentSdkRichText className="promo-text" field={fields.PromoText} />
      </div>
      <div className="field-promotext">
        <ContentSdkRichText className="promo-text" field={fields.PromoText2} />
      </div>
    </>
  );

  const renderImage = (fields: Fields) => (
    <>
      <ContentSdkImage field={fields.PromoIcon} />
    </>
  );

  return <PromoContent {...props} renderText={renderText} renderImage={renderImage} />;
};



export const TextOnly = (props: PromoProps): JSX.Element => {
  const renderText = (fields: Fields) => (
    <>
      <div className="field-promotext">
        <ContentSdkRichText field={fields.PromoText} />
      </div>
      <div className="field-promolink">
        <ContentSdkLink field={fields.PromoLink} />
      </div>
    </>
  );

  const renderImage = (fields: Fields) => (
    <>
    </>
  );

  return <PromoContent {...props} renderText={renderText} renderImage={renderImage} />;
};
