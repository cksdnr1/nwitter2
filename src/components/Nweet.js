import React from "react";

const Nweet = ({nweetObj, isOwner}) => (
	<div>
		<h4>{nweetObj.text}</h4>
	{isOwner && (
		<>
		<button> delete nweet</button>
		<button> edit nweet</button>
	</>)}
	</div>
);

export default Nweet;
