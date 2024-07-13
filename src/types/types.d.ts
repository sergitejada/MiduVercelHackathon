export type Genre = "man" | "women"

export type AgeRange = "0-12" | "13-18" | "19-30" | "31-50" | "51-70" | ">70"

export type Event = "birthday" | "anniversary" | "graduation" | "wedding" | "christmas" | "valentine" | "other"

export type Hobbies = "music" | "sports" | "reading" | "cooking" | "travel" | "other"

export interface GiftForm {
	genre?: Genre
	ageRange?: AgeRange
	event?: Event
	hobbies?: Hobbies[]
	moreDetails?: string
}
