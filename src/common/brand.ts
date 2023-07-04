/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'big-AGI',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'big-AGI',
  },
  Meta: {
    Description: 'Leading open-source AI web interface to help you learn, think, and do. AI personas, superior privacy, advanced features, and fun UX.',
    SiteName: 'big-AGI | Harnessing AI for You',
    ThemeColor: '#434356',
    TwitterSite: '@enricoros',
  },
  URIs: {
    // Slug: 'big-agi',
    Home: 'https://bigagi.uniq.moe',
    CardImage: 'https://bigagi.uniq.moe/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/SunnyLimc/big-agi',
    SupportInvite: '#',
  },
};