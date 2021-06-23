import { dbService } from "myFB";
import React, { useState } from "react";

const Nweet = ({ nweetObj, isOwner }) => {
	const [editing, setEditing] = useState(false);
	const [newNweet, setNewNweet] = useState(nweetObj.text);
	const onDeleteClick = async () => {
		const ok = window.confirm("Are you sure delte this nweet?");
		if (ok) {
			console.log(ok);
			await dbService.doc(`nweets/${nweetObj.id}`).delete();
		}
	};
	const toggleEditing = () => setEditing((prev) => !prev);
	const onSubmit = async (event) => {
		event.preventDefault();
		console.log(nweetObj, newNweet, event);
		await dbService.doc(`nweets/${nweetObj.id}`).update({
			text: newNweet,
		});
		setEditing(false);
	};
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		setNewNweet(value);
	};
	return (
		<div>
			{editing ? (
				<>
					<form onSubmit={onSubmit}>
						<input
							type="text"
							placeholder="Edit your nweet"
							value={newNweet}
							required
							onChange={onChange}
						/>
						<input type="submit" value="Update Nweet" />
					</form>
					<button onClick={toggleEditing}> Cancel </button>
				</>
			) : (
				<>
					<h4> {nweetObj.text} </h4>
					{isOwner && (
						<>
							<button onClick={onDeleteClick}>
								Delete nweet
							</button>
							<button onClick={toggleEditing}>Edit nweet</button>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default Nweet;
