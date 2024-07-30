export type Genre = "man" | "women"

export type Relation = "friend" | "grandfather" | "couple" | "coworker" | "son" | "grandson"

export type AgeRange = "0-12" | "13-18" | "19-30" | "31-50" | "51-70" | ">70"

export type Event = "birthday" | "anniversary" | "graduation" | "wedding" | "christmas" | "valentine" | "other"

export type Hobbies = "music" | "sports" | "reading" | "cooking" | "travel" | "eat"

export interface GiftForm {
	genre?: Genre
	relation?: Relation
	ageRange?: AgeRange
	event?: Event | string
	hobbies?: Hobbies[] | string[]
	moreDetails?: string
}

export type GiftGenerationStatus = "idle" | "generating" | "success" | "error"

export interface AmazonProduct {
	imageUrl: string
}
