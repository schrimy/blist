export interface noteData {
    title: string,
	id: number,
	type: string,
	dateStart: Date,
	dateEnd?: Date,
	alarm?: Date,
	content: string,
	list?: Boolean,
	colour: string,
}