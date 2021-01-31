export function FeedList({ msgs }) {
    return (
        <ul className="feed-messages clean-list">
            {msgs.map((msg, idx) => {
                return (
                    <li key={idx} className="flex align-center">
                        <div className="avatar">

                            <img src={msg.imgUrl} alt="" />
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