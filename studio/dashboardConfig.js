export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '617473a4c0df9243cb31d7e6',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-kjuxzt64',
                  apiId: '5c01b668-ccbd-43fe-9cc1-8f9ebc5332c3'
                },
                {
                  buildHookId: '617473a4eba7b55fe9aac204',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-p1ujt8mi',
                  apiId: 'aa0d286e-2e7b-4d5f-87e6-cf305bddd85d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spunickt/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-p1ujt8mi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
