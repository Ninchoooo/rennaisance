import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsInfoElement extends Schema.Component {
  collectionName: 'components_about_us_info_elements';
  info: {
    displayName: 'Info Element';
  };
  attributes: {
    number: Attribute.String;
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface AboutUsSlide1 extends Schema.Component {
  collectionName: 'components_about_us_slide1s';
  info: {
    displayName: 'Slide1';
  };
  attributes: {
    titleBefore: Attribute.String;
    titleSpan: Attribute.String;
    titleAfter: Attribute.String;
    content: Attribute.Text;
  };
}

export interface AboutUsSlide2 extends Schema.Component {
  collectionName: 'components_about_us_slide2s';
  info: {
    displayName: 'Slide2';
  };
  attributes: {
    content: Attribute.Text;
    contentLine: Attribute.Text;
  };
}

export interface AboutUsSlide3 extends Schema.Component {
  collectionName: 'components_about_us_slide3s';
  info: {
    displayName: 'slide3';
    description: '';
  };
  attributes: {
    title1: Attribute.String;
    title2: Attribute.String;
    imageBackground: Attribute.Media;
  };
}

export interface AboutUsSlide4 extends Schema.Component {
  collectionName: 'components_about_us_slide4s';
  info: {
    displayName: 'slide4';
    description: '';
  };
  attributes: {
    info1: Attribute.Component<'about-us.info-element'>;
    info2: Attribute.Component<'about-us.info-element'>;
    info3: Attribute.Component<'about-us.info-element'>;
  };
}

export interface ElementsSketchSlider extends Schema.Component {
  collectionName: 'components_elements_sketch_sliders';
  info: {
    displayName: 'Sketch Slider';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    imageBackground: Attribute.Media;
  };
}

export interface GalleryImageZoom extends Schema.Component {
  collectionName: 'components_gallery_image_zooms';
  info: {
    displayName: 'Image Zoom';
  };
  attributes: {
    image: Attribute.Media;
    altText: Attribute.String;
  };
}

export interface HomeElementsCentralSlide extends Schema.Component {
  collectionName: 'components_home_elements_central_slides';
  info: {
    displayName: 'Slide Type 3';
    description: '';
  };
  attributes: {
    imageBg: Attribute.Media;
    title: Attribute.String;
    button: Attribute.Component<'links.button'>;
    textButton: Attribute.String;
  };
}

export interface HomeElementsLangardSlide extends Schema.Component {
  collectionName: 'components_home_elements_langard_slides';
  info: {
    displayName: 'Slide Type 1';
    description: '';
  };
  attributes: {
    imageBg: Attribute.Media;
    title: Attribute.String;
    p: Attribute.Component<'home-elements.two-lines'>;
    button: Attribute.Component<'links.button'>;
  };
}

export interface HomeElementsLuxurySlide extends Schema.Component {
  collectionName: 'components_home_elements_luxury_slides';
  info: {
    displayName: 'Slide Type 2';
    description: '';
  };
  attributes: {
    imageBg: Attribute.Media;
    title: Attribute.String;
    button: Attribute.Component<'links.button'>;
  };
}

export interface HomeElementsTwoLines extends Schema.Component {
  collectionName: 'components_home_elements_two_lines';
  info: {
    displayName: 'Two Lines';
  };
  attributes: {
    line1: Attribute.String;
    line2: Attribute.String;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    title: Attribute.String;
    path: Attribute.String;
  };
}

export interface MetadataSeo extends Schema.Component {
  collectionName: 'components_metadata_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    shareImage: Attribute.Media;
    metaKeys: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.info-element': AboutUsInfoElement;
      'about-us.slide1': AboutUsSlide1;
      'about-us.slide2': AboutUsSlide2;
      'about-us.slide3': AboutUsSlide3;
      'about-us.slide4': AboutUsSlide4;
      'elements.sketch-slider': ElementsSketchSlider;
      'gallery.image-zoom': GalleryImageZoom;
      'home-elements.central-slide': HomeElementsCentralSlide;
      'home-elements.langard-slide': HomeElementsLangardSlide;
      'home-elements.luxury-slide': HomeElementsLuxurySlide;
      'home-elements.two-lines': HomeElementsTwoLines;
      'links.button': LinksButton;
      'metadata.seo': MetadataSeo;
    }
  }
}
