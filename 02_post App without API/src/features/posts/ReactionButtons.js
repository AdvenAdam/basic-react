import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
    thumbsup: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
};

function ReactionButtons({ post }) {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        const reactionClicked = () => dispatch(reactionAdded({ postId: post.id, reaction: name }));
        return (
            <button key={name} type="button" className="reactionButton" onClick={reactionClicked}>
                {emoji} {post.reactions[name]}
            </button>
        );
    });
    return <div>{reactionButtons}</div>;
}

export default ReactionButtons;
