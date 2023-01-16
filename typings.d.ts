type Article = {
	category: string | null;
	country: string;
	description: string;
	image: string | null;
	language: string;
	published_at: string;
	source: string;
	title: string;
	url: string;
	author: string | null;
};

type Pagination = {
	count: Int;
	limit: Int;
	offset: Int;
	total: Int;
};

type NewsResponse = {
	pagination: Pagination;
	data: Article[];
};

type Category =
	| "general"
	| "business"
	| "entertainment"
	| "health"
	| "science"
	| "sports"
	| "technology";