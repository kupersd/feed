export function FeedList({ msgs }) {
    return (
        <ul className="feed-messages clean-list">
            {msgs.map((msg, idx) => {
                return (
                    <li key={idx} className="flex align-center">
                        <div className="avatar">

                            <img src={`https://www.gravatar.com/avatar/ori.weinstock@gmail.com}`} alt="" />
                        </div>
                        <div className="flex column">
                            <h4>{msg.email}</h4>
                            <p>{msg.txt}</p>
                        </div>
                    </li>
                )
            }
            )}
        </ul>
    )
}