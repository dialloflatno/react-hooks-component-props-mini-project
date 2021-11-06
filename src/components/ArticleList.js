import Article from "./Article";

// Make an `ArticleList` component as a child of `App`. It should return:

// - a `<main>` element with the following components inside:
//   - an array of `Article` components (one component for each _post_ passed down
//     as a prop to `ArticleList`)
//   - make sure to assign a unique `key` prop to each `Article`

function ArticleList(props) {

    const postsArray = props.posts.map(post => {
        return <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            />
    })

    return (
        <div>
            <main>{postsArray}</main>
        </div>
    );
}

export default ArticleList;