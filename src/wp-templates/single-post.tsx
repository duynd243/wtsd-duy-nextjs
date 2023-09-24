import { graphql } from "@/__generated__";
import { GetPostQuery } from "@/__generated__/graphql";
import BlogContent from "@/components/sections/BlogContent";
import BlogHero from "@/components/sections/BlogHero";
import { FaustTemplate } from "@faustwp/core";

const SinglePost: FaustTemplate<GetPostQuery> = (props) => {
  return (
    <>
      <BlogHero {...props.data.post} />

      <BlogContent
        postData={props.data.post}
        recentPosts={props.data.posts.nodes}
        categories={props.data.categories.nodes}
      />
    </>
  );
};

SinglePost.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
    numberOfPosts: 4,
  };
};

SinglePost.query = graphql(`
  query GetPost(
    $databaseId: ID!
    $asPreview: Boolean = false
    $numberOfPosts: Int
  ) {
    ...MostRecentPostsFragment
    ...CategoriesFragment
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      databaseId
      title
      date
      author {
        node {
          name
          firstName
          lastName
        }
      }
      categories {
        nodes {
          id
          name
        }
      }
      tags {
        nodes {
          id
          name
        }
      }
      featuredImage {
        node {
          id
          sourceUrl
        }
      }
      comments {
        nodes {
          id
          status
          date
          author {
            node {
              avatar {
                url
              }
              url
              email
              name
              id
            }
          }
          content(format: RENDERED)
        }
      }
      editorBlocks(flat: false) {
        ...PostEditorBlockFragment
        ...CoreParagraphFragment
        ...CoreImageFragment
      }
    }
  }
`);

export default SinglePost;
