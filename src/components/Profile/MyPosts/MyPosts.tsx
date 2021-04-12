import React from "react";
import s from './MyPosts.module.css'
import {ActionsTypes, PostType} from "../../../redux/state";
import {Post} from "./Post/Post";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (addNewPost: string) => void
    changeNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


export function MyPosts(props: MyPostsPropsType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        // props.addPost
        if (newPostElement.current) {
            props.dispatch(addPostAC(props.newPostText))
            props.changeNewPostText('')
        }
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.dispatch(changeNewPostTextAC(text))
        }
    }
    return (
        <div className={s.myPost}>
            <h2>My post</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}
                              placeholder={'Enter your message'}
                    >
                    </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post posts={props.posts}/>
            </div>
        </div>
    )
}

