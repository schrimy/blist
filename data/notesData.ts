import { listItemData } from "@/components/ListContainer";

export interface noteData {
    title: string,
	id: number,
	type: string,
	dateStart: Date,
	dateEnd?: Date,
	alarm?: Date,
	content: string | listItemData[],
	list?: Boolean,
	colour: string,
}