export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
    //   }
    // },
    // {name: 'structure-menu'},
    {
      name: 'project-info',
      layout: {width: 'small'},
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eac28466c9300521cc044b3',
                  title: 'Sanity Studio',
                  name: 'wizardly-khorana-3aa1a3',
                  apiId: 'bb08fbfc-e389-4d3c-8047-e7f8dc69b32f'
                },
                {
                  buildHookId: '5eac291f9311a7643803e5a3',
                  title: 'Portfolio Website',
                  name: 'cristina-llamas',
                  apiId: '57b81908-6058-45d6-b2c1-2d499c820056'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cristinallamas/portfolio_react',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://cristinallamas.dev',
            category: 'apps'
          }
        ]
      }
    },
    // {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {
        title: 'Recent Posts',
        order: '_createdAt desc',
        types: ['blogPost']
      },
      layout: {width: 'small'}
    },
    {
      name: 'document-list',
      options: {
        title: 'Recent Projects',
        order: '_createdAt desc',
        types: ['project', 'sideProject']
      },
      layout: {width: 'small'}
    }
  ]
}
