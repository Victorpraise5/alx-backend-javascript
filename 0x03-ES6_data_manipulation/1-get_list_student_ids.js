export default function getListStudentIds(arr) {
	if (!Array.isArray(arr)) {
		return [];
	}

	//using map: map is iterating on each element of the array and passes it to our function
	return arr.map(student => student.id);
}
