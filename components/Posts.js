import Post from "./Post"

const posts =[
    {
        id: '123',
        username: 'aditi',
        userImg: 'https://i.iheart.com/v3/catalog/artist/30080809?ops=fit(720%2C720)',
        img: 'https://pbs.twimg.com/media/FBr5xe_VcBANamo.jpg',
        caption: "This Marshmellow"
    },
    {
        id: '123',
        username: 'aditi',
        userImg: 'https://i.iheart.com/v3/catalog/artist/30080809?ops=fit(720%2C720)',
        img: 'https://pbs.twimg.com/media/FBr5xe_VcBANamo.jpg',
        caption: "This Marshmellow"
    },
    {
        id: '123',
        username: 'aditi',
        userImg: 'https://i.iheart.com/v3/catalog/artist/30080809?ops=fit(720%2C720)',
        img: 'https://pbs.twimg.com/media/FBr5xe_VcBANamo.jpg',
        caption: "This Marshmellow"
    },
    {
        id: '123',
        username: 'aditi',
        userImg: 'https://i.iheart.com/v3/catalog/artist/30080809?ops=fit(720%2C720)',
        img: 'https://pbs.twimg.com/media/FBr5xe_VcBANamo.jpg',
        caption: "This Marshmellow"
    },
]


function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id}
                img={post.img}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                caption={post.caption}
                />
            ))}
            
        </div>
    )
}

export default Posts
