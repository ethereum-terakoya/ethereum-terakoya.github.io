exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogTemplate = require.resolve(`./src/templates/post.js`);
  const groupTemplate = require.resolve(`./src/templates/group.js`);

  const result = await graphql(`
    {
      blog: allFile(
        filter: { sourceInstanceName: { eq: "blog" }, extension: { eq: "mdx" } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              title
              group
              slug
              date(formatString: "YYYY-MM-DD")
              
            }
          }
        }
      }
      group: allMdx {
        group(field: frontmatter___group) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(result.errors);
    return;
  }

  const blogPosts = result.data.blog.nodes;
  const groups = result.data.group.group;

  blogPosts.forEach(({ childMdx: node }, index) => {
    createPage({
      path: `${node.frontmatter.group}/${node.frontmatter.slug}`,
      component: blogTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  groups.forEach(({ fieldValue: group }) => {
    createPage({
      path: `${group}`,
      component: groupTemplate,
      context: {
        group: group,
      },
    });
  });
};
