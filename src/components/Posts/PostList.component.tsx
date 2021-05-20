import React, { FC, useEffect, useState } from 'react'
import {
    Grid,
} from '@material-ui/core'

import { gql, useQuery } from '@apollo/client'

import { LOAD_POST } from '../../graphql/Queries'
import Post from './Post.component'

const PostList:FC = () => {
    const { error, data, loading } = useQuery(LOAD_POST)
    const [post, setPost] = useState([])

    useEffect(() => {
        if(!loading) {
            setPost(data.posts)
        }
    }, [loading, data])
    
    return (
        <Grid container spacing={1}>
            {
                post.map((item, index) => {
                    return <Post key={index} data={item} />
                })
            }
        </Grid>
    )
}

export default PostList
