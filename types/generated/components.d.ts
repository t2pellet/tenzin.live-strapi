import type { Schema, Attribute } from '@strapi/strapi';

export interface OtherContinueLink extends Schema.Component {
  collectionName: 'components_other_continue_links';
  info: {
    displayName: 'ContinueLink';
  };
  attributes: {
    continueText: Attribute.Text;
    section: Attribute.Relation<
      'other.continue-link',
      'oneToOne',
      'api::section.section'
    >;
  };
}

export interface OtherIcon extends Schema.Component {
  collectionName: 'components_other_icons';
  info: {
    displayName: 'Icon';
    description: '';
  };
  attributes: {
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
    title: Attribute.String;
  };
}

export interface TimelineContentJob extends Schema.Component {
  collectionName: 'components_timeline_content_jobs';
  info: {
    displayName: 'Job';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    role: Attribute.String;
    description: Attribute.Text;
    from: Attribute.Date;
    to: Attribute.Date;
    skills: Attribute.Component<'other.icon', true>;
  };
}

export interface TimelineContentSchool extends Schema.Component {
  collectionName: 'components_timeline_content_schools';
  info: {
    displayName: 'School';
  };
  attributes: {
    title: Attribute.String;
    major: Attribute.String;
    from: Attribute.Date;
    to: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'other.continue-link': OtherContinueLink;
      'other.icon': OtherIcon;
      'timeline-content.job': TimelineContentJob;
      'timeline-content.school': TimelineContentSchool;
    }
  }
}
