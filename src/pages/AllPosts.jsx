import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/configs'
import { Container, PostCard } from "../components"

function AllPosts() {
    const [posts, setPosts] = useState([])

    // useEffect(() => { }, [])

    // appwriteService.getPosts([]).then((posts) => {
    //     if (posts) {
    //         setPosts(posts.documents)
    //     }
    // })

    useEffect(() => {
        // Fetch posts when the component mounts
        const fetchPosts = async () => {
            try {
                const postsData = await appwriteService.getPosts();
                if (postsData) {
                    setPosts(postsData.documents);
                }
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };

        fetchPosts();
    }, []);


    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/2'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts