import { dbService, storageService } from 'myFB';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Nweet = ({ nweetObj, isOwner, userObj}) => {
	const [editing, setEditing] = useState(false);
	const [newNweet, setNewNweet] = useState(nweetObj.text);
	const onDeleteClick = async () => {
		const ok = window.confirm('Are you sure delte this nweet?');
		if (ok) {
			await dbService.doc(`nweets/${nweetObj.id}`).delete();
			if (nweetObj.attachmentURL !== '') {
				await storageService
					.refFromURL(nweetObj.attachmentURL)
					.delete();
			}
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
		<div className="nweet">
			{editing ? (
				<>
					<form onSubmit={onSubmit} className="container nweetEdit">
						<input
							type="text"
							placeholder="Edit your nweet"
							value={newNweet}
							required
							onChange={onChange}
							className="formInput"
						/>
						<input
							type="submit"
							value="Update Nweet"
							className="formBtn"
						/>
					</form>
					<span onClick={toggleEditing} className="formBtn cancelBtn">
						{' '}
						Cancel{' '}
					</span>
				</>
			) : (
				<>
					<h4> {nweetObj.text} {userObj.displayName} </h4>
					{nweetObj.attachmentURL && (
						<img src={nweetObj.attachmentURL} />
					)}
					{isOwner && (
						<div className="nweet__actions">
							<span onClick={onDeleteClick}>
								<FontAwesomeIcon icon={faTrash} />
							</span>
							<span onClick={toggleEditing}>
								<FontAwesomeIcon icon={faPencilAlt} />
							</span>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Nweet;
