import React, { Component } from 'react';
import Header from '../Header';
import { withRouter } from 'react-router';
import Helmet from 'react-helmet';
import logo from '../../assets/Logo/mcdonalds-90s-logo.svg';
import StyleBackground from './styles';
const SITE_URL =

    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' :
    'http://localhost:3000';

const defaultTitle = 'Deliy-Coding-Problem';
const defaultDescription = 'Deliy-Coding-Problem Site.';
const defaultImage = `${SITE_URL}${logo}`;
const defaultSep = ' | ';

class Page extends Component {
  getMetaTags (
    {
      title,
      description,
      image,
      contentType,
      noCrawl,
      published,
      updated,
      category,
      tags,
    },
    pathname,
  ) {
    const theTitle =
      title ? (title + defaultSep + defaultTitle).substring(0, 60) :
      defaultTitle;
    const theDescription =
      description ? description.substring(0, 155) :
      defaultDescription;
    const theImage =
      image ? `${SITE_URL}${image}` :
      defaultImage;

    const metaTags = [
      { itemprop: 'name', content: theTitle },
      { itemprop: 'description', content: theDescription },
      { itemprop: 'image', content: theImage },
      { name: 'description', content: theDescription },
      { property: 'og:title', content: theTitle },
      { property: 'og:type', content: contentType || 'website' },
      { property: 'og:url', content: SITE_URL + pathname },
      { property: 'og:image', content: theImage },
      { property: 'og:description', content: theDescription },
      { property: 'og:site_name', content: defaultTitle },
    ];

    if (noCrawl) {
      metaTags.push({ name: 'robots', content: 'noindex, nofollow' });
    }

    if (published) {
      metaTags.push({
        name: 'article:published_time',
        content: published,
      });
    }
    if (updated) {
      metaTags.push({ name: 'article:modified_time', content: updated });
    }
    if (category) {
      metaTags.push({ name: 'article:section', content: category });
    }
    if (tags) {
      metaTags.push({ name: 'article:tag', content: tags });
    }

    return metaTags;
  }

  render () {
    const { children, id, className, backgroundImage, ...rest } = this.props;

    return (
      <div id={id} className={className}>
        <Helmet
          htmlAttributes={{
            lang: 'en',
            itemscope: undefined,
            itemtype: `http://schema.org/${rest.schema || 'WebPage'}`,
          }}
          title={

              rest.title ? rest.title + defaultSep + defaultTitle :
              defaultTitle
          }
          link={[
            {
              rel: 'canonical',
              href: SITE_URL + this.props.location.pathname,
            },
          ]}
          meta={this.getMetaTags(rest, this.props.location.pathname)}
        />
        <StyleBackground backgroundImage={backgroundImage}>
          <Header />
          {children}
        </StyleBackground>
      </div>
    );
  }
}

export default withRouter(Page);
