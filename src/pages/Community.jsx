import React from 'react'
import '../styles/community.css'
import ProfilePic from "../assets/profileLogo.png";
import Img1 from "../assets/Cp1.png";
import Img2 from "../assets/Cp2.png";
import Img3 from "../assets/Cp3.png";
import Like from "../assets/like.svg";
import Comment from "../assets/comment.svg";
import Share from "../assets/share.svg";
import Save from "../assets/save.svg";
import SendComm from "../assets/sendComm.svg";
import PopularPosts from "../assets/popularPosts.png";
import CreatePost from "../assets/createPost.png";
import YourPosts from "../assets/yourPost.png";

const Card = ({ name, description, ingridientList, img, date }) => {
	return (
		<div className="card-padding bg-white border-yellow flex flex-col gap-cardsRow w-50 h-full">
			<div className="h-full justify-between flex flex-col">
				<hr style={{ height: "1px", backgroundColor: "#000" }} />
				<div className="flex items-center gap-normal text-24 name">
					<img src={ProfilePic} alt="" />@{name}
				</div>
				<div className="text-16">
					<div className="description">{description}</div>
					<div className="ingridients">
						{ingridientList ? <>Ingridients</> : <></>}
					</div>
					<div className="IngridientList">
						<ul>
							{ingridientList ? (
								ingridientList.map((e) => {
									return <li key={e}>{e}</li>;
								})
							) : (
								<></>
							)}
						</ul>
					</div>
				</div>

				<div className="gap-cardLess flex flex-col">
					<div className="img w-fit h-fit">
						<img src={img} alt="" className="cover-img" />
					</div>

					<div className="date">{date}</div>

					<div className="gap-cardLess flex flex-col ">
						<hr />
						<div className="flex justify-around flex-wrap gap-cardsRow">
							<div className="flex justify-center items-center">
								<img src={Like} alt="" className="like-svg" />
								<div>3.1k</div>
							</div>
							<div className="flex justify-center items-center">
								<img src={Comment} alt="" className="like-svg" />
								<div>3.1k</div>
							</div>
							<div className="flex justify-center items-center">
								<img src={Share} alt="" className="like-svg" />
								<div>3.1k</div>
							</div>
							<div className="flex justify-center items-center">
								<img src={Save} alt="" className="like-svg" />
								<div>3.1k</div>
							</div>
						</div>
						<hr />
					</div>

					<div className="commentBox flex bg-blue justify-between p-1 flex-wrap h-full">
						<input
							type="text"
							name=""
							id=""
							className="bg-blue border-none outline-none font-Inria h-full text-20 w-max"
							placeholder="Type your comment here"
						/>
						<button className="bg-yellow text-black font-Inria font-bold bg-blue border-none">
							<img src={SendComm} alt="" className="commArrow" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const Community = () => {

    const data = [
		{
			name: "Varnika",
			description:
				"Just when I had given up on gluten free biscuits, these biscuits came to the rescue! They are ...",
			img: Img1,
			ingridientList: [
				"1 cup (140g) brown rice flour",
				"3/4 cup (100g) millet flour",
				"1/2 cup (60g) arrowroot flour/starch",
				"1 tsp xanthan gum",
				"3 tsp baking powder",
			],
			date: "3 Aug 2023",
		},
		{
			name: "Kamya",
			description: "I wa too happy when i found it!! I am in love it..",
			img: Img2,
			date: "3 Aug 2023",
		},
		{
			name: "Varnika",
			description:
				"Hey Guys! Just wanted you to know the jelly is not gluten-free because it contains corn flour ",
			img: Img3,
			date: "3 Aug 2023",
		},
	];
	return (
		<div className="App container">
			<div className="flex flex-wrap w-full gap-cardsRow gap-cardsCol justify-center pt-32">
				{data.map((e) => {
					return (
						<Card
							name={e.name}
							description={e.description}
							img={e.img}
							ingridientList={e.ingridientList ? e.ingridientList : undefined}
							date={e.date}
							key={e}
						/>
					);
				})}
			</div>

			<div className="flex flex-wrap w-full gap-cardsRow gap-cardsCol justify-around py-16 items-center">
				<div className="popularPosts flex flex-col items-center">
					<img src={PopularPosts} alt="" className="w-50" />
					Popular Posts
				</div>
				<div className="CreatePosts flex flex-col items-center">
					<img src={CreatePost} alt="" className="w-50" />
					Create Posts
				</div>
				<div className="YOurPosts flex flex-col items-center">
					<img src={YourPosts} alt="" className="w-50" />
					Your Posts
				</div>
			</div>
		</div>
	);
}

export default Community
