import React from "react";
import Cover from "./img/jellyfish1.jpg";

export function Profile() {
    return (
        <div className={'content'}>
            <div>
                <img src={Cover}/>
            </div>
            <div> ava + description</div>
            <div>
                My post
                <div>
                    New Post
                </div>
                <div>
                    <div>post #1</div>
                    <div>post #2</div>
                    <div>post #3</div>
                </div>
            </div>
        </div>
    )
}
