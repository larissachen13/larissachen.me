const portfolios = [
  {
    id: 'lupe',
    name: 'LUPE Website',
    description: 'Interactive site that showcases the portfolios of LUPE\'s beauty professionals. Backend is built with **Express**, **Superagent**, and **node.js** and frontend with **Handlebars**, **HTML**, **Bootstrap**, and **CSS**',
    photos: [
      'https://larissa-web-portfolio.s3.amazonaws.com/lupe-1.png',
      'https://larissa-web-portfolio.s3.amazonaws.com/lupe-4.png',
      'https://larissa-web-portfolio.s3.amazonaws.com/lupe-2.png',
      'https://larissa-web-portfolio.s3.amazonaws.com/lupe-3.png',
    ],
  },
  {
    id: 'dartbot',
    name: 'Dartbot',
    description: 'Facebook Messenger Bot that answers common college tour questions and a web interface that displays tour locations, tour guide profiles, and contains a admin side to view analytics of messenger interactions. Web interface written in **react**, **D3**, **Express**, **MongoDB**, **AmazonS3 Storage**, and **SCSS** ',
    photos: [
      'https://larissa-web-portfolio.s3.amazonaws.com/dartbot-1.png',
      'https://larissa-web-portfolio.s3.amazonaws.com/dartbot-2.png',
    ],
  },
  {
    id: 'maze',
    name: 'Maze Challenge',
    description: '**C** program that interacts with running server to solve a maze by bringing together n number of blind avatars for any difficulty and size. **Socket Programming**, **threads**, and **processes**.',
    photos: [
      'https://larissa-web-portfolio.s3.amazonaws.com/maze-1.png',
    ],
    git: 'https://github.com/larissachen13/maze',
  },
  {
    id: 'tse',
    name: 'Tiny Search Engine',
    description: '**C** program that performs a web crawl from the command line using **curl**. Consisted of writing the crawler, indexer, and a querier modules and basic data structures to carry out functionality efficiently.',
    photos: [
      'https://larissa-web-portfolio.s3.amazonaws.com/tse-1.png',
      'https://larissa-web-portfolio.s3.amazonaws.com/tse-2.png',
      'https://larissa-web-portfolio.s3.amazonaws.com/tse-3.png',
    ],
    git: 'https://github.com/larissachen13/tse.git',
  },
];

export { portfolios };
