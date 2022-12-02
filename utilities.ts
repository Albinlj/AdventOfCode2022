export const readFile = (fileName: string) => {
	const path = new URL(".", import.meta.url).pathname + "/days/" + fileName;
	return Deno.readTextFileSync(path);
};