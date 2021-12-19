import MetaTags from "react-meta-tags";

export default function MainPageMeta() {
	return (
		<MetaTags>
			<title>Dadangdut33's Profile</title>
			<meta name='description' content='A little more about me' />
			<meta property='og:title' content="Dadangdut33's Profile" />
			<meta property='og:description' content='My profile page. Contains some info about me' />
			<meta property='og:image' content='https://dadangdut33.github.io/logo512.png' />
			<meta property='og:url' content='https://dadangdut33.github.io/' />
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content='Dadangdut33' />
			<meta property='og:locale' content='en_US' />

			{/* twitter meta */}
			<meta property='twitter:card' content='summary' />
			<meta property='twitter:creator' content='@dadangdut33' />
			<meta property='twitter:title' content='Dadangdut33' />
			<meta property='twitter:url' content='https://dadangdut33.github.io/' />
			<meta property='twitter:description' content='My profile page. Contains some info about me' />
			<meta property='twitter:image' content='https://dadangdut33.github.io/logo512.png' />
		</MetaTags>
	);
}
